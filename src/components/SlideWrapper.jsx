import { motion } from 'framer-motion'

const variants = {
  enter: (dir) => ({ y: dir > 0 ? '100%' : '-100%', opacity: 0 }),
  center: { y: 0, opacity: 1 },
  exit: (dir) => ({ y: dir > 0 ? '-100%' : '100%', opacity: 0 }),
}

export default function SlideWrapper({ children, direction, className = '' }) {
  return (
    <motion.div
      custom={direction}
      variants={variants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{ duration: 0.65, ease: [0.43, 0.13, 0.23, 0.96] }}
      className={`absolute inset-0 flex items-center justify-center overflow-hidden ${className}`}
    >
      {children}
    </motion.div>
  )
}
