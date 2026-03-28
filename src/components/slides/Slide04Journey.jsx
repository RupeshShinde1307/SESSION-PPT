import { motion } from 'framer-motion'
import SlideWrapper from '../SlideWrapper'

const timelineItems = [
  {
    icon: '🎓',
    title: 'Mechanical Engineering Graduate',
    sub: null,
    type: 'normal',
  },
  {
    icon: '💼',
    title: '3-Month Internship',
    sub: 'Prodfit Sols Infotech · Brainmine Web Solutions',
    type: 'normal',
  },
  {
    icon: '🤖',
    title: 'AI Software Developer',
    sub: 'Brainmine Web Solutions',
    type: 'highlight',
  },
  {
    icon: '🏥',
    title: 'Career Break for Surgery',
    sub: null,
    type: 'pause',
  },
  {
    icon: '⚡',
    title: 'Startup Attempt — Trikon AI',
    sub: 'Full stack website generator using AI',
    type: 'highlight',
  },
  {
    icon: '💸',
    title: 'Lack of Resources & Funding',
    sub: null,
    type: 'pause',
  },
  {
    icon: '🔄',
    title: 'Restarted Corporate Journey',
    sub: 'Back as intern',
    type: 'normal',
  },
  {
    icon: '🚀',
    title: 'AI Engineer',
    sub: 'Zuneko Labs · Emdee Digitronics',
    type: 'current',
  },
]

const typeStyles = {
  normal:    { dot: '#60a5fa', glow: 'rgba(96,165,250,0.3)',   text: 'text-white/80' },
  highlight: { dot: '#a78bfa', glow: 'rgba(167,139,250,0.4)',  text: 'text-white' },
  pause:     { dot: '#f87171', glow: 'rgba(248,113,113,0.3)',  text: 'text-white/50' },
  current:   { dot: '#34d399', glow: 'rgba(52,211,153,0.45)',  text: 'text-white' },
}

export default function Slide04Journey({ direction }) {
  return (
    <SlideWrapper direction={direction}>
      <div className="relative z-10 w-full max-w-3xl px-8 flex flex-col gap-5">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-blue-400/70">Personal</span>
          <h2 className="font-space text-5xl font-bold mt-1">
            My{' '}
            <span style={{
              background: 'linear-gradient(135deg, #60a5fa, #a78bfa)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>Journey</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative flex flex-col">
          {/* Vertical line */}
          <motion.div
            className="absolute left-[18px] top-3 w-[2px] rounded-full"
            style={{ background: 'linear-gradient(180deg, #60a5fa, #a78bfa, #34d399)' }}
            initial={{ height: 0 }}
            animate={{ height: 'calc(100% - 24px)' }}
            transition={{ duration: 1.5, delay: 0.3, ease: 'easeOut' }}
          />

          {timelineItems.map((item, i) => {
            const style = typeStyles[item.type]
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -25 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + i * 0.1, duration: 0.55, ease: [0.43, 0.13, 0.23, 0.96] }}
                className="relative flex items-start gap-5 pb-4 last:pb-0"
              >
                {/* Dot */}
                <div
                  className="relative flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center text-sm z-10"
                  style={{
                    background: `${style.dot}22`,
                    border: `2px solid ${style.dot}`,
                    boxShadow: `0 0 12px ${style.glow}`,
                  }}
                >
                  {item.icon}
                </div>

                {/* Content */}
                <div className={`pt-1.5 ${item.type === 'pause' ? 'opacity-60' : ''}`}>
                  <p className={`font-semibold text-sm leading-tight ${style.text} font-space`}>
                    {item.title}
                  </p>
                  {item.sub && (
                    <p className="text-xs text-white/40 mt-0.5">{item.sub}</p>
                  )}
                  {item.type === 'current' && (
                    <span
                      className="inline-block text-[10px] uppercase tracking-widest px-2 py-0.5 rounded-full mt-1.5"
                      style={{ background: 'rgba(52,211,153,0.15)', color: '#34d399', border: '1px solid rgba(52,211,153,0.3)' }}
                    >
                      Current
                    </span>
                  )}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </SlideWrapper>
  )
}
