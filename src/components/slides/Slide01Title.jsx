import { useMemo } from 'react'
import { motion } from 'framer-motion'
import SlideWrapper from '../SlideWrapper'

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.18, delayChildren: 0.2 } },
}
const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.85, ease: [0.43, 0.13, 0.23, 0.96] } },
}

export default function Slide01Title({ direction }) {
  const stars = useMemo(() =>
    Array.from({ length: 90 }, (_, i) => ({
      id: i,
      size: (((i * 17 + 3) % 25) / 10) + 0.5,
      x: ((i * 37 + 11) % 100),
      y: ((i * 53 + 7) % 100),
      dur: (((i * 19) % 30) / 10) + 2,
      delay: ((i * 13) % 30) / 10,
    }))
  , [])

  return (
    <SlideWrapper direction={direction}>
      {/* Animated stars */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {stars.map(s => (
          <motion.div
            key={s.id}
            className="absolute rounded-full bg-white"
            style={{ width: s.size, height: s.size, left: `${s.x}%`, top: `${s.y}%` }}
            animate={{ opacity: [0.15, s.size > 1.5 ? 0.9 : 0.6, 0.15] }}
            transition={{ duration: s.dur, repeat: Infinity, delay: s.delay, ease: 'easeInOut' }}
          />
        ))}
      </div>

      {/* Large background glow */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div className="w-[700px] h-[700px] rounded-full bg-blue-600/8 blur-[120px]" />
        <div className="absolute w-[400px] h-[400px] rounded-full bg-purple-600/10 blur-[80px]" />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 text-center px-8 max-w-5xl w-full"
      >
        {/* Pre-label */}
        <motion.div variants={item} className="mb-8">
          <span
            className="text-xs uppercase tracking-[0.35em] font-medium px-4 py-2 rounded-full"
            style={{
              background: 'rgba(96,165,250,0.1)',
              border: '1px solid rgba(96,165,250,0.25)',
              color: '#93c5fd',
            }}
          >
            A Talk on Engineering &amp; Growth
          </span>
        </motion.div>

        {/* Main title */}
        <motion.h1 variants={item} className="font-space leading-none mb-5">
          <span
            className="block text-[5.5rem] font-extrabold tracking-tight"
            style={{
              background: 'linear-gradient(135deg, #60a5fa 0%, #a78bfa 50%, #f472b6 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Idea to Impact
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p variants={item} className="text-[1.6rem] text-white/50 mb-10 font-light tracking-wide">
          Journey of a Startup Engineer
        </motion.p>

        {/* Divider */}
        <motion.div variants={item} className="flex items-center justify-center gap-4 mb-10">
          <div className="h-px w-24 bg-gradient-to-r from-transparent to-blue-500/60" />
          <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />
          <div className="h-px w-24 bg-gradient-to-l from-transparent to-purple-500/60" />
        </motion.div>

        {/* Speaker card */}
        <motion.div variants={item} className="flex justify-center">
          <div
            className="glass-md px-10 py-5 text-center"
            style={{ boxShadow: '0 8px 32px rgba(96,165,250,0.08)' }}
          >
            <p className="text-2xl font-bold text-white font-space tracking-wide">Rupesh Shinde</p>
            <p
              className="text-sm mt-1.5 uppercase tracking-[0.2em] font-medium"
              style={{
                background: 'linear-gradient(90deg, #60a5fa, #a78bfa)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              AI Engineer
            </p>
          </div>
        </motion.div>
      </motion.div>
    </SlideWrapper>
  )
}
