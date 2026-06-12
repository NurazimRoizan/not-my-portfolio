import React from 'react'

const projects = [
  {
    id: 1,
    title: "Graph Theory Vis Tool",
    description: "Built an interactive Java desktop app to demystify complex graph isomorphism and the k-Pebble game. Took abstract math and made it a tangible weapon for learning.",
    tags: ["Java", "Graphstream", "Graph Theory"],
    theme: "pink",
    repo: "https://github.com/NurazimRoizan/dissertation-com3610",
    live: null
  },
  {
    id: 2,
    title: "IoT UnPhone Game",
    description: "Hacked an Unphone (ESP32) into a dual-input game controller. Flick the device to jump via IMU sensors or smash the physical button. Sent HTTP commands to a local server. Absolute physical chaos.",
    tags: ["C++", "ESP32", "IoT"],
    theme: "cyan",
    repo: null,
    live: null
  },
  {
    id: 3,
    title: "GeeyBoard",
    description: "Built a custom single-handed BLE keyboard and IR remote. Designed purely for maximum laziness on the sofa. Connects to anything, controls everything.",
    tags: ["Embedded C++", "BLE", "IR"],
    theme: "yellow",
    repo: "https://github.com/NurazimRoizan/GeeyBoard",
    live: null
  },
  {
    id: 4,
    title: "PiYak Full-Stack",
    description: "A PWA built to track periods and daily poop counts. Because bloated ad-filled mobile trackers are a scam. Evolved into a Next.js beast with real-time partner syncing, native push notifications, and secure Clerk auth.",
    tags: ["Next.js", "PWA", "Clerk"],
    theme: "pink",
    repo: "https://github.com/NurazimRoizan/PiYak",
    live: "https://piyak.jimiroi.com/"
  },
  {
    id: 5,
    title: "MATA",
    description: "Why buy a security camera when you have an old phone and a browser? A serverless, peer-to-peer PWA that keeps an eye on your stuff with chaotic sticker aesthetics and raw real-time motion detection.",
    tags: ["Serverless", "P2P", "PWA"],
    theme: "cyan",
    repo: "https://github.com/NurazimRoizan/Mata",
    live: "https://portfolio.jimiroi.com/Mata/"
  },
  {
    id: 6,
    title: "THE BENCH",
    description: "A Progressive Web App for tracking app ideas. Built as a technical proving ground to brutally experiment with modern backend architectures, Clerk authentication, and Prisma/PostgreSQL models.",
    tags: ["PostgreSQL", "Prisma", "Clerk"],
    theme: "yellow",
    repo: "https://github.com/NurazimRoizan/The-Bench",
    live: "https://thebench.vercel.app/"
  }
]

export default function Projects() {
  return (
    <section className="section-container gsap-section" style={{ padding: '4rem 2rem', zIndex: 20 }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        
        <h2 className="glitch" style={{ fontSize: 'clamp(2.5rem, 10vw, 4rem)', color: 'var(--cyan-pierce)', marginBottom: '3rem', textAlign: 'center' }}>
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
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '1rem', flex: 1 }}>
                  {p.tags.map(tag => (
                    <span 
                      key={tag} 
                      className="font-marker" 
                      style={{ 
                        background: 'black', 
                        color: 'white', 
                        padding: '0.2rem 0.5rem',
                        border: '2px solid white',
                        alignSelf: 'flex-start'
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div style={{ display: 'flex', gap: '1rem', marginTop: 'auto', paddingTop: '1rem', borderTop: '2px solid currentColor' }}>
                  {p.repo && (
                    <a href={p.repo} target="_blank" rel="noreferrer" style={{ color: 'currentColor', fontWeight: 'bold', textDecoration: 'none', textTransform: 'uppercase' }}>
                      [ SOURCE CODE ]
                    </a>
                  )}
                  {p.live && (
                    <a href={p.live} target="_blank" rel="noreferrer" style={{ color: 'currentColor', fontWeight: 'bold', textDecoration: 'none', textTransform: 'uppercase' }}>
                      [ LIVE DEPLOYMENT ]
                    </a>
                  )}
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
