import { useLayoutEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import './preloader.css'

function FilmSlate() {
  return <svg className="preloader-slate" viewBox="0 0 620 390" role="img" aria-label="Black and white movie clapperboard">
    <defs>
      <pattern id="slate-stripes" width="76" height="54" patternUnits="userSpaceOnUse">
        <rect width="76" height="54" fill="#f5f5f5" />
        <path d="M0 0h34l42 54H42z" fill="#111" />
      </pattern>
      <linearGradient id="slate-metal" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="#fff" />
        <stop offset=".18" stopColor="#aaa" />
        <stop offset=".5" stopColor="#f4f4f4" />
        <stop offset="1" stopColor="#777" />
      </linearGradient>
      <filter id="slate-shadow" x="-20%" y="-20%" width="140%" height="160%">
        <feGaussianBlur in="SourceAlpha" stdDeviation="7" />
        <feOffset dy="8" />
        <feComponentTransfer><feFuncA type="linear" slope=".55" /></feComponentTransfer>
        <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
      </filter>
    </defs>
    <g className="slate-body" filter="url(#slate-shadow)">
      <rect x="62" y="128" width="496" height="222" rx="5" fill="#090909" stroke="#e8e8e8" strokeWidth="3" />
      <rect x="72" y="138" width="476" height="202" rx="2" fill="#171717" stroke="#777" strokeWidth="1.5" />
      <text x="91" y="164" fill="#eee" fontFamily="Outfit, sans-serif" fontSize="12" letterSpacing="3">PRODUCTION</text>
      <path d="M91 175H528" stroke="#aaa" strokeWidth="1" />
      <text x="91" y="199" fill="#ddd" fontFamily="Outfit, sans-serif" fontSize="10" letterSpacing="2">SCENE</text>
      <text x="287" y="199" fill="#ddd" fontFamily="Outfit, sans-serif" fontSize="10" letterSpacing="2">TAKE</text>
      <text x="425" y="199" fill="#ddd" fontFamily="Outfit, sans-serif" fontSize="10" letterSpacing="2">ROLL</text>
      <path d="M91 207H262M287 207H400M425 207H528" stroke="#f2f2f2" strokeWidth="2" />
      <path d="M91 218H528" stroke="#777" strokeWidth="1" />
      <text x="91" y="243" fill="#ddd" fontFamily="Outfit, sans-serif" fontSize="10" letterSpacing="2">DIRECTOR</text>
      <text x="342" y="243" fill="#ddd" fontFamily="Outfit, sans-serif" fontSize="10" letterSpacing="2">CAMERA</text>
      <path d="M91 252H322M342 252H528" stroke="#f2f2f2" strokeWidth="2" />
      <path d="M91 267H528" stroke="#777" strokeWidth="1" />
      <text x="91" y="293" fill="#ddd" fontFamily="Outfit, sans-serif" fontSize="10" letterSpacing="2">DATE</text>
      <path d="M91 305H528" stroke="#f2f2f2" strokeWidth="2" />
      <circle cx="75" cy="140" r="5" fill="url(#slate-metal)" stroke="#222" strokeWidth="2" />
      <circle cx="545" cy="140" r="5" fill="url(#slate-metal)" stroke="#222" strokeWidth="2" />
    </g>
    <g className="slate-clapstick">
      <rect x="62" y="103" width="496" height="48" rx="3" fill="url(#slate-stripes)" stroke="#f6f6f6" strokeWidth="2" />
      <path d="M65 105H555" stroke="#fff" strokeWidth="1" opacity=".75" />
      <circle cx="75" cy="140" r="6" fill="url(#slate-metal)" stroke="#111" strokeWidth="2" />
    </g>
  </svg>
}

export default function Preloader() {
  const location = useLocation()
  return <PreloaderCycle key={location.key} />
}

function PreloaderCycle() {
  const [visible, setVisible] = useState(true)
  const [exiting, setExiting] = useState(false)

  useLayoutEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const exitTimer = window.setTimeout(() => setExiting(true), reducedMotion ? 2000 : 1550)
    const removeTimer = window.setTimeout(() => setVisible(false), 2000)

    return () => {
      window.clearTimeout(exitTimer)
      window.clearTimeout(removeTimer)
    }
  }, [])

  if (!visible) return null

  return <div className={`preloader${exiting ? ' is-exiting' : ''}`} role="status" aria-live="polite" aria-label="Roll, camera and action">
    <div className="preloader-stage">
      <FilmSlate />
      <p className="preloader-title">ROLL, CAMERA &amp; ACTION!</p>
    </div>
  </div>
}

