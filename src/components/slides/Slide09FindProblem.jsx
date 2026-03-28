import { motion } from 'framer-motion'
import SlideWrapper from '../SlideWrapper'

const problems = [
  {
    icon: '📝',
    title: 'Notes Sharing',
    desc: 'Students struggle to access and share quality study notes across batches.',
    color: '#60a5fa',
  },
  {
    icon: '✅',
    title: 'Attendance Tracking',
    desc: 'Manual attendance is tedious, error-prone, and wastes lecture time.',
    color: '#a78bfa',
  },
  {
    icon: '🎓',
    title: 'Placement Preparation',
    desc: 'No structured platform to practice DSA, mock interviews, and aptitude tests.',
    color: '#34d399',
  },
  {
    icon: '🎪',
    title: 'Workshop Management',
    desc: 'Registrations, payments, and scheduling for events done manually via forms.',
    color: '#fbbf24',
  },
]

export default function Slide09FindProblem({ direction }) {
  return (
    <SlideWrapper direction={direction}>
      <div className="relative z-10 w-full max-w-5xl px-8 flex flex-col gap-8">
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
              style={{ background: 'rgba(248,113,113,0.15)', color: '#f87171', border: '1px solid rgba(248,113,113,0.3)' }}
            >
              Step 1
            </span>
          </div>
          <h2 className="font-space text-6xl font-bold">
            Find a{' '}
            <span style={{
              background: 'linear-gradient(135deg, #f87171, #fbbf24)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>Problem</span>
          </h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-white/45 text-base mt-2"
          >
            Startups begin with a problem. Look around — they're everywhere.
          </motion.p>
        </motion.div>

        {/* Problem cards */}
        <div className="grid grid-cols-4 gap-4">
          {problems.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 + i * 0.12, duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="rounded-2xl p-5 flex flex-col gap-3 cursor-default"
              style={{
                background: `${p.color}0d`,
                border: `1px solid ${p.color}30`,
                boxShadow: `0 4px 20px ${p.color}12`,
              }}
            >
              <div className="text-3xl">{p.icon}</div>
              <h3 className="font-space font-bold text-white text-sm">{p.title}</h3>
              <p className="text-white/50 text-xs leading-relaxed">{p.desc}</p>
              <div
                className="text-xs font-semibold mt-auto"
                style={{ color: p.color }}
              >
                Real problem ↗
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex items-center justify-center gap-4"
        >
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-white/10" />
          <p
            className="text-lg font-bold font-space px-4"
            style={{
              background: 'linear-gradient(135deg, #f87171, #fbbf24)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Your campus is full of unsolved problems.
          </p>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-white/10" />
        </motion.div>
      </div>
    </SlideWrapper>
  )
}
