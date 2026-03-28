import { motion } from 'framer-motion'
import SlideWrapper from '../SlideWrapper'

const steps = [
  { label: 'Problem',  icon: '❓', color: '#f87171', glow: 'rgba(248,113,113,0.35)' },
  { label: 'Idea',     icon: '💡', color: '#fbbf24', glow: 'rgba(251,191,36,0.35)' },
  { label: 'Solution', icon: '🔧', color: '#60a5fa', glow: 'rgba(96,165,250,0.35)' },
  { label: 'Plan',     icon: '📋', color: '#a78bfa', glow: 'rgba(167,139,250,0.35)' },
  { label: 'Build',    icon: '🏗️', color: '#34d399', glow: 'rgba(52,211,153,0.35)' },
  { label: 'Impact',   icon: '🚀', color: '#22d3ee', glow: 'rgba(34,211,238,0.4)' },
]

export default function Slide08IdeaToImpact({ direction }) {
  return (
    <SlideWrapper direction={direction}>
      <div className="relative z-10 w-full max-w-6xl px-8 flex flex-col items-center gap-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-blue-400/70">The Framework</span>
          <h2 className="font-space text-6xl font-bold mt-2">
            <span style={{
              background: 'linear-gradient(135deg, #60a5fa, #a78bfa)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>Idea</span>
            <span className="text-white/30 mx-3">→</span>
            <span style={{
              background: 'linear-gradient(135deg, #34d399, #22d3ee)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>Impact</span>
          </h2>
        </motion.div>

        {/* Flowchart */}
        <div className="flex items-center gap-0 w-full justify-center flex-wrap">
          {steps.map((step, i) => (
            <div key={i} className="flex items-center">
              {/* Step node */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{
                  delay: 0.2 + i * 0.15,
                  duration: 0.6,
                  type: 'spring',
                  stiffness: 180,
                  damping: 14,
                }}
                className="flex flex-col items-center gap-3"
              >
                <div
                  className="w-[88px] h-[88px] rounded-2xl flex items-center justify-center text-3xl relative"
                  style={{
                    background: `${step.color}18`,
                    border: `2px solid ${step.color}40`,
                    boxShadow: `0 0 24px ${step.glow}, 0 4px 16px rgba(0,0,0,0.3)`,
                  }}
                >
                  {step.icon}
                  {/* Step number */}
                  <span
                    className="absolute -top-2 -right-2 w-5 h-5 rounded-full text-[10px] font-bold flex items-center justify-center"
                    style={{ background: step.color, color: '#000' }}
                  >
                    {i + 1}
                  </span>
                </div>
                <span
                  className="text-sm font-bold font-space tracking-wide"
                  style={{ color: step.color }}
                >
                  {step.label}
                </span>
              </motion.div>

              {/* Arrow */}
              {i < steps.length - 1 && (
                <motion.div
                  initial={{ opacity: 0, scaleX: 0 }}
                  animate={{ opacity: 1, scaleX: 1 }}
                  transition={{ delay: 0.35 + i * 0.15, duration: 0.4 }}
                  className="flex items-center px-1 mb-6"
                  style={{ transformOrigin: 'left' }}
                >
                  <div
                    className="w-8 h-[2px]"
                    style={{
                      background: `linear-gradient(90deg, ${steps[i].color}60, ${steps[i + 1].color}60)`,
                    }}
                  />
                  <div
                    style={{
                      width: 0,
                      height: 0,
                      borderTop: '5px solid transparent',
                      borderBottom: '5px solid transparent',
                      borderLeft: `7px solid ${steps[i + 1].color}70`,
                    }}
                  />
                </motion.div>
              )}
            </div>
          ))}
        </div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="glass-md rounded-2xl px-8 py-5 text-center max-w-2xl"
        >
          <p className="text-white/60 text-base leading-relaxed">
            Every innovation — from a small college project to a billion-dollar startup — follows this exact path.
          </p>
          <p
            className="mt-2 font-bold font-space text-lg"
            style={{
              background: 'linear-gradient(135deg, #60a5fa, #34d399)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            The framework is always the same.
          </p>
        </motion.div>
      </div>
    </SlideWrapper>
  )
}
