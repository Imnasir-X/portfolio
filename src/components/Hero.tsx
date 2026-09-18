"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { SubtleGrid } from "./SubtleGrid";

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col justify-center px-6 py-20 md:px-12 lg:px-24">
      {/* Background visualization */}
      <div className="absolute inset-0 z-0 opacity-60">
        <SubtleGrid />
      </div>

      {/* Gradient overlay for readability */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[var(--background)] via-transparent to-[var(--background)] pointer-events-none" />

      <div className="relative z-10 max-w-5xl">
        {/* Currently building indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-sm text-[var(--muted)]"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--accent)] opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--accent)]"></span>
          </span>
          Currently building Kormoo
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl font-bold tracking-tight text-[var(--foreground)] sm:text-6xl md:text-7xl lg:text-8xl"
        >
          NASIR KHAN
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 max-w-2xl text-xl text-[var(--muted)] sm:text-2xl md:text-3xl"
        >
          I build products from zero to working systems.
        </motion.p>

        {/* Supporting copy */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 max-w-2xl text-base leading-relaxed text-[var(--muted)]"
        >
          I work across software engineering, AI/agent systems, and product
          development. Currently building{" "}
          <Link
            href="https://kormoo.com"
            className="text-[var(--foreground)] underline-offset-4 hover:underline"
          >
            Kormoo
          </Link>{" "}
          — operational software for small garment factories in Bangladesh.
        </motion.p>

        {/* Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <Link
            href="#work"
            className="group inline-flex items-center gap-2 rounded-lg border border-[var(--border)] bg-[var(--foreground)] px-5 py-3 text-sm font-medium text-[var(--background)] transition-colors hover:bg-[var(--accent)]"
          >
            Selected Work
            <svg
              className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </Link>

          <Link
            href="https://github.com/Imnasir-X"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-[var(--border)] px-5 py-3 text-sm font-medium text-[var(--foreground)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
          >
            GitHub
          </Link>

          <Link
            href="https://linkedin.com/in/nasirkhan"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-[var(--border)] px-5 py-3 text-sm font-medium text-[var(--foreground)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
          >
            LinkedIn
          </Link>

          <Link
            href="/resume.pdf"
            className="inline-flex items-center gap-2 rounded-lg border border-[var(--border)] px-5 py-3 text-sm font-medium text-[var(--foreground)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
          >
            Resume
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2 text-[var(--muted)]">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <svg
            className="h-5 w-5 animate-bounce"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M19 14l-7 7-7-7"
            />
          </svg>
        </div>
      </motion.div>
    </section>
  );
}
