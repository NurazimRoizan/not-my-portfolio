import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Footer from './components/Footer'

gsap.registerPlugin(ScrollTrigger)

function App() {
  const containerRef = useRef(null)

  useEffect(() => {
    // Simple global entrance animation for all sections
    const sections = gsap.utils.toArray('.gsap-section')
    
    sections.forEach((section) => {
      gsap.fromTo(section, 
        { opacity: 0, y: 50 },
        {
          opacity: 1, 
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      )
    })
    
    // Animate chaos paths using pathLength="1" technique
    const paths = document.querySelectorAll('.chaos-path')
    paths.forEach((path) => {
      // Use normalized pathLength=1 with a large gap (2) to completely prevent bleeding
      gsap.set(path, { strokeDasharray: "1 2", strokeDashoffset: 1, opacity: 1 })
      gsap.to(path, {
        strokeDashoffset: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: path,
          start: 'top 80%',
          end: 'bottom 20%',
          scrub: 1,
        }
      })
    })

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill())
    }
  }, [])

  return (
    <div ref={containerRef} className="app-container" style={{ position: 'relative' }}>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Footer />
    </div>
  )
}

export default App
