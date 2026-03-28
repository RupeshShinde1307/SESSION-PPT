import { motion } from 'framer-motion'
import SlideWrapper from '../SlideWrapper'

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
}
const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.43, 0.13, 0.23, 0.96] } },
}

const steps = [
  { icon: '🔍', label: 'Identify Problems' },
  { icon: '💡', label: 'Think of Solutions' },
  { icon: '🏗️', label: 'Build Systems' },
  { icon: '🚀', label: 'Create Impact' },
]

export default function Slide03WhySession({ direction }) {
  return (
    <SlideWrapper direction={direction}>
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 w-full max-w-5xl px-8 flex flex-col items-center gap-8"
      >
        {/* Heading */}
        <motion.div variants={fadeUp} className="text-center">
          <span className="text-sm uppercase tracking-[0.3em] text-purple-400/80 font-medium">The Purpose</span>
          <h2 className="font-space text-6xl font-bold text-white mt-2">
            Why This{' '}
            <span style={{
              background: 'linear-gradient(135deg, #a78bfa, #f472b6)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              Session?
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 w-full">
          {/* Card 1 */}
          <motion.div variants={fadeUp} className="glass-md p-7 rounded-2xl flex flex-col gap-3">
            <div className="text-3xl">📚</div>
            <h3 className="text-lg font-bold text-white font-space">Engineering ≠ Just Studying</h3>
            <p className="text-white/55 text-sm leading-relaxed">
              Real engineering is about building solutions, not just passing exams. The classroom is the start, not the destination.
            </p>
          </motion.div>

          {/* Card 2 - Steps */}
          <motion.div variants={fadeUp} className="glass-md p-7 rounded-2xl flex flex-col gap-4">
            <div className="text-3xl">⚙️</div>
            <h3 className="text-lg font-bold text-white font-space">Real Engineers:</h3>
            <div className="flex flex-col gap-2.5">
              {steps.map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + i * 0.12, duration: 0.5 }}
                  className="flex items-center gap-2.5"
                >
                  <span className="text-base">{s.icon}</span>
                  <span className="text-white/75 text-sm font-medium">{s.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            variants={fadeUp}
            className="rounded-2xl p-7 flex flex-col gap-3 relative overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, rgba(96,165,250,0.12), rgba(167,139,250,0.12))',
              border: '1px solid rgba(167,139,250,0.2)',
            }}
          >
            <div
              className="absolute inset-0 opacity-5"
              style={{
                background: 'radial-gradient(circle at 70% 30%, #a78bfa, transparent 70%)',
              }}
            />
            <div className="text-3xl relative z-10">🎯</div>
            <h3 className="text-lg font-bold text-white font-space relative z-10">Today's Goal</h3>
            <p className="text-white/60 text-sm leading-relaxed relative z-10">
              Explore how ideas become real solutions — from a problem in your mind to something that creates genuine impact.
            </p>
            <div
              className="mt-auto text-sm font-semibold relative z-10"
              style={{
                background: 'linear-gradient(135deg, #60a5fa, #a78bfa)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Ideas → Real Solutions →
            </div>
          </motion.div>
        </div>

        {/* Bottom message */}
        <motion.p
          variants={fadeUp}
          className="text-white/40 text-sm text-center tracking-wide"
        >
          Today we will explore how ideas become real solutions.
        </motion.p>
      </motion.div>
    </SlideWrapper>
  )
}
