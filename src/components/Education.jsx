import React from "react";
import { content } from "../data/content";
import ScrollReveal from "./ScrollReveal";

export default function Education() {
  return (
    <section id="education" className="section alt" aria-label="Education">
      <div className="container">
        <ScrollReveal>
          <h2 className="h2">Education</h2>
          <p className="muted">
            Academic background supporting strong fundamentals in software engineering and systems design.
          </p>
        </ScrollReveal>

        <div className="timeline" role="list">
          {content.education.map((edu) => (
            <ScrollReveal key={`${edu.degree}-${edu.school}`} className="timeline-item">
              <article className="card" role="listitem">
                <header className="card-header">
                  <div>
                    <h3 className="h3">{edu.degree}</h3>
                    <p className="meta">
                      <span className="meta-strong">{edu.school}</span>
                      {" • "}
                      <span>{edu.location}</span>
                    </p>
                  </div>
                  <p className="meta">{edu.dates}</p>
                </header>

                {edu.details?.length ? (
                  <ul className="bullets" aria-label="Education details">
                    {edu.details.map((d) => (
                      <li key={d}>{d}</li>
                    ))}
                  </ul>
                ) : null}
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
