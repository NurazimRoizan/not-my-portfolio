import React from 'react'

const projects = [
  {
    id: 1,
    title: "Graph Theory Vis Tool",
    description: "Built an interactive Java desktop app to demystify complex graph isomorphism and the k-Pebble game. Took abstract math and made it a tangible weapon for learning.",
    tags: ["Java", "Graphstream", "Graph Theory"],
    theme: "pink"
  },
  {
    id: 2,
    title: "IoT UnPhone Game Controller",
    description: "Hacked an Unphone (ESP32) into a dual-input game controller. Flick the device to jump via IMU sensors or smash the physical button. Sent HTTP commands to a local server. Absolute physical chaos.",
    tags: ["C++", "ESP32", "IoT"],
    theme: "cyan"
  },
  {
    id: 3,
    title: "GeeyBoard",
    description: "Built a custom single-handed BLE keyboard and IR remote. Designed purely for maximum laziness on the sofa. Connects to anything, controls everything.",
    tags: ["Embedded C++", "BLE", "IR"],
    theme: "yellow"
  },
  {
    id: 4,
    title: "PiYak PWA",
    description: "A tracker for your period and your poop. Built a secure, ad-free Progressive Web App because $2 subscriptions are a scam. Uses Google Forms API as a serverless backend.",
    tags: ["Vanilla JS", "PWA", "Serverless"],
    theme: "pink"
  },
  {
    id: 5,
    title: "Makam Designer",
    description: "A 3D configurator to design custom gravestones (batu nisan). Built with Three.js. Because even the afterlife needs good UI.",
    tags: ["Three.js", "React", "3D"],
    theme: "cyan"
  }
]

export default function Projects() {
  return (
    <section className="section-container gsap-section" style={{ padding: '4rem 2rem' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        
        <h2 style={{ fontSize: 'clamp(2.5rem, 10vw, 4rem)', color: 'var(--cyan-pierce)', marginBottom: '3rem', textAlign: 'center' }}>
          CASE FILES
        </h2>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', 
          gap: '3rem' 
        }}>
          {projects.map((p, index) => {
            const rotation = (index % 2 === 0 ? 2 : -2) * (Math.random() + 0.5)
            return (
              <div 
                key={p.id}
                className={`brutal-box ${p.theme}`}
                style={{ 
                  transform: `rotate(${rotation}deg)`,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem'
                }}
              >
                <h3 style={{ fontSize: '1.8rem', textTransform: 'uppercase', lineHeight: '1.1' }}>
                  {p.title}
                </h3>
                <p style={{ flex: 1, fontSize: '1.1rem' }}>{p.description}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '1rem' }}>
                  {p.tags.map(tag => (
                    <span 
                      key={tag} 
                      className="font-marker" 
                      style={{ 
                        background: 'black', 
                        color: 'white', 
                        padding: '0.2rem 0.5rem',
                        border: '2px solid white'
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
