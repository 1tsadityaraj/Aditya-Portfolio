import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin } from 'lucide-react';

const links = [
    {
        icon: Mail,
        label: 'Email',
        value: 'heyitsadityaraj@gmail.com',
        href: 'mailto:heyitsadityaraj@gmail.com',
        note: 'Best way to reach me',
    },
    {
        icon: Github,
        label: 'GitHub',
        value: 'github.com/1tsadityaraj',
        href: 'https://github.com/1tsadityaraj',
        note: 'Code & projects',
    },
    {
        icon: Linkedin,
        label: 'LinkedIn',
        value: 'linkedin.com/in/aditya-raj-a1b925285',
        href: 'https://linkedin.com/in/aditya-raj-a1b925285',
        note: 'Professional profile',
    },
];

const Contact = () => {
    return (
        <section id="contact" className="py-24 bg-slate-950 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            <div className="max-w-2xl mx-auto px-6 relative z-10">

                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.5 }}
                    className="mb-12"
                >
                    <p className="text-xs tracking-[0.18em] uppercase text-slate-500 mb-3">/ contact</p>
                    <h2 className="text-4xl md:text-5xl font-bold text-white">Let's talk</h2>
                    <p className="mt-4 text-slate-400 text-lg leading-relaxed">
                        I'm looking for internships and entry-level roles. If you're building something
                        interesting or just want to connect — my inbox is open.
                    </p>
                </motion.div>

                {/* Contact rows — clean, no colored gradient headers */}
                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="divide-y divide-slate-800/60"
                >
                    {links.map((link, index) => {
                        const Icon = link.icon;
                        return (
                            <motion.a
                                key={link.label}
                                href={link.href}
                                target={link.href.startsWith('mailto') ? undefined : '_blank'}
                                rel={link.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.15 + index * 0.08 }}
                                className="group flex items-center gap-5 py-5 hover:bg-white/[0.02] -mx-3 px-3 rounded-lg transition-colors duration-200"
                            >
                                <div className="w-9 h-9 rounded-lg bg-slate-800 border border-slate-700/60 flex items-center justify-center text-slate-400 group-hover:text-slate-200 group-hover:border-slate-600 transition-colors flex-shrink-0">
                                    <Icon size={16} />
                                </div>

                                <div className="flex-1 min-w-0">
                                    <p className="text-xs text-slate-500 mb-0.5">{link.note}</p>
                                    <p className="text-slate-200 text-sm font-medium truncate group-hover:text-white transition-colors">
                                        {link.value}
                                    </p>
                                </div>

                                <span className="text-slate-600 group-hover:text-slate-400 text-xs transition-colors flex-shrink-0">
                                    {link.label} ↗
                                </span>
                            </motion.a>
                        );
                    })}
                </motion.div>

                {/* Response note — plain text, no icon badge */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="mt-10 text-slate-600 text-sm border-t border-slate-800/60 pt-6"
                >
                    I usually reply within a day. If it's been longer, feel free to follow up.
                </motion.p>
            </div>
        </section>
    );
};

export default Contact;
