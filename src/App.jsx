import { useState, useEffect, useCallback, useRef } from 'react'
import { AnimatePresence } from 'framer-motion'
import ProgressBar from './components/ProgressBar'
import NavDots from './components/NavDots'

import Slide01Title          from './components/slides/Slide01Title'
import Slide02StockMarket    from './components/slides/Slide02StockMarket'
import Slide03WhySession     from './components/slides/Slide03WhySession'
import Slide04Journey        from './components/slides/Slide04Journey'
import Slide05Lessons        from './components/slides/Slide05Lessons'
import Slide06IronMan        from './components/slides/Slide06IronMan'
import Slide07LLM            from './components/slides/Slide07LLM'
import Slide08AIWorld        from './components/slides/Slide08AIWorld'
import Slide09IdeaToImpact   from './components/slides/Slide09IdeaToImpact'
import Slide10FindProblem    from './components/slides/Slide10FindProblem'
import Slide11Solution       from './components/slides/Slide11Solution'
import Slide12Plan           from './components/slides/Slide12Plan'
import Slide13Build          from './components/slides/Slide13Build'
import Slide14StartupMindset from './components/slides/Slide14StartupMindset'
import Slide15FinalMessage   from './components/slides/Slide15FinalMessage'

const SLIDES = [
  { component: Slide01Title,          label: 'Title'               },
  { component: Slide02StockMarket,    label: 'Stock Market'        },
  { component: Slide03WhySession,     label: 'Why This Session'    },
  { component: Slide04Journey,        label: 'My Journey'          },
  { component: Slide05Lessons,        label: 'Lessons'             },
  { component: Slide06IronMan,        label: 'Iron Man & JARVIS'   },
  { component: Slide07LLM,            label: 'What is an LLM?'     },
  { component: Slide08AIWorld,        label: 'AI in Today\'s World'},
  { component: Slide09IdeaToImpact,   label: 'Idea → Impact'       },
  { component: Slide10FindProblem,    label: 'Find a Problem'      },
  { component: Slide11Solution,       label: 'Think of a Solution' },
  { component: Slide12Plan,           label: 'Plan the Idea'       },
  { component: Slide13Build,          label: 'Build'               },
  { component: Slide14StartupMindset, label: 'Startup Mindset'     },
  { component: Slide15FinalMessage,   label: 'Final Message'       },
]

export default function App() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(1)
  const transitioning = useRef(false)

  const goTo = useCallback((index, dir) => {
    if (transitioning.current) return
    if (index < 0 || index >= SLIDES.length) return
    transitioning.current = true
    setDirection(dir)
    setCurrent(index)
    setTimeout(() => { transitioning.current = false }, 750)
  }, [])

  const goNext = useCallback(() => goTo(current + 1,  1), [current, goTo])
  const goPrev = useCallback(() => goTo(current - 1, -1), [current, goTo])

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e) => {
      if (['ArrowRight', 'ArrowDown', ' '].includes(e.key)) { e.preventDefault(); goNext() }
      if (['ArrowLeft',  'ArrowUp'       ].includes(e.key)) { e.preventDefault(); goPrev() }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [goNext, goPrev])

  // Mouse wheel (debounced)
  useEffect(() => {
    let timer = null
    let locked = false
    const onWheel = (e) => {
      if (locked) return
      locked = true
      clearTimeout(timer)
      if      (e.deltaY >  10) goNext()
      else if (e.deltaY < -10) goPrev()
      timer = setTimeout(() => { locked = false }, 800)
    }
    window.addEventListener('wheel', onWheel, { passive: true })
    return () => window.removeEventListener('wheel', onWheel)
  }, [goNext, goPrev])

  // Touch swipe
  useEffect(() => {
    let startY = 0
    const onStart = (e) => { startY = e.touches[0].clientY }
    const onEnd   = (e) => {
      const diff = startY - e.changedTouches[0].clientY
      if (Math.abs(diff) > 60) diff > 0 ? goNext() : goPrev()
    }
    window.addEventListener('touchstart', onStart, { passive: true })
    window.addEventListener('touchend',   onEnd,   { passive: true })
    return () => {
      window.removeEventListener('touchstart', onStart)
      window.removeEventListener('touchend',   onEnd)
    }
  }, [goNext, goPrev])

  const CurrentSlide = SLIDES[current].component

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-scene dot-grid">
      {/* Ambient glow orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-15%] left-[-5%]  w-[700px] h-[700px] rounded-full bg-purple-700/10 blur-[140px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-blue-700/10 blur-[140px]" />
        <div className="absolute top-[45%] left-[40%]  w-[400px] h-[400px] rounded-full bg-indigo-700/5 blur-[100px]" />
      </div>

      {/* Progress bar */}
      <ProgressBar current={current} total={SLIDES.length} />

      {/* Slides */}
      <AnimatePresence mode="wait" custom={direction}>
        <CurrentSlide key={current} direction={direction} />
      </AnimatePresence>

      {/* Side nav dots */}
      <NavDots
        slides={SLIDES}
        current={current}
        onDotClick={(i) => goTo(i, i > current ? 1 : -1)}
      />

      {/* Slide counter */}
      <div className="absolute bottom-5 left-6 text-white/25 text-xs font-mono tracking-widest select-none">
        {String(current + 1).padStart(2, '0')} / {String(SLIDES.length).padStart(2, '0')}
      </div>

      {/* Next hint */}
      {current < SLIDES.length - 1 && (
        <button
          onClick={goNext}
          className="absolute bottom-5 right-[3.5rem] text-white/25 hover:text-white/50 transition-colors text-xs tracking-widest uppercase select-none flex items-center gap-1.5"
        >
          <span>next</span>
          <span className="text-base">↓</span>
        </button>
      )}
    </div>
  )
}
