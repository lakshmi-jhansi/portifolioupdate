'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiLinkedin, FiGithub, FiHeart } from 'react-icons/fi';
import { SiLeetcode } from 'react-icons/si';

const socialLinks = [
    { icon: FiLinkedin, href: 'https://www.linkedin.com/in/jhansi-lakshmi-5b0a5032b/', label: 'LinkedIn' },
    { icon: FiGithub, href: 'https://github.com/lakshmi-jhansi', label: 'GitHub' },
    { icon: SiLeetcode, href: 'https://leetcode.com/u/KadaliLakshmiJhansi/', label: 'LeetCode' },
];

const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Internships', href: '#internships' },
    { label: 'Achievements', href: '#achievements' },
    { label: 'Contact', href: '#contact' },
];

export default function Footer() {
    return (
        <footer className="relative border-t border-violet-600/20 py-12 px-6">
            {/* Gradient line */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent" />

            <div className="max-w-5xl mx-auto">
                {/* Top row */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
                    {/* Logo */}
                    <Link href="#" className="flex items-center gap-2 group">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-600 to-purple-500 flex items-center justify-center font-grotesk font-bold text-white shadow-violet group-hover:shadow-violet-lg transition-all duration-300">
                            LJK
                        </div>
                        <div>
                            <p className="font-grotesk font-semibold text-white text-sm">Lakshmi Jhansi Kadali</p>
                            <p className="text-gray-500 text-xs">MCA Student · AI & Full Stack Developer</p>
                        </div>
                    </Link>

                    {/* Nav Links */}
                    <ul className="flex flex-wrap items-center gap-x-6 gap-y-2 justify-center">
                        {navLinks.map((link) => (
                            <li key={link.href}>
                                <Link
                                    href={link.href}
                                    className="text-gray-400 hover:text-violet-400 text-sm transition-colors animated-underline"
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* Social Icons */}
                    <div className="flex items-center gap-3">
                        {socialLinks.map(({ icon: Icon, href, label }) => (
                            <motion.a
                                key={label}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={label}
                                className="social-icon w-10 h-10"
                                whileHover={{ scale: 1.1, rotate: 5 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Icon size={16} />
                            </motion.a>
                        ))}
                    </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-transparent via-white/5 to-transparent mb-6" />

                {/* Bottom row */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-gray-600">
                    <p>© {new Date().getFullYear()} Lakshmi Jhansi Kadali. All rights reserved.</p>
                    <p className="flex items-center gap-1.5">
                        Built with <FiHeart className="text-violet-500" size={14} /> using Next.js & Tailwind CSS
                    </p>
                </div>
            </div>
        </footer>
    );
}
