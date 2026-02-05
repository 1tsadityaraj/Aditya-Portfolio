import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
            
            // Update active section based on scroll position
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
        
        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Initial check
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'About', href: '#about', id: 'about' },
        { name: 'Projects', href: '#projects', id: 'projects' },
        { name: 'Skills', href: '#skills', id: 'skills' },
        { name: 'Contact', href: '#contact', id: 'contact' },
    ];

    return (
        <motion.nav 
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
                scrolled 
                    ? 'glass py-4 shadow-2xl shadow-black/20 backdrop-blur-xl border-b border-white/5' 
                    : 'bg-transparent py-6'
            }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                <motion.a 
                    href="#home"
                    whileHover={{ scale: 1.05 }}
                    className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 hover:from-blue-300 hover:via-purple-400 hover:to-pink-400 transition-all relative group"
                >
                    <span className="relative z-10">Aditya.dev</span>
                    <span className="absolute inset-0 bg-gradient-to-r from-blue-400/20 via-purple-500/20 to-pink-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
                </motion.a>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-2">
                    {navLinks.map((link) => {
                        const isActive = activeSection === link.id;
                        return (
                            <motion.a
                                key={link.name}
                                href={link.href}
                                whileHover={{ y: -2 }}
                                className={`relative px-4 py-2 rounded-lg text-sm font-medium tracking-wide transition-all ${
                                    isActive 
                                        ? 'text-white' 
                                        : 'text-slate-300 hover:text-white'
                                }`}
                            >
                                <span className="relative z-10">{link.name}</span>
                                {isActive && (
                                    <motion.div
                                        layoutId="activeSection"
                                        className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg border border-white/10 -z-10"
                                        initial={false}
                                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                    />
                                )}
                                {!isActive && (
                                    <motion.div
                                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500/0 via-purple-500/0 to-pink-500/0 rounded-full -z-10"
                                        whileHover={{ 
                                            background: 'linear-gradient(to right, rgba(59, 130, 246, 0.5), rgba(168, 85, 247, 0.5), rgba(236, 72, 153, 0.5))'
                                        }}
                                        transition={{ duration: 0.3 }}
                                    />
                                )}
                            </motion.a>
                        );
                    })}
                    <motion.a
                        href="https://github.com/1tsadityaraj"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="ml-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 hover:from-blue-500/30 hover:to-purple-500/30 text-white px-5 py-2 rounded-full transition-all flex items-center gap-2 border border-white/10 backdrop-blur-sm shadow-lg"
                    >
                        <Github size={18} />
                        <span>GitHub</span>
                    </motion.a>
                </div>

                {/* Mobile Toggle */}
                <motion.button
                    className="md:hidden text-slate-200 hover:text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
                    onClick={() => setIsOpen(!isOpen)}
                    whileTap={{ scale: 0.95 }}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </motion.button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden glass border-t border-white/10 backdrop-blur-xl"
                    >
                        <div className="flex flex-col p-6 space-y-3">
                            {navLinks.map((link, index) => (
                                <motion.a
                                    key={link.name}
                                    href={link.href}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className={`text-slate-300 hover:text-white text-lg font-medium py-2 px-4 rounded-lg transition-colors ${
                                        activeSection === link.id ? 'bg-white/10 text-white' : ''
                                    }`}
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </motion.a>
                            ))}
                            <div className="flex gap-4 pt-4 border-t border-white/10">
                                <motion.a 
                                    href="https://github.com/1tsadityaraj"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    className="p-3 bg-white/5 rounded-full hover:bg-white/10 transition-colors"
                                >
                                    <Github size={20} className="text-slate-300" />
                                </motion.a>
                                <motion.a 
                                    href="https://linkedin.com/in/aditya-raj-a1b925285"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    className="p-3 bg-white/5 rounded-full hover:bg-white/10 transition-colors"
                                >
                                    <Linkedin size={20} className="text-slate-300" />
                                </motion.a>
                                <motion.a 
                                    href="mailto:heyitsadityaraj@gmail.com"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    className="p-3 bg-white/5 rounded-full hover:bg-white/10 transition-colors"
                                >
                                    <Mail size={20} className="text-slate-300" />
                                </motion.a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;
