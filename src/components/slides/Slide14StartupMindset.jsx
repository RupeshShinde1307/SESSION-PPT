import { motion } from 'framer-motion'
import SlideWrapper from '../SlideWrapper'

const mindsets = [
  {
    icon: '🔍',
    title: 'Solve Problems',
    body: 'Look at the world through the lens of "how can this be better?" Always.',
    color: '#60a5fa',
    delay: 0.1,
  },
  {
    icon: '🧠',
    title: 'Be Curious',
    body: 'Question everything. Explore how things work. Never stop asking "why".',
    color: '#a78bfa',
    delay: 0.2,
  },
  {
    icon: '⚡',
    title: 'Take Initiative',
    body: "Don't wait for permission. Start the project. Write the code. Make the call.",
    color: '#fbbf24',
    delay: 0.3,
  },
  {
    icon: '📚',
    title: 'Keep Learning',
    body: 'The tech world changes fast. Your greatest asset is your ability to learn.',
    color: '#34d399',
    delay: 0.4,
  },
  {
    icon: '🏗️',
    title: 'Start Before You Feel Ready',
    body: "You will never feel 100% ready. Start anyway — readiness comes from doing.",
    color: '#f472b6',
    delay: 0.5,
  },
]

export default function Slide14StartupMindset({ direction }) {
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
          <span className="text-xs uppercase tracking-[0.3em] text-yellow-400/70">The Foundation</span>
          <h2 className="font-space text-5xl font-bold mt-1">
            <span style={{
              background: 'linear-gradient(135deg, #fbbf24, #f472b6)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>Startup</span>
            {' '}Mindset
          </h2>
          <p className="text-white/35 text-base mt-2">
            These are not rules. They are habits that compound over time.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-5 gap-4">
          {mindsets.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: m.delay, duration: 0.65, ease: [0.43, 0.13, 0.23, 0.96] }}
              whileHover={{ y: -6, scale: 1.03, transition: { duration: 0.2 } }}
              className="rounded-2xl p-5 flex flex-col gap-3 cursor-default"
              style={{
                background: `${m.color}0e`,
                border: `1px solid ${m.color}28`,
                boxShadow: `0 4px 24px ${m.color}10`,
              }}
            >
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center text-2xl"
                style={{ background: `${m.color}18`, border: `1px solid ${m.color}35` }}
              >
                {m.icon}
              </div>
              <h3 className="font-space font-bold text-white text-sm leading-tight">{m.title}</h3>
              <p className="text-white/45 text-xs leading-relaxed flex-1">{m.body}</p>
              <div className="h-[2px] w-8 rounded-full mt-auto" style={{ background: m.color }} />
            </motion.div>
          ))}
        </div>

        {/* Bottom quote */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-center"
        >
          <p className="text-white/25 text-sm italic">
            "The best time to start was yesterday. The second best time is right now."
          </p>
        </motion.div>
      </div>
    </SlideWrapper>
  )
}
