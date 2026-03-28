import { motion } from 'framer-motion'
import SlideWrapper from '../SlideWrapper'

const points = [
  { icon: '🔬', text: 'Analyze problems instantly' },
  { icon: '⚡', text: 'Process massive data' },
  { icon: '🏗️', text: 'Build faster than ever' },
  { icon: '💡', text: 'Generate creative solutions' },
]

export default function Slide06IronMan({ direction }) {
  return (
    <SlideWrapper direction={direction}>
      <div className="relative z-10 w-full max-w-6xl px-8 flex flex-col gap-5">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-blue-400/70">AI + Engineer</span>
          <h2 className="font-space text-5xl font-bold mt-1">
            Iron Man &{' '}
            <span style={{
              background: 'linear-gradient(135deg, #60a5fa, #22d3ee)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>JARVIS</span>
          </h2>
        </motion.div>

        <div className="flex items-stretch gap-7">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: -30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.85, delay: 0.2, ease: [0.43, 0.13, 0.23, 0.96] }}
            className="flex-shrink-0 relative"
            style={{ width: 380 }}
          >
            {/* Outer glow frame */}
            <div
              className="absolute inset-0 rounded-2xl"
              style={{
                boxShadow: '0 0 40px rgba(96,165,250,0.25), 0 0 80px rgba(96,165,250,0.1)',
                borderRadius: 20,
              }}
            />

            {/* Image */}
            <img
              src="/ironman.jpg"
              alt="Tony Stark in his lab"
              className="w-full h-full object-cover rounded-2xl"
              style={{
                border: '1px solid rgba(96,165,250,0.3)',
                filter: 'brightness(0.9) saturate(1.1)',
                height: 300,
              }}
            />

            {/* Overlay gradient at bottom */}
            <div
              className="absolute bottom-0 left-0 right-0 h-20 rounded-b-2xl"
              style={{
                background: 'linear-gradient(to top, rgba(6,6,15,0.85), transparent)',
              }}
            />

            {/* Caption badge */}
            <div
              className="absolute bottom-3 left-0 right-0 flex justify-center"
            >
              <span
                className="text-xs font-semibold px-3 py-1 rounded-full"
                style={{
                  background: 'rgba(96,165,250,0.15)',
                  border: '1px solid rgba(96,165,250,0.3)',
                  color: '#93c5fd',
                  backdropFilter: 'blur(8px)',
                }}
              >
                Tony Stark · Arc Reactor · JARVIS
              </span>
            </div>

            {/* Animated scan line */}
            <motion.div
              className="absolute left-0 right-0 h-[2px] rounded-full pointer-events-none"
              style={{
                background: 'linear-gradient(90deg, transparent, rgba(96,165,250,0.6), transparent)',
                top: 0,
              }}
              animate={{ top: ['0%', '100%', '0%'] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
            />
          </motion.div>

          {/* Content */}
          <div className="flex-1 flex flex-col gap-4">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.35, duration: 0.65 }}
              className="glass-md p-5 rounded-2xl"
            >
              <p className="text-xl text-white/85 leading-relaxed font-light">
                Imagine Iron Man{' '}
                <span className="text-white font-semibold">without JARVIS.</span>
              </p>
              <p className="text-white/55 mt-2 text-sm leading-relaxed">
                He is powerful. But JARVIS helps him analyze problems, process data, and build faster solutions.
              </p>
            </motion.div>

            {/* JARVIS capabilities */}
            <div className="grid grid-cols-2 gap-3">
              {points.map((p, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}
                  className="glass rounded-xl px-4 py-3 flex items-center gap-3"
                >
                  <span className="text-xl">{p.icon}</span>
                  <span className="text-sm text-white/70">{p.text}</span>
                </motion.div>
              ))}
            </div>

            {/* Key message */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.95 }}
              className="rounded-2xl p-4 text-center mt-auto"
              style={{
                background: 'linear-gradient(135deg, rgba(96,165,250,0.12), rgba(167,139,250,0.12))',
                border: '1px solid rgba(167,139,250,0.2)',
              }}
            >
              <p className="text-white/50 text-sm">AI today works like JARVIS for engineers.</p>
              <p className="text-white font-bold text-lg font-space mt-1">
                It amplifies engineers —{' '}
                <span style={{
                  background: 'linear-gradient(135deg, #60a5fa, #a78bfa)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}>
                  it does not replace them.
                </span>
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </SlideWrapper>
  )
}
