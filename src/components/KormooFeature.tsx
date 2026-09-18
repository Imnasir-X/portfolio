"use client";

import { motion } from "framer-motion";

export function KormooFeature() {
  return (
    <section className="px-6 py-24 md:px-12 lg:px-24">
      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-[var(--foreground)] sm:text-4xl md:text-5xl">
            Kormoo — Deep Dive
          </h2>
          <p className="mt-4 max-w-2xl text-base text-[var(--muted)]">
            Building an operating system for small garment factories in
            Bangladesh.
          </p>
        </motion.div>

        {/* Narrative grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12">
          {/* Problem */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 md:p-8"
          >
            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--background)]">
              <span className="text-lg font-bold text-[var(--accent)]">1</span>
            </div>
            <h3 className="text-xl font-semibold text-[var(--foreground)]">
              Problem
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
              Small garment factories in Bangladesh operate with manual processes
              — paper-based attendance, Excel payroll, and disconnected financial
              tracking. This creates errors, delays, and limited visibility into
              production efficiency. Factory owners need a system that works for
              their context: limited digital literacy, unreliable internet, and
              complex piece-rate calculations.
            </p>
          </motion.div>

          {/* Product */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 md:p-8"
          >
            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--background)]">
              <span className="text-lg font-bold text-[var(--accent)]">2</span>
            </div>
            <h3 className="text-xl font-semibold text-[var(--foreground)]">
              Product
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
              Kormoo is operational software designed specifically for the
              Bangladesh garment industry. It provides a unified platform for
              production tracking, attendance management, payroll calculation,
              and financial workflows. The system combines a web/PWA interface
              for supervisors and office staff with conversational interfaces for
              workers who may not be comfortable with traditional UIs.
            </p>
          </motion.div>

          {/* System */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 md:p-8"
          >
            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--background)]">
              <span className="text-lg font-bold text-[var(--accent)]">3</span>
            </div>
            <h3 className="text-xl font-semibold text-[var(--foreground)]">
              System
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
              The architecture spans multiple layers: a Next.js frontend with PWA
              capabilities for offline-first operation, a Node.js backend with
              PostgreSQL for reliable data storage, and AI agent interfaces for
              natural language interactions. The system handles piece-rate
              calculations, attendance integration, production targets, and
              financial reconciliation across multiple factory units.
            </p>
          </motion.div>

          {/* Decisions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 md:p-8"
          >
            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--background)]">
              <span className="text-lg font-bold text-[var(--accent)]">4</span>
            </div>
            <h3 className="text-xl font-semibold text-[var(--foreground)]">
              Decisions
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-[var(--muted)]">
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--accent)]" />
                <span>
                  PWA-first for unreliable connectivity and low-end devices
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--accent)]" />
                <span>
                  Conversational interfaces for workers with limited digital
                  literacy
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--accent)]" />
                <span>
                  Piece-rate engine built for Bangladesh-specific calculation
                  rules
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--accent)]" />
                <span>
                  Offline-first design with conflict resolution for sync scenarios
                </span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Architecture Diagram */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 md:p-12"
        >
          <h3 className="mb-8 text-center text-lg font-semibold text-[var(--foreground)]">
            System Architecture
          </h3>

          {/* HTML/CSS/SVG Architecture Diagram */}
          <div className="relative mx-auto max-w-4xl">
            <svg
              viewBox="0 0 800 500"
              className="w-full"
              aria-label="Kormoo system architecture diagram"
            >
              {/* Background grid */}
              <defs>
                <pattern
                  id="grid"
                  width="20"
                  height="20"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M 20 0 L 0 0 0 20"
                    fill="none"
                    stroke="var(--border)"
                    strokeWidth="0.5"
                    opacity="0.3"
                  />
                </pattern>
              </defs>
              <rect width="800" height="500" fill="url(#grid)" />

              {/* User Layer */}
              <g transform="translate(50, 30)">
                <rect
                  x="0"
                  y="0"
                  width="700"
                  height="60"
                  rx="8"
                  fill="var(--background)"
                  stroke="var(--border)"
                  strokeWidth="1"
                />
                <text
                  x="350"
                  y="25"
                  textAnchor="middle"
                  fill="var(--muted)"
                  fontSize="12"
                  fontWeight="500"
                >
                  Users
                </text>
                <g transform="translate(80, 35)">
                  <rect
                    x="0"
                    y="0"
                    width="80"
                    height="20"
                    rx="4"
                    fill="var(--surface)"
                    stroke="var(--border)"
                    strokeWidth="1"
                  />
                  <text
                    x="40"
                    y="14"
                    textAnchor="middle"
                    fill="var(--foreground)"
                    fontSize="10"
                  >
                    Supervisors
                  </text>
                </g>
                <g transform="translate(200, 35)">
                  <rect
                    x="0"
                    y="0"
                    width="80"
                    height="20"
                    rx="4"
                    fill="var(--surface)"
                    stroke="var(--border)"
                    strokeWidth="1"
                  />
                  <text
                    x="40"
                    y="14"
                    textAnchor="middle"
                    fill="var(--foreground)"
                    fontSize="10"
                  >
                    Office Staff
                  </text>
                </g>
                <g transform="translate(320, 35)">
                  <rect
                    x="0"
                    y="0"
                    width="80"
                    height="20"
                    rx="4"
                    fill="var(--surface)"
                    stroke="var(--border)"
                    strokeWidth="1"
                  />
                  <text
                    x="40"
                    y="14"
                    textAnchor="middle"
                    fill="var(--foreground)"
                    fontSize="10"
                  >
                    Workers
                  </text>
                </g>
                <g transform="translate(440, 35)">
                  <rect
                    x="0"
                    y="0"
                    width="80"
                    height="20"
                    rx="4"
                    fill="var(--surface)"
                    stroke="var(--border)"
                    strokeWidth="1"
                  />
                  <text
                    x="40"
                    y="14"
                    textAnchor="middle"
                    fill="var(--foreground)"
                    fontSize="10"
                  >
                    Owners
                  </text>
                </g>
              </g>

              {/* Interface Layer */}
              <g transform="translate(50, 120)">
                <rect
                  x="0"
                  y="0"
                  width="700"
                  height="80"
                  rx="8"
                  fill="var(--background)"
                  stroke="var(--border)"
                  strokeWidth="1"
                />
                <text
                  x="350"
                  y="25"
                  textAnchor="middle"
                  fill="var(--muted)"
                  fontSize="12"
                  fontWeight="500"
                >
                  Interface Layer
                </text>
                <g transform="translate(60, 40)">
                  <rect
                    x="0"
                    y="0"
                    width="120"
                    height="30"
                    rx="4"
                    fill="var(--surface)"
                    stroke="var(--border)"
                    strokeWidth="1"
                  />
                  <text
                    x="60"
                    y="19"
                    textAnchor="middle"
                    fill="var(--foreground)"
                    fontSize="10"
                  >
                    Web / PWA
                  </text>
                </g>
                <g transform="translate(220, 40)">
                  <rect
                    x="0"
                    y="0"
                    width="120"
                    height="30"
                    rx="4"
                    fill="var(--surface)"
                    stroke="var(--border)"
                    strokeWidth="1"
                  />
                  <text
                    x="60"
                    y="19"
                    textAnchor="middle"
                    fill="var(--foreground)"
                    fontSize="10"
                  >
                    Conversational
                  </text>
                </g>
                <g transform="translate(380, 40)">
                  <rect
                    x="0"
                    y="0"
                    width="120"
                    height="30"
                    rx="4"
                    fill="var(--surface)"
                    stroke="var(--border)"
                    strokeWidth="1"
                  />
                  <text
                    x="60"
                    y="19"
                    textAnchor="middle"
                    fill="var(--foreground)"
                    fontSize="10"
                  >
                    Agent Interface
                  </text>
                </g>
                <g transform="translate(540, 40)">
                  <rect
                    x="0"
                    y="0"
                    width="120"
                    height="30"
                    rx="4"
                    fill="var(--surface)"
                    stroke="var(--border)"
                    strokeWidth="1"
                  />
                  <text
                    x="60"
                    y="19"
                    textAnchor="middle"
                    fill="var(--foreground)"
                    fontSize="10"
                  >
                    API Layer
                  </text>
                </g>
              </g>

              {/* Connection lines */}
              <line
                x1="400"
                y1="90"
                x2="400"
                y2="120"
                stroke="var(--accent)"
                strokeWidth="1"
                opacity="0.5"
              />

              {/* Application Layer */}
              <g transform="translate(50, 230)">
                <rect
                  x="0"
                  y="0"
                  width="700"
                  height="100"
                  rx="8"
                  fill="var(--background)"
                  stroke="var(--border)"
                  strokeWidth="1"
                />
                <text
                  x="350"
                  y="25"
                  textAnchor="middle"
                  fill="var(--muted)"
                  fontSize="12"
                  fontWeight="500"
                >
                  Application Services
                </text>
                <g transform="translate(40, 40)">
                  <rect
                    x="0"
                    y="0"
                    width="90"
                    height="45"
                    rx="4"
                    fill="var(--surface)"
                    stroke="var(--border)"
                    strokeWidth="1"
                  />
                  <text
                    x="45"
                    y="20"
                    textAnchor="middle"
                    fill="var(--foreground)"
                    fontSize="9"
                  >
                    Production
                  </text>
                  <text
                    x="45"
                    y="33"
                    textAnchor="middle"
                    fill="var(--muted)"
                    fontSize="9"
                  >
                    Tracking
                  </text>
                </g>
                <g transform="translate(150, 40)">
                  <rect
                    x="0"
                    y="0"
                    width="90"
                    height="45"
                    rx="4"
                    fill="var(--surface)"
                    stroke="var(--border)"
                    strokeWidth="1"
                  />
                  <text
                    x="45"
                    y="20"
                    textAnchor="middle"
                    fill="var(--foreground)"
                    fontSize="9"
                  >
                    Attendance
                  </text>
                  <text
                    x="45"
                    y="33"
                    textAnchor="middle"
                    fill="var(--muted)"
                    fontSize="9"
                  >
                    & Payroll
                  </text>
                </g>
                <g transform="translate(260, 40)">
                  <rect
                    x="0"
                    y="0"
                    width="90"
                    height="45"
                    rx="4"
                    fill="var(--surface)"
                    stroke="var(--border)"
                    strokeWidth="1"
                  />
                  <text
                    x="45"
                    y="20"
                    textAnchor="middle"
                    fill="var(--foreground)"
                    fontSize="9"
                  >
                    Financial
                  </text>
                  <text
                    x="45"
                    y="33"
                    textAnchor="middle"
                    fill="var(--muted)"
                    fontSize="9"
                  >
                    Workflows
                  </text>
                </g>
                <g transform="translate(370, 40)">
                  <rect
                    x="0"
                    y="0"
                    width="90"
                    height="45"
                    rx="4"
                    fill="var(--surface)"
                    stroke="var(--border)"
                    strokeWidth="1"
                  />
                  <text
                    x="45"
                    y="20"
                    textAnchor="middle"
                    fill="var(--foreground)"
                    fontSize="9"
                  >
                    Piece-Rate
                  </text>
                  <text
                    x="45"
                    y="33"
                    textAnchor="middle"
                    fill="var(--muted)"
                    fontSize="9"
                  >
                    Engine
                  </text>
                </g>
                <g transform="translate(480, 40)">
                  <rect
                    x="0"
                    y="0"
                    width="90"
                    height="45"
                    rx="4"
                    fill="var(--surface)"
                    stroke="var(--border)"
                    strokeWidth="1"
                  />
                  <text
                    x="45"
                    y="20"
                    textAnchor="middle"
                    fill="var(--foreground)"
                    fontSize="9"
                  >
                    AI Agents
                  </text>
                  <text
                    x="45"
                    y="33"
                    textAnchor="middle"
                    fill="var(--muted)"
                    fontSize="9"
                  >
                    & Tools
                  </text>
                </g>
                <g transform="translate(590, 40)">
                  <rect
                    x="0"
                    y="0"
                    width="90"
                    height="45"
                    rx="4"
                    fill="var(--surface)"
                    stroke="var(--border)"
                    strokeWidth="1"
                  />
                  <text
                    x="45"
                    y="20"
                    textAnchor="middle"
                    fill="var(--foreground)"
                    fontSize="9"
                  >
                    Reporting
                  </text>
                  <text
                    x="45"
                    y="33"
                    textAnchor="middle"
                    fill="var(--muted)"
                    fontSize="9"
                  >
                    & Analytics
                  </text>
                </g>
              </g>

              {/* Connection lines */}
              <line
                x1="400"
                y1="200"
                x2="400"
                y2="230"
                stroke="var(--accent)"
                strokeWidth="1"
                opacity="0.5"
              />

              {/* Data Layer */}
              <g transform="translate(50, 360)">
                <rect
                  x="0"
                  y="0"
                  width="700"
                  height="80"
                  rx="8"
                  fill="var(--background)"
                  stroke="var(--border)"
                  strokeWidth="1"
                />
                <text
                  x="350"
                  y="25"
                  textAnchor="middle"
                  fill="var(--muted)"
                  fontSize="12"
                  fontWeight="500"
                >
                  Data Layer
                </text>
                <g transform="translate(150, 40)">
                  <rect
                    x="0"
                    y="0"
                    width="120"
                    height="30"
                    rx="4"
                    fill="var(--surface)"
                    stroke="var(--border)"
                    strokeWidth="1"
                  />
                  <text
                    x="60"
                    y="19"
                    textAnchor="middle"
                    fill="var(--foreground)"
                    fontSize="10"
                  >
                    PostgreSQL
                  </text>
                </g>
                <g transform="translate(300, 40)">
                  <rect
                    x="0"
                    y="0"
                    width="120"
                    height="30"
                    rx="4"
                    fill="var(--surface)"
                    stroke="var(--border)"
                    strokeWidth="1"
                  />
                  <text
                    x="60"
                    y="19"
                    textAnchor="middle"
                    fill="var(--foreground)"
                    fontSize="10"
                  >
                    Local Storage
                  </text>
                </g>
                <g transform="translate(450, 40)">
                  <rect
                    x="0"
                    y="0"
                    width="120"
                    height="30"
                    rx="4"
                    fill="var(--surface)"
                    stroke="var(--border)"
                    strokeWidth="1"
                  />
                  <text
                    x="60"
                    y="19"
                    textAnchor="middle"
                    fill="var(--foreground)"
                    fontSize="10"
                  >
                    Sync Engine
                  </text>
                </g>
              </g>

              {/* Connection lines */}
              <line
                x1="400"
                y1="330"
                x2="400"
                y2="360"
                stroke="var(--accent)"
                strokeWidth="1"
                opacity="0.5"
              />
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
