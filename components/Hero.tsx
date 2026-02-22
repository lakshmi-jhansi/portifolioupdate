'use client';

import { motion, Variants } from 'framer-motion';
import Link from 'next/link';
import { FiLinkedin, FiGithub, FiDownload, FiArrowRight, FiChevronDown } from 'react-icons/fi';
import { SiLeetcode } from 'react-icons/si';

const socialLinks = [
  { icon: FiLinkedin, href: 'https://www.linkedin.com/in/jhansi-lakshmi-5b0a5032b/', label: 'LinkedIn' },
  { icon: FiGithub, href: 'https://github.com/lakshmi-jhansi', label: 'GitHub' },
  { icon: SiLeetcode, href: 'https://leetcode.com/u/KadaliLakshmiJhansi/', label: 'LeetCode' },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6
    },
  },
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-24 pb-16"
    >
      {/* Animated BG orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }}
          transition={{
            duration: 8,
            repeat: Infinity
          }}
          className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-violet-600/20 blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{
            duration: 10,
            repeat: Infinity,
            delay: 2
          }}
          className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full bg-purple-600/15 blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.08, 0.15, 0.08] }}
          transition={{
            duration: 12,
            repeat: Infinity,
            delay: 4
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-violet-500/10 blur-3xl"
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="relative z-10 max-w-4xl mx-auto"
      >
        {/* Status badge */}
        <motion.div variants={itemVariants}>
          <span className="section-tag mb-6 inline-flex">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Available for Internships & Projects
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={itemVariants}
          className="font-grotesk text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-4"
        >
          <span className="text-white">Lakshmi </span>
          <span className="gradient-text glow-text">Jhansi</span>
          <br />
          <span className="text-white">Kadali</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.div variants={itemVariants} className="mb-6">
          <p className="text-lg sm:text-xl text-purple-300 font-grotesk font-medium tracking-wide">
            MCA Student · AI & Full Stack Developer
          </p>
        </motion.div>

        {/* Summary */}
        <motion.p
          variants={itemVariants}
          className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-10"
        >
          Passionate MCA student with a <span className="text-violet-300 font-medium">9.0 CGPA</span>,
          specializing in Artificial Intelligence and Full Stack development.
        </motion.p>

        {/* Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
        >
          <Link
            href="#projects"
            className="btn-primary text-white flex items-center gap-2 text-base group"
          >
            View Projects
            <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
          </Link>

          <a
            href="/resume.pdf"
            download
            className="btn-outline flex items-center gap-2 text-base"
          >
            <FiDownload size={16} />
            Download Resume
          </a>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          variants={itemVariants}
          className="flex items-center justify-center gap-4"
        >
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              whileHover={{ scale: 1.15, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Icon />
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-gray-600 uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity
          }}
          className="text-violet-500"
        >
          <FiChevronDown size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
}