"use client";

import { motion } from "framer-motion";
import { buildLog } from "@/data/content";

export function BuildLog() {
  return (
    <section className="px-6 py-24 md:px-12 lg:px-24">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-[var(--foreground)] sm:text-4xl md:text-5xl">
            Build Log
          </h2>
          <p className="mt-4 max-w-2xl text-base text-[var(--muted)]">
            A chronological record of things built, shipped, and explored. More
            engineering history than employment timeline.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 top-0 h-full w-px bg-[var(--border)] md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-8">
            {buildLog.map((entry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={`relative flex items-start gap-6 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Dot */}
                <div className="absolute left-[-5px] top-1.5 h-2.5 w-2.5 rounded-full border border-[var(--border)] bg-[var(--background)] md:left-1/2 md:-translate-x-1/2 md:top-2">
                  <div className="absolute inset-0.5 rounded-full bg-[var(--accent)]" />
                </div>

                {/* Content */}
                <div
                  className={`ml-8 flex-1 ${
                    index % 2 === 0 ? "md:ml-0 md:mr-auto md:w-1/2 md:pr-8" : "md:ml-auto md:w-1/2 md:pl-8"
                  }`}
                >
                  <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-5">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-medium uppercase tracking-widest text-[var(--accent)]">
                        {entry.date}
                      </span>
                      <span className="rounded border border-[var(--border)] bg-[var(--background)] px-2 py-0.5 text-xs text-[var(--muted)] capitalize">
                        {entry.type}
                      </span>
                    </div>
                    <h3 className="mt-3 text-base font-semibold text-[var(--foreground)]">
                      {entry.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
                      {entry.description}
                    </p>
                  </div>
                </div>

                {/* Empty space for alternating layout */}
                <div className="hidden flex-1 md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
