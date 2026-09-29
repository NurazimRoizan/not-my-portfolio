import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Navbar from './components/Navbar'
import ChaosMarquee from './components/ChaosMarquee'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Footer from './components/Footer'

gsap.registerPlugin(ScrollTrigger)

function App() {
  const containerRef = useRef(null)

  useEffect(() => {
    // Respect user reduced-motion preferences
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (prefersReducedMotion) {
      gsap.set('.gsap-section', { opacity: 1, y: 0 })
      return
    }

    // Section entrance animation with once: true
    // Crucial UX fix: sections stay visible once revealed, eliminating scroll jumping and vanishing content
    const sections = gsap.utils.toArray('.gsap-section')
    
    sections.forEach((section) => {
      gsap.fromTo(section, 
        { opacity: 0, y: 30 },
        {
          opacity: 1, 
          y: 0,
          duration: 0.7,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 85%',
            once: true
          }
        }
      )
    })
    
    // Animate chaos paths smoothly
    const paths = document.querySelectorAll('.chaos-path')
    paths.forEach((path) => {
      try {
        const length = path.getTotalLength() + 500
        gsap.set(path, { strokeDasharray: length, strokeDashoffset: length, opacity: 1 })
        gsap.to(path, {
          strokeDashoffset: 0,
          ease: 'none',
          scrollTrigger: {
            trigger: path,
            start: 'top 85%',
            end: 'bottom 80%',
            scrub: 0.5,
          }
        })
      } catch (e) {
        gsap.set(path, { opacity: 1 })
      }
    })

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill())
    }
  }, [])

  return (
    <div ref={containerRef} className="app-container">
      <Navbar />
      
      <Hero />

      <ChaosMarquee 
        text="* ERROR 404 * UNHANDLED EXCEPTION * KERNEL PANIC * FATAL ERROR * SYSTEM FAILURE *"
        variant="yellow"
        rotate={-1.5}
      />

      <About />
      
      <Skills />

      <ChaosMarquee 
        text="* DO NOT LOOK AWAY * SYNTAX ERROR * MEMORY LEAK * PROTOCOL OVERRIDE * EXTREME DANGER *"
        variant="pink"
        reverse={true}
        rotate={1.5}
      />

      <Projects />
      
      <Footer />
    </div>
  )
}

export default App
