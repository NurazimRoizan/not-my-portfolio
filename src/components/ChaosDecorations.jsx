import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function ChaosDecorations() {
  const containerRef = useRef(null)

  useEffect(() => {
    // Animate all chaos paths to "draw" themselves
    const paths = document.querySelectorAll('.chaos-path')
    
    paths.forEach((path) => {
      const length = path.getTotalLength()
      
      // Set initial state
      gsap.set(path, {
        strokeDasharray: length,
        strokeDashoffset: length,
        opacity: 1
      })

      // Animate on scroll
      gsap.to(path, {
        strokeDashoffset: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: path,
          start: 'top 70%',
          end: 'bottom 40%',
          scrub: 1, // Smooth scrubbing
        }
      })
    })

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill())
    }
  }, [])

  return (
    <div ref={containerRef} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 50 }}>
      
      {/* Arrow pointing from Hero to About */}
      <svg 
        style={{ position: 'absolute', top: '80vh', left: '20%', width: '200px', height: '300px', overflow: 'visible' }} 
        viewBox="0 0 200 300"
      >
        <path 
          className="chaos-path"
          d="M 10 10 Q 150 50 180 280 L 160 250 M 180 280 L 210 260" 
          fill="none" 
          stroke="var(--pink-scream)" 
          strokeWidth="6" 
          strokeLinecap="round"
        />
      </svg>

      {/* Wild scribble near Skills */}
      <svg 
        style={{ position: 'absolute', top: '160vh', right: '10%', width: '300px', height: '400px', overflow: 'visible' }} 
        viewBox="0 0 300 400"
      >
        <path 
          className="chaos-path"
          d="M 280 10 C 100 50 10 150 50 200 S 200 250 150 350 S 10 380 50 450" 
          fill="none" 
          stroke="var(--cyan-pierce)" 
          strokeWidth="8" 
          strokeLinecap="round"
          strokeDasharray="20 10"
        />
        <path 
          className="chaos-path"
          d="M 50 450 L 80 410 M 50 450 L 20 420"
          fill="none" 
          stroke="var(--cyan-pierce)" 
          strokeWidth="8" 
          strokeLinecap="round"
        />
      </svg>

      {/* Arrow pointing to Projects */}
      <svg 
        style={{ position: 'absolute', top: '230vh', left: '10%', width: '250px', height: '300px', overflow: 'visible' }} 
        viewBox="0 0 250 300"
      >
        <path 
          className="chaos-path"
          d="M 10 10 C 50 100 200 150 220 280 L 190 260 M 220 280 L 250 260" 
          fill="none" 
          stroke="var(--yellow-hazard)" 
          strokeWidth="6" 
          strokeLinecap="round"
        />
        <text x="20" y="150" fill="var(--yellow-hazard)" fontSize="1.5rem" className="font-marker" transform="rotate(-15 20 150)">
          LOOK AT THIS
        </text>
      </svg>

      {/* Massive X near the footer */}
      <svg 
        style={{ position: 'absolute', bottom: '15vh', right: '20%', width: '150px', height: '150px', overflow: 'visible' }} 
        viewBox="0 0 150 150"
      >
        <path 
          className="chaos-path"
          d="M 10 10 L 140 140 M 140 10 L 10 140" 
          fill="none" 
          stroke="var(--white-pure)" 
          strokeWidth="10" 
          strokeLinecap="round"
        />
      </svg>
    </div>
  )
}
