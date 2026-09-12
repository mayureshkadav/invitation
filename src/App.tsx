import { useState, useEffect, useId } from 'react'
import elephantImage from './assets/elephant.png'
import elephantImage2 from './assets/elephant2.png'
import lakshmiImage from './assets/laxmi ji.png'
import malaImage from './assets/mala.png'
import ganpatiHeroImage from './assets/ganesh.png'
import hangingPropImage from './assets/hanging_prop.png'
import toranImage from './assets/toran.png'
import lotusImage from './assets/lotus.png'

// ─── HOOKS ─────────────────────────────────────────────────────────

function useCountdown(target: Date) {
  const calc = () => {
    const diff = target.getTime() - Date.now()
    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 }
    return {
      days: Math.floor(diff / 86400000),
      hours: Math.floor((diff % 86400000) / 3600000),
      minutes: Math.floor((diff % 3600000) / 60000),
      seconds: Math.floor((diff % 60000) / 1000),
    }
  }
  const [time, setTime] = useState(calc)
  useEffect(() => {
    const id = setInterval(() => setTime(calc), 1000)
    return () => clearInterval(id)
  }, [])
  return time
}

// ─── SVG COMPONENTS ──────────────────────────────────────────────

function LotusFlower({ size = 80, light = false, className = '' }: { size?: number; light?: boolean; className?: string }) {
  const uid = useId()
  const g = `lg${uid.replace(/[^a-z0-9]/gi, '')}`
  const primary = light ? '#E8C97A' : '#C4943C'
  const inner = light ? '#FEF5DC' : '#E8C97A'
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" className={className} style={{ height: 'auto' }}>
      <defs>
        <radialGradient id={g}>
          <stop offset="0%" stopColor={inner} />
          <stop offset="100%" stopColor={primary} />
        </radialGradient>
      </defs>
      {[0, 45, 90, 135, 180, 225, 270, 315].map((a) => (
        <ellipse key={a} cx="50" cy="23" rx="9" ry="24" fill={`url(#${g})`} opacity="0.85" transform={`rotate(${a} 50 50)`} />
      ))}
      {[0, 60, 120, 180, 240, 300].map((a) => (
        <ellipse key={a} cx="50" cy="33" rx="6" ry="16" fill={inner} opacity="0.9" transform={`rotate(${a} 50 50)`} />
      ))}
      <circle cx="50" cy="50" r="9" fill={inner} />
      <circle cx="50" cy="50" r="4.5" fill={primary} />
    </svg>
  )
}

function DivaLamp({ size = 60, className = '' }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={Math.round(size * 1.1)} viewBox="0 0 60 66" className={className} style={{ height: 'auto' }}>
      <ellipse cx="30" cy="24" rx="14" ry="18" fill="#FF8800" opacity="0.18" />
      <g style={{ transformOrigin: '30px 33px', animation: 'flicker 1.8s ease-in-out infinite' }}>
        <path d="M30 8 C26 18 22 24 26 32 C27.5 35.5 32.5 35.5 34 32 C38 24 34 18 30 8Z" fill="#FFD700" />
        <path d="M30 14 C28 20 25.5 25 28 31 C28.8 32.8 31.2 32.8 32 31 C34.5 25 32 20 30 14Z" fill="#FFFAAA" />
      </g>
      <rect x="29" y="33" width="2" height="5" fill="#444" rx="1" />
      <path d="M12 44 C12 44 15 57 30 57 C45 57 48 44 48 44Z" fill="#B8862A" />
      <path d="M12 44 C12 44 15 54 30 54 C45 54 48 44 48 44Z" fill="#D4A840" />
      <path d="M45 46 L56 42 L54 50 Z" fill="#B8862A" />
      <ellipse cx="30" cy="44" rx="18" ry="4" fill="#C4943C" opacity="0.4" />
      <circle cx="22" cy="50" r="2" fill="#E8C97A" />
      <circle cx="30" cy="52" r="2" fill="#E8C97A" />
      <circle cx="38" cy="50" r="2" fill="#E8C97A" />
    </svg>
  )
}

function TempleBell({ size = 50, className = '' }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={Math.round(size * 1.3)} viewBox="0 0 50 65" className={className} style={{ height: 'auto' }}>
      <rect x="23" y="0" width="4" height="8" rx="2" fill="#C4943C" />
      <ellipse cx="25" cy="14" rx="10" ry="6" fill="#E8C97A" />
      <path d="M10 14 C10 14 8 30 10 38 C12 46 38 46 40 38 C42 30 40 14 40 14Z" fill="#C4943C" />
      <ellipse cx="25" cy="40" rx="16" ry="5" fill="#E8C97A" />
      <path d="M15 22 Q25 24 35 22" stroke="#E8C97A" strokeWidth="1.5" fill="none" />
      <path d="M14 30 Q25 33 36 30" stroke="#E8C97A" strokeWidth="1.5" fill="none" />
      <line x1="25" y1="40" x2="25" y2="50" stroke="#6B1A1A" strokeWidth="2" />
      <circle cx="25" cy="53" r="4" fill="#6B1A1A" />
    </svg>
  )
}

function ElephantFigure({ size = 150, flip = false, className = '' }: { size?: number; flip?: boolean; className?: string }) {
  const uid = useId()
  const g = `eg${uid.replace(/[^a-z0-9]/gi, '')}`
  return (
    <svg
      width={size}
      height={Math.round(size * 0.87)}
      viewBox="0 0 170 148"
      className={className}
      style={{ height: 'auto', transform: flip ? 'scaleX(-1)' : undefined }}
    >
      <defs>
        <radialGradient id={g} cx="45%" cy="38%" r="55%">
          <stop offset="0%" stopColor="#F0D888" />
          <stop offset="100%" stopColor="#C4943C" />
        </radialGradient>
      </defs>
      <ellipse cx="100" cy="95" rx="52" ry="40" fill={`url(#${g})`} />
      <circle cx="50" cy="72" r="34" fill="#D4A840" />
      <ellipse cx="22" cy="68" rx="18" ry="26" fill="#C08030" />
      <ellipse cx="24" cy="68" rx="11" ry="17" fill="#E8C97A" opacity="0.65" />
      <path d="M35 90 C22 104 12 115 15 103 C18 91 26 88 32 82" stroke="#A07020" strokeWidth="13" fill="none" strokeLinecap="round" />
      <path d="M35 90 C22 104 12 115 15 103" stroke="#E0B860" strokeWidth="6" fill="none" strokeLinecap="round" />
      <ellipse cx="13" cy="104" rx="8" ry="6" fill="#A07020" transform="rotate(-15 13 104)" />
      <circle cx="42" cy="62" r="5.5" fill="#1A0A04" />
      <circle cx="40.5" cy="60.5" r="2" fill="white" />
      <path d="M36 84 C28 88 22 97 25 103" stroke="#FFFAE0" strokeWidth="4.5" fill="none" strokeLinecap="round" />
      <path d="M26 88 L148 88 L142 106 L38 106 Z" fill="#6B1A1A" opacity="0.85" />
      <path d="M28 88 L145 88 L140 96 L40 96 Z" fill="#C4943C" opacity="0.45" />
      <circle cx="75" cy="96" r="3" fill="#E8C97A" />
      <circle cx="95" cy="96" r="3" fill="#E8C97A" />
      <circle cx="115" cy="96" r="3" fill="#E8C97A" />
      <rect x="60" y="124" width="17" height="24" rx="8" fill="#C4943C" />
      <rect x="82" y="126" width="17" height="22" rx="8" fill="#C4943C" />
      <rect x="106" y="126" width="17" height="22" rx="8" fill="#C4943C" />
      <rect x="128" y="124" width="17" height="24" rx="8" fill="#C4943C" />
      {[0, 60, 120, 180, 240, 300].map((a) => (
        <ellipse key={a} cx="54" cy="40" rx="4" ry="9" fill="#D4621A" transform={`rotate(${a} 54 52)`} opacity="0.9" />
      ))}
      <circle cx="54" cy="45" r="10" fill="#D4621A" />
      <circle cx="54" cy="45" r="6.5" fill="#F0C060" />
      <circle cx="54" cy="45" r="3" fill="#C4943C" />
    </svg>
  )
}

function GoldDivider({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center gap-4 w-full ${className}`}>
      <div className="flex-1 h-px" style={{ background: 'linear-gradient(to right, transparent, #C4943C)' }} />
      <LotusFlower size={28} />
      <div className="flex-1 h-px" style={{ background: 'linear-gradient(to left, transparent, #C4943C)' }} />
    </div>
  )
}

function SectionHeading({ devanagari, english, light = false }: { devanagari: string; english?: string; light?: boolean }) {
  return (
    <div className="text-center mb-10">
      <p
        className={`text-3xl md:text-5xl font-bold mb-2 leading-tight ${light ? 'text-[#3D0A0A]' : 'text-[#E8C97A]'}`}
        style={{ fontFamily: "'Tiro Devanagari Hindi', serif" }}
      >
        {devanagari}
      </p>
      {english && (
        <p
          className={`text-[10px] tracking-[0.35em] uppercase ${light ? 'text-[#8B4513]' : 'text-[#C4943C]'}`}
          style={{ fontFamily: "'Cinzel', serif" }}
        >
          {english}
        </p>
      )}
      <GoldDivider className="mt-5" />
    </div>
  )
}

function GaneshaIcon({ className = '' }: { className?: string }) {
  const uid = useId()
  const halo = `h${uid.replace(/[^a-z0-9]/gi, '')}`
  const body = `b${uid.replace(/[^a-z0-9]/gi, '')}`
  return (
    <svg viewBox="0 0 260 330" className={className} style={{ height: 'auto' }}>
      <defs>
        <radialGradient id={halo} cx="50%" cy="45%" r="50%">
          <stop offset="0%" stopColor="#FFF8DC" stopOpacity="0.95" />
          <stop offset="55%" stopColor="#E8C97A" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#C4943C" stopOpacity="0" />
        </radialGradient>
        <radialGradient id={body} cx="40%" cy="35%" r="60%">
          <stop offset="0%" stopColor="#F5E4A8" />
          <stop offset="100%" stopColor="#D4A840" />
        </radialGradient>
      </defs>
      <circle cx="130" cy="115" r="115" fill={`url(#${halo})`} />
      {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((a) => (
        <ellipse key={a} cx="130" cy="58" rx="12" ry="54" fill="#C4943C" opacity="0.15" transform={`rotate(${a} 130 115)`} />
      ))}
      <ellipse cx="60" cy="118" rx="44" ry="58" fill="#D4A840" />
      <ellipse cx="66" cy="118" rx="30" ry="42" fill={`url(#${body})`} />
      <ellipse cx="200" cy="118" rx="44" ry="58" fill="#D4A840" />
      <ellipse cx="194" cy="118" rx="30" ry="42" fill={`url(#${body})`} />
      <ellipse cx="130" cy="108" rx="70" ry="78" fill={`url(#${body})`} />
      <path d="M74 58 L92 22 L130 10 L168 22 L186 58" fill="#C4943C" />
      <path d="M82 58 L98 28 L130 18 L162 28 L178 58" fill="#D4B040" />
      <circle cx="130" cy="14" r="9" fill="#D4621A" />
      <circle cx="98" cy="28" r="5.5" fill="#D4621A" />
      <circle cx="162" cy="28" r="5.5" fill="#D4621A" />
      <rect x="74" y="55" width="112" height="10" rx="5" fill="#E8C97A" />
      <circle cx="130" cy="77" r="5" fill="#D4621A" />
      <ellipse cx="130" cy="86" rx="4" ry="8" fill="#D4621A" opacity="0.5" />
      <ellipse cx="110" cy="110" rx="11" ry="8.5" fill="white" />
      <ellipse cx="150" cy="110" rx="11" ry="8.5" fill="white" />
      <circle cx="112" cy="110" r="6.5" fill="#1A0A04" />
      <circle cx="152" cy="110" r="6.5" fill="#1A0A04" />
      <circle cx="110" cy="108" r="2.5" fill="white" />
      <circle cx="150" cy="108" r="2.5" fill="white" />
      <path d="M98 99 Q110 93 122 99" stroke="#5A2A0A" strokeWidth="3.5" fill="none" strokeLinecap="round" />
      <path d="M138 99 Q150 93 162 99" stroke="#5A2A0A" strokeWidth="3.5" fill="none" strokeLinecap="round" />
      <path d="M115 138 Q130 148 145 138" stroke="#8B4513" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <path d="M130 145 C125 158 115 168 118 180 C120 190 142 190 145 180 C148 168 140 158 130 145" stroke="#A07020" strokeWidth="16" fill="none" strokeLinecap="round" />
      <path d="M130 145 C126 157 118 165 120 177 C121 184 139 184 142 178" stroke="#E0C060" strokeWidth="7" fill="none" strokeLinecap="round" />
      <path d="M156 135 C168 140 176 155 173 162" stroke="#FFFAE0" strokeWidth="6" fill="none" strokeLinecap="round" />
      <path d="M104 135 C96 138 90 144" stroke="#FFFAE0" strokeWidth="6" fill="none" strokeLinecap="round" />
      <ellipse cx="130" cy="252" rx="76" ry="60" fill={`url(#${body})`} />
      <path d="M192 175 C212 162 224 150 228 140" stroke="#C4943C" strokeWidth="13" fill="none" strokeLinecap="round" />
      <circle cx="230" cy="136" r="14" fill="#D4621A" opacity="0.85" />
      <circle cx="230" cy="136" r="9" fill="#F0C060" />
      <circle cx="230" cy="136" r="4" fill="#C4943C" />
      <path d="M68 175 C50 160 40 148 36 136" stroke="#C4943C" strokeWidth="13" fill="none" strokeLinecap="round" />
      <ellipse cx="33" cy="130" rx="11" ry="14" fill="#D4A840" />
      <path d="M195 228 C218 240 232 250 238 260" stroke="#C4943C" strokeWidth="13" fill="none" strokeLinecap="round" />
      <ellipse cx="240" cy="262" rx="13" ry="15" fill="#F0D880" />
      <circle cx="240" cy="253" r="5.5" fill="#C4943C" />
      <path d="M65 228 C44 240 32 250 28 262" stroke="#C4943C" strokeWidth="13" fill="none" strokeLinecap="round" />
      <ellipse cx="25" cy="265" rx="11" ry="13" fill="#D4A840" />
      {[0, 40, 80, 120, 160, 200, 240, 280, 320].map((a) => (
        <ellipse key={a} cx="130" cy="308" rx="10" ry="26" fill="#C4943C" opacity="0.3" transform={`rotate(${a} 130 308)`} />
      ))}
      <ellipse cx="130" cy="308" rx="50" ry="12" fill="#E8C97A" opacity="0.45" />
      <path d="M82 155 Q130 172 178 155" stroke="#E8C97A" strokeWidth="3" fill="none" />
      <circle cx="130" cy="165" r="5" fill="#D4621A" />
      <circle cx="106" cy="162" r="3.5" fill="#D4621A" />
      <circle cx="154" cy="162" r="3.5" fill="#D4621A" />
      <text x="130" y="256" textAnchor="middle" fontFamily="serif" fontSize="26" fill="#3D0A0A" opacity="0.45">ॐ</text>
    </svg>
  )
}

// ─── WELCOME SCREEN ───────────────────────────────────────────────

function WelcomeScreen({ onEnter, isExiting }: { onEnter: () => void; isExiting: boolean }) {
  const particles = Array.from({ length: 20 }, (_, i) => ({
    x: Math.round((i / 19) * 88 + 6),
    delay: parseFloat(((i * 0.22) % 3.5).toFixed(2)),
    dur: 2.4 + (i % 3) * 0.5,
    color: i % 3 === 0 ? '#E8C97A' : i % 3 === 1 ? '#D4621A' : '#C4943C',
  }))

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden"
      style={{
        background: 'radial-gradient(ellipse 80% 90% at 50% 40%, #501010 0%, #2A0606 55%, #120202 100%)',
        animation: isExiting ? 'transition-exit 1.4s ease-in forwards' : 'main-enter 0.5s ease-out',
      }}
    >
      {/* Diamond tile bg */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='44' height='44'%3E%3Cpath d='M22 2L42 22L22 42L2 22Z' fill='none' stroke='%23C4943C' stroke-width='1'/%3E%3C/svg%3E")`,
          backgroundSize: '44px 44px',
        }}
      />

      {/* Rising particles */}
      {particles.map((p, i) => (
        <div
          key={i}
          className="absolute bottom-4 w-1.5 h-1.5 rounded-full"
          style={{ left: `${p.x}%`, background: p.color, animation: `rise-particle ${p.dur}s ease-out ${p.delay}s infinite` }}
        />
      ))}

      {/* Top invocation */}
      <div
        className="z-10 text-center mb-3"
        style={{ animation: 'fade-up 1s ease-out 0.2s both', fontFamily: "'Tiro Devanagari Hindi', serif" }}
      >
        <p className="text-[#E8C97A] text-sm md:text-xl tracking-[0.18em]">॥ श्री महालक्ष्म्यै नमः ॥</p>
      </div>

      {/* Marigold garland line */}
      <div className="flex items-center gap-1.5 mb-4 z-10" style={{ animation: 'fade-up 1s ease-out 0.35s both' }}>
        {Array.from({ length: 13 }).map((_, i) => (
          <div
            key={i}
            className="rounded-full flex-shrink-0"
            style={{ width: i % 2 === 0 ? 11 : 7, height: i % 2 === 0 ? 11 : 7, background: i % 2 === 0 ? '#D4621A' : '#E8C97A' }}
          />
        ))}
      </div>

      <div className="pointer-events-none absolute left-2 top-20 z-10 hidden md:block" style={{ animation: 'fade-up 1s ease-out 0.25s both' }}>
        <img src={malaImage} alt="Mala decoration" className="w-[140px] object-contain opacity-90 -rotate-12" />
      </div>

      <div className="pointer-events-none absolute right-2 top-20 z-10 hidden md:block" style={{ animation: 'fade-up 1s ease-out 0.25s both' }}>
        <img src={malaImage} alt="Mala decoration" className="w-[140px] object-contain opacity-90 rotate-12" />
      </div>

      {/* Main visual composition */}
      <div
        className="z-10 flex items-end justify-center gap-1 md:gap-3 px-2"
        style={{ animation: 'scale-in 1.2s ease-out 0.45s both' }}
      >
        {/* Left elephant */}
        <div style={{ animation: 'fade-up 0.9s ease-out 0.6s both' }}>
          <img
            src={elephantImage}
            alt="Elephant illustration"
            className="w-[200px] md:w-[170px] drop-shadow-lg object-contain"
          />
        </div>

        {/* Central Lakshmi image */}
        <div className="relative flex flex-col items-center justify-center mx-2 md:mx-6">
          <img
            src={lakshmiImage}
            alt="Lakshmi Ji"
            className="w-[400px] md:w-[340px] drop-shadow-2xl object-contain"
          />
        </div>

        {/* Right elephant */}
        <div style={{ animation: 'fade-up 0.9s ease-out 0.6s both' }}>
          <img
            src={elephantImage}
            alt="Elephant illustration"
            className="w-[200px] md:w-[170px] drop-shadow-lg object-contain scale-x-[-1]"
          />
        </div>
      </div>

      {/* Lotus + rangoli */}
      <div
        className="z-10 mt-3 relative"
        style={{ animation: 'float-lotus 4s ease-in-out infinite, fade-up 1s ease-out 0.85s both' }}
      >
        <LotusFlower size={64} light className="w-16 md:w-20 drop-shadow-lg" />
        <div className="absolute" style={{ inset: '-16px', width: '96px', height: '96px' }}>
          {[44, 62, 80].map((r) =>
            [0, 45, 90, 135, 180, 225, 270, 315].map((a) => (
              <div
                key={`${r}-${a}`}
                className="absolute rounded-full"
                style={{
                  width: r === 44 ? 4 : r === 62 ? 3 : 2,
                  height: r === 44 ? 4 : r === 62 ? 3 : 2,
                  background: '#C4943C',
                  opacity: 0.45 - r * 0.003,
                  left: `calc(50% + ${Math.cos((a * Math.PI) / 180) * r * 0.5}px - 2px)`,
                  top: `calc(50% + ${Math.sin((a * Math.PI) / 180) * r * 0.5}px - 2px)`,
                }}
              />
            ))
          )}
        </div>
      </div>

      {/* Family name */}
      <div
        className="z-10 mt-3 text-center"
        style={{ animation: 'fade-up 1s ease-out 1s both', fontFamily: "'Tiro Devanagari Hindi', serif" }}
      >
        <p className="text-[#E8C97A] text-base md:text-2xl tracking-[0.25em]">कडव परिवार</p>
      </div>

      {/* Enter button */}
      <div className="z-10 mt-5" style={{ animation: 'fade-up 1s ease-out 1.2s both' }}>
        <button onClick={onEnter} className="group relative">
          <div
            className="px-8 py-3.5 border-2 border-[#C4943C] text-[#FEF5DC] text-xs md:text-sm tracking-[0.2em] transition-all duration-300 group-hover:bg-[#C4943C] group-hover:text-[#1A0404] group-hover:scale-105 active:scale-95"
            style={{
              fontFamily: "'Cinzel', serif",
              clipPath: 'polygon(5% 0%, 95% 0%, 100% 50%, 95% 100%, 5% 100%, 0% 50%)',
              animation: 'pulse-gold 2.5s ease-in-out infinite',
            }}
          >
            प्रवेश करा &nbsp;✦&nbsp; Enter
          </div>
          <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-2.5 h-2.5 bg-[#C4943C] rotate-45" />
          <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-2.5 h-2.5 bg-[#C4943C] rotate-45" />
        </button>
      </div>

      {/* Bottom garland */}
      <div className="flex items-center gap-1.5 mt-5 z-10" style={{ animation: 'fade-up 1s ease-out 1.4s both' }}>
        {Array.from({ length: 13 }).map((_, i) => (
          <div
            key={i}
            className="rounded-full flex-shrink-0"
            style={{ width: i % 2 === 0 ? 11 : 7, height: i % 2 === 0 ? 11 : 7, background: i % 2 === 0 ? '#D4621A' : '#E8C97A' }}
          />
        ))}
      </div>

      <div className="z-10 mt-6 flex justify-center" style={{ animation: 'fade-up 1s ease-out 1.5s both' }}>
        <img
          src={elephantImage2}
          alt="Decorative elephant"
          className="w-[400px] md:w-[400px] object-contain opacity-95 drop-shadow-xl"
        />
      </div>
    </div>
  )
}

// ─── NAVIGATION ───────────────────────────────────────────────────

const navLinks = [
  { label: 'मुख्यपृष्ठ', href: 'home' },
  { label: 'आमंत्रण', href: 'aamantran' },
  { label: 'कार्यक्रम', href: 'karyakram' },
  { label: 'आरती', href: 'aarti' },
  { label: 'गॅलरी', href: 'gallery' },
  { label: 'ठिकाण', href: 'sthaan' },
  { label: 'RSVP', href: 'rsvp' },
]

function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setOpen(false)
  }

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-40 transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(20, 3, 3, 0.97)' : 'linear-gradient(to bottom, rgba(20,3,3,0.92), transparent)',
        borderBottom: scrolled ? '1px solid rgba(196, 148, 60, 0.3)' : 'none',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
      }}
    >
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div style={{ fontFamily: "'Tiro Devanagari Hindi', serif" }}>
          <span className="text-[#E8C97A] text-sm">॥ गणपती बाप्पा मोरया ॥</span>
        </div>
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((l) => (
            <button
              key={l.href}
              onClick={() => scrollTo(l.href)}
              className="text-[#C4943C] hover:text-[#E8C97A] text-sm transition-colors duration-200"
              style={{ fontFamily: l.href === 'rsvp' ? "'Cinzel', serif" : "'Tiro Devanagari Hindi', serif" }}
            >
              {l.label}
            </button>
          ))}
        </div>
        <button onClick={() => setOpen(!open)} className="md:hidden flex flex-col gap-1.5 p-2">
          {[0, 1, 2].map((i) => (
            <div key={i} className={`w-5 h-0.5 bg-[#C4943C] transition-all ${open && i === 0 ? 'rotate-45 translate-y-2' : open && i === 2 ? '-rotate-45 -translate-y-2' : open && i === 1 ? 'opacity-0' : ''}`} />
          ))}
        </button>
      </div>
      {open && (
        <div className="md:hidden" style={{ background: 'rgba(18,2,2,0.98)', borderTop: '1px solid rgba(196,148,60,0.2)' }}>
          {navLinks.map((l) => (
            <button
              key={l.href}
              onClick={() => scrollTo(l.href)}
              className="block w-full text-left px-6 py-4 text-[#C4943C] hover:text-[#E8C97A] hover:bg-[rgba(196,148,60,0.07)] border-b border-[rgba(196,148,60,0.1)] transition-colors text-base"
              style={{ fontFamily: "'Tiro Devanagari Hindi', serif" }}
            >
              {l.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  )
}

// ─── HERO SECTION ────────────────────────────────────────────────

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 pt-24 pb-16 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #1A0404 0%, #3D0A0A 50%, #2A0606 100%)' }}
    >
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='44' height='44'%3E%3Cpath d='M22 2L42 22L22 42L2 22Z' fill='none' stroke='%23C4943C' stroke-width='1'/%3E%3C/svg%3E")`,
          backgroundSize: '44px 44px',
        }}
      />
      <img
        src={toranImage}
        alt="Marigold toran decoration"
        className="pointer-events-none absolute left-0 top-0 z-30 h-[92px] w-full object-cover object-top opacity-95 md:h-[135px]"
        style={{ animation: 'fade-up 1s ease-out 0.1s both' }}
      />
      {/* Decorative lotus row top */}
      <div className="absolute top-20 left-0 right-0 flex justify-center gap-10 opacity-25">
        {[0, 1, 2, 3, 4].map((i) => <LotusFlower key={i} size={28} />)}
      </div>
      {/* Side banana leaves */}
      <div className="absolute left-0 top-1/4 opacity-20 hidden md:block">
        <svg viewBox="0 0 60 200" width="60" height="200">
          <ellipse cx="20" cy="100" rx="14" ry="88" fill="#3D6B28" transform="rotate(-10 20 100)" />
          <ellipse cx="10" cy="80" rx="9" ry="58" fill="#3D6B28" transform="rotate(-24 10 80)" />
        </svg>
      </div>
      <div className="absolute right-0 top-1/4 opacity-20 hidden md:block">
        <svg viewBox="0 0 60 200" width="60" height="200">
          <ellipse cx="40" cy="100" rx="14" ry="88" fill="#3D6B28" transform="rotate(10 40 100)" />
          <ellipse cx="50" cy="80" rx="9" ry="58" fill="#3D6B28" transform="rotate(24 50 80)" />
        </svg>
      </div>

      <img
        src={hangingPropImage}
        alt="Left hanging decoration"
        className="pointer-events-none absolute left-0 top-[64px] z-10 w-[115px] md:left-4 md:top-[72px] md:w-[190px] object-contain opacity-90"
        style={{ animation: 'fade-up 1s ease-out 0.2s both' }}
      />

      <img
        src={hangingPropImage}
        alt="Right hanging decoration"
        className="pointer-events-none absolute right-0 top-[64px] z-10 w-[115px] md:right-4 md:top-[72px] md:w-[190px] object-contain opacity-90 scale-x-[-1]"
        style={{ animation: 'fade-up 1s ease-out 0.2s both' }}
      />

      <img
        src={lotusImage}
        alt="Lotus decoration"
        className="pointer-events-none z-10 mb-0 h-[82px] w-[155px] object-contain opacity-95 md:h-[108px] md:w-[195px]"
        style={{ animation: 'fade-up 1s ease-out 0.3s both' }}
      />

      <p className="text-[#C4943C] text-sm md:text-base tracking-[0.2em] mb-1 z-10" style={{ fontFamily: "'Tiro Devanagari Hindi', serif" }}>
        ॥ श्री गणेशाय नमः ॥
      </p>

      <div className="z-10 relative" style={{ animation: 'float-lotus 6s ease-in-out infinite' }}>
        <img
          src={ganpatiHeroImage}
          alt="Ganesha"
          className="w-[340px] md:w-[560px] drop-shadow-[0_0_35px_rgba(196,148,60,0.45)] object-contain"
        />
      </div>

      <div className="z-10 mt-4" style={{ fontFamily: "'Tiro Devanagari Hindi', serif" }}>
        <h1 className="text-3xl md:text-6xl font-bold text-[#E8C97A] leading-tight">
          गणपती बाप्पा मोरया!
        </h1>
        <p className="mt-3 text-base md:text-2xl text-[#FEF5DC] opacity-85">
          कडव परिवाराच्या गणेशोत्सवाचे हार्दिक आमंत्रण
        </p>
      </div>

      <GoldDivider className="z-10 mt-8 max-w-md" />

      <div className="z-10 flex items-center gap-6 mt-6">
        <DivaLamp size={44} />
        <LotusFlower size={36} light />
        <DivaLamp size={44} />
      </div>
    </section>
  )
}

// ─── INVITATION MESSAGE ───────────────────────────────────────────

function InvitationMessage() {
  const corners = ['top-2 left-2', 'top-2 right-2 rotate-90', 'bottom-2 right-2 rotate-180', 'bottom-2 left-2 -rotate-90']
  return (
    <section id="aamantran" className="py-16 md:py-24" style={{ background: '#FEF5DC' }}>
      <div className="max-w-3xl mx-auto px-4">
        <SectionHeading devanagari="हार्दिक आमंत्रण" english="Sacred Invitation" light />
        <div
          className="relative mt-2 p-8 md:p-12 text-center rounded-sm"
          style={{
            background: 'linear-gradient(135deg, #FFFBF0 0%, #FEF5DC 50%, #F5E8C0 100%)',
            border: '2px solid #C4943C',
            boxShadow: '0 0 0 8px rgba(196, 148, 60, 0.08), inset 0 0 40px rgba(196, 148, 60, 0.04)',
          }}
        >
          {corners.map((pos) => (
            <div key={pos} className={`absolute ${pos}`}>
              <svg viewBox="0 0 32 32" width="32" height="32">
                <path d="M2 2 L14 2 L2 14 Z" fill="#C4943C" opacity="0.6" />
                <path d="M2 2 L26 2 L2 26 Z" fill="none" stroke="#C4943C" strokeWidth="1" opacity="0.3" />
                <circle cx="4" cy="4" r="2" fill="#D4621A" opacity="0.65" />
              </svg>
            </div>
          ))}
          <div className="absolute inset-4 border border-[#C4943C] opacity-15 pointer-events-none" />
          <div className="flex justify-center mb-5">
            <LotusFlower size={52} />
          </div>
          <p className="text-[#C4943C] text-3xl mb-5" style={{ fontFamily: "'Tiro Devanagari Hindi', serif" }}>ॐ</p>
          <p
            className="text-[#3D0A0A] text-base md:text-lg leading-loose"
            style={{ fontFamily: "'Noto Serif Devanagari', serif" }}
          >
            गणपती बाप्पाच्या आगमनाने आमचे घर आनंद, भक्ती आणि उत्साहाने भरून जाणार आहे.
            <br /><br />
            या मंगल प्रसंगी आपण आपल्या परिवारासह उपस्थित राहून बाप्पाचे आशीर्वाद घ्यावेत,
            ही नम्र विनंती.
            <br /><br />
            आपली उपस्थिती आमच्यासाठी सर्वात मोठा प्रसाद आहे.
          </p>
          <div className="my-6"><GoldDivider /></div>
          <p className="text-[#6B1A1A] text-xl font-bold" style={{ fontFamily: "'Tiro Devanagari Hindi', serif" }}>
            — कडव परिवार —
          </p>
          <div className="flex justify-center gap-6 mt-4">
            <DivaLamp size={36} />
            <LotusFlower size={32} />
            <DivaLamp size={36} />
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── EVENT DETAILS ────────────────────────────────────────────────

const events = [
  { icon: '🪔', title: 'गणपती स्थापना', subtitle: 'Ganpati Sthapna', lines: ['📅 [DATE]', '🕐 [TIME]'], color: '#D4621A' },
  { icon: '🙏', title: 'आरती', subtitle: 'Aarti', lines: ['🌅 सकाळ: [TIME]', '🌇 संध्याकाळ: [TIME]'], color: '#C4943C' },
  { icon: '🌺', title: 'महाप्रसाद', subtitle: 'Mahaprasad', lines: ['📅 [DATE]', '🕐 [TIME]'], color: '#8B6914' },
  { icon: '🕉️', title: 'गणपती विसर्जन', subtitle: 'Visarjan', lines: ['📅 [DATE]', '🕐 [TIME]'], color: '#6B1A1A' },
]

function EventDetails() {
  return (
    <section id="karyakram" className="py-16 md:py-24" style={{ background: '#2A0606' }}>
      <div className="max-w-5xl mx-auto px-4">
        <SectionHeading devanagari="कार्यक्रम" english="Programme" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-2">
          {events.map((ev) => (
            <div
              key={ev.title}
              className="relative text-center p-8 rounded-sm"
              style={{
                background: 'linear-gradient(135deg, #3D0A0A 0%, #2A0606 100%)',
                border: `1px solid ${ev.color}`,
                boxShadow: `0 0 24px ${ev.color}1A`,
              }}
            >
              <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-[#C4943C] opacity-50" />
              <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-[#C4943C] opacity-50" />
              <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-[#C4943C] opacity-50" />
              <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-[#C4943C] opacity-50" />
              <div className="text-4xl mb-3">{ev.icon}</div>
              <h3 className="text-[#E8C97A] text-xl font-bold mb-1" style={{ fontFamily: "'Tiro Devanagari Hindi', serif" }}>
                {ev.title}
              </h3>
              <p className="text-[#C4943C] text-[10px] tracking-widest mb-5" style={{ fontFamily: "'Cinzel', serif" }}>
                {ev.subtitle}
              </p>
              <div className="h-px mb-5" style={{ background: `linear-gradient(to right, transparent, ${ev.color}, transparent)` }} />
              <div className="space-y-2">
                {ev.lines.map((line) => (
                  <p key={line} className="text-[#FEF5DC] text-base" style={{ fontFamily: "'Tiro Devanagari Hindi', serif" }}>
                    {line}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── COUNTDOWN ────────────────────────────────────────────────────

function Countdown() {
  const target = new Date('2027-09-01T10:00:00')
  const { days, hours, minutes, seconds } = useCountdown(target)
  const units = [
    { value: days, label: 'दिवस' },
    { value: hours, label: 'तास' },
    { value: minutes, label: 'मिनिटे' },
    { value: seconds, label: 'सेकंद' },
  ]
  return (
    <section className="py-16 md:py-20" style={{ background: '#1A0404' }}>
      <div className="max-w-4xl mx-auto px-4 text-center">
        <p className="text-[#E8C97A] text-xl md:text-3xl mb-1" style={{ fontFamily: "'Tiro Devanagari Hindi', serif" }}>
          बाप्पाच्या आगमनाची उत्सुकता...
        </p>
        <p className="text-[#C4943C] text-[10px] tracking-[0.3em] mb-8" style={{ fontFamily: "'Cinzel', serif" }}>
          COUNTDOWN TO GANPATI ARRIVAL
        </p>
        <div
          className="inline-block p-6 md:p-10 rounded-sm w-full max-w-2xl"
          style={{
            border: '2px solid #C4943C',
            background: 'linear-gradient(135deg, #2A0606 0%, #1A0404 100%)',
            boxShadow: '0 0 40px rgba(196, 148, 60, 0.12)',
          }}
        >
          <div className="flex items-stretch justify-center gap-2 md:gap-6">
            {units.map((u, i) => (
              <div key={u.label} className="flex items-center gap-2 md:gap-6">
                <div className="text-center">
                  <div
                    className="text-4xl md:text-6xl font-bold text-[#E8C97A] tabular-nums"
                    style={{ fontFamily: "'Cinzel', serif", minWidth: '2ch' }}
                  >
                    {String(u.value).padStart(2, '0')}
                  </div>
                  <div className="text-[#C4943C] text-xs md:text-sm mt-1.5" style={{ fontFamily: "'Tiro Devanagari Hindi', serif" }}>
                    {u.label}
                  </div>
                </div>
                {i < units.length - 1 && (
                  <div className="text-[#C4943C] text-2xl md:text-4xl opacity-50 font-bold self-start pt-1">:</div>
                )}
              </div>
            ))}
          </div>
          <div className="mt-6 flex justify-center">
            <GoldDivider className="max-w-xs" />
          </div>
          <p className="text-[#C4943C] text-[10px] mt-3 opacity-60 tracking-widest" style={{ fontFamily: "'Cinzel', serif" }}>
            [PLACEHOLDER DATE — PLEASE UPDATE]
          </p>
        </div>
      </div>
    </section>
  )
}

// ─── AARTI SECTION ────────────────────────────────────────────────

const aartiText = `सुखकर्ता दुःखहर्ता वार्ता विघ्नाची ।
नुरवी पुरवी प्रेम कृपा जयाची ।
सर्वांगी सुंदर उटी शेंदुराची ।
कंठी झळके माळ मुक्ताफळाची ॥

जय देव जय देव जय मंगलमूर्ती ।
दर्शनमात्रे मनकामना पुरती ।। धृ ।।

रत्नखचित फरा तुज गौरीकुमरा ।
चंदनाची उटी कुंकुमकेशरा ।
हिरेजडित मुकुट शोभतो बरा ।
रुणझुणती नुपुरे चरणी घागरिया ॥

जय देव जय देव जय मंगलमूर्ती ।
दर्शनमात्रे मनकामना पुरती ।।`

function Aarti() {
  return (
    <section id="aarti" className="py-16 md:py-24" style={{ background: '#0E0202' }}>
      <div className="max-w-2xl mx-auto px-4 text-center">
        <SectionHeading devanagari="आरती" english="Aarti" />
        <div
          className="flex justify-center mb-8"
          style={{ animation: 'float-lotus 3s ease-in-out infinite' }}
        >
          <div style={{ filter: 'drop-shadow(0 0 20px rgba(255, 160, 0, 0.75)) drop-shadow(0 0 45px rgba(255, 80, 0, 0.4))' }}>
            <DivaLamp size={80} />
          </div>
        </div>
        <div
          className="relative p-8 md:p-10 rounded-sm"
          style={{
            background: 'linear-gradient(135deg, #1A0404 0%, #0E0202 100%)',
            border: '1px solid rgba(196, 148, 60, 0.4)',
            boxShadow: '0 0 40px rgba(196, 148, 60, 0.07)',
          }}
        >
          <div className="absolute inset-3 border border-[#C4943C] opacity-12 pointer-events-none" />
          <div className="flex justify-center gap-8 mb-6 opacity-55">
            <TempleBell size={36} />
            <LotusFlower size={28} light />
            <TempleBell size={36} />
          </div>
          <pre
            className="text-[#E8C97A] text-sm md:text-base leading-loose whitespace-pre-wrap font-normal text-center"
            style={{ fontFamily: "'Noto Serif Devanagari', serif" }}
          >
            {aartiText}
          </pre>
          <div className="flex justify-center gap-8 mt-6 opacity-55">
            <TempleBell size={36} />
            <LotusFlower size={28} light />
            <TempleBell size={36} />
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── GALLERY ─────────────────────────────────────────────────────

const galleryItems = [
  { label: 'गणपती मूर्ती', en: 'Ganpati Idol', g: 'linear-gradient(135deg, #6B1A1A, #D4621A)', tall: true },
  { label: 'सजावट', en: 'Decoration', g: 'linear-gradient(135deg, #3D0A0A, #C4943C)', tall: false },
  { label: 'परिवार', en: 'Family', g: 'linear-gradient(135deg, #1A0404, #8B4513)', tall: false },
  { label: 'आरती', en: 'Aarti', g: 'linear-gradient(135deg, #6B1A1A, #E8C97A33, #6B1A1A)', tall: false },
  { label: 'महाप्रसाद', en: 'Mahaprasad', g: 'linear-gradient(135deg, #2A0606, #D4621A)', tall: false },
  { label: 'विसर्जन', en: 'Visarjan', g: 'linear-gradient(135deg, #1A0404, #C4943C)', tall: false },
]

function Gallery() {
  return (
    <section id="gallery" className="py-16 md:py-24" style={{ background: '#FEF5DC' }}>
      <div className="max-w-5xl mx-auto px-4">
        <SectionHeading devanagari="आमच्या गणेशोत्सवाच्या आठवणी" english="Memories" light />
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-2">
          {galleryItems.map((item, i) => (
            <div
              key={item.en}
              className={`relative rounded-sm overflow-hidden group ${item.tall ? 'row-span-2' : ''}`}
              style={{ aspectRatio: item.tall ? '3/4' : '4/3', background: item.g }}
            >
              <div className="absolute inset-0 border-4 border-[#C4943C] opacity-40" />
              <div className="absolute inset-2 border border-[#E8C97A] opacity-25" />
              <div className="absolute top-2 left-2 w-5 h-5 border-t-2 border-l-2 border-[#E8C97A] opacity-65" />
              <div className="absolute top-2 right-2 w-5 h-5 border-t-2 border-r-2 border-[#E8C97A] opacity-65" />
              <div className="absolute bottom-2 left-2 w-5 h-5 border-b-2 border-l-2 border-[#E8C97A] opacity-65" />
              <div className="absolute bottom-2 right-2 w-5 h-5 border-b-2 border-r-2 border-[#E8C97A] opacity-65" />
              <div className="absolute inset-0 flex items-center justify-center">
                <LotusFlower size={40} light className="opacity-20 group-hover:opacity-35 transition-opacity" />
              </div>
              <div
                className="absolute bottom-0 left-0 right-0 p-3 text-center"
                style={{ background: 'linear-gradient(to top, rgba(20,4,4,0.9), transparent)' }}
              >
                <p className="text-[#E8C97A] text-sm font-bold" style={{ fontFamily: "'Tiro Devanagari Hindi', serif" }}>{item.label}</p>
                <p className="text-[#C4943C] text-[9px] tracking-[0.2em] uppercase" style={{ fontFamily: "'Cinzel', serif" }}>[{item.en}]</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── FAMILY SECTION ───────────────────────────────────────────────

function Family() {
  return (
    <section id="parivar" className="py-16 md:py-24" style={{ background: '#2A0606' }}>
      <div className="max-w-2xl mx-auto px-4 text-center">
        <SectionHeading devanagari="कडव परिवार" english="Kadav Family" />
        <div
          className="relative mx-auto mt-2 rounded-sm overflow-hidden"
          style={{ width: 260, height: 300, background: 'linear-gradient(135deg, #3D0A0A, #6B1A1A)', border: '3px solid #C4943C' }}
        >
          <div className="absolute inset-0 border-4 border-[#C4943C] opacity-25" />
          <div className="absolute inset-3 border border-[#E8C97A] opacity-18" />
          {['top-2 left-2', 'top-2 right-2 rotate-90', 'bottom-2 right-2 rotate-180', 'bottom-2 left-2 -rotate-90'].map((pos) => (
            <div key={pos} className={`absolute ${pos}`}>
              <svg viewBox="0 0 24 24" width="24" height="24">
                <path d="M2 2 L12 2 L2 12 Z" fill="#C4943C" opacity="0.65" />
              </svg>
            </div>
          ))}
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
            <LotusFlower size={48} light className="opacity-45" />
            <p className="text-[#C4943C] text-[10px] tracking-[0.25em]" style={{ fontFamily: "'Cinzel', serif" }}>
              [FAMILY PHOTO]
            </p>
          </div>
        </div>
        <div className="flex justify-center gap-4 mt-6 opacity-50">
          <LotusFlower size={24} />
          <LotusFlower size={32} />
          <LotusFlower size={24} />
        </div>
        <div
          className="mt-6 p-6 rounded-sm"
          style={{ background: 'rgba(196, 148, 60, 0.05)', border: '1px solid rgba(196, 148, 60, 0.22)' }}
        >
          <p className="text-[#FEF5DC] text-base leading-relaxed" style={{ fontFamily: "'Tiro Devanagari Hindi', serif" }}>
            [FAMILY MESSAGE]
          </p>
          <p className="text-[#C4943C] text-xs mt-3 opacity-65" style={{ fontFamily: "'Cinzel', serif" }}>
            — Replace with your family message —
          </p>
        </div>
        <div className="flex justify-center gap-6 mt-6 opacity-45">
          <DivaLamp size={36} />
          <DivaLamp size={36} />
        </div>
      </div>
    </section>
  )
}

// ─── LOCATION ────────────────────────────────────────────────────

function Location() {
  return (
    <section id="sthaan" className="py-16 md:py-24" style={{ background: '#FEF5DC' }}>
      <div className="max-w-3xl mx-auto px-4">
        <SectionHeading devanagari="बाप्पाच्या दर्शनासाठी जरूर या!" english="Find Us" light />
        <div className="text-center mb-8">
          <p className="text-[#3D0A0A] text-lg leading-relaxed" style={{ fontFamily: "'Noto Serif Devanagari', serif" }}>
            X4XQ+PH9, Panvel<br />
            Shilottar Raichur, Maharashtra<br />
            410206
          </p>
        </div>
        <div
          className="relative rounded-sm overflow-hidden mb-6"
          style={{
            height: 260,
            background: 'linear-gradient(135deg, rgba(196,148,60,0.12), rgba(212,98,26,0.08))',
            border: '2px solid #C4943C',
          }}
        >
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
            <div className="text-5xl">📍</div>
            <p className="text-[#8B4513] text-xs tracking-widest" style={{ fontFamily: "'Cinzel', serif" }}>
              [MAP PLACEHOLDER]
            </p>
          </div>
          <div className="absolute top-2 left-2 w-5 h-5 border-t-2 border-l-2 border-[#C4943C] opacity-55" />
          <div className="absolute top-2 right-2 w-5 h-5 border-t-2 border-r-2 border-[#C4943C] opacity-55" />
          <div className="absolute bottom-2 left-2 w-5 h-5 border-b-2 border-l-2 border-[#C4943C] opacity-55" />
          <div className="absolute bottom-2 right-2 w-5 h-5 border-b-2 border-r-2 border-[#C4943C] opacity-55" />
        </div>
        <div className="text-center">
          <a
            href="#"
            className="inline-flex items-center gap-2 px-8 py-4 text-[#FEF5DC] transition-all duration-300 hover:scale-105 text-sm"
            style={{
              background: 'linear-gradient(135deg, #C4943C, #D4A840)',
              fontFamily: "'Cinzel', serif",
              letterSpacing: '0.1em',
              boxShadow: '0 4px 20px rgba(196, 148, 60, 0.35)',
            }}
          >
            📍 मार्गदर्शन मिळवा &nbsp;·&nbsp; Get Directions
          </a>
        </div>
      </div>
    </section>
  )
}

// ─── RSVP ────────────────────────────────────────────────────────

function RSVP() {
  const [form, setForm] = useState({ name: '', count: '1', mobile: '', attendance: 'yes', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const set = (k: string, v: string) => setForm((f) => ({ ...f, [k]: v }))

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const fieldStyle: React.CSSProperties = {
    background: 'rgba(196, 148, 60, 0.06)',
    border: '1px solid rgba(196, 148, 60, 0.3)',
    color: '#FEF5DC',
    fontFamily: "'Noto Serif Devanagari', serif",
    padding: '0.75rem 1rem',
    width: '100%',
    outline: 'none',
    borderRadius: '2px',
    fontSize: '0.95rem',
  }

  return (
    <section id="rsvp" className="py-16 md:py-24" style={{ background: '#2A0606' }}>
      <div className="max-w-xl mx-auto px-4">
        <SectionHeading devanagari="आपली उपस्थिती कळवा" english="RSVP" />
        <p className="text-center text-[#E8C97A] mb-8 -mt-4" style={{ fontFamily: "'Tiro Devanagari Hindi', serif" }}>
          आपली उपस्थिती आमच्यासाठी अमूल्य आहे!
        </p>

        {submitted ? (
          <div
            className="text-center p-10 rounded-sm"
            style={{ border: '2px solid #C4943C', background: 'rgba(196,148,60,0.05)' }}
          >
            <LotusFlower size={64} light className="mx-auto mb-4" />
            <p className="text-[#E8C97A] text-2xl mb-2" style={{ fontFamily: "'Tiro Devanagari Hindi', serif" }}>
              गणपती बाप्पा मोरया! 🙏
            </p>
            <p className="text-[#C4943C] text-xs tracking-wider" style={{ fontFamily: "'Cinzel', serif" }}>
              Thank you — your RSVP has been received.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-[#C4943C] text-sm mb-2" style={{ fontFamily: "'Tiro Devanagari Hindi', serif" }}>
                नाव (Name)
              </label>
              <input style={fieldStyle} value={form.name} onChange={(e) => set('name', e.target.value)} placeholder="आपले नाव..." required />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-[#C4943C] text-sm mb-2" style={{ fontFamily: "'Tiro Devanagari Hindi', serif" }}>
                  किती जण?
                </label>
                <input style={fieldStyle} type="number" min="1" max="20" value={form.count} onChange={(e) => set('count', e.target.value)} />
              </div>
              <div>
                <label className="block text-[#C4943C] text-sm mb-2" style={{ fontFamily: "'Tiro Devanagari Hindi', serif" }}>
                  मोबाईल
                </label>
                <input style={fieldStyle} value={form.mobile} onChange={(e) => set('mobile', e.target.value)} placeholder="मोबाईल नंबर" type="tel" />
              </div>
            </div>
            <div>
              <label className="block text-[#C4943C] text-sm mb-3" style={{ fontFamily: "'Tiro Devanagari Hindi', serif" }}>
                उपस्थिती (Attendance)
              </label>
              <div className="flex gap-3">
                {[{ val: 'yes', label: 'होय ✓' }, { val: 'maybe', label: 'कदाचित' }, { val: 'no', label: 'नाही' }].map((opt) => (
                  <button
                    key={opt.val}
                    type="button"
                    onClick={() => set('attendance', opt.val)}
                    className="flex-1 py-3 text-sm transition-all duration-200"
                    style={{
                      fontFamily: "'Tiro Devanagari Hindi', serif",
                      border: `1px solid ${form.attendance === opt.val ? '#C4943C' : 'rgba(196,148,60,0.3)'}`,
                      background: form.attendance === opt.val ? '#C4943C' : 'rgba(196,148,60,0.04)',
                      color: form.attendance === opt.val ? '#1A0404' : '#E8C97A',
                      fontWeight: form.attendance === opt.val ? 700 : 400,
                    }}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label className="block text-[#C4943C] text-sm mb-2" style={{ fontFamily: "'Tiro Devanagari Hindi', serif" }}>
                संदेश (Message)
              </label>
              <textarea
                style={{ ...fieldStyle, resize: 'vertical', minHeight: '96px' }}
                value={form.message}
                onChange={(e) => set('message', e.target.value)}
                placeholder="आपला संदेश..."
              />
            </div>
            <div className="text-center pt-2">
              <button
                type="submit"
                className="px-12 py-4 transition-all duration-300 hover:scale-105 active:scale-95"
                style={{
                  background: 'linear-gradient(135deg, #C4943C, #D4A840)',
                  fontFamily: "'Cinzel', serif",
                  letterSpacing: '0.12em',
                  fontSize: '0.875rem',
                  color: '#1A0404',
                  fontWeight: 700,
                  boxShadow: '0 4px 20px rgba(196, 148, 60, 0.35)',
                }}
              >
                उपस्थिती कळवा
              </button>
            </div>
          </form>
        )}

        {/* WhatsApp */}
        <div className="mt-10 text-center">
          <GoldDivider className="mb-8" />
          <p className="text-[#C4943C] text-[10px] tracking-[0.3em] mb-4" style={{ fontFamily: "'Cinzel', serif" }}>
            OR SHARE VIA
          </p>
          <a
            href={`https://wa.me/?text=${encodeURIComponent('🪔 कडव परिवाराच्या गणेशोत्सवाचे आमंत्रण — गणपती बाप्पा मोरया! 🙏')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 transition-all duration-300 hover:scale-105 text-base"
            style={{
              background: 'linear-gradient(135deg, #3D0A0A, #2A0606)',
              border: '2px solid #C4943C',
              color: '#E8C97A',
              fontFamily: "'Tiro Devanagari Hindi', serif",
            }}
          >
            <span className="text-xl">📱</span>
            WhatsApp वर आमंत्रण पाठवा
          </a>
        </div>
      </div>
    </section>
  )
}

// ─── FOOTER ──────────────────────────────────────────────────────

function Footer() {
  return (
    <footer className="py-12 text-center" style={{ background: '#0E0202', borderTop: '2px solid rgba(196, 148, 60, 0.28)' }}>
      <div className="max-w-xl mx-auto px-4">
        <div className="flex justify-center gap-4 mb-5 opacity-35">
          <LotusFlower size={26} light />
          <LotusFlower size={36} light />
          <LotusFlower size={26} light />
        </div>
        <p className="text-[#E8C97A] text-2xl md:text-3xl font-bold mb-2" style={{ fontFamily: "'Tiro Devanagari Hindi', serif" }}>
          गणपती बाप्पा मोरया! 🙏
        </p>
        <p className="text-[#C4943C] text-lg mb-4" style={{ fontFamily: "'Tiro Devanagari Hindi', serif" }}>
          कडव परिवार
        </p>
        <GoldDivider className="my-5" />
        <p className="text-[#FEF5DC] text-sm opacity-65 leading-relaxed" style={{ fontFamily: "'Noto Serif Devanagari', serif" }}>
          आपल्या उपस्थितीने आमचा गणेशोत्सव अधिक मंगलमय होईल.
        </p>
        <div className="flex justify-center gap-2 mt-6 opacity-22">
          {Array.from({ length: 9 }).map((_, i) => (
            <div key={i} className="rounded-full" style={{ width: i % 2 === 0 ? 8 : 5, height: i % 2 === 0 ? 8 : 5, background: '#C4943C' }} />
          ))}
        </div>
      </div>
    </footer>
  )
}

// ─── MAIN INVITATION ─────────────────────────────────────────────

function MainInvitation() {
  return (
    <div style={{ animation: 'main-enter 0.8s ease-out' }}>
      <Hero />
      <InvitationMessage />
      <Location />
      <Gallery />
      <Family />
      <Footer />
    </div>
  )
}

// ─── APP ──────────────────────────────────────────────────────────

export default function App() {
  const [phase, setPhase] = useState<'welcome' | 'exiting' | 'main'>('welcome')

  const handleEnter = () => {
    setPhase('exiting')
    setTimeout(() => setPhase('main'), 1400)
  }

  return (
    <>
      {phase !== 'main' && <WelcomeScreen onEnter={handleEnter} isExiting={phase === 'exiting'} />}
      {phase === 'main' && <MainInvitation />}
    </>
  )
}
