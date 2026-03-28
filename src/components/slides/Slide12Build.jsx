import { motion } from 'framer-motion'
import SlideWrapper from '../SlideWrapper'

const cycle = [
  { icon: '🧪', label: 'Experiment',  color: '#60a5fa' },
  { icon: '💥', label: 'Fail',        color: '#f87171' },
  { icon: '📈', label: 'Improve',     color: '#34d399' },
  { icon: '🔁', label: 'Repeat',      color: '#a78bfa' },
]

export default function Slide12Build({ direction }) {
  return (
    <SlideWrapper direction={direction}>
      <div className="relative z-10 w-full max-w-4xl px-8 flex flex-col gap-10">
        {/* Step badge + heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 mb-3">
            <span
              className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full"
              style={{ background: 'rgba(52,211,153,0.15)', color: '#34d399', border: '1px solid rgba(52,211,153,0.3)' }}
            >
              Step 4
            </span>
          </div>
          <h2
            className="font-space text-[7rem] font-extrabold leading-none"
            style={{
              background: 'linear-gradient(135deg, #34d399, #22d3ee, #60a5fa)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Build.
          </h2>
          <p className="text-white/40 text-xl mt-3 font-light">Start before you're ready.</p>
        </motion.div>

        {/* Learning cycle */}
        <div className="flex items-center justify-center gap-4">
          {cycle.map((step, i) => (
            <div key={i} className="flex items-center gap-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: 0.2 + i * 0.15,
                  duration: 0.6,
                  type: 'spring',
                  stiffness: 200,
                  damping: 14,
                }}
                className="flex flex-col items-center gap-2"
              >
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center text-3xl"
                  style={{
                    background: `${step.color}15`,
                    border: `2px solid ${step.color}40`,
                    boxShadow: `0 0 20px ${step.color}25`,
                  }}
                >
                  {step.icon}
                </div>
                <span className="text-sm font-bold" style={{ color: step.color }}>{step.label}</span>
              </motion.div>
              {i < cycle.length - 1 && (
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 + i * 0.15 }}
                  className="text-white/20 text-2xl mb-5"
                >
                  →
                </motion.span>
              )}
            </div>
          ))}
        </div>

        {/* Key message */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="rounded-2xl p-6 text-center"
          style={{
            background: 'linear-gradient(135deg, rgba(52,211,153,0.1), rgba(34,211,238,0.1))',
            border: '1px solid rgba(52,211,153,0.2)',
            boxShadow: '0 0 40px rgba(52,211,153,0.06)',
          }}
        >
          <p className="text-white/40 text-sm mb-2 uppercase tracking-wider">The most important principle</p>
          <p
            className="font-space font-bold text-4xl"
            style={{
              background: 'linear-gradient(135deg, #34d399, #22d3ee)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Done is better than perfect.
          </p>
          <p className="text-white/35 text-base mt-3">
            A working product with 10 users beats a perfect product that never ships.
          </p>
        </motion.div>
      </div>
    </SlideWrapper>
  )
}
