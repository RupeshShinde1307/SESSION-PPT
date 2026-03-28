import { motion } from 'framer-motion'
import SlideWrapper from '../SlideWrapper'

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
}
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.43, 0.13, 0.23, 0.96] } },
}

// SVG path for volatile but upward-trending stock line (viewBox 0 0 520 200)
const STOCK_PATH = "M 0,170 L 30,185 L 55,165 L 80,178 L 105,148 L 130,162 L 155,132 L 175,145 L 200,110 L 220,125 L 248,95 L 268,108 L 292,82 L 315,95 L 338,68 L 360,80 L 382,55 L 405,68 L 428,42 L 450,55 L 475,32 L 500,45 L 520,25"
const FILL_PATH = STOCK_PATH + " L 520,200 L 0,200 Z"

export default function Slide02StockMarket({ direction }) {
  return (
    <SlideWrapper direction={direction}>
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 w-full max-w-6xl px-8 flex flex-col items-center gap-8"
      >
        {/* Heading */}
        <motion.h2 variants={fadeUp} className="font-space text-5xl font-bold text-center">
          Life is Like a{' '}
          <span
            style={{
              background: 'linear-gradient(135deg, #34d399, #22d3ee)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Stock Market
          </span>
        </motion.h2>

        <div className="w-full flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Chart */}
          <motion.div variants={fadeUp} className="glass-md p-6 w-full lg:w-[55%] flex-shrink-0">
            <svg viewBox="0 0 520 210" className="w-full" style={{ height: 220 }}>
              <defs>
                <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#34d399" />
                  <stop offset="50%" stopColor="#22d3ee" />
                  <stop offset="100%" stopColor="#60a5fa" />
                </linearGradient>
                <linearGradient id="fillGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.25" />
                  <stop offset="100%" stopColor="#22d3ee" stopOpacity="0" />
                </linearGradient>
              </defs>

              {/* Grid lines */}
              {[50, 100, 150].map(y => (
                <line key={y} x1="0" y1={y} x2="520" y2={y} stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
              ))}
              {[100, 200, 300, 400].map(x => (
                <line key={x} x1={x} y1="0" x2={x} y2="200" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
              ))}

              {/* Fill area */}
              <motion.path
                d={FILL_PATH}
                fill="url(#fillGrad)"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5, delay: 0.5 }}
              />

              {/* Line */}
              <motion.path
                d={STOCK_PATH}
                fill="none"
                stroke="url(#lineGrad)"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 2, delay: 0.3, ease: 'easeOut' }}
              />

              {/* End dot */}
              <motion.circle
                cx="520" cy="25" r="5"
                fill="#60a5fa"
                style={{ filter: 'drop-shadow(0 0 6px #60a5fa)' }}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 2.2, duration: 0.4, type: 'spring' }}
              />

              {/* Labels */}
              <text x="10" y="195" fill="rgba(255,255,255,0.3)" fontSize="10">Low</text>
              <text x="10" y="40" fill="rgba(255,255,255,0.3)" fontSize="10">High</text>
              <text x="460" y="195" fill="rgba(255,255,255,0.3)" fontSize="10">Now</text>
            </svg>

            <div className="flex justify-between text-xs text-white/30 mt-1 px-1">
              <span>Start</span>
              <span className="text-green-400/70">↗ Long-term growth</span>
              <span>Future</span>
            </div>
          </motion.div>

          {/* Text content */}
          <motion.div variants={fadeUp} className="flex-1 space-y-4">
            {[
              { text: 'Sometimes it goes up.', color: 'text-green-400' },
              { text: 'Sometimes it goes down.', color: 'text-red-400' },
              { text: 'But what matters is long-term growth.', color: 'text-white' },
            ].map((line, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 + i * 0.2, duration: 0.6 }}
                className={`text-xl font-medium ${line.color}`}
              >
                {line.text}
              </motion.p>
            ))}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="glass rounded-xl p-4 mt-4"
            >
              <p className="text-white/70 text-base leading-relaxed">
                Careers, startups, and journeys all have ups and downs.
              </p>
              <p
                className="text-lg font-bold mt-3 font-space"
                style={{
                  background: 'linear-gradient(135deg, #60a5fa, #a78bfa)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Long-term growth is what matters.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </SlideWrapper>
  )
}
