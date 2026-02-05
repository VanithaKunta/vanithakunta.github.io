import React from "react";
import { content } from "../data/content";

export default function Footer({ theme, onToggleTheme }) {
    return (
        <footer className="footer" aria-label="Footer">
            <div className="container footer-row">
                <div>
                    <div className="footer-name">{content.name}</div>
                    <div className="footer-role">{content.role}</div>
                </div>

                <div className="footer-actions">
                    <button
                        type="button"
                        className="btn btn-ghost"
                        onClick={onToggleTheme}
                        aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
                    >
                        Toggle {theme === "dark" ? "Light" : "Dark"}
                    </button>
                    <a className="btn btn-primary" href="#home">
                        Back to top
                    </a>
                </div>
            </div>

            <div className="container footer-bottom">
                <span>© {new Date().getFullYear()} {content.name}. All rights reserved.</span>
            </div>
        </footer>
    );
}
