import React from 'react';
import { Github, Linkedin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="py-6 bg-slate-950 border-t border-slate-800/60" role="contentinfo">
            <div className="max-w-5xl mx-auto px-6">
                <div className="flex flex-col sm:flex-row justify-between items-center gap-3">
                    <p className="text-slate-500 text-sm">
                        Aditya Raj · Full Stack Developer
                    </p>
                    <div className="flex items-center gap-4">
                        <a
                            href="https://github.com/1tsadityaraj"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-slate-600 hover:text-slate-300 transition-colors"
                            aria-label="GitHub"
                        >
                            <Github size={16} />
                        </a>
                        <a
                            href="https://linkedin.com/in/aditya-raj-a1b925285"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-slate-600 hover:text-slate-300 transition-colors"
                            aria-label="LinkedIn"
                        >
                            <Linkedin size={16} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
