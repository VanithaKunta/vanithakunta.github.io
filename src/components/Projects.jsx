import React from "react";
import { content } from "../data/content";
import ScrollReveal from "./ScrollReveal";

export default function Projects() {
  return (
    <section id="projects" className="section" aria-label="Projects">
      <div className="container">
        <ScrollReveal>
          <h2 className="h2">Projects</h2>
          <p className="muted">
            A selection of full stack and backend-focused work highlighting architecture, security,
            performance, and product impact.
          </p>
        </ScrollReveal>

        <div className="grid grid-2">
          {content.projects.map((p) => (
            <ScrollReveal key={p.title}>
              <article className="card project-card">
                <header className="card-header">
                  <h3 className="h3">{p.title}</h3>
                  <div className="stack" aria-label="Tech stack">
                    {p.stack.map((t) => (
                      <span className="pill" key={t}>
                        {t}
                      </span>
                    ))}
                  </div>
                </header>

                <p className="body">{p.description}</p>

                <ul className="bullets">
                  {p.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>

                <div className="actions">
                  {p.links.repo ? (
                    <a className="btn btn-ghost" href={p.links.repo} target="_blank" rel="noreferrer">
                      GitHub Repo
                    </a>
                  ) : null}
                  {p.links.demo ? (
                    <a className="btn btn-primary" href={p.links.demo} target="_blank" rel="noreferrer">
                      Live Demo
                    </a>
                  ) : null}
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
