'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiLinkedin, FiGithub, FiSend, FiUser, FiMail, FiMessageSquare, FiCheckCircle, FiAlertCircle } from 'react-icons/fi';
import { SiLeetcode } from 'react-icons/si';

const socialLinks = [
    { icon: FiLinkedin, href: 'https://www.linkedin.com/in/jhansi-lakshmi-5b0a5032b/', label: 'LinkedIn', color: '#0A66C2' },
    { icon: FiGithub, href: 'https://github.com/lakshmi-jhansi', label: 'GitHub', color: '#ffffff' },
    { icon: SiLeetcode, href: 'https://leetcode.com/u/KadaliLakshmiJhansi/', label: 'LeetCode', color: '#FFA116' },
];

type FormState = { name: string; email: string; subject: string; message: string };
type Status = 'idle' | 'loading' | 'success' | 'error';

export default function Contact() {
    const [form, setForm] = useState<FormState>({ name: '', email: '', subject: '', message: '' });
    const [status, setStatus] = useState<Status>('idle');
    const [errorMsg, setErrorMsg] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');
        setErrorMsg('');

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form),
            });
            const data = await res.json();

            if (res.ok) {
                setStatus('success');
                setForm({ name: '', email: '', subject: '', message: '' });
            } else {
                setStatus('error');
                setErrorMsg(data.error || 'Something went wrong. Please try again.');
            }
        } catch {
            setStatus('error');
            setErrorMsg('Network error. Please check your connection and try again.');
        }
    };

    const inputClass = `w-full bg-white/3 border border-violet-600/20 rounded-xl px-4 py-3.5 text-white placeholder-gray-500 text-sm
    focus:outline-none focus:border-violet-500 focus:bg-violet-600/5 focus:shadow-violet transition-all duration-200`;

    return (
        <section id="contact" className="relative py-24 px-6">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-600/40 to-transparent" />

            {/* Glow bg */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-violet-600/10 blur-3xl pointer-events-none" />

            <div className="max-w-5xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="section-tag">Get In Touch</span>
                    <h2 className="font-grotesk text-4xl md:text-5xl font-bold text-white mt-4 mb-4">
                        Let&apos;s <span className="gradient-text">Connect</span>
                    </h2>
                    <p className="text-gray-400 max-w-xl mx-auto text-base">
                        Whether you have an internship opportunity, collaboration idea, or just want to say hello — I&apos;d love to hear from you.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-5 gap-8">
                    {/* Left: Info + Social */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-2 space-y-6"
                    >
                        <div className="glass rounded-2xl p-6 border border-violet-600/20">
                            <h3 className="font-grotesk text-lg font-semibold text-white mb-2">Let&apos;s Talk</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                I&apos;m actively looking for internship opportunities and exciting projects. Open to collaborations in AI, full-stack, and research domains.
                            </p>
                        </div>

                        <div className="glass rounded-2xl p-6 border border-violet-600/20">
                            <h3 className="font-grotesk text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Find Me On</h3>
                            <div className="space-y-3">
                                {socialLinks.map(({ icon: Icon, href, label }) => (
                                    <motion.a
                                        key={label}
                                        href={href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ x: 4 }}
                                        className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group"
                                    >
                                        <div className="social-icon w-9 h-9 rounded-lg flex-shrink-0">
                                            <Icon size={16} />
                                        </div>
                                        <span className="text-sm font-medium animated-underline">{label}</span>
                                    </motion.a>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Right: Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-3"
                    >
                        <div className="glass rounded-2xl p-6 md:p-8 border border-violet-600/20">
                            <AnimatePresence mode="wait">
                                {status === 'success' ? (
                                    <motion.div
                                        key="success"
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="flex flex-col items-center justify-center text-center py-12"
                                    >
                                        <motion.div
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            transition={{ type: 'spring', stiffness: 200 }}
                                            className="w-16 h-16 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center mb-4"
                                        >
                                            <FiCheckCircle className="text-green-400" size={32} />
                                        </motion.div>
                                        <h3 className="text-xl font-bold text-white mb-2 font-grotesk">Message Sent!</h3>
                                        <p className="text-gray-400 text-sm mb-6">Thank you for reaching out. I&apos;ll get back to you shortly.</p>
                                        <button
                                            onClick={() => setStatus('idle')}
                                            className="btn-outline text-sm py-2 px-6"
                                        >
                                            Send Another
                                        </button>
                                    </motion.div>
                                ) : (
                                    <motion.form
                                        key="form"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        onSubmit={handleSubmit}
                                        className="space-y-4"
                                    >
                                        <div className="grid sm:grid-cols-2 gap-4">
                                            <div>
                                                <label className="block text-xs text-gray-500 mb-1.5 font-medium uppercase tracking-wider">
                                                    <FiUser className="inline mr-1" size={10} />Name
                                                </label>
                                                <input
                                                    type="text"
                                                    name="name"
                                                    value={form.name}
                                                    onChange={handleChange}
                                                    placeholder="Your name"
                                                    required
                                                    className={inputClass}
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-xs text-gray-500 mb-1.5 font-medium uppercase tracking-wider">
                                                    <FiMail className="inline mr-1" size={10} />Email
                                                </label>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    value={form.email}
                                                    onChange={handleChange}
                                                    placeholder="your@email.com"
                                                    required
                                                    className={inputClass}
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <label className="block text-xs text-gray-500 mb-1.5 font-medium uppercase tracking-wider">Subject</label>
                                            <input
                                                type="text"
                                                name="subject"
                                                value={form.subject}
                                                onChange={handleChange}
                                                placeholder="What's this about?"
                                                required
                                                className={inputClass}
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-xs text-gray-500 mb-1.5 font-medium uppercase tracking-wider">
                                                <FiMessageSquare className="inline mr-1" size={10} />Message
                                            </label>
                                            <textarea
                                                name="message"
                                                value={form.message}
                                                onChange={handleChange}
                                                placeholder="Your message here..."
                                                required
                                                rows={5}
                                                className={`${inputClass} resize-none`}
                                            />
                                        </div>

                                        {status === 'error' && (
                                            <motion.div
                                                initial={{ opacity: 0, y: -10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                className="flex items-center gap-2 p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-sm"
                                            >
                                                <FiAlertCircle size={16} className="flex-shrink-0" />
                                                <span>{errorMsg}</span>
                                            </motion.div>
                                        )}

                                        <motion.button
                                            type="submit"
                                            disabled={status === 'loading'}
                                            whileHover={{ scale: status === 'loading' ? 1 : 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            className="btn-primary w-full text-white text-sm flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                                        >
                                            {status === 'loading' ? (
                                                <>
                                                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                                    Sending...
                                                </>
                                            ) : (
                                                <>
                                                    <FiSend size={15} />
                                                    Send Message
                                                </>
                                            )}
                                        </motion.button>
                                    </motion.form>
                                )}
                            </AnimatePresence>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
