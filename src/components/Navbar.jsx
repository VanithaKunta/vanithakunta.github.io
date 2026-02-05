import React, { useEffect, useMemo, useState } from "react";
import { content } from "../data/content";

const navItems = [
    { id: "home", label: "Home" },
    { id: "experience", label: "Experience" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "education", label: "Education" },
    { id: "publications", label: "Publications" },
    { id: "certifications", label: "Certifications" },
    { id: "contact", label: "Contact" },
];


function ThemeIcon({ theme }) {
    return (
        <span aria-hidden="true" className="theme-icon">
            {theme === "dark" ? "☾" : "☀"}
        </span>
    );
}

export default function Navbar({ theme, onToggleTheme }) {
    const [open, setOpen] = useState(false);

    const close = useMemo(() => () => setOpen(false), []);
    const toggle = useMemo(() => () => setOpen((v) => !v), []);

    useEffect(() => {
        const onKey = (e) => {
            if (e.key === "Escape") setOpen(false);
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, []);

    return (
        <header className="header">
            <nav className="nav container" aria-label="Primary">
                <a className="brand" href="#home" onClick={close}>
                    <span className="brand-name">{content.name}</span>
                    <span className="brand-role">{content.role}</span>
                </a>

                <div className="nav-actions">
                    <button
                        type="button"
                        className="icon-btn"
                        onClick={onToggleTheme}
                        aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
                        title="Toggle theme"
                    >
                        <ThemeIcon theme={theme} />
                    </button>

                    <button
                        type="button"
                        className="icon-btn nav-toggle"
                        onClick={toggle}
                        aria-expanded={open}
                        aria-controls="nav-menu"
                        aria-label="Toggle navigation menu"
                    >
                        <span aria-hidden="true">{open ? "✕" : "☰"}</span>
                    </button>
                </div>

                <div
                    id="nav-menu"
                    className={`nav-menu ${open ? "open" : ""}`}
                    role="dialog"
                    aria-modal={open ? "true" : "false"}
                >
                    <ul className="nav-links" aria-label="Section links">
                        {navItems.map((item) => (
                            <li key={item.id}>
                                <a className="nav-link" href={`#${item.id}`} onClick={close}>
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>

                </div>
            </nav>
        </header>
    );
}
