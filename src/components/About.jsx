import React from 'react'

export default function About() {
  return (
    <section id="about" className="section-container gsap-section" style={{ padding: '4rem 2rem', zIndex: 40 }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem', maxWidth: '1000px', margin: '0 auto' }}>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 10vw, 4rem)', color: 'var(--pink-scream)' }}>EVIDENCE #01:</h2>
          <span className="font-marker" style={{ fontSize: '2rem', color: 'var(--yellow-hazard)', transform: 'rotate(-5deg)' }}>
            Who is this guy?
          </span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '2rem' }}>
          
          <div className="brutal-box cyan" style={{ transform: 'rotate(-2deg)' }}>
            <h3 style={{ marginBottom: '1rem', color: 'var(--cyan-pierce)' }}>CURRENT TARGET</h3>
            <h4 style={{ fontSize: '1.5rem' }}>Softinn Solutions</h4>
            <p className="font-marker" style={{ color: 'var(--pink-scream)', marginBottom: '1rem' }}>Feb 2026 - Present</p>
            <p>
              Developing a massive suite of hospitality SaaS apps. I tear down complex operational bottlenecks and rebuild them as highly responsive, user-centric weapons using Angular, C#, and raw spite for bad UI.
            </p>
          </div>

          <div className="brutal-box pink" style={{ transform: 'rotate(1deg)' }}>
            <h3 style={{ marginBottom: '1rem', color: 'var(--pink-scream)' }}>ORIGIN STORY</h3>
            <h4 style={{ fontSize: '1.5rem' }}>University of Sheffield</h4>
            <p className="font-marker" style={{ color: 'var(--cyan-pierce)', marginBottom: '1rem' }}>BSc Computer Science (2025)</p>
            <p>
              Survived Advanced Algorithms, 3D Graphics, and Cybersecurity. Built a Ruby on Rails platform for train parts during "Software Hut" just to prove I could engineer a system from nothing to deployed.
            </p>
          </div>

        </div>
      </div>

      <svg 
        style={{ position: 'absolute', bottom: '-50px', right: '5%', width: '150px', height: '200px', overflow: 'visible', pointerEvents: 'none', zIndex: 50 }} 
        viewBox="0 0 300 400"
      >
        <path 
          className="chaos-path"
          pathLength="1"
          d="M 280 10 C 100 50 10 150 50 200 S 200 250 150 350 S 10 380 50 450 M 50 450 L 80 410 M 50 450 L 20 420" 
          fill="none" 
          stroke="var(--cyan-pierce)" 
          strokeWidth="8" 
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </section>
  )
}
