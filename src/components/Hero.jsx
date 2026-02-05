import React from "react";
import { content } from "../data/content";
import ScrollReveal from "./ScrollReveal";

export default function Hero() {
    const { links } = content;

    return (
        <section id="home" className="section hero" aria-label="Home">
            <div className="container hero-grid">
                <ScrollReveal>
                    <p className="kicker">
                        {content.location} • Open to Full Stack / Backend roles
                    </p>
                    <h1 className="h1">{content.headline}</h1>
                    <p className="lead">{content.subheadline}</p>

                    <p className="body">{content.about}</p>

                    <ul className="bullets" aria-label="Core strengths">
                        {content.strengths.map((s) => (
                            <li key={s}>{s}</li>
                        ))}
                    </ul>

                    <div className="hero-actions">
                        <a className="btn btn-primary" href="#experience">
                            Experience
                        </a>
                        <a className="btn btn-ghost" href="#projects">
                            View Projects
                        </a>
                    </div>

                    <div className="link-row" aria-label="Profile links">
                        <a className="text-link" href={links.linkedin} target="_blank" rel="noreferrer">
                            LinkedIn
                        </a>
                        <a className="text-link" href={links.github} target="_blank" rel="noreferrer">
                            GitHub
                        </a>
                    </div>
                </ScrollReveal>

                <ScrollReveal className="hero-card">
                    <ScrollReveal className="hero-card">
                        <div className="card">
                            <h2 className="h2">Quick Overview</h2>
                            <div className="snapshot">
                                <div className="snap-item">
                                    <span className="snap-label">Core Stack</span>
                                    <span className="snap-value">Java • Spring Boot • Angular • Python • AWS</span>
                                </div>
                                <div className="snap-item">
                                    <span className="snap-label">Key Frameworks</span>
                                    <span className="snap-value">Spring Security • Hibernate/JPA • Apache Kafka </span>
                                </div>
                                <div className="snap-item">
                                    <span className="snap-label">AI Tools</span>
                                    <span className="snap-value">Microsoft Copilot • Claude AI • ChatGPT</span>
                                </div>
                            </div>

                            <div className="pill-row" aria-label="Keywords">
                                {[
                                    "J2EE", "Microservices", "Scala", "Jenkins", "Docker", "Kubernetes", "JUnit",
                                    "Mockito", "Maven", "Oracle", "Hive", "DynamoDB", "Redis", "RESTful APIs", "SOAP",
                                ].map((k) => (
                                    <span key={k} className="pill">
                                        {k}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </ScrollReveal>

                </ScrollReveal>


            </div>
        </section>
    );
}
