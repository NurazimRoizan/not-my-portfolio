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
    
    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill())
    }
  }, [])

  return (
    <div ref={containerRef} className="app-container">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Footer />
    </div>
  )
}

export default App
