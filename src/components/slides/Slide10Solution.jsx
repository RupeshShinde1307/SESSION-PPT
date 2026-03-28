import { motion } from 'framer-motion'
import SlideWrapper from '../SlideWrapper'

export default function Slide10Solution({ direction }) {
  return (
    <SlideWrapper direction={direction}>
      <div className="relative z-10 w-full max-w-4xl px-8 flex flex-col gap-8">
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
              style={{ background: 'rgba(96,165,250,0.15)', color: '#60a5fa', border: '1px solid rgba(96,165,250,0.3)' }}
            >
              Step 2
            </span>
          </div>
          <h2 className="font-space text-6xl font-bold">
            Think of a{' '}
            <span style={{
              background: 'linear-gradient(135deg, #60a5fa, #a78bfa)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>Solution</span>
          </h2>
          <p className="text-white/40 text-base mt-2">Every problem has a solution. You just need to find it.</p>
        </motion.div>

        {/* Problem → Solution flow */}
        <div className="flex items-stretch gap-5">
          {/* Problem */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="flex-1 rounded-2xl p-7 flex flex-col gap-4"
            style={{
              background: 'rgba(248,113,113,0.07)',
              border: '1px solid rgba(248,113,113,0.25)',
            }}
          >
            <div className="flex items-center gap-3">
              <span className="text-2xl">❓</span>
              <span
                className="text-xs font-bold uppercase tracking-widest px-2 py-0.5 rounded"
                style={{ background: 'rgba(248,113,113,0.2)', color: '#f87171' }}
              >
                Problem
              </span>
            </div>
            <p className="text-white font-bold text-xl font-space leading-snug">
              Students struggle to find and share quality notes.
            </p>
            <ul className="space-y-2 mt-1">
              {[
                'Notes scattered across WhatsApp groups',
                'Hard to find notes for specific topics',
                'No organized, searchable repository',
              ].map((point, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="text-white/50 text-sm flex items-start gap-2"
                >
                  <span className="text-red-400 mt-0.5">•</span>
                  {point}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Arrow */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="flex items-center justify-center flex-shrink-0"
            style={{ transformOrigin: 'left' }}
          >
            <div className="flex flex-col items-center gap-1">
              <div className="w-12 h-[2px] bg-gradient-to-r from-red-400/50 to-blue-400/50" />
              <span
                className="text-3xl"
                style={{
                  background: 'linear-gradient(135deg, #f87171, #60a5fa)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                →
              </span>
            </div>
          </motion.div>

          {/* Solution */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="flex-1 rounded-2xl p-7 flex flex-col gap-4"
            style={{
              background: 'rgba(96,165,250,0.07)',
              border: '1px solid rgba(96,165,250,0.25)',
            }}
          >
            <div className="flex items-center gap-3">
              <span className="text-2xl">✅</span>
              <span
                className="text-xs font-bold uppercase tracking-widest px-2 py-0.5 rounded"
                style={{ background: 'rgba(96,165,250,0.2)', color: '#60a5fa' }}
              >
                Solution
              </span>
            </div>
            <p className="text-white font-bold text-xl font-space leading-snug">
              A platform to upload, organize, and access notes.
            </p>
            <ul className="space-y-2 mt-1">
              {[
                'Central repository for all study materials',
                'Searchable by subject, topic, or semester',
                'Upload once, accessible forever by all',
              ].map((point, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="text-white/55 text-sm flex items-start gap-2"
                >
                  <span className="text-blue-400 mt-0.5">✓</span>
                  {point}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Key insight */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="glass rounded-2xl px-6 py-4 text-center"
        >
          <p className="text-white/55 text-sm">The solution doesn't need to be complex.</p>
          <p
            className="font-bold font-space text-lg mt-1"
            style={{
              background: 'linear-gradient(135deg, #60a5fa, #a78bfa)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            It just needs to solve the problem.
          </p>
        </motion.div>
      </div>
    </SlideWrapper>
  )
}
