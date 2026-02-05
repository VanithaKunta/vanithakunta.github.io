import React from "react";
import { content } from "../data/content";
import ScrollReveal from "./ScrollReveal";

export default function Skills() {
    const entries = Object.entries(content.skills);

    return (
        <section id="skills" className="section alt" aria-label="Skills">
            <div className="container">
                <ScrollReveal>
                    <h2 className="h2">Skills</h2>
                    <p className="muted">
                        Tools and technologies I work with across backend, frontend, data, and delivery.
                    </p>
                </ScrollReveal>

                <div className="grid grid-2">
                    {entries.map(([group, items]) => (
                        <ScrollReveal key={group}>
                            <article className="card">
                                <h3 className="h3">{group}</h3>
                                <div className="tag-wrap" aria-label={`${group} keywords`}>
                                    {items.map((s) => (
                                        <span key={s} className="tag">
                                            {s}
                                        </span>
                                    ))}
                                </div>
                            </article>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
