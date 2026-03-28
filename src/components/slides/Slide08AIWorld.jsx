import { motion } from 'framer-motion'
import SlideWrapper from '../SlideWrapper'

const withoutAI = [
  { icon: '🐌', label: 'Slow development' },
  { icon: '🔧', label: 'Manual tasks' },
  { icon: '😓', label: 'Limited productivity' },
]

const withAI = [
  { icon: '⚡', label: 'Faster development' },
  { icon: '🚀', label: 'Higher productivity' },
  { icon: '💡', label: 'Better problem solving' },
]

export default function Slide08AIWorld({ direction }) {
  return (
    <SlideWrapper direction={direction}>
      <div className="relative z-10 w-full max-w-6xl px-8 flex flex-col gap-7">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-cyan-400/70">The Shift</span>
          <h2 className="font-space text-5xl font-bold mt-1">
            AI in{' '}
            <span style={{
              background: 'linear-gradient(135deg, #22d3ee, #60a5fa)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>Today's World</span>
          </h2>
        </motion.div>

        {/* Split comparison */}
        <div className="grid grid-cols-2 gap-6">
          {/* Without AI */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="rounded-2xl p-7 flex flex-col gap-5"
            style={{ background: 'rgba(239,68,68,0.06)', border: '1px solid rgba(239,68,68,0.2)' }}
          >
            <div className="flex items-center gap-3">
              <span className="text-2xl">😓</span>
              <h3 className="font-space font-bold text-2xl text-red-400">Without AI</h3>
            </div>
            {withoutAI.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + i * 0.12 }}
                className="flex items-center gap-4 rounded-xl p-4"
                style={{ background: 'rgba(239,68,68,0.06)', border: '1px solid rgba(239,68,68,0.1)' }}
              >
                <span className="text-2xl">{item.icon}</span>
                <span className="text-white/65 text-base">{item.label}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* With AI */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="rounded-2xl p-7 flex flex-col gap-5"
            style={{ background: 'rgba(52,211,153,0.06)', border: '1px solid rgba(52,211,153,0.2)' }}
          >
            <div className="flex items-center gap-3">
              <span className="text-2xl">🤖</span>
              <h3 className="font-space font-bold text-2xl text-green-400">With AI</h3>
            </div>
            {withAI.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + i * 0.12 }}
                className="flex items-center gap-4 rounded-xl p-4"
                style={{ background: 'rgba(52,211,153,0.06)', border: '1px solid rgba(52,211,153,0.1)' }}
              >
                <span className="text-2xl">{item.icon}</span>
                <span className="text-white/75 text-base">{item.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Key message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="glass-md rounded-2xl p-6 text-center"
        >
          <p className="text-white font-bold text-2xl font-space">
            AI will not take your job.
          </p>
          <p
            className="text-xl font-bold font-space mt-1"
            style={{
              background: 'linear-gradient(135deg, #f59e0b, #f472b6)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            But someone using AI effectively might.
          </p>
          <p className="text-white/35 text-sm mt-2">Think of AI as your assistant, not your replacement.</p>
        </motion.div>
      </div>
    </SlideWrapper>
  )
}
