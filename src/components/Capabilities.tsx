"use client";

import { motion } from "framer-motion";
import { capabilities } from "@/data/content";

export function Capabilities() {
  return (
    <section className="px-6 py-24 md:px-12 lg:px-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-[var(--foreground)] sm:text-4xl md:text-5xl">
            Capabilities
          </h2>
          <p className="mt-4 max-w-2xl text-base text-[var(--muted)]">
            Organized by domain rather than a list of technologies. Tools are
            secondary to outcomes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {capabilities.map((capabilityGroup, groupIndex) => (
            <motion.div
              key={capabilityGroup.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: groupIndex * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 md:p-8"
            >
              <h3 className="text-lg font-semibold text-[var(--foreground)]">
                {capabilityGroup.category}
              </h3>

              <div className="mt-6 space-y-6">
                {capabilityGroup.items.map((item) => (
                  <div key={item.name}>
                    <h4 className="text-sm font-medium text-[var(--foreground)]">
                      {item.name}
                    </h4>
                    <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
                      {item.description}
                    </p>
                    {item.technologies && (
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {item.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="rounded border border-[var(--border)] bg-[var(--background)] px-2 py-0.5 text-xs text-[var(--muted)]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
