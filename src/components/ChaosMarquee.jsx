import React from 'react'

export default function ChaosMarquee({ 
  text = "* ERROR 404 * UNHANDLED EXCEPTION * KERNEL PANIC * FATAL ERROR * SYSTEM FAILURE *", 
  variant = "yellow", 
  reverse = false, 
  rotate = 0 
}) {
  return (
    <div 
      className={`chaos-marquee-strip ${variant}`} 
      style={{ transform: rotate ? `rotate(${rotate}deg)` : undefined }}
      aria-hidden="true"
    >
      <div className={`chaos-marquee-content ${reverse ? 'reverse' : ''}`}>
        {text} {text} {text} {text}
      </div>
    </div>
  )
}
