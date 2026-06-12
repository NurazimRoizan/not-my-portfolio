import React from 'react'

const skills = [
  "JavaScript/TypeScript", "Angular", "C#", "React", "Next.js", 
  "Node.js", "Java", "Ruby on Rails", "Tailwind CSS", "Git", 
  "Firebase", "Python", "C++", "Haskell", "ESP32"
]

export default function Skills() {
  return (
    <section className="section-container gsap-section" style={{ padding: '4rem 2rem', backgroundColor: 'var(--bg-void)', zIndex: 30 }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        
        <h2 style={{ fontSize: 'clamp(2.5rem, 10vw, 4rem)', color: 'var(--yellow-hazard)', textAlign: 'right', marginBottom: '2rem' }}>
          ARSENAL
        </h2>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
          {skills.map((skill, index) => {
            // Randomize rotation and colors for chaos
            const colors = ['var(--cyan-pierce)', 'var(--pink-scream)', 'var(--yellow-hazard)', 'var(--white-pure)']
            const randomColor = colors[index % colors.length]
            const isYellow = randomColor === 'var(--yellow-hazard)'
            const rotation = (Math.random() * 10 - 5).toFixed(2)

            return (
              <div 
                key={skill}
                className={`brutal-box ${isYellow ? 'yellow' : ''}`}
                style={{ 
                  transform: `rotate(${rotation}deg)`,
                  padding: '1rem 1.5rem',
                  borderColor: isYellow ? 'black' : randomColor,
                  boxShadow: `4px 4px 0px ${isYellow ? 'black' : randomColor}`,
                  color: isYellow ? 'black' : 'white',
                  fontWeight: 'bold',
                  fontSize: '1.2rem'
                }}
              >
                {skill}
              </div>
            )
          })}
        </div>

      </div>

      <svg 
        style={{ position: 'absolute', bottom: '-150px', left: '5%', width: '150px', height: '200px', overflow: 'visible', pointerEvents: 'none', zIndex: 50 }} 
        viewBox="0 0 250 300"
      >
        <path 
          className="chaos-path"
          d="M 100 20 C 250 20 250 80 100 80 C -20 80 -20 140 100 140 C 200 140 200 200 100 200 C 30 200 100 230 100 280 M 100 280 L 70 240 M 100 280 L 130 240" 
          fill="none" 
          stroke="var(--yellow-hazard)" 
          strokeWidth="6" 
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <text x="20" y="150" fill="var(--yellow-hazard)" fontSize="1.5rem" className="font-marker" transform="rotate(-15 20 150)">
          LOOK AT THIS
        </text>
      </svg>
    </section>
  )
}
