import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, ArrowRight, Clock } from 'lucide-react';

const Contact = () => {
    const contactLinks = [
        {
            icon: <Mail size={22} />,
            label: 'Email',
            href: 'mailto:heyitsadityaraj@gmail.com',
            value: 'heyitsadityaraj@gmail.com',
            color: 'from-blue-500/20 to-cyan-500/20',
            iconBg: 'bg-blue-500/10',
            iconColor: 'text-blue-400',
            hoverColor: 'hover:border-blue-500/30 hover:bg-blue-500/5'
        },
        {
            icon: <Github size={22} />,
            label: 'GitHub',
            href: 'https://github.com/1tsadityaraj',
            value: 'github.com/1tsadityaraj',
            color: 'from-purple-500/20 to-pink-500/20',
            iconBg: 'bg-purple-500/10',
            iconColor: 'text-purple-400',
            hoverColor: 'hover:border-purple-500/30 hover:bg-purple-500/5'
        },
        {
            icon: <Linkedin size={22} />,
            label: 'LinkedIn',
            href: 'https://linkedin.com/in/aditya-raj-a1b925285',
            value: 'linkedin.com/in/aditya-raj-a1b925285',
            color: 'from-emerald-500/20 to-teal-500/20',
            iconBg: 'bg-emerald-500/10',
            iconColor: 'text-emerald-400',
            hoverColor: 'hover:border-emerald-500/30 hover:bg-emerald-500/5'
        }
    ];

    return (
        <section id="contact" className="py-24 bg-slate-950 relative overflow-hidden">
            {/* Section Divider */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            
            {/* Subtle Background Effects */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] -z-10" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[120px] -z-10" />

            <div className="max-w-3xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-5">
                        Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Touch</span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-6" />
                    <p className="text-slate-300 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
                        I'm open to internships, entry-level opportunities, and collaboration. Feel free to reach out if you'd like to connect.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="space-y-4 mb-10"
                >
                    {contactLinks.map((link, index) => (
                        <motion.a
                            key={link.label}
                            href={link.href}
                            target={link.href.startsWith('mailto:') ? undefined : '_blank'}
                            rel={link.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 + index * 0.1, type: "spring", stiffness: 100 }}
                            whileHover={{ x: 8, scale: 1.02 }}
                            className={`group relative flex items-center gap-5 p-5 rounded-xl bg-gradient-to-br from-slate-900/50 to-slate-800/30 backdrop-blur-sm border border-white/10 ${link.hoverColor} transition-all duration-300 overflow-hidden`}
                        >
                            {/* Gradient overlay on hover */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${link.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />
                            
                            {/* Icon */}
                            <motion.div 
                                className={`relative z-10 p-3 rounded-xl ${link.iconBg} border border-white/10 group-hover:border-white/20 transition-all ${link.iconColor}`}
                                whileHover={{ rotate: [0, -5, 5, 0] }}
                                transition={{ duration: 0.3 }}
                            >
                                {link.icon}
                            </motion.div>

                            {/* Content */}
                            <div className="flex-1 relative z-10">
                                <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1.5 group-hover:text-slate-400 transition-colors">
                                    {link.label}
                                </div>
                                <div className="text-white text-lg font-medium group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all">
                                    {link.value}
                                </div>
                            </div>

                            {/* Arrow indicator */}
                            <motion.div
                                className="relative z-10 text-slate-600 group-hover:text-white transition-colors"
                                initial={{ x: -10, opacity: 0 }}
                                whileHover={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.2 }}
                            >
                                <ArrowRight size={18} />
                            </motion.div>
                        </motion.a>
                    ))}
                </motion.div>

                {/* Response Time Indicator */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className="flex items-center justify-center gap-2 text-slate-400 text-sm"
                >
                    <Clock size={16} className="text-slate-500" />
                    <span>I usually respond within a day.</span>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
