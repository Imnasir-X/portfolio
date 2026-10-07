/* Pure matching logic from Imnasir-X/zephra-dynamic-landing. Adapted only to expose the core; no DOM writer. */
(() => {
  var VERSION = '1.0.0';

  /* =========================================================================
   * 1. CONFIG — the single edit surface for matching behaviour
   * ========================================================================= */
  var CONFIG = {
    // Zephra brief: support source, campaign, keyword and ad.
    trackedParams: ['source', 'campaign', 'keyword', 'ad'],

    // keyword & ad carry *intent* → phrase matching + word-level lexicon.
    // source & campaign carry *channel identity* → exact-phrase matching only.
    // Fuzzy-matching a channel name has no upside and adds mis-classification
    // risk, so channels are deliberately strict.
    lexiconParams: ['keyword', 'ad'],

    // Parameter precedence: the first parameter (in this order) whose value
    // classifies wins. keyword expresses the strongest intent, source the weakest.
    paramPrecedence: ['keyword', 'ad', 'campaign', 'source'],

    // Tier 1 — exact-phrase allow-list (values compared after normalization).
    phrases: {
      keyword: {
        'rfid-inventory-tracking': 'inventory',
        'rfid-inventory':          'inventory',
        'inventory-tracking':      'inventory',
        'warehouse-stock':         'inventory',
        'stock-tracking':          'inventory',
        'rfid-tool-tracking':      'tools',
        'tool-tracking':           'tools',
        'tool-checkout':           'tools',
        'equipment-tracking':      'tools',
        'tool-crib':               'tools',
        'rfid-reader':             'hardware',
        'rfid-readers':            'hardware',
        'rfid-hardware':           'hardware',
        'handheld-reader':         'hardware',
        'fixed-reader':            'hardware'
      },
      ad: {
        'cut-stockouts':          'inventory',
        'end-quarter-surprises':  'inventory',
        'stop-losing-tools':      'tools',
        'tool-loss-audit':        'tools',
        'reader-comparison':      'hardware',
        'hardware-buyers-guide':  'hardware'
      },
      campaign: {
        'warehouse-q1':      'inventory',
        'inventory-refresh': 'inventory',
        'toolroom-launch':   'tools',
        'reader-trade-show': 'hardware'
      },
      source: {
        'supplychain-weekly': 'inventory',
        'construction-dive':  'tools',
        'barcode-industry':   'hardware'
      }
    },

    // Tier 2 — deterministic lexicon. A value that misses the phrase list is
    // tokenized on "-" and scored against these word sets. Still allow-listed,
    // still deterministic, and the output is still just a variant key — so the
    // security property is unchanged: URL input → classification → approved
    // copy. Never URL input → page content.
    lexicon: {
      inventory: ['inventory', 'stock', 'stockout', 'restock', 'warehouse', 'sku', 'pallet'],
      tools:     ['tool', 'tools', 'equipment', 'crib'],
      hardware:  ['reader', 'readers', 'hardware', 'handheld', 'antenna', 'tag']
    },

    // Tie-break: a value scoring equally in several categories resolves to the
    // earliest category here. Deterministic; and the worst case is only that a
    // *different approved* variant renders — never unapproved content.
    categoryPrecedence: ['inventory', 'tools', 'hardware']
  };

  /* =========================================================================
   * 2. VARIANTS — the only copy this layer is allowed to render
   * ========================================================================= */
  var VARIANTS = {
    inventory: {
      headline:    'Know Every SKU, Without Counting',
      description: 'Cycle counts that run themselves. Waymark reads a full aisle in one pass and keeps your ledger current — no scanners, no clipboards, no quarter-end surprises.',
      cta:         'See Inventory OS',
      benefit:     'Continuous inventory, not quarterly guesses',
      visual:      'inventory'
    },
    tools: {
      headline:    'Track Every Tool With RFID',
      description: 'Every wrench, drill and calibrated gauge accounted for — who has it, which bench it touched, when it is back. Checkout takes a tap; audits take minutes.',
      cta:         'Track Your Tool Crib',
      benefit:     'Every tool accounted for, every shift',
      visual:      'tools'
    },
    hardware: {
      headline:    'Readers That Read First Time',
      description: 'Fixed panels and handhelds tuned for dense docks and metal-heavy floors — long-range reads, high tag throughput, and read rates your team can actually trust.',
      cta:         'Compare Readers',
      benefit:     'Engineered to read through real conditions',
      visual:      'hardware'
    }
  };

  /* =========================================================================
   * 3. PURE CORE — no DOM access anywhere below this point until section 4
   * ========================================================================= */

  // trim · lowercase · fold whitespace/underscores to hyphens · collapse runs.
  // No substring matching anywhere: equality against allow-lists only.
  function normalize(value) {
    return String(value == null ? '' : value)
      .trim()
      .toLowerCase()
      .replace(/[\s_]+/g, '-')
      .replace(/-+/g, '-');
  }

  // Stage 1 — read only the four tracked params. Everything else in the query
  // is ignored. Empty values are dropped with a warning rather than matched.
  function parseContext(search) {
    var raw = {}, context = {}, warnings = [];
    var params;
    try {
      params = new URLSearchParams(search || '');
    } catch (e) {
      return { raw: raw, context: context, warnings: ['query unparseable — fail open'] };
    }
    CONFIG.trackedParams.forEach(function (p) {
      var v = params.get(p);
      if (v === null) return;
      if (v.trim() === '') { warnings.push('"' + p + '" present but empty — ignored'); return; }
      raw[p] = v;
      context[p] = normalize(v);
    });
    return { raw: raw, context: context, warnings: warnings };
  }

  // Classify ONE normalized value for ONE parameter. Two tiers:
  //   1. exact phrase allow-list  (highest confidence)
  //   2. lexicon word scoring     (keyword/ad only; ties → categoryPrecedence)
  function classifyValue(value, param) {
    if (!value) return { variant: null, how: 'empty', matched: null, score: 0 };

    var phrases = CONFIG.phrases[param];
    if (phrases && Object.prototype.hasOwnProperty.call(phrases, value)) {
      return { variant: phrases[value], how: 'phrase', matched: value, score: 1 };
    }

    if (CONFIG.lexiconParams.indexOf(param) !== -1) {
      var tokens = value.split('-').filter(Boolean);
      var best = null, bestScore = 0;
      CONFIG.categoryPrecedence.forEach(function (cat) {
        var lex = CONFIG.lexicon[cat];
        var score = 0;
        tokens.forEach(function (t) { if (lex.indexOf(t) !== -1) score += 1; });
        if (score > bestScore) { best = cat; bestScore = score; } // strict > ⇒ ties keep earlier category
      });
      if (best) {
        var hits = tokens.filter(function (t) { return CONFIG.lexicon[best].indexOf(t) !== -1; });
        return { variant: best, how: 'lexicon', matched: hits.join('+'), score: bestScore };
      }
    }
    return { variant: null, how: 'no-match', matched: null, score: 0 };
  }

  // Stage 2 — evaluate parameters in declared precedence order. A recognized
  // value in ANY tracked parameter personalizes; unrecognized higher-precedence
  // params do not veto recognized lower-precedence ones.
  function detectVariant(context) {
    for (var i = 0; i < CONFIG.paramPrecedence.length; i++) {
      var param = CONFIG.paramPrecedence[i];
      if (context[param] === undefined) continue;
      var r = classifyValue(context[param], param);
      if (r.variant) {
        return { variant: r.variant, param: param, how: r.how, matched: context[param], score: r.score };
      }
    }
    return { variant: null, param: null, how: 'none', matched: null, score: 0 };
  }


window.ZephraCore = { CONFIG, VARIANTS, normalize, parseContext, classifyValue, detectVariant };
})();
