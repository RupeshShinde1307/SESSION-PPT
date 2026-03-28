import { motion } from 'framer-motion'

export default function ProgressBar({ current, total }) {
  const pct = ((current + 1) / total) * 100

  return (
    <div className="absolute top-0 left-0 right-0 h-[3px] bg-white/[0.07] z-50">
      <motion.div
        className="h-full origin-left"
        style={{
          background: 'linear-gradient(90deg, #3b82f6, #8b5cf6, #a78bfa)',
        }}
        animate={{ width: `${pct}%` }}
        transition={{ duration: 0.55, ease: [0.43, 0.13, 0.23, 0.96] }}
      />
      {/* Glow trail */}
      <motion.div
        className="absolute top-0 h-full w-8 blur-sm"
        style={{
          background: 'linear-gradient(90deg, transparent, #a78bfa)',
        }}
        animate={{ left: `calc(${pct}% - 2rem)` }}
        transition={{ duration: 0.55, ease: [0.43, 0.13, 0.23, 0.96] }}
      />
    </div>
  )
}
