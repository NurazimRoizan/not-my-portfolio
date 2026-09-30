import React, { useState, useEffect } from 'react'

const navItems = [
  { id: 'about', num: '01', label: 'ABOUT', sub: 'EVIDENCE', color: 'cyan' },
  { id: 'arsenal', num: '02', label: 'ARSENAL', sub: 'SKILLS', color: 'yellow' },
  { id: 'projects', num: '03', label: 'CASE FILES', sub: 'WORK', color: 'pink' },
  { id: 'contact', num: '04', label: 'TRANSMIT', sub: 'CONTACT', color: 'white' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  // Default to 'about' upon first entering the website
  const [activeSection, setActiveSection] = useState('about')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 200)

      // When near top (hero section), default active section to 'about' as requested
      if (window.scrollY < 200) {
        setActiveSection('about')
        return
      }

      // If user reached bottom of page, activate the last section ('contact')
      const isBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 60
      if (isBottom) {
        setActiveSection('contact')
        return
      }

      // Determine active section using a 35% viewport threshold line
      const triggerPoint = window.innerHeight * 0.35
      const sectionIds = ['about', 'arsenal', 'projects', 'contact']

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i])
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= triggerPoint) {
            setActiveSection(sectionIds[i])
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Initialize on mount
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on Esc key or window resize
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setMobileMenuOpen(false)
    }
    const handleResize = () => {
      if (window.innerWidth > 768) setMobileMenuOpen(false)
    }
    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  // Lock background scroll when drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileMenuOpen])

  const handleNavClick = (id) => {
    setActiveSection(id)
    setMobileMenuOpen(false)
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const currentItem = navItems.find((item) => item.id === activeSection) || navItems[0]

  return (
    <>
      <header className="brutal-hud-nav">
        <div className="hud-brand">
          <span className="hud-blinker">●</span>
          <span className="hud-code font-marker">SYS://404</span>
          
          {/* Live active zone badge on mobile */}
          <span className="hud-active-tag font-marker mobile-only">
            // {currentItem.label}
          </span>
          
          <span className="hud-title font-marker desktop-only">UNHANDLED EXCEPTION</span>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hud-links desktop-only" aria-label="Main Navigation">
          {navItems.map((item) => {
            const isActive = activeSection === item.id
            return (
              <a 
                key={item.id}
                href={`#${item.id}`} 
                className={`hud-link ${isActive ? 'active' : ''}`}
                aria-current={isActive ? 'true' : undefined}
                onClick={() => setActiveSection(item.id)}
              >
                [{item.num}. {item.label}]
              </a>
            )
          })}
        </nav>

        {/* Mobile Menu Trigger Button */}
        <button 
          className="hud-mobile-toggle mobile-only font-marker"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close navigation directory" : "Open navigation directory"}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? '[ ✕ CLOSE ]' : '[ ⚡ MENU ]'}
        </button>
      </header>

      {/* Fullscreen Mobile Brutalist Drawer */}
      {mobileMenuOpen && (
        <div className="brutal-mobile-drawer" role="dialog" aria-modal="true" aria-label="Navigation Directory">
          <div className="drawer-header">
            <div className="drawer-title font-marker">
              // SYSTEM DIRECTORY
            </div>
            <button 
              className="drawer-close-btn font-marker"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              [ ✕ ABORT ]
            </button>
          </div>

          <nav className="drawer-nav-list" aria-label="Mobile Navigation">
            {navItems.map((item) => {
              const isActive = activeSection === item.id
              return (
                <a 
                  key={item.id}
                  href={`#${item.id}`} 
                  className={`drawer-nav-card ${item.color} ${isActive ? 'active' : ''}`}
                  onClick={() => handleNavClick(item.id)}
                >
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <span className="drawer-nav-num">{item.num}</span>
                    <span className="drawer-nav-text">{item.sub} // {item.label}</span>
                  </div>
                  {isActive && (
                    <span className="drawer-active-pill font-marker">● CURRENT</span>
                  )}
                  <span className="drawer-nav-arrow font-marker">→</span>
                </a>
              )
            })}
          </nav>

          <div className="drawer-footer">
            <div className="drawer-socials">
              <a 
                href="https://github.com/NurazimRoizan" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="brutal-link-button"
              >
                GITHUB ↗
              </a>
              <a 
                href="https://www.linkedin.com/in/nurazimroy" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="brutal-link-button"
              >
                LINKEDIN ↗
              </a>
            </div>
            <div className="drawer-status font-marker">
              STATUS: READY TO DEVIATE
            </div>
          </div>
        </div>
      )}

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
