'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface GlassCardProps {
    children: ReactNode;
    className?: string;
    hover?: boolean;
    glow?: boolean;
    delay?: number;
}

export default function GlassCard({
    children,
    className = '',
    hover = true,
    glow = false,
    delay = 0,
}: GlassCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay }}
            whileHover={hover ? { y: -4, scale: 1.01 } : {}}
            className={`
        glass rounded-2xl p-6
        ${glow ? 'glow-violet' : ''}
        ${hover ? 'glass-hover cursor-pointer' : ''}
        ${className}
      `}
        >
            {children}
        </motion.div>
    );
}
