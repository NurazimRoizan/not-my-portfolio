import React from 'react'

const skills = [
  "JavaScript/TypeScript", "Angular", "C#", "React", "Next.js", 
  "Node.js", "Java", "Ruby on Rails", "Tailwind CSS", "Git", 
  "Firebase", "Python", "C++", "Haskell", "ESP32"
]

export default function Skills() {
  return (
    <section className="section-container gsap-section" style={{ padding: '4rem 2rem', backgroundColor: 'var(--bg-void)' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        
        <h2 style={{ fontSize: '4rem', color: 'var(--yellow-hazard)', textAlign: 'right', marginBottom: '2rem' }}>
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
    </section>
  )
}
