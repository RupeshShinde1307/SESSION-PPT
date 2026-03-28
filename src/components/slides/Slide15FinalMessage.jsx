import { useMemo } from 'react'
import { motion } from 'framer-motion'
import SlideWrapper from '../SlideWrapper'

export default function Slide15FinalMessage({ direction }) {
  const particles = useMemo(() =>
    Array.from({ length: 55 }, (_, i) => ({
      id: i,
      x: ((i * 43 + 7) % 100),
      y: ((i * 67 + 11) % 100),
      size: (((i * 23) % 20) / 10) + 0.5,
      dur: (((i * 17) % 30) / 10) + 2.5,
      delay: ((i * 11) % 30) / 10,
      hue: i % 3,
    }))
  , [])

  return (
    <SlideWrapper direction={direction}>
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map(p => (
          <motion.div
            key={p.id}
            className="absolute rounded-full"
            style={{
              width: p.size,
              height: p.size,
              left: `${p.x}%`,
              top: `${p.y}%`,
              background: p.hue === 0 ? '#60a5fa' : p.hue === 1 ? '#a78bfa' : '#34d399',
            }}
            animate={{ opacity: [0.1, 0.65, 0.1], y: [0, -18, 0] }}
            transition={{ duration: p.dur, repeat: Infinity, delay: p.delay, ease: 'easeInOut' }}
          />
        ))}
      </div>

      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <motion.div
          className="w-[800px] h-[800px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(96,165,250,0.07) 0%, rgba(167,139,250,0.05) 40%, transparent 70%)',
          }}
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="relative z-10 flex flex-col items-center gap-8 px-8 max-w-4xl text-center">
        {/* Main message */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.43, 0.13, 0.23, 0.96] }}
          className="flex flex-col gap-3"
        >
          <p className="font-space text-6xl font-bold leading-tight" style={{ color: 'rgba(255,255,255,0.9)' }}>
            You don't need to be{' '}
            <span style={{
              background: 'linear-gradient(135deg, #f59e0b, #f472b6)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>perfect.</span>
          </p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.7 }}
            className="font-space text-6xl font-bold leading-tight"
            style={{ color: 'rgba(255,255,255,0.9)' }}
          >
            You just need to{' '}
            <span style={{
              background: 'linear-gradient(135deg, #34d399, #22d3ee)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>start.</span>
          </motion.p>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ delay: 0.85, duration: 0.6 }}
          className="flex items-center gap-4 w-full max-w-sm"
        >
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-blue-500/40" />
          <div className="w-2 h-2 rounded-full bg-purple-400" />
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-purple-500/40" />
        </motion.div>

        {/* Idea → Impact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.05, duration: 0.7 }}
          className="flex items-center gap-5"
        >
          <span
            className="font-space text-4xl font-extrabold"
            style={{
              background: 'linear-gradient(135deg, #60a5fa, #a78bfa)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Idea
          </span>
          <motion.span
            animate={{ x: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="text-3xl text-white/25"
          >
            →
          </motion.span>
          <span
            className="font-space text-4xl font-extrabold"
            style={{
              background: 'linear-gradient(135deg, #34d399, #22d3ee)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Impact
          </span>
        </motion.div>

        {/* Speaker card */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.35 }}
          className="glass-md rounded-2xl px-10 py-5 text-center"
          style={{ boxShadow: '0 8px 32px rgba(96,165,250,0.08)' }}
        >
          <p className="text-white/25 text-xs uppercase tracking-[0.3em] mb-1.5">Thank you</p>
          <p className="font-space font-bold text-2xl text-white">Rupesh Shinde</p>
          <p
            className="text-sm mt-1 font-medium tracking-wide"
            style={{
              background: 'linear-gradient(90deg, #60a5fa, #a78bfa)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            AI Engineer
          </p>
        </motion.div>
      </div>
    </SlideWrapper>
  )
}
