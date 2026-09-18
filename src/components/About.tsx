"use client";

import { motion } from "framer-motion";

export function About() {
  return (
    <section className="px-6 py-24 md:px-12 lg:px-24">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 gap-8 md:grid-cols-3"
        >
          {/* Portrait placeholder */}
          <div className="md:col-span-1">
            <div className="aspect-square rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6">
              <div className="flex h-full w-full items-center justify-center">
                {/* Abstract portrait placeholder */}
                <svg
                  viewBox="0 0 100 100"
                  className="h-32 w-32"
                  aria-label="Portrait placeholder"
                >
                  <circle
                    cx="50"
                    cy="35"
                    r="20"
                    fill="none"
                    stroke="var(--border)"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M20 90 C20 70 35 55 50 55 C65 55 80 70 80 90"
                    fill="none"
                    stroke="var(--border)"
                    strokeWidth="1.5"
                  />
                  <circle
                    cx="50"
                    cy="35"
                    r="8"
                    fill="var(--accent)"
                    opacity="0.3"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* About text */}
          <div className="md:col-span-2">
            <h2 className="text-3xl font-bold text-[var(--foreground)] sm:text-4xl">
              About
            </h2>

            <div className="mt-6 space-y-4 text-base leading-relaxed text-[var(--muted)]">
              <p>
                I&apos;m curious about how things work and driven to build them
                myself. I prefer starting with an unclear problem and iterating
                toward a functioning product rather than executing a predefined
                spec.
              </p>
              <p>
                My work spans software engineering, AI/agent systems, and product
                development. I think beyond individual screens or features —
                considering the full system: technical architecture, user
                workflows, business context, and operational reality.
              </p>
              <p>
                Currently building Kormoo for small garment factories in
                Bangladesh. This work combines technical challenges with real
                operational impact — exactly the kind of problem I want to spend
                time on.
              </p>
              <p>
                I value shipping over perfection, learning through building, and
                solving problems that matter to actual users.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
