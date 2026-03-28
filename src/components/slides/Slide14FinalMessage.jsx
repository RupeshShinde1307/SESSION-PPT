import { useMemo } from 'react'
import { motion } from 'framer-motion'
import SlideWrapper from '../SlideWrapper'

export default function Slide14FinalMessage({ direction }) {
  const particles = useMemo(() =>
    Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: ((i * 43 + 7) % 100),
      y: ((i * 67 + 11) % 100),
      size: (((i * 23) % 20) / 10) + 0.5,
      dur: (((i * 17) % 30) / 10) + 2.5,
      delay: ((i * 11) % 30) / 10,
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
              background: p.id % 3 === 0 ? '#60a5fa' : p.id % 3 === 1 ? '#a78bfa' : '#34d399',
            }}
            animate={{ opacity: [0.1, 0.7, 0.1], y: [0, -15, 0] }}
            transition={{ duration: p.dur, repeat: Infinity, delay: p.delay, ease: 'easeInOut' }}
          />
        ))}
      </div>

      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <motion.div
          className="w-[800px] h-[800px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(96,165,250,0.08) 0%, rgba(167,139,250,0.06) 40%, transparent 70%)',
          }}
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="relative z-10 flex flex-col items-center gap-10 px-8 max-w-4xl text-center">
        {/* Main message */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.43, 0.13, 0.23, 0.96] }}
          className="flex flex-col gap-4"
        >
          <p
            className="font-space text-6xl font-bold leading-tight"
            style={{ color: 'rgba(255,255,255,0.9)' }}
          >
            You don't need to be{' '}
            <span style={{
              background: 'linear-gradient(135deg, #f59e0b, #f472b6)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              perfect.
            </span>
          </p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="font-space text-6xl font-bold leading-tight"
            style={{ color: 'rgba(255,255,255,0.9)' }}
          >
            You just need to{' '}
            <span style={{
              background: 'linear-gradient(135deg, #34d399, #22d3ee)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              start.
            </span>
          </motion.p>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
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
          transition={{ delay: 1.0, duration: 0.7 }}
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
            className="text-3xl text-white/30"
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

        {/* Speaker credit */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="glass rounded-2xl px-8 py-4 text-center"
        >
          <p className="text-white/30 text-xs uppercase tracking-widest mb-1">Thank you</p>
          <p className="font-space font-bold text-xl text-white">Rupesh Shinde</p>
          <p
            className="text-sm mt-0.5"
            style={{
              background: 'linear-gradient(90deg, #60a5fa, #a78bfa)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            AI Builder · Startup Engineer
          </p>
        </motion.div>
      </div>
    </SlideWrapper>
  )
}
