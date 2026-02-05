import React from "react";
import { content } from "../data/content";
import ScrollReveal from "./ScrollReveal";

export default function Certifications() {
  return (
    <section id="certifications" className="section alt" aria-label="Certifications">
      <div className="container">
        <ScrollReveal>
          <h2 className="h2">Certifications</h2>
          <p className="muted">Industry-recognized certifications that validate skills for complex, large-scale projects.</p>
        </ScrollReveal>

        <div className="grid grid-2">
          {content.certifications.map((c) => (
            <ScrollReveal key={c.name}>
              <article className="card">
                <h3 className="h3">{c.name}</h3>
                <p className="meta">
                  {c.org} • {c.date}
                </p>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
