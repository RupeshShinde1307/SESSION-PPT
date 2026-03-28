import { motion } from 'framer-motion'
import SlideWrapper from '../SlideWrapper'

const coreFeatures = [
  { icon: '⬆️', label: 'Upload notes',   desc: 'Any student can upload PDF or docs' },
  { icon: '⬇️', label: 'Download notes', desc: 'One-click download for all users'   },
  { icon: '🔍', label: 'Search notes',   desc: 'Search by subject, year, or topic'  },
]

const futureFeatures = [
  { icon: '⭐', label: 'Ratings & reviews' },
  { icon: '🔔', label: 'Notifications'     },
  { icon: '👥', label: 'User profiles'     },
  { icon: '📊', label: 'Analytics'         },
]

export default function Slide12Plan({ direction }) {
  return (
    <SlideWrapper direction={direction}>
      <div className="relative z-10 w-full max-w-5xl px-8 flex flex-col gap-7">
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
              style={{ background: 'rgba(167,139,250,0.15)', color: '#a78bfa', border: '1px solid rgba(167,139,250,0.3)' }}
            >
              Step 3
            </span>
          </div>
          <h2 className="font-space text-6xl font-bold">
            Plan the{' '}
            <span style={{
              background: 'linear-gradient(135deg, #a78bfa, #f472b6)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>Idea</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 gap-6">
          {/* MVP concept */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="flex flex-col gap-4"
          >
            <div
              className="rounded-2xl p-5 flex flex-col gap-3"
              style={{ background: 'rgba(167,139,250,0.08)', border: '1px solid rgba(167,139,250,0.2)' }}
            >
              <h3 className="font-space font-bold text-lg text-white">What is an MVP?</h3>
              <p className="text-white/55 text-sm leading-relaxed">
                <strong className="text-purple-400">Minimum Viable Product</strong> — the smallest possible version that solves the core problem and delivers real value.
              </p>
              <p className="text-white/35 text-xs mt-1">Don't build everything. Build the one thing that matters most.</p>
            </div>

            <div className="glass rounded-xl p-4 flex flex-col gap-2">
              <p className="text-xs uppercase tracking-widest text-white/30 font-medium">Famous MVPs</p>
              {[
                { name: 'Airbnb',   mvp: 'A simple page to rent air mattresses' },
                { name: 'Dropbox',  mvp: 'A 3-minute demo video — no product built yet' },
                { name: 'Twitter',  mvp: 'Internal SMS tool for a small team' },
              ].map((ex, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 + i * 0.1 }}
                  className="text-xs text-white/45"
                >
                  <span className="text-purple-400 font-semibold">{ex.name}:</span> {ex.mvp}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Notes platform MVP */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="flex flex-col gap-3"
          >
            <p className="text-white/40 text-sm uppercase tracking-widest">Notes Platform — MVP</p>

            {/* Core features */}
            <div className="flex flex-col gap-2">
              {coreFeatures.map((f, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + i * 0.12 }}
                  className="flex items-center gap-3 rounded-xl p-3"
                  style={{ background: 'rgba(52,211,153,0.08)', border: '1px solid rgba(52,211,153,0.2)' }}
                >
                  <span className="text-xl">{f.icon}</span>
                  <div>
                    <p className="text-white font-semibold text-sm">{f.label}</p>
                    <p className="text-white/40 text-xs">{f.desc}</p>
                  </div>
                  <span
                    className="ml-auto text-[10px] uppercase tracking-widest px-2 py-0.5 rounded-full"
                    style={{ background: 'rgba(52,211,153,0.15)', color: '#34d399' }}
                  >
                    Core
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Future features */}
            <p className="text-white/25 text-xs uppercase tracking-widest mt-1">Added later (v2)</p>
            <div className="flex flex-wrap gap-2">
              {futureFeatures.map((f, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + i * 0.08 }}
                  className="flex items-center gap-1.5 text-xs text-white/30 px-3 py-1.5 rounded-full"
                  style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
                >
                  <span>{f.icon}</span>
                  <span>{f.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0 }}
          className="text-center text-white/30 text-sm"
        >
          Plan what you need.{' '}
          <span className="text-purple-400">Cut everything else.</span>{' '}
          Ship the MVP.
        </motion.p>
      </div>
    </SlideWrapper>
  )
}
