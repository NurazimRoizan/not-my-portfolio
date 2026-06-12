import React from 'react'

export default function Hero() {
  return (
    <section className="section-container gsap-section" style={{ justifyContent: 'center', alignItems: 'center', minHeight: '100vh', zIndex: 50 }}>
      <div className="brutal-box" style={{ maxWidth: '800px', textAlign: 'center', position: 'relative' }}>
        <div 
          className="font-marker" 
          style={{ 
            position: 'absolute', 
            top: '-30px', 
            left: '-20px', 
            color: 'var(--yellow-hazard)', 
            fontSize: '1.5rem',
            transform: 'rotate(-10deg)',
            textShadow: '2px 2px 0 #000'
          }}
        >
          WARNING: CHAOS AHEAD
        </div>
        
        <h1 style={{ fontSize: 'clamp(3rem, 10vw, 6rem)', lineHeight: '1', marginBottom: '1rem', color: 'var(--cyan-pierce)' }}>
          NURAZIM ROIZAN
        </h1>
        
        <div 
          className="brutal-box pink" 
          style={{ 
            display: 'inline-block', 
            transform: 'rotate(2deg)', 
            padding: '1rem',
            marginTop: '1rem',
            marginBottom: '2rem'
          }}
        >
          <h2 style={{ fontSize: 'clamp(1.5rem, 5vw, 3rem)' }}>
            I WRITE CODE THAT SURVIVES IN THE DARK.
          </h2>
        </div>

        <p style={{ fontSize: '1.2rem', marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem auto' }}>
          <strong>96% Front-End God. 4% Absolute Chaos.</strong><br/>
          I build unhinged digital experiences. Stop reading and start scrolling.
        </p>

        <a href="#about" className="brutal-button">
          DESCEND INTO MADNESS ↓
        </a>
      </div>

      <svg 
        style={{ position: 'absolute', bottom: '-150px', left: '10%', width: '150px', height: '250px', overflow: 'visible', pointerEvents: 'none', zIndex: 50 }} 
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
    </section>
  )
}
