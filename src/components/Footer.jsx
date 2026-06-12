import React from 'react'

export default function Footer() {
  return (
    <section className="section-container gsap-section" style={{ 
      justifyContent: 'center', 
      alignItems: 'center',
      borderTop: '10px dashed var(--yellow-hazard)',
      marginTop: '5rem',
      backgroundColor: 'var(--bg-void)',
      zIndex: 10
    }}>
      <div style={{ textAlign: 'center', maxWidth: '800px' }}>
        
        <h2 style={{ 
          fontSize: 'clamp(4rem, 15vw, 8rem)', 
          color: 'var(--pink-scream)',
          lineHeight: '0.9',
          marginBottom: '2rem'
        }}>
          DEAD END
        </h2>

        <p className="font-marker" style={{ fontSize: '2rem', color: 'var(--cyan-pierce)', marginBottom: '3rem' }}>
          You've reached the bottom. There is nothing else to see.
        </p>

        <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="https://github.com/NurazimRoizan" target="_blank" rel="noreferrer" className="brutal-button" style={{ transform: 'rotate(-2deg)' }}>
            GITHUB
          </a>
          <a href="https://www.linkedin.com/in/nurazimroy" target="_blank" rel="noreferrer" className="brutal-button" style={{ backgroundColor: 'var(--pink-scream)', borderColor: 'var(--pink-scream)', color: 'var(--white-pure)', transform: 'rotate(2deg)' }}>
            LINKEDIN
          </a>
          <a href="mailto:rnurazim@gmail.com" className="brutal-button" style={{ backgroundColor: 'var(--yellow-hazard)', borderColor: 'var(--yellow-hazard)', color: 'black', transform: 'rotate(-1deg)' }}>
            SCREAM INTO THE VOID (EMAIL)
          </a>
        </div>

        <p style={{ marginTop: '5rem', opacity: 0.5 }}>
          © 2026 NURAZIM ROIZAN. BUILT WITH SPITE AND RAW CSS.
        </p>

      </div>

      <svg 
        style={{ position: 'absolute', bottom: '15vh', right: '10%', width: '150px', height: '150px', overflow: 'visible', pointerEvents: 'none', zIndex: 50 }} 
        viewBox="0 0 150 150"
      >
        <path 
          className="chaos-path"
          pathLength="1"
          d="M 10 10 L 140 140 M 140 10 L 10 140" 
          fill="none" 
          stroke="var(--white-pure)" 
          strokeWidth="10" 
          strokeLinecap="round"
        />
      </svg>
    </section>
  )
}
