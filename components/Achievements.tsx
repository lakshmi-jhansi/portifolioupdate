'use client';

import { motion } from 'framer-motion';
import { FiAward, FiStar, FiUsers, FiZap } from 'react-icons/fi';

const achievements = [
  {
    id: 'hackathon-qv',
    title: 'Quantum Valley Hackathon',
    organization: 'Quantum Valley Tech Community',
    date: '2024',
    badge: '🏆',
    type: 'Hackathon',
    description:
      'Participated in the prestigious Quantum Valley Hackathon, competing against teams from top engineering colleges across the region. Developed an innovative AI solution within a 24-hour sprint.',
    highlights: [
      'Competed among 100+ teams from top institutions',
      'Built an AI prototype in under 24 hours',
      'Recognized for innovative approach',
      'Collaborated effectively in a high-pressure team environment',
    ],
    color: 'from-yellow-500 to-orange-400',
    glowColor: 'rgba(234, 179, 8, 0.3)',
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="relative py-24 px-6">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-600/40 to-transparent" />

      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="section-tag">
            <FiAward size={12} />
            Recognition
          </span>

          <h2 className="font-grotesk text-4xl md:text-5xl font-bold text-white mt-4 mb-4">
            <span className="gradient-text">Achievements</span>
          </h2>

          <p className="text-gray-400 max-w-xl mx-auto text-base">
            Milestones that reflect dedication and innovation.
          </p>
        </motion.div>

        {achievements.map((item, i) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: i * 0.1 }}
            className="mb-8"
          >
            <div
              className="glass glass-hover rounded-3xl overflow-hidden border border-yellow-500/20 hover:border-yellow-500/40 transition-all duration-500"
              style={{ boxShadow: `0 4px 60px ${item.glowColor}` }}
            >
              <div className={`h-1 bg-gradient-to-r ${item.color}`} />

              <div className="p-8 md:p-10">
                <div className="flex flex-col md:flex-row gap-6 items-start">

                  {/* Badge */}
                  <motion.div
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="flex-shrink-0"
                  >
                    <div
                      className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center text-4xl shadow-lg`}
                      style={{ boxShadow: `0 0 30px ${item.glowColor}` }}
                    >
                      {item.badge}
                    </div>
                  </motion.div>

                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <span className="px-3 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 text-xs font-semibold uppercase tracking-wider">
                        {item.type}
                      </span>
                      <span className="text-gray-500 text-sm">{item.date}</span>
                    </div>

                    <h3 className="font-grotesk text-2xl font-bold text-white mb-1">
                      {item.title}
                    </h3>

                    <p className="text-yellow-400/70 font-medium text-sm mb-4">
                      {item.organization}
                    </p>

                    <p className="text-gray-300 text-sm leading-relaxed mb-6">
                      {item.description}
                    </p>

                    {/* Highlights */}
                    <div className="grid sm:grid-cols-2 gap-3">
                      {item.highlights.map((highlight, j) => (
                        <motion.div
                          key={j}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: j * 0.08 + 0.3 }}
                          className="flex items-start gap-2"
                        >
                          <FiStar
                            className="text-yellow-400 mt-0.5 flex-shrink-0"
                            size={14}
                          />
                          <span className="text-gray-400 text-sm leading-relaxed">
                            {highlight}
                          </span>
                        </motion.div>
                      ))}
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-3 gap-4 mt-6"
        >
          {[
            { icon: FiAward, label: 'Hackathons', value: '1+' },
            { icon: FiUsers, label: 'Teams Competed', value: '100+' },
            { icon: FiZap, label: 'Hours Sprint', value: '24h' },
          ].map((stat) => (
            <div
              key={stat.label}
              className="glass rounded-2xl p-5 text-center border border-violet-600/20"
            >
              <stat.icon
                className="text-violet-400 mx-auto mb-2"
                size={20}
              />
              <p className="text-2xl font-bold gradient-text font-grotesk">
                {stat.value}
              </p>
              <p className="text-xs text-gray-500 mt-1">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}