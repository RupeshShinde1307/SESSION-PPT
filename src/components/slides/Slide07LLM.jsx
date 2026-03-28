import { motion } from 'framer-motion'
import SlideWrapper from '../SlideWrapper'

// Brand-accurate color identities for each LLM
const llms = [
  {
    name: 'Claude',
    maker: 'by Anthropic',
    desc: 'AI assistant known for deep reasoning, safety, and nuanced understanding.',
    color: '#d97706',
    glow: 'rgba(217,119,6,0.35)',
    border: 'rgba(217,119,6,0.3)',
    bg: 'rgba(217,119,6,0.08)',
    delay: 0.3,
    // Stylized "C" logo
    Logo: () => (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <circle cx="24" cy="24" r="22" stroke="#d97706" strokeWidth="2" fill="rgba(217,119,6,0.12)" />
        <path
          d="M32 16.5C29.8 14.3 27 13 24 13C17.9 13 13 17.9 13 24C13 30.1 17.9 35 24 35C27 35 29.8 33.7 32 31.5"
          stroke="#d97706" strokeWidth="2.5" strokeLinecap="round" fill="none"
        />
      </svg>
    ),
  },
  {
    name: 'ChatGPT',
    maker: 'by OpenAI',
    desc: 'Conversational AI for coding, writing, brainstorming, and problem solving.',
    color: '#10b981',
    glow: 'rgba(16,185,129,0.35)',
    border: 'rgba(16,185,129,0.3)',
    bg: 'rgba(16,185,129,0.08)',
    delay: 0.42,
    Logo: () => (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <circle cx="24" cy="24" r="22" stroke="#10b981" strokeWidth="2" fill="rgba(16,185,129,0.12)" />
        {/* OpenAI-style swirl simplified */}
        <path
          d="M24 13C18 13 13 18 13 24C13 27.5 14.8 30.6 17.5 32.5L17.5 26C17.5 22.4 20.4 19.5 24 19.5C27.6 19.5 30.5 22.4 30.5 26V32.5C33.2 30.6 35 27.5 35 24C35 18 30 13 24 13Z"
          stroke="#10b981" strokeWidth="2" strokeLinejoin="round" fill="none"
        />
        <circle cx="24" cy="26" r="3" fill="#10b981" fillOpacity="0.7" />
      </svg>
    ),
  },
  {
    name: 'Gemini',
    maker: 'by Google',
    desc: 'Google\'s multimodal AI that understands text, images, code, and audio.',
    color: '#6366f1',
    glow: 'rgba(99,102,241,0.35)',
    border: 'rgba(99,102,241,0.3)',
    bg: 'rgba(99,102,241,0.08)',
    delay: 0.54,
    Logo: () => (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <circle cx="24" cy="24" r="22" stroke="#6366f1" strokeWidth="2" fill="rgba(99,102,241,0.12)" />
        {/* Gemini star shape */}
        <path
          d="M24 10 C24 10 26 20 34 24 C26 28 24 38 24 38 C24 38 22 28 14 24 C22 20 24 10 24 10Z"
          fill="url(#gemGrad)" opacity="0.9"
        />
        <defs>
          <linearGradient id="gemGrad" x1="14" y1="10" x2="34" y2="38" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#818cf8" />
            <stop offset="50%" stopColor="#6366f1" />
            <stop offset="100%" stopColor="#4f46e5" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    name: 'Grok',
    maker: 'by xAI',
    desc: 'xAI\'s AI assistant integrated with X (Twitter), known for wit and real-time data.',
    color: '#e2e8f0',
    glow: 'rgba(226,232,240,0.2)',
    border: 'rgba(226,232,240,0.2)',
    bg: 'rgba(226,232,240,0.05)',
    delay: 0.66,
    Logo: () => (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <circle cx="24" cy="24" r="22" stroke="#e2e8f0" strokeWidth="2" strokeOpacity="0.5" fill="rgba(226,232,240,0.06)" />
        {/* X mark */}
        <line x1="16" y1="16" x2="32" y2="32" stroke="#e2e8f0" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="32" y1="16" x2="16" y2="32" stroke="#e2e8f0" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    ),
  },
]

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
}
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.43, 0.13, 0.23, 0.96] } },
}

export default function Slide07LLM({ direction }) {
  return (
    <SlideWrapper direction={direction}>
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 w-full max-w-6xl px-8 flex flex-col gap-6"
      >
        {/* ── Heading ── */}
        <motion.div variants={fadeUp} className="text-center">
          <span className="text-xs uppercase tracking-[0.3em] text-violet-400/70 font-medium">
            Understanding AI
          </span>
          <h2 className="font-space text-6xl font-bold mt-1">
            What is an{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #818cf8, #a78bfa, #c084fc)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              LLM?
            </span>
          </h2>
        </motion.div>

        {/* ── Explanation ── */}
        <motion.div
          variants={fadeUp}
          className="glass-md rounded-2xl px-8 py-5 flex flex-col gap-2 max-w-3xl mx-auto w-full text-center"
        >
          <p className="text-white/80 text-base leading-relaxed">
            <span className="text-violet-300 font-semibold">LLM</span> stands for{' '}
            <span className="text-white font-semibold">Large Language Model</span> — advanced AI systems
            trained on massive amounts of text data.
          </p>
          <p className="text-white/50 text-sm leading-relaxed">
            They understand language, generate responses, write code, answer questions, and help
            build solutions faster. They act like{' '}
            <span className="text-violet-300">intelligent assistants</span> for developers and engineers.
          </p>
        </motion.div>

        {/* ── Flow: LLM → models ── */}
        <motion.div variants={fadeUp} className="flex flex-col items-center gap-2">
          {/* Root node */}
          <div
            className="px-7 py-2.5 rounded-full font-space font-bold text-sm tracking-widest"
            style={{
              background: 'linear-gradient(135deg, rgba(129,140,248,0.2), rgba(167,139,250,0.2))',
              border: '1px solid rgba(167,139,250,0.4)',
              color: '#c4b5fd',
              boxShadow: '0 0 20px rgba(167,139,250,0.2)',
            }}
          >
            LLM
          </div>

          {/* Connector lines */}
          <div className="relative flex items-start justify-center w-full" style={{ height: 28 }}>
            {/* Vertical stem */}
            <div
              className="absolute top-0 w-px bg-gradient-to-b from-violet-500/60 to-transparent"
              style={{ height: 14, left: '50%' }}
            />
            {/* Horizontal bar */}
            <motion.div
              className="absolute w-[68%] h-px"
              style={{
                top: 13,
                left: '16%',
                background: 'linear-gradient(90deg, transparent, rgba(167,139,250,0.5) 20%, rgba(167,139,250,0.5) 80%, transparent)',
              }}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            />
            {/* Four drops */}
            {[16, 38.5, 61, 83.5].map((pct, i) => (
              <motion.div
                key={i}
                className="absolute w-px bg-gradient-to-b from-violet-400/50 to-transparent"
                style={{ top: 13, left: `${pct}%`, height: 15 }}
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ delay: 0.85 + i * 0.07, duration: 0.3 }}
              />
            ))}
          </div>
        </motion.div>

        {/* ── LLM Cards ── */}
        <div className="grid grid-cols-4 gap-4">
          {llms.map((llm) => (
            <motion.div
              key={llm.name}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                delay: llm.delay,
                duration: 0.65,
                ease: [0.43, 0.13, 0.23, 0.96],
              }}
              whileHover={{
                y: -6,
                scale: 1.03,
                transition: { duration: 0.22 },
              }}
              className="relative rounded-2xl p-5 flex flex-col gap-3 cursor-default overflow-hidden group"
              style={{
                background: llm.bg,
                border: `1px solid ${llm.border}`,
              }}
            >
              {/* Hover glow overlay */}
              <motion.div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                  boxShadow: `inset 0 0 30px ${llm.glow}`,
                  background: `radial-gradient(circle at 50% 0%, ${llm.glow} 0%, transparent 70%)`,
                }}
              />

              {/* Logo */}
              <div className="relative z-10">
                <llm.Logo />
              </div>

              {/* Name + maker */}
              <div className="relative z-10">
                <h3
                  className="font-space font-bold text-xl leading-none"
                  style={{ color: llm.color }}
                >
                  {llm.name}
                </h3>
                <p className="text-white/30 text-xs mt-0.5 tracking-wide">{llm.maker}</p>
              </div>

              {/* Description */}
              <p className="text-white/55 text-xs leading-relaxed relative z-10 flex-1">
                {llm.desc}
              </p>

              {/* Bottom accent bar */}
              <motion.div
                className="h-[2px] rounded-full w-0 group-hover:w-full transition-all duration-500"
                style={{ background: `linear-gradient(90deg, ${llm.color}, transparent)` }}
              />
            </motion.div>
          ))}
        </div>

        {/* ── Bottom note ── */}
        <motion.p
          variants={fadeUp}
          className="text-center text-white/30 text-xs tracking-wide"
        >
          All these models share the same foundation — trained on human language to assist human thinking.
        </motion.p>
      </motion.div>
    </SlideWrapper>
  )
}
