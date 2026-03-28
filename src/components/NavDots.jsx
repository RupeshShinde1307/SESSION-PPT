import { motion } from 'framer-motion'

export default function NavDots({ slides, current, onDotClick }) {
  return (
    <div className="absolute right-5 top-1/2 -translate-y-1/2 flex flex-col gap-[10px] z-50">
      {slides.map((slide, i) => (
        <button
          key={i}
          onClick={() => onDotClick(i)}
          title={slide.label}
          className="group relative flex items-center justify-end gap-2 p-1"
        >
          {/* Tooltip label */}
          <span className="absolute right-6 text-[11px] text-white/60 opacity-0 group-hover:opacity-100 transition-all duration-200 whitespace-nowrap glass px-2.5 py-1 rounded-lg pointer-events-none">
            {slide.label}
          </span>

          {/* Dot */}
          <motion.div
            animate={{
              scale: i === current ? 1.5 : 1,
              opacity: i === current ? 1 : i < current ? 0.55 : 0.3,
            }}
            transition={{ duration: 0.25 }}
            className="w-[7px] h-[7px] rounded-full flex-shrink-0"
            style={{
              background: i === current
                ? 'linear-gradient(135deg, #60a5fa, #a78bfa)'
                : i < current
                  ? 'rgba(167,139,250,0.6)'
                  : 'rgba(255,255,255,0.3)',
              boxShadow: i === current ? '0 0 8px rgba(167,139,250,0.6)' : 'none',
            }}
          />
        </button>
      ))}
    </div>
  )
}
