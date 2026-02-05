import React from "react";
import { content } from "../data/content";
import ScrollReveal from "./ScrollReveal";

export default function Experience() {
    return (
        <section id="experience" className="section" aria-label="Experience">
            <div className="container">
                <ScrollReveal>
                    <h2 className="h2">Experience</h2>
                    <p className="muted">
                        Roles focused on delivering reliable features, improving performance, and building maintainable systems.
                    </p>
                </ScrollReveal>

                <div className="timeline" role="list">
                    {content.experience.map((job) => (
                        <ScrollReveal key={`${job.title}-${job.company}`} className="timeline-item">
                            <article className="card" role="listitem">
                                <header className="card-header">
                                    <div>
                                        <h3 className="h3">{job.title}</h3>
                                        <p className="meta">
                                            <span className="meta-strong">{job.company}</span>
                                            {" • "}
                                            <span>{job.location}</span>
                                        </p>
                                    </div>
                                    <p className="meta">{job.dates}</p>
                                </header>

                                <ul className="bullets">
                                    {job.bullets.map((b) => (
                                        <li key={b}>{b}</li>
                                    ))}
                                </ul>
                            </article>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
