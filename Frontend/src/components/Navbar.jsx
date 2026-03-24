import React, { useState, useEffect } from 'react';
import { Menu, X, Github } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);

            const sections = ['home', 'about', 'projects', 'skills', 'contact'];
            const scrollPosition = window.scrollY + 100;

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'About', href: '#about', id: 'about' },
        { name: 'Projects', href: '#projects', id: 'projects' },
        { name: 'Skills', href: '#skills', id: 'skills' },
        { name: 'Contact', href: '#contact', id: 'contact' },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                scrolled
                    ? 'bg-slate-950/80 backdrop-blur-md py-4 border-b border-white/7'
                    : 'bg-transparent py-6'
            }`}
            role="navigation"
            aria-label="Main navigation"
        >
            <div className="max-w-5xl mx-auto px-6 flex justify-between items-center">
                {/* Logo — plain text, no gradient */}
                <a
                    href="#home"
                    className="text-sm font-semibold text-slate-300 hover:text-white transition-colors tracking-wide"
                    aria-label="Aditya Raj — back to top"
                >
                    Aditya Raj
                </a>

                {/* Desktop links */}
                <div className="hidden md:flex items-center gap-1" role="menubar">
                    {navLinks.map((link) => {
                        const isActive = activeSection === link.id;
                        return (
                            <a
                                key={link.name}
                                href={link.href}
                                className={`px-3 py-1.5 rounded-md text-sm transition-colors ${
                                    isActive
                                        ? 'text-white bg-white/[0.06]'
                                        : 'text-slate-500 hover:text-slate-200'
                                }`}
                                role="menuitem"
                                aria-current={isActive ? 'true' : undefined}
                            >
                                {link.name}
                            </a>
                        );
                    })}

                    <a
                        href="https://github.com/1tsadityaraj"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-4 flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm text-slate-400 border border-white/10 hover:text-white hover:border-white/20 transition-all"
                        aria-label="GitHub"
                    >
                        <Github size={15} />
                        <span>GitHub</span>
                    </a>
                </div>

                {/* Mobile toggle — simple, no spring */}
                <button
                    className="md:hidden text-slate-400 hover:text-white p-2 transition-colors"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label={isOpen ? 'Close menu' : 'Open menu'}
                    aria-expanded={isOpen}
                    aria-controls="mobile-menu"
                >
                    {isOpen ? <X size={22} /> : <Menu size={22} />}
                </button>
            </div>

            {/* Mobile menu — simple fade, no x-slide */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        id="mobile-menu"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="md:hidden border-t border-white/7 bg-slate-950/95 backdrop-blur-md"
                        role="menu"
                    >
                        <div className="flex flex-col p-5 gap-1">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className={`text-sm py-2.5 px-3 rounded-md transition-colors ${
                                        activeSection === link.id
                                            ? 'text-white bg-white/[0.06]'
                                            : 'text-slate-400 hover:text-white'
                                    }`}
                                    onClick={() => setIsOpen(false)}
                                    role="menuitem"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <div className="flex gap-3 pt-3 mt-2 border-t border-white/7">
                                <a
                                    href="https://github.com/1tsadityaraj"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-1.5 text-sm text-slate-400 hover:text-white transition-colors"
                                    aria-label="GitHub"
                                >
                                    <Github size={16} /> GitHub
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
