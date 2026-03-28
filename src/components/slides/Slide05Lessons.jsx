import { motion } from 'framer-motion'
import SlideWrapper from '../SlideWrapper'

const lessons = [
  {
    icon: '📈',
    title: 'Life Has Ups and Downs',
    body: 'The journey is never linear. Embrace the volatility and trust the overall trajectory.',
    color: 'from-blue-500/20 to-blue-600/10',
    border: 'rgba(96,165,250,0.2)',
    glow: '#60a5fa',
  },
  {
    icon: '🔥',
    title: 'Failures Teach the Biggest Lessons',
    body: 'Every failure carries a lesson you cannot learn from a textbook. Value them.',
    color: 'from-orange-500/20 to-red-600/10',
    border: 'rgba(251,146,60,0.2)',
    glow: '#fb923c',
  },
  {
    icon: '🛠️',
    title: 'Small Projects > Theory',
    body: 'Building something small teaches more than months of studying. Ship early, ship often.',
    color: 'from-purple-500/20 to-purple-700/10',
    border: 'rgba(167,139,250,0.2)',
    glow: '#a78bfa',
  },
  {
    icon: '🧭',
    title: 'Consistency Beats Talent',
    body: 'Talent without consistency fades. Showing up every day compounds into greatness.',
    color: 'from-cyan-500/20 to-blue-600/10',
    border: 'rgba(34,211,238,0.2)',
    glow: '#22d3ee',
  },
  {
    icon: '➡️',
    title: 'Keep Moving Forward',
    body: 'Even slow progress is still progress. The only real failure is to stop entirely.',
    color: 'from-green-500/20 to-emerald-600/10',
    border: 'rgba(52,211,153,0.2)',
    glow: '#34d399',
  },
]

export default function Slide05Lessons({ direction }) {
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
          <span className="text-xs uppercase tracking-[0.3em] text-purple-400/70">Takeaways</span>
          <h2 className="font-space text-5xl font-bold mt-1">
            Lessons From My{' '}
            <span style={{
              background: 'linear-gradient(135deg, #a78bfa, #f472b6)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>Journey</span>
          </h2>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-5 gap-4">
          {lessons.map((lesson, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.15 + i * 0.1, duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }}
              whileHover={{ y: -4, scale: 1.02, transition: { duration: 0.2 } }}
              className="rounded-2xl p-5 flex flex-col gap-3 cursor-default"
              style={{
                background: `linear-gradient(135deg, ${lesson.color.replace('from-', '').replace(' to-', ', ')})`,
                backgroundImage: `linear-gradient(135deg, var(--tw-gradient-stops))`,
                border: `1px solid ${lesson.border}`,
                boxShadow: `0 4px 24px ${lesson.glow}18`,
              }}
            >
              <div className="text-3xl">{lesson.icon}</div>
              <h3 className="text-sm font-bold text-white font-space leading-tight">{lesson.title}</h3>
              <p className="text-xs text-white/50 leading-relaxed">{lesson.body}</p>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="text-center text-white/30 text-sm"
        >
          Every lesson came from lived experience — not a classroom.
        </motion.p>
      </div>
    </SlideWrapper>
  )
}
