"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function Navigation() {
  const navRef = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 100], [0, 1]);
  const translateY = useTransform(scrollY, [0, 100], [-20, 0]);

  return (
    <>
      {/* Initial spacer */}
      <div className="fixed top-0 z-50 h-16 w-full pointer-events-none" />

      {/* Floating navigation that appears on scroll */}
      <motion.nav
        ref={navRef}
        style={{ opacity, translateY }}
        className="fixed left-1/2 top-4 z-50 -translate-x-1/2 rounded-full border border-[var(--border)] bg-[var(--surface)]/90 px-6 py-3 backdrop-blur-md"
      >
        <ul className="flex items-center gap-6 text-sm">
          <li>
            <a
              href="#work"
              className="text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
            >
              Work
            </a>
          </li>
          <li>
            <a
              href="#kormoo"
              className="text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
            >
              Kormoo
            </a>
          </li>
          <li>
            <a
              href="#capabilities"
              className="text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
            >
              Capabilities
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="rounded-full bg-[var(--foreground)] px-4 py-1.5 text-[var(--background)] transition-colors hover:bg-[var(--accent)]"
            >
              Contact
            </a>
          </li>
        </ul>
      </motion.nav>
    </>
  );
}
