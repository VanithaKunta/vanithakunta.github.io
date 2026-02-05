import React from "react";
import { content } from "../data/content";
import ScrollReveal from "./ScrollReveal";

export default function Publications() {
    const pubs = content.publications || [];

    return (
        <section id="publications" className="section" aria-label="Publications">
            <div className="container">
                <ScrollReveal>
                    <h2 className="h2">Publications</h2>
                    <p className="muted">
                        Articles and technical write-ups on designing reliable, scalable software systems.
                    </p>
                </ScrollReveal>

                <div className="grid grid-2">
                    {pubs.map((p) => (
                        <ScrollReveal key={p.title}>
                            <article className="card">
                                <header className="pub-header">
                                    <div>
                                        <h3 className="h3">{p.title}</h3>
                                        <p className="meta">
                                            <span className="meta-strong">{p.publisher}</span>
                                            {" • "}
                                            <span>{p.date}</span>
                                        </p>
                                    </div>

                                    {p.link ? (
                                        <a
                                            className="btn btn-ghost"
                                            href={p.link}
                                            target="_blank"
                                            rel="noreferrer"
                                            aria-label={`Open publication: ${p.title}`}
                                        >
                                            Read
                                        </a>
                                    ) : null}
                                </header>

                                {p.summary ? <p className="body">{p.summary}</p> : null}
                            </article>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
