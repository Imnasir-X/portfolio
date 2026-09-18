"use client";

import { Hero } from "@/components/Hero";
import { SelectedWork } from "@/components/SelectedWork";
import { KormooFeature } from "@/components/KormooFeature";
import { Capabilities } from "@/components/Capabilities";
import { BuildLog } from "@/components/BuildLog";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Navigation } from "@/components/Navigation";

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="flex-1">
        <Hero />
        <SelectedWork />
        <section id="kormoo">
          <KormooFeature />
        </section>
        <section id="capabilities">
          <Capabilities />
        </section>
        <BuildLog />
        <section id="about">
          <About />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <footer className="border-t border-[var(--border)] px-6 py-8 md:px-12 lg:px-24">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-[var(--muted)] md:flex-row">
          <p>&copy; {new Date().getFullYear()} Nasir Khan. All rights reserved.</p>
          <p>Built with Next.js, TypeScript, and Framer Motion.</p>
        </div>
      </footer>
    </>
  );
}
