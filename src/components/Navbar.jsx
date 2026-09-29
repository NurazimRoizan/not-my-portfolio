import React, { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 200)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      <header className="brutal-hud-nav">
        <div className="hud-brand">
          <span className="hud-blinker">●</span>
          <span className="hud-code">SYS://404</span>
          <span className="hud-title font-marker">UNHANDLED EXCEPTION</span>
        </div>

        <nav className="hud-links" aria-label="Main Navigation">
          <a href="#about" className="hud-link">[01. ABOUT]</a>
          <a href="#arsenal" className="hud-link">[02. ARSENAL]</a>
          <a href="#projects" className="hud-link">[03. CASE FILES]</a>
          <a href="#contact" className="hud-link">[04. TRANSMIT]</a>
        </nav>
      </header>

      {scrolled && (
        <button 
          onClick={scrollToTop} 
          className="back-to-top"
          aria-label="Scroll back to top"
          title="Return to origin"
        >
          [ TOP ↑ ]
        </button>
      )}
    </>
  )
}
