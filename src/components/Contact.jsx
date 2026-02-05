import React from "react";
import { content } from "../data/content";
import ScrollReveal from "./ScrollReveal";

export default function Contact() {
  const { links } = content;

  return (
    <section id="contact" className="section" aria-label="Contact">
      <div className="container">
        <ScrollReveal>
          <h2 className="h2">Contact</h2>
          <p className="muted">
            Reach out via LinkedIn or view my work on GitHub.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <div className="card contact-card">
            <div className="contact-links" aria-label="Contact links">
              <a
                className="contact-link"
                href={links.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                <span className="contact-title">LinkedIn</span>
                <span className="contact-subtitle">Connect or message me</span>
              </a>

              <a
                className="contact-link"
                href={links.github}
                target="_blank"
                rel="noreferrer"
              >
                <span className="contact-title">GitHub</span>
                <span className="contact-subtitle">View repositories & code</span>
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
