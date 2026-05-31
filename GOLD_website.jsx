import { useState, useEffect } from "react";

const NAV_LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "programs", label: "Programs" },
  { id: "fli", label: "FLI" },
  { id: "podcast", label: "RE-BUILD" },
  { id: "impact", label: "Impact" },
  { id: "join", label: "Join GOLD" },
  { id: "contact", label: "Contact" },
];

const COLORS = {
  forest: "#1A4A2E",
  forestMid: "#22613C",
  forestLight: "#2D7A4F",
  forestPale: "#EAF3EC",
  gold: "#C9A020",
  goldLight: "#E8BE3A",
  goldPale: "#FBF3D5",
  white: "#FFFFFF",
  offWhite: "#F7F9F5",
  text: "#1A2E1F",
  textMuted: "#5E7A68",
  cream: "#FDFAF3",
};

// SVG Icons
const Icons = {
  Star: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/>
    </svg>
  ),
  Users: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
    </svg>
  ),
  Mic: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/>
      <path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/>
    </svg>
  ),
  Globe: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/>
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
    </svg>
  ),
  BookOpen: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
    </svg>
  ),
  Home: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9,22 9,12 15,12 15,22"/>
    </svg>
  ),
  Scale: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="3" x2="12" y2="21"/><path d="M3 9l9-6 9 6"/><path d="M3 9l4 8H-1"/><path d="M21 9l4 8h-8"/><path d="M3 17h6"/><path d="M15 17h6"/>
    </svg>
  ),
  Lightbulb: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <line x1="9" y1="18" x2="15" y2="18"/><line x1="10" y1="22" x2="14" y2="22"/>
      <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14"/>
    </svg>
  ),
  Award: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>
    </svg>
  ),
  Heart: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
    </svg>
  ),
  Target: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>
    </svg>
  ),
  Handshake: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z"/>
    </svg>
  ),
  GraduationCap: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>
    </svg>
  ),
  TrendingUp: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="23,6 13.5,15.5 8.5,10.5 1,18"/><polyline points="17,6 23,6 23,12"/>
    </svg>
  ),
  Play: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <polygon points="5,3 19,12 5,21"/>
    </svg>
  ),
  ArrowRight: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12,5 19,12 12,19"/>
    </svg>
  ),
  Mail: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
    </svg>
  ),
  MapPin: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
    </svg>
  ),
  Twitter: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  ),
  Linkedin: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/>
    </svg>
  ),
  Facebook: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
    </svg>
  ),
  Youtube: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z"/>
    </svg>
  ),
  Instagram: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
    </svg>
  ),
  Menu: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>
    </svg>
  ),
  X: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
    </svg>
  ),
  CheckCircle: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22,4 12,14.01 9,11.01"/>
    </svg>
  ),
  Clock: () => (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <circle cx="12" cy="12" r="10"/><polyline points="12,6 12,12 16,14"/>
    </svg>
  ),
  Calendar: () => (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
    </svg>
  ),
  Zap: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13,2 3,14 12,14 11,22 21,10 12,10"/>
    </svg>
  ),
  Shield: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    </svg>
  ),
  Broadcast: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="2"/><path d="M4.93 4.93a10 10 0 0 0 0 14.14"/><path d="M7.76 7.76a6 6 0 0 0 0 8.49"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/><path d="M16.24 7.76a6 6 0 0 1 0 8.49"/>
    </svg>
  ),
};

const LOGO_SRC = "/mnt/user-data/uploads/GOLD_LOGO2.png";

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=DM+Sans:wght@300;400;500;600;700&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --forest: #1A4A2E;
    --forestMid: #22613C;
    --forestLight: #2D7A4F;
    --forestPale: #EAF3EC;
    --gold: #C9A020;
    --goldLight: #E8BE3A;
    --goldPale: #FBF3D5;
    --white: #FFFFFF;
    --offWhite: #F7F9F5;
    --cream: #FDFAF3;
    --text: #1A2E1F;
    --textMuted: #5E7A68;
  }

  html { scroll-behavior: smooth; }

  body {
    font-family: 'DM Sans', sans-serif;
    background: var(--white);
    color: var(--text);
    overflow-x: hidden;
    line-height: 1.6;
  }

  ::-webkit-scrollbar { width: 4px; }
  ::-webkit-scrollbar-track { background: var(--offWhite); }
  ::-webkit-scrollbar-thumb { background: var(--forest); border-radius: 2px; }

  /* ── NAV ── */
  .nav-wrap {
    position: fixed; top: 0; left: 0; right: 0; z-index: 1000;
    transition: all 0.4s ease;
  }
  .nav-wrap.scrolled {
    background: rgba(255,255,255,0.97);
    backdrop-filter: blur(16px);
    border-bottom: 1px solid rgba(26,74,46,0.1);
    box-shadow: 0 2px 24px rgba(26,74,46,0.08);
  }
  .nav-inner {
    max-width: 1320px; margin: 0 auto;
    display: flex; align-items: center; justify-content: space-between;
    padding: 1rem 2rem;
  }
  .nav-logo { display: flex; align-items: center; gap: 0.6rem; cursor: pointer; text-decoration: none; }
  .nav-logo img { height: 44px; width: auto; object-fit: contain; }
  .nav-logo-text { font-family: 'DM Sans', sans-serif; font-weight: 700; font-size: 1.1rem; color: var(--forest); }
  .nav-logo-sub { font-size: 0.6rem; font-weight: 400; color: var(--textMuted); letter-spacing: 0.14em; text-transform: uppercase; }

  .nav-links { display: flex; gap: 0.1rem; align-items: center; }
  .nav-link {
    padding: 0.45rem 0.8rem; font-size: 0.83rem; font-weight: 500;
    color: var(--text); cursor: pointer; border-radius: 6px;
    transition: all 0.2s; letter-spacing: 0.01em; border: none; background: none;
    font-family: 'DM Sans', sans-serif;
  }
  .nav-link:hover { color: var(--forest); background: var(--forestPale); }
  .nav-link.active { color: var(--forest); font-weight: 600; }
  .nav-cta {
    background: var(--forest); color: var(--white);
    font-weight: 600; padding: 0.55rem 1.3rem; border-radius: 8px; border: none;
    font-size: 0.83rem; cursor: pointer; font-family: 'DM Sans', sans-serif;
    transition: all 0.2s; letter-spacing: 0.02em;
  }
  .nav-cta:hover { background: var(--forestMid); box-shadow: 0 4px 16px rgba(26,74,46,0.3); transform: translateY(-1px); }

  .mob-btn { display: none; background: none; border: none; cursor: pointer; color: var(--forest); padding: 0.5rem; }
  .mob-nav {
    background: rgba(255,255,255,0.98); padding: 0.75rem 1.5rem 1.5rem;
    display: flex; flex-direction: column; gap: 0.15rem;
    border-top: 1px solid rgba(26,74,46,0.08);
    box-shadow: 0 8px 24px rgba(0,0,0,0.08);
  }
  .mob-nav .nav-link { padding: 0.7rem 0.5rem; font-size: 0.95rem; }

  /* ── HERO ── */
  .hero {
    min-height: 100vh; background: var(--forest);
    position: relative; overflow: hidden;
    display: flex; align-items: center;
  }
  .hero-mesh {
    position: absolute; inset: 0;
    background:
      radial-gradient(ellipse 70% 60% at 80% 30%, rgba(201,160,32,0.12) 0%, transparent 65%),
      radial-gradient(ellipse 50% 70% at 10% 90%, rgba(45,122,79,0.5) 0%, transparent 55%),
      radial-gradient(ellipse 40% 40% at 50% 0%, rgba(34,97,60,0.8) 0%, transparent 50%);
  }
  .hero-dots {
    position: absolute; inset: 0; opacity: 0.06;
    background-image: radial-gradient(circle, rgba(201,160,32,1) 1.2px, transparent 1.2px);
    background-size: 32px 32px;
  }
  .hero-content {
    max-width: 1320px; margin: 0 auto; padding: 8rem 2rem 5rem;
    position: relative; z-index: 2;
    display: grid; grid-template-columns: 1.1fr 0.9fr; gap: 5rem; align-items: center;
  }
  .hero-pill {
    display: inline-flex; align-items: center; gap: 0.5rem;
    background: rgba(201,160,32,0.15); border: 1px solid rgba(201,160,32,0.35);
    color: var(--goldLight); font-size: 0.7rem; font-weight: 600;
    letter-spacing: 0.15em; text-transform: uppercase;
    padding: 0.4rem 0.9rem; border-radius: 100px; margin-bottom: 1.5rem;
  }
  .hero-pill-dot {
    width: 6px; height: 6px; border-radius: 50%;
    background: var(--goldLight); animation: blink 2s infinite;
  }
  @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0.2} }
  .hero-h1 {
    font-family: 'Playfair Display', serif;
    font-size: clamp(2.8rem, 5.5vw, 4.5rem);
    font-weight: 700; line-height: 1.08;
    color: var(--white); letter-spacing: -0.02em; margin-bottom: 1.5rem;
  }
  .hero-h1 em { font-style: italic; color: var(--goldLight); }
  .hero-sub {
    font-size: 1.05rem; line-height: 1.8;
    color: rgba(255,255,255,0.72); font-weight: 300;
    max-width: 520px; margin-bottom: 2.5rem;
  }
  .hero-btns { display: flex; gap: 1rem; flex-wrap: wrap; }
  .btn-gold {
    background: linear-gradient(135deg, var(--gold), var(--goldLight));
    color: var(--forest); font-weight: 700;
    padding: 0.9rem 2.1rem; border-radius: 10px; border: none;
    font-size: 0.9rem; cursor: pointer; font-family: 'DM Sans', sans-serif;
    transition: all 0.25s; letter-spacing: 0.02em;
    display: inline-flex; align-items: center; gap: 0.5rem;
  }
  .btn-gold:hover { transform: translateY(-2px); box-shadow: 0 10px 30px rgba(201,160,32,0.45); }
  .btn-outline-white {
    background: transparent; color: var(--white);
    padding: 0.9rem 2.1rem; border-radius: 10px;
    border: 1.5px solid rgba(255,255,255,0.3);
    font-size: 0.9rem; cursor: pointer;
    font-family: 'DM Sans', sans-serif; font-weight: 500;
    transition: all 0.25s;
  }
  .btn-outline-white:hover { border-color: var(--goldLight); color: var(--goldLight); background: rgba(201,160,32,0.05); }

  .hero-stats {
    display: flex; gap: 2.5rem; margin-top: 3rem;
    padding-top: 2rem; border-top: 1px solid rgba(255,255,255,0.1);
  }
  .stat-num {
    font-family: 'Playfair Display', serif;
    font-size: 2.6rem; font-weight: 700;
    color: var(--goldLight); line-height: 1;
  }
  .stat-lbl {
    font-size: 0.7rem; color: rgba(255,255,255,0.45);
    text-transform: uppercase; letter-spacing: 0.1em; margin-top: 0.3rem;
  }

  /* Hero visual card */
  .hero-visual { position: relative; }
  .hero-main-card {
    background: rgba(255,255,255,0.06);
    border: 1px solid rgba(201,160,32,0.25);
    border-radius: 20px; padding: 2rem;
    backdrop-filter: blur(12px);
    box-shadow: 0 32px 64px rgba(0,0,0,0.25);
  }
  .hero-card-badge {
    background: rgba(201,160,32,0.2); color: var(--goldLight);
    font-size: 0.68rem; font-weight: 700; letter-spacing: 0.12em;
    text-transform: uppercase; padding: 0.35rem 0.75rem; border-radius: 6px;
    display: inline-block; margin-bottom: 1.2rem;
  }
  .hero-card-title {
    font-family: 'Playfair Display', serif;
    font-size: 1.3rem; font-weight: 600; line-height: 1.3;
    color: var(--white); margin-bottom: 1.25rem;
  }
  .hero-card-item {
    display: flex; align-items: center; gap: 0.65rem;
    font-size: 0.83rem; color: rgba(255,255,255,0.7);
    padding: 0.45rem 0; border-bottom: 1px solid rgba(255,255,255,0.06);
  }
  .hero-card-item:last-child { border: none; }
  .hero-card-dot {
    width: 6px; height: 6px; border-radius: 50%;
    background: var(--gold); flex-shrink: 0;
  }
  .hero-float {
    position: absolute;
    background: rgba(26,74,46,0.9);
    border: 1px solid rgba(201,160,32,0.2);
    border-radius: 14px; padding: 1rem 1.25rem;
    backdrop-filter: blur(16px);
  }
  .hero-float-1 { top: -20px; right: -24px; }
  .hero-float-2 { bottom: -16px; left: -28px; }
  .float-num {
    font-family: 'Playfair Display', serif;
    font-size: 1.9rem; font-weight: 700; color: var(--goldLight); line-height: 1;
  }
  .float-lbl { font-size: 0.68rem; color: rgba(255,255,255,0.5); margin-top: 0.2rem; }

  /* ── SECTIONS ── */
  .section { padding: 6rem 2rem; }
  .section-inner { max-width: 1320px; margin: 0 auto; }
  .sec-tag {
    display: inline-flex; align-items: center; gap: 0.6rem;
    color: var(--forestMid); font-size: 0.7rem; font-weight: 700;
    letter-spacing: 0.2em; text-transform: uppercase; margin-bottom: 0.75rem;
  }
  .sec-tag::before { content:''; display:block; width:20px; height:2px; background:var(--gold); border-radius:1px; }
  .sec-title {
    font-family: 'Playfair Display', serif;
    font-size: clamp(1.9rem, 3.8vw, 3rem);
    font-weight: 700; line-height: 1.15; letter-spacing: -0.02em;
    color: var(--text);
  }
  .sec-title em { font-style: italic; color: var(--forestMid); }
  .sec-sub {
    font-size: 0.95rem; line-height: 1.8;
    color: var(--textMuted); font-weight: 400; max-width: 540px;
  }
  /* dark section overrides */
  .dark-section { background: var(--forest); color: var(--white); }
  .dark-section .sec-tag { color: var(--goldLight); }
  .dark-section .sec-title { color: var(--white); }
  .dark-section .sec-title em { color: var(--goldLight); }
  .dark-section .sec-sub { color: rgba(255,255,255,0.6); }

  /* ── VM Cards ── */
  .vm-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-top: 3rem; }
  .vm-card { padding: 2.5rem; border-radius: 16px; position: relative; overflow: hidden; }
  .vm-vision { background: var(--forest); border: 1px solid rgba(26,74,46,0.1); }
  .vm-mission { background: var(--forestPale); border: 1px solid rgba(26,74,46,0.12); }
  .vm-label { font-size: 0.68rem; font-weight: 700; letter-spacing: 0.2em; text-transform: uppercase; color: var(--gold); margin-bottom: 1rem; }
  .vm-text { font-family: 'Playfair Display', serif; font-size: 1.35rem; font-weight: 500; line-height: 1.55; }
  .vm-vision .vm-text { color: var(--white); }
  .vm-mission .vm-text { color: var(--forest); }

  /* ── WHY Cards ── */
  .why-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 1.5rem; margin-top: 3rem; }
  .why-card {
    background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.1);
    border-radius: 14px; padding: 1.85rem; transition: all 0.3s; cursor: default;
  }
  .why-card:hover { border-color: rgba(201,160,32,0.4); transform: translateY(-4px); background: rgba(255,255,255,0.09); }
  .why-icon {
    width: 48px; height: 48px; border-radius: 12px;
    background: rgba(201,160,32,0.15); color: var(--goldLight);
    display: flex; align-items: center; justify-content: center; margin-bottom: 1.25rem;
  }
  .why-title { font-size: 1rem; font-weight: 600; margin-bottom: 0.55rem; color: var(--white); }
  .why-desc { font-size: 0.84rem; line-height: 1.7; color: rgba(255,255,255,0.55); }

  /* ── Programs ── */
  .programs-bg { background: var(--cream); }
  .programs-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 1.5rem; margin-top: 3rem; }
  .prog-card {
    background: var(--white); border: 1px solid rgba(26,74,46,0.09);
    border-radius: 16px; padding: 2rem; transition: all 0.3s; cursor: pointer;
    position: relative; overflow: hidden;
  }
  .prog-card::after {
    content:''; position:absolute; bottom:0; left:0; right:0;
    height:3px; background:linear-gradient(90deg,var(--forest),var(--forestLight));
    transform:scaleX(0); transition:transform 0.3s; transform-origin:left;
  }
  .prog-card:hover::after { transform:scaleX(1); }
  .prog-card:hover { box-shadow:0 12px 40px rgba(26,74,46,0.1); transform:translateY(-4px); }
  .prog-icon {
    width: 52px; height: 52px; border-radius: 14px;
    background: var(--forest); color: var(--goldLight);
    display: flex; align-items: center; justify-content: center; margin-bottom: 1.25rem;
    border: 1px solid rgba(201,160,32,0.2);
  }
  .prog-title { font-size: 1rem; font-weight: 700; color: var(--text); margin-bottom: 0.5rem; }
  .prog-desc { font-size: 0.83rem; line-height: 1.7; color: var(--textMuted); }
  .prog-link {
    display: inline-flex; align-items: center; gap: 0.4rem;
    color: var(--forestMid); font-size: 0.78rem; font-weight: 700;
    margin-top: 1rem; letter-spacing: 0.05em; text-transform: uppercase;
  }

  /* ── Impact Strip ── */
  .impact-strip {
    background: linear-gradient(135deg, var(--forest), var(--forestMid));
    padding: 4.5rem 2rem;
  }
  .impact-strip-inner {
    max-width: 1320px; margin: 0 auto;
    display: grid; grid-template-columns: repeat(4,1fr);
    gap: 2rem; text-align: center;
  }
  .impact-num {
    font-family: 'Playfair Display', serif;
    font-size: 3.5rem; font-weight: 700; color: var(--goldLight); line-height: 1;
  }
  .impact-lbl {
    font-size: 0.75rem; font-weight: 600; color: rgba(255,255,255,0.55);
    text-transform: uppercase; letter-spacing: 0.12em; margin-top: 0.5rem;
  }

  /* ── Testimonials ── */
  .testi-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 1.5rem; margin-top: 3rem; }
  .testi-card {
    background: var(--white); border: 1px solid rgba(26,74,46,0.1);
    border-radius: 16px; padding: 2rem; position: relative;
    box-shadow: 0 2px 16px rgba(26,74,46,0.05);
  }
  .testi-quote {
    font-size: 3.5rem; line-height: 1; color: var(--gold); opacity: 0.25;
    font-family: 'Playfair Display', serif;
    position: absolute; top: 1.2rem; right: 1.5rem;
  }
  .testi-text {
    font-family: 'Playfair Display', serif;
    font-size: 1rem; line-height: 1.75; font-style: italic;
    color: var(--text); margin-bottom: 1.5rem; opacity: 0.85;
  }
  .testi-author { display: flex; align-items: center; gap: 0.75rem; }
  .testi-avatar {
    width: 42px; height: 42px; border-radius: 50%;
    background: linear-gradient(135deg, var(--forest), var(--forestLight));
    display: flex; align-items: center; justify-content: center;
    font-weight: 700; font-size: 0.82rem; color: var(--white); flex-shrink: 0;
  }
  .testi-name { font-size: 0.88rem; font-weight: 700; color: var(--text); }
  .testi-role { font-size: 0.74rem; color: var(--textMuted); }

  /* ── Podcast ── */
  .podcast-bg { background: var(--offWhite); }
  .podcast-featured {
    background: var(--forest); border: 1px solid rgba(201,160,32,0.2);
    border-radius: 20px; padding: 2.5rem;
    display: grid; grid-template-columns: auto 1fr; gap: 2rem; align-items: center;
    margin-bottom: 2rem;
  }
  .podcast-cover {
    width: 120px; height: 120px; border-radius: 14px; flex-shrink: 0;
    background: linear-gradient(135deg, var(--gold), var(--goldLight));
    display: flex; align-items: center; justify-content: center;
    color: var(--forest);
  }
  .podcast-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 1.5rem; }
  .podcast-card {
    background: var(--white); border: 1px solid rgba(26,74,46,0.1);
    border-radius: 14px; padding: 1.5rem; transition: all 0.3s; cursor: pointer;
    box-shadow: 0 2px 12px rgba(26,74,46,0.04);
  }
  .podcast-card:hover { border-color: var(--forest); transform: translateY(-3px); box-shadow:0 8px 28px rgba(26,74,46,0.1); }
  .podcast-ep { font-size: 0.68rem; color: var(--forest); font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; margin-bottom: 0.5rem; }
  .podcast-title { font-weight: 600; font-size: 0.9rem; line-height: 1.4; margin-bottom: 0.75rem; color: var(--text); }
  .podcast-meta { font-size: 0.73rem; color: var(--textMuted); display: flex; gap: 0.5rem; align-items: center; }
  .play-btn {
    background: var(--forest); color: var(--white);
    border: none; border-radius: 8px; padding: 0.5rem 1rem;
    font-size: 0.78rem; font-weight: 600; cursor: pointer;
    font-family: 'DM Sans', sans-serif; margin-top: 1rem;
    display: inline-flex; align-items: center; gap: 0.4rem;
    transition: all 0.2s;
  }
  .play-btn:hover { background: var(--forestMid); }

  /* ── FLI ── */
  .fli-curriculum { display: grid; grid-template-columns: repeat(3,1fr); gap: 1rem; margin-top: 2rem; }
  .fli-mod {
    background: rgba(255,255,255,0.07); border: 1px solid rgba(255,255,255,0.1);
    border-radius: 12px; padding: 1.1rem 1.25rem;
    display: flex; align-items: center; gap: 0.75rem; transition: all 0.2s;
  }
  .fli-mod:hover { border-color: rgba(201,160,32,0.45); background: rgba(255,255,255,0.1); }
  .fli-num {
    width: 32px; height: 32px; border-radius: 8px; flex-shrink: 0;
    background: rgba(201,160,32,0.15); color: var(--goldLight);
    font-weight: 700; font-size: 0.78rem;
    display: flex; align-items: center; justify-content: center;
  }
  .fli-name { font-size: 0.85rem; font-weight: 500; color: rgba(255,255,255,0.85); }

  /* ── Values ── */
  .values-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 1.5rem; margin-top: 3rem; }
  .val-card {
    text-align: center; padding: 2rem 1.5rem;
    background: var(--white); border: 1px solid rgba(26,74,46,0.1);
    border-radius: 14px; transition: all 0.3s;
    box-shadow: 0 2px 12px rgba(26,74,46,0.04);
  }
  .val-card:hover { border-color: var(--forest); transform: translateY(-3px); box-shadow:0 10px 32px rgba(26,74,46,0.1); }
  .val-icon {
    width: 56px; height: 56px; border-radius: 50%;
    background: var(--forestPale); color: var(--forest);
    margin: 0 auto 1rem;
    display: flex; align-items: center; justify-content: center;
  }
  .val-name { font-weight: 700; font-size: 0.95rem; color: var(--forest); margin-bottom: 0.5rem; }
  .val-desc { font-size: 0.82rem; line-height: 1.65; color: var(--textMuted); }

  /* ── Join ── */
  .join-bg { background: var(--forestPale); }
  .join-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 1.5rem; margin-top: 3rem; }
  .join-card {
    background: var(--white); border-radius: 16px; padding: 2rem;
    border: 1px solid rgba(26,74,46,0.09);
    transition: all 0.3s; cursor: pointer; text-align: center;
    box-shadow: 0 2px 12px rgba(26,74,46,0.04);
  }
  .join-card:hover { border-color: var(--forest); box-shadow: 0 12px 40px rgba(26,74,46,0.12); transform: translateY(-4px); }
  .join-icon {
    width: 60px; height: 60px; border-radius: 50%;
    background: var(--forest); color: var(--goldLight);
    margin: 0 auto 1.25rem;
    display: flex; align-items: center; justify-content: center;
  }
  .join-title { font-weight: 700; font-size: 1.05rem; color: var(--text); margin-bottom: 0.5rem; }
  .join-desc { font-size: 0.82rem; line-height: 1.7; color: var(--textMuted); margin-bottom: 1.25rem; }
  .btn-forest {
    background: var(--forest); color: var(--white);
    border: none; border-radius: 8px; padding: 0.65rem 1.4rem;
    font-size: 0.82rem; font-weight: 600; cursor: pointer;
    font-family: 'DM Sans', sans-serif; transition: all 0.2s;
  }
  .btn-forest:hover { background: var(--forestMid); }

  /* ── Contact ── */
  .contact-grid { display: grid; grid-template-columns: 1fr 1.4fr; gap: 3rem; margin-top: 3rem; }
  .contact-info-card {
    background: var(--forest); border-radius: 16px; padding: 2.5rem; color: var(--white);
  }
  .contact-item { display: flex; gap: 1rem; margin-bottom: 1.5rem; align-items: flex-start; }
  .contact-icon {
    width: 42px; height: 42px; border-radius: 10px; flex-shrink: 0;
    background: rgba(201,160,32,0.15); color: var(--goldLight);
    display: flex; align-items: center; justify-content: center;
  }
  .contact-label { font-size: 0.68rem; color: rgba(255,255,255,0.45); text-transform: uppercase; letter-spacing: 0.12em; margin-bottom: 0.25rem; }
  .contact-value { font-size: 0.9rem; font-weight: 500; color: var(--white); }
  .contact-form {
    background: var(--white); border: 1px solid rgba(26,74,46,0.1);
    border-radius: 16px; padding: 2.5rem;
    box-shadow: 0 4px 24px rgba(26,74,46,0.07);
  }
  .form-group { margin-bottom: 1.2rem; }
  .form-label { font-size: 0.78rem; font-weight: 600; color: var(--text); margin-bottom: 0.45rem; display: block; letter-spacing: 0.03em; }
  .form-input, .form-textarea, .form-select {
    width: 100%; background: var(--offWhite);
    border: 1.5px solid rgba(26,74,46,0.12);
    border-radius: 8px; padding: 0.75rem 1rem;
    color: var(--text); font-size: 0.88rem;
    font-family: 'DM Sans', sans-serif;
    transition: all 0.2s; outline: none;
  }
  .form-input:focus, .form-textarea:focus, .form-select:focus {
    border-color: var(--forestMid); background: var(--white);
    box-shadow: 0 0 0 3px rgba(26,74,46,0.08);
  }
  .form-textarea { resize: vertical; min-height: 120px; }
  .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }

  /* Social */
  .social-links { display: flex; gap: 0.6rem; margin-top: 1.5rem; }
  .social-btn {
    width: 38px; height: 38px; border-radius: 9px;
    background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.12);
    display: flex; align-items: center; justify-content: center;
    color: rgba(255,255,255,0.5); cursor: pointer; transition: all 0.2s;
  }
  .social-btn:hover { border-color: var(--goldLight); color: var(--goldLight); background: rgba(201,160,32,0.1); }
  .social-btn-light {
    width: 38px; height: 38px; border-radius: 9px;
    background: var(--forestPale); border: 1px solid rgba(26,74,46,0.12);
    display: flex; align-items: center; justify-content: center;
    color: var(--textMuted); cursor: pointer; transition: all 0.2s;
  }
  .social-btn-light:hover { border-color: var(--forest); color: var(--forest); background: rgba(26,74,46,0.08); }

  /* ── CTA Banner ── */
  .cta-banner {
    background: linear-gradient(135deg, var(--gold), var(--goldLight));
    padding: 5rem 2rem; text-align: center;
  }
  .cta-banner h2 {
    font-family: 'Playfair Display', serif;
    font-size: clamp(1.8rem, 3.8vw, 2.8rem); font-weight: 700;
    color: var(--forest); line-height: 1.2; margin-bottom: 1rem;
  }
  .cta-banner p { color: rgba(26,74,46,0.7); font-size: 1rem; max-width: 480px; margin: 0 auto 2rem; }

  /* ── Footer ── */
  .footer { background: var(--forest); padding: 4rem 2rem 2rem; color: var(--white); }
  .footer-inner { max-width: 1320px; margin: 0 auto; }
  .footer-grid {
    display: grid; grid-template-columns: 2fr 1fr 1fr 1fr; gap: 3rem;
    padding-bottom: 3rem; border-bottom: 1px solid rgba(255,255,255,0.08); margin-bottom: 2rem;
  }
  .footer-brand p { font-size: 0.84rem; line-height: 1.8; color: rgba(255,255,255,0.45); margin-top: 1rem; max-width: 280px; }
  .footer-logo { display: flex; align-items: center; gap: 0.6rem; }
  .footer-logo img { height: 40px; width: auto; filter: brightness(0) invert(1); opacity: 0.9; }
  .footer-logo-text { font-weight: 700; font-size: 1.05rem; color: var(--white); }
  .footer-logo-sub { font-size: 0.6rem; color: rgba(255,255,255,0.4); letter-spacing: 0.14em; text-transform: uppercase; }
  .footer-col-title { font-size: 0.7rem; font-weight: 700; letter-spacing: 0.18em; text-transform: uppercase; color: var(--goldLight); margin-bottom: 1rem; }
  .footer-links { list-style: none; }
  .footer-links li { margin-bottom: 0.55rem; }
  .footer-links a { color: rgba(255,255,255,0.45); font-size: 0.84rem; text-decoration: none; transition: color 0.2s; cursor: pointer; }
  .footer-links a:hover { color: var(--goldLight); }
  .footer-bottom { display: flex; justify-content: space-between; align-items: center; font-size: 0.76rem; color: rgba(255,255,255,0.3); }
  .footer-bottom span { color: var(--goldLight); }

  /* ── Animations ── */
  @keyframes fadeUp { from { opacity:0; transform:translateY(20px); } to { opacity:1; transform:translateY(0); } }
  .fade-up { animation: fadeUp 0.6s ease both; }
  .fade-up-2 { animation: fadeUp 0.6s 0.15s ease both; }

  /* ── Responsive ── */
  @media (max-width: 1024px) {
    .hero-content { grid-template-columns: 1fr; }
    .hero-visual { display: none; }
    .vm-grid { grid-template-columns: 1fr; }
    .why-grid, .programs-grid { grid-template-columns: 1fr 1fr; }
    .testi-grid { grid-template-columns: 1fr 1fr; }
    .footer-grid { grid-template-columns: 1fr 1fr; }
  }
  @media (max-width: 768px) {
    .nav-links, .nav-cta { display: none; }
    .mob-btn { display: flex; }
    .why-grid, .programs-grid, .values-grid, .join-grid, .testi-grid, .podcast-grid, .fli-curriculum { grid-template-columns: 1fr; }
    .impact-strip-inner { grid-template-columns: 1fr 1fr; }
    .contact-grid, .form-row { grid-template-columns: 1fr; }
    .footer-grid { grid-template-columns: 1fr; }
    .footer-bottom { flex-direction: column; gap: 0.5rem; text-align: center; }
    .podcast-featured { grid-template-columns: 1fr; }
    .hero-stats { gap: 1.5rem; }
  }
`;

const STATS = [
  { number: "500+", label: "Leaders Trained" },
  { number: "20+", label: "Events Organized" },
  { number: "12+", label: "Communities Reached" },
  { number: "5+", label: "Years of Impact" },
];

const PROGRAMS = [
  { Icon: Icons.Star, title: "Future Leaders Initiative", desc: "A structured curriculum covering leadership, governance, critical thinking, entrepreneurship, African history, ethics, and civic responsibility.", link: "fli" },
  { Icon: Icons.Users, title: "Mentorship Programs", desc: "Connecting emerging leaders with experienced mentors across business, government, education, and community development.", link: "join" },
  { Icon: Icons.Globe, title: "Leadership Conferences", desc: "High-impact gatherings bringing together thought leaders, policymakers, and young changemakers to exchange ideas and strategies.", link: "join" },
  { Icon: Icons.Home, title: "Community Impact Projects", desc: "Hands-on initiatives that empower participants to apply leadership skills in solving real community challenges across Africa.", link: "join" },
  { Icon: Icons.BookOpen, title: "Capacity Building", desc: "Workshops, training sessions, and seminars designed to strengthen professional and personal competencies of young leaders.", link: "join" },
  { Icon: Icons.Mic, title: "RE-BUILD Podcast", desc: "Conversations on business, governance, entrepreneurship, mentorship, and African development for the next generation.", link: "podcast" },
];

const TESTIMONIALS = [
  { text: "GOLD transformed how I see leadership and Africa's future. The FLI curriculum gave me practical tools and a burning sense of purpose for nation-building.", name: "Chidera Nwosu", role: "FLI Fellow, University of Nigeria", initials: "CN" },
  { text: "The mentorship I received through GOLD connected me to a network of extraordinary leaders. I entered as a student and left as a changemaker.", name: "Amara Osei", role: "Young Entrepreneur, Accra", initials: "AO" },
  { text: "RE-BUILD Podcast opened my eyes to governance and what ethical leadership truly means. GOLD is doing essential work for our continent.", name: "Fatima Al-Hassan", role: "Law Student, ABU Zaria", initials: "FA" },
];

const FLI_MODULES = [
  "Leadership Foundations", "African History & Civilization", "Governance & Public Policy",
  "Critical Thinking", "Entrepreneurship", "Nation Building",
  "Public Speaking", "Ethics & Integrity", "Civic Responsibility",
];

const CORE_VALUES = [
  { Icon: Icons.Shield, name: "Integrity", desc: "We uphold honesty, transparency, and ethical conduct in all we do." },
  { Icon: Icons.Heart, name: "Service", desc: "We are called to serve Africa and humanity with humility and dedication." },
  { Icon: Icons.Award, name: "Excellence", desc: "We pursue the highest standards in leadership development and character." },
  { Icon: Icons.Lightbulb, name: "Innovation", desc: "We embrace new ideas and creative approaches to Africa's development challenges." },
  { Icon: Icons.CheckCircle, name: "Accountability", desc: "We take responsibility for our actions and commitments to those we serve." },
  { Icon: Icons.Globe, name: "Nation Building", desc: "Every action is guided by a deep commitment to building strong African nations." },
];

const PODCAST_EPISODES = [
  { ep: "EP 14", title: "Rebuilding Nigeria's Public Sector: A Leadership Blueprint", duration: "52 min", date: "May 2025" },
  { ep: "EP 13", title: "Entrepreneurship as a Tool for African Liberation", duration: "45 min", date: "Apr 2025" },
  { ep: "EP 12", title: "The Mentor I Needed: Stories of Transformational Guidance", duration: "38 min", date: "Mar 2025" },
];

const JOIN_OPTIONS = [
  { Icon: Icons.GraduationCap, title: "Become a Fellow", desc: "Apply to the Future Leaders Initiative and begin your transformational leadership journey with Africa's best minds.", action: "Apply Now" },
  { Icon: Icons.Heart, title: "Volunteer", desc: "Offer your time, skills, and energy to support GOLD's programs, events, and community outreach across Nigeria and Africa.", action: "Volunteer" },
  { Icon: Icons.Users, title: "Become a Mentor", desc: "Share your experience and expertise to guide the next generation of transformational leaders in their growth journey.", action: "Mentor" },
  { Icon: Icons.Handshake, title: "Partner With Us", desc: "Align your organization with GOLD's mission. Partner for conferences, sponsorship, programs, and collaborative initiatives.", action: "Partner" },
  { Icon: Icons.TrendingUp, title: "Donate", desc: "Your financial support directly funds leadership training, scholarships, conferences, and community impact across Africa.", action: "Donate" },
  { Icon: Icons.Broadcast, title: "Spread the Word", desc: "Become an ambassador. Share GOLD's mission within your networks and help us reach more young Africans everywhere.", action: "Ambassador" },
];

// ── Logo Component ──
function Logo({ size = 44, light = false }) {
  return (
    <img
      src={LOGO_SRC}
      alt="GOLD"
      style={{
        height: size,
        width: "auto",
        objectFit: "contain",
        filter: light ? "brightness(0) invert(1)" : "none",
      }}
    />
  );
}

// ── Navbar ──
function Navbar({ activePage, setActivePage }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);
  const go = (id) => { setActivePage(id); setMobileOpen(false); window.scrollTo(0, 0); };

  return (
    <nav className={`nav-wrap${scrolled ? " scrolled" : ""}`}>
      <div className="nav-inner">
        <div className="nav-logo" onClick={() => go("home")}>
          <Logo size={40} />
          <div>
            <div className="nav-logo-text">GOLD</div>
            <div className="nav-logo-sub">Leadership Development</div>
          </div>
        </div>
        <div className="nav-links">
          {NAV_LINKS.map(l => (
            <button key={l.id} className={`nav-link${activePage === l.id ? " active" : ""}`} onClick={() => go(l.id)}>{l.label}</button>
          ))}
        </div>
        <button className="nav-cta" onClick={() => go("join")}>Join GOLD</button>
        <button className="mob-btn" onClick={() => setMobileOpen(o => !o)}>
          {mobileOpen ? <Icons.X /> : <Icons.Menu />}
        </button>
      </div>
      {mobileOpen && (
        <div className="mob-nav">
          {NAV_LINKS.map(l => (
            <button key={l.id} className={`nav-link${activePage === l.id ? " active" : ""}`} onClick={() => go(l.id)}>{l.label}</button>
          ))}
          <button className="btn-gold" style={{ marginTop: "0.5rem", justifyContent: "center" }} onClick={() => go("join")}>Join GOLD</button>
        </div>
      )}
    </nav>
  );
}

// ── Home ──
function HomePage({ setPage }) {
  return (
    <>
      <section className="hero">
        <div className="hero-mesh" />
        <div className="hero-dots" />
        <div className="hero-content">
          <div className="fade-up">
            <div className="hero-pill"><div className="hero-pill-dot" />Pan-African Leadership Institute</div>
            <h1 className="hero-h1">Raising <em>Leaders.</em><br />Building <em>Nations.</em><br />Transforming Africa.</h1>
            <p className="hero-sub">Equipping young Africans with the leadership capacity, character, and competence required to shape the future of the continent.</p>
            <div className="hero-btns">
              <button className="btn-gold" onClick={() => setPage("fli")}>Join FLI <Icons.ArrowRight /></button>
              <button className="btn-outline-white" onClick={() => setPage("join")}>Partner With Us</button>
            </div>
            <div className="hero-stats">
              {STATS.map(s => (
                <div key={s.label}>
                  <div className="stat-num">{s.number}</div>
                  <div className="stat-lbl">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="hero-visual fade-up-2">
            <div className="hero-float hero-float-1">
              <div className="float-num">500+</div>
              <div className="float-lbl">Leaders Trained</div>
            </div>
            <div className="hero-main-card">
              <div className="hero-card-badge">Future Leaders Initiative</div>
              <div className="hero-card-title">9-Module Leadership Curriculum</div>
              {["Leadership Foundations", "African History", "Governance & Policy", "Critical Thinking", "Entrepreneurship"].map(m => (
                <div className="hero-card-item" key={m}><div className="hero-card-dot" />{m}</div>
              ))}
            </div>
            <div className="hero-float hero-float-2">
              <div className="float-num">12+</div>
              <div className="float-lbl">Communities Reached</div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section" style={{ background: COLORS.offWhite }}>
        <div className="section-inner">
          <div className="sec-tag">Our Foundation</div>
          <h2 className="sec-title" style={{ marginBottom: "0.5rem" }}>Vision & <em>Mission</em></h2>
          <div className="vm-grid">
            <div className="vm-card vm-vision">
              <div className="vm-label">Our Vision</div>
              <div className="vm-text">"To empower and develop individuals, especially young Africans, as human capital for nation building."</div>
            </div>
            <div className="vm-card vm-mission">
              <div className="vm-label">Our Mission</div>
              <div className="vm-text">"To raise competent, ethical, visionary, and purpose-driven leaders who will transform Africa through service, innovation, and influence."</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Leadership */}
      <section className="section dark-section">
        <div className="section-inner">
          <div className="sec-tag">The Imperative</div>
          <h2 className="sec-title" style={{ marginBottom: "0.75rem" }}>Why <em>Leadership</em> Matters</h2>
          <p className="sec-sub" style={{ marginBottom: "0" }}>Africa's greatest challenge is not resources — it is the lack of ethical, capable leaders equipped to harness them for the benefit of all.</p>
          <div className="why-grid">
            {[
              { Icon: Icons.Globe, title: "Africa's Moment", desc: "With the world's youngest population, the leadership we develop today will define Africa's trajectory for generations to come." },
              { Icon: Icons.Shield, title: "The Ethics Crisis", desc: "Corruption and poor governance cost Africa billions annually. Raising ethical leaders is not optional — it is the foundation of development." },
              { Icon: Icons.Users, title: "Human Capital First", desc: "Economic transformation begins with transformed minds. GOLD invests in the most powerful resource Africa has — its people." },
              { Icon: Icons.Home, title: "Governance Matters", desc: "Competent and visionary leadership in every sector is what separates thriving nations from struggling ones." },
              { Icon: Icons.Handshake, title: "The Mentorship Gap", desc: "Many young Africans lack access to mentors who can guide their development. We bridge that gap through structured programs." },
              { Icon: Icons.Lightbulb, title: "Innovation is African", desc: "Africa's challenges demand African solutions. We cultivate critical thinkers and innovators who reimagine what is possible." },
            ].map(c => (
              <div className="why-card" key={c.title}>
                <div className="why-icon"><c.Icon /></div>
                <div className="why-title">{c.title}</div>
                <div className="why-desc">{c.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="section programs-bg">
        <div className="section-inner">
          <div className="sec-tag">What We Do</div>
          <h2 className="sec-title" style={{ marginBottom: "0.75rem" }}>Our <em>Programs</em></h2>
          <p className="sec-sub">Structured pathways designed to develop every dimension of transformational leadership.</p>
          <div className="programs-grid">
            {PROGRAMS.map(p => (
              <div className="prog-card" key={p.title} onClick={() => setPage(p.link)}>
                <div className="prog-icon"><p.Icon /></div>
                <div className="prog-title">{p.title}</div>
                <div className="prog-desc">{p.desc}</div>
                <div className="prog-link">Learn More <Icons.ArrowRight /></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Strip */}
      <div className="impact-strip">
        <div className="impact-strip-inner">
          {STATS.map(s => (
            <div key={s.label}>
              <div className="impact-num">{s.number}</div>
              <div className="impact-lbl">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials */}
      <section className="section" style={{ background: COLORS.offWhite }}>
        <div className="section-inner">
          <div className="sec-tag">Voices of Change</div>
          <h2 className="sec-title">What Our <em>Fellows</em> Say</h2>
          <div className="testi-grid">
            {TESTIMONIALS.map(t => (
              <div className="testi-card" key={t.name}>
                <div className="testi-quote">"</div>
                <p className="testi-text">{t.text}</p>
                <div className="testi-author">
                  <div className="testi-avatar">{t.initials}</div>
                  <div>
                    <div className="testi-name">{t.name}</div>
                    <div className="testi-role">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Podcast Teaser */}
      <section className="section podcast-bg">
        <div className="section-inner">
          <div className="sec-tag">Featured Media</div>
          <h2 className="sec-title" style={{ marginBottom: "0.75rem" }}>RE-BUILD <em>Podcast</em></h2>
          <p className="sec-sub">Conversations that challenge, inspire, and equip leaders for Africa's future.</p>
          <div style={{ marginTop: "2rem" }}>
            <div className="podcast-featured">
              <div className="podcast-cover">
                <Icons.Mic />
              </div>
              <div>
                <div style={{ fontSize: "0.68rem", color: COLORS.goldLight, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "0.5rem" }}>Latest — EP 14</div>
                <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.5rem", fontWeight: 600, marginBottom: "0.75rem", lineHeight: 1.3, color: COLORS.white }}>Rebuilding Nigeria's Public Sector: A Leadership Blueprint</h3>
                <p style={{ fontSize: "0.87rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.7, marginBottom: "1rem" }}>A deep-dive conversation on ethical governance and how young leaders can contribute to restructuring Nigeria from within.</p>
                <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
                  <button className="play-btn" style={{ background: COLORS.gold, color: COLORS.forest }}><Icons.Play /> Play Episode</button>
                  <span style={{ fontSize: "0.77rem", color: "rgba(255,255,255,0.4)", display: "flex", alignItems: "center", gap: "0.3rem" }}><Icons.Clock /> 52 min · May 2025</span>
                </div>
              </div>
            </div>
            <div className="podcast-grid">
              {PODCAST_EPISODES.map(ep => (
                <div className="podcast-card" key={ep.ep}>
                  <div className="podcast-ep">{ep.ep}</div>
                  <div className="podcast-title">{ep.title}</div>
                  <div className="podcast-meta"><Icons.Clock />{ep.duration}&nbsp;&nbsp;<Icons.Calendar />{ep.date}</div>
                  <button className="play-btn"><Icons.Play /> Listen</button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="cta-banner">
        <h2>Ready to Lead Africa's Future?</h2>
        <p>Join thousands of young Africans developing the character, competence, and vision to transform the continent.</p>
        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
          <button className="btn-forest" onClick={() => setPage("fli")} style={{ padding: "0.9rem 2rem", borderRadius: 10, fontSize: "0.9rem" }}>Apply to FLI</button>
          <button style={{ background: "transparent", color: COLORS.forest, padding: "0.9rem 2rem", borderRadius: 10, border: `1.5px solid ${COLORS.forest}`, fontSize: "0.9rem", cursor: "pointer", fontFamily: "'DM Sans',sans-serif", fontWeight: 500 }} onClick={() => setPage("join")}>Explore All Options</button>
        </div>
      </div>
    </>
  );
}

// ── About ──
function AboutPage() {
  return (
    <>
      <section className="section" style={{ paddingTop: "8rem", background: COLORS.offWhite }}>
        <div className="section-inner">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "start" }}>
            <div>
              <div className="sec-tag">Our Story</div>
              <h1 className="sec-title" style={{ marginBottom: "1.5rem" }}>About <em>GOLD</em></h1>
              <p style={{ fontSize: "1rem", lineHeight: 1.85, color: COLORS.textMuted, marginBottom: "1.25rem" }}>GOLD — Governmental and Organizational Leadership Development — was born out of a deep conviction: that Africa's greatest need is not more resources, but more leaders equipped with integrity, vision, and the competence to serve.</p>
              <p style={{ fontSize: "1rem", lineHeight: 1.85, color: COLORS.textMuted, marginBottom: "1.25rem" }}>We exist to raise a generation of transformational leaders in business, government, ministry, education, and community development who will contribute meaningfully to nation-building across Nigeria and the African continent.</p>
              <p style={{ fontSize: "1rem", lineHeight: 1.85, color: COLORS.textMuted }}>Through structured programs, mentorship, conferences, and our media arm, we are building an ecosystem that nurtures leaders from the inside out — character first, competence second, and contribution always.</p>
            </div>
            <div>
              <div className="vm-card vm-vision" style={{ marginBottom: "1.5rem" }}>
                <div className="vm-label">Our Vision</div>
                <div className="vm-text">"To empower and develop individuals, especially young Africans, as human capital for nation building."</div>
              </div>
              <div className="vm-card vm-mission">
                <div className="vm-label">Our Mission</div>
                <div className="vm-text">"To raise competent, ethical, visionary, and purpose-driven leaders who will transform Africa through service, innovation, and influence."</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: COLORS.white }}>
        <div className="section-inner">
          <div className="sec-tag">What We Stand For</div>
          <h2 className="sec-title">Core <em>Values</em></h2>
          <div className="values-grid">
            {CORE_VALUES.map(v => (
              <div className="val-card" key={v.name}>
                <div className="val-icon"><v.Icon /></div>
                <div className="val-name">{v.name}</div>
                <div className="val-desc">{v.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section dark-section">
        <div className="section-inner" style={{ maxWidth: 760, textAlign: "center" }}>
          <div className="sec-tag" style={{ justifyContent: "center" }}>Leadership Philosophy</div>
          <h2 className="sec-title" style={{ marginBottom: "1.5rem" }}>Our <em>Philosophy</em></h2>
          <p style={{ fontFamily: "'Playfair Display',serif", fontStyle: "italic", fontSize: "1.25rem", lineHeight: 1.85, color: "rgba(255,255,255,0.8)" }}>
            "True leadership is not about position or power — it is about character and service. Africa needs leaders who are shaped by purpose, driven by integrity, and committed to the flourishing of their communities and nations. At GOLD, we believe that leadership development is the most strategic investment we can make in Africa's future."
          </p>
        </div>
      </section>
    </>
  );
}

// ── Programs ──
function ProgramsPage({ setPage }) {
  return (
    <section className="section programs-bg" style={{ paddingTop: "8rem" }}>
      <div className="section-inner">
        <div className="sec-tag">What We Offer</div>
        <h1 className="sec-title" style={{ marginBottom: "0.75rem" }}>Our <em>Programs</em></h1>
        <p className="sec-sub" style={{ marginBottom: "0" }}>Every GOLD program develops a different dimension of transformational leadership.</p>
        <div className="programs-grid">
          {PROGRAMS.map(p => (
            <div className="prog-card" key={p.title} onClick={() => setPage(p.link)}>
              <div className="prog-icon"><p.Icon /></div>
              <div className="prog-title">{p.title}</div>
              <div className="prog-desc">{p.desc}</div>
              <div className="prog-link">Explore <Icons.ArrowRight /></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── FLI ──
function FLIPage({ setPage }) {
  return (
    <>
      <section className="section dark-section" style={{ paddingTop: "8rem" }}>
        <div className="section-inner">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center", marginBottom: "4rem" }}>
            <div>
              <div className="hero-pill" style={{ marginBottom: "1rem" }}><div className="hero-pill-dot" />GOLD Flagship Program</div>
              <h1 className="sec-title" style={{ marginBottom: "1rem" }}>Future Leaders <em>Initiative</em></h1>
              <p style={{ fontSize: "0.95rem", lineHeight: 1.8, color: "rgba(255,255,255,0.7)", marginBottom: "1.5rem" }}>FLI is GOLD's signature leadership development program — a structured, immersive curriculum that equips young Africans with the knowledge, skills, and character to lead with excellence in every sphere of society.</p>
              <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                <button className="btn-gold" onClick={() => setPage("join")}>Apply Now <Icons.ArrowRight /></button>
                <button className="btn-outline-white">Download Brochure</button>
              </div>
            </div>
            <div style={{ background: "rgba(255,255,255,0.06)", borderRadius: 20, padding: "2rem", border: "1px solid rgba(201,160,32,0.2)" }}>
              <div style={{ fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: COLORS.goldLight, marginBottom: "1.2rem" }}>Program Highlights</div>
              {[
                [Icons.Calendar, "Duration", "3–6 Month Cohort"],
                [Icons.Users, "Cohort Size", "25–40 Fellows"],
                [Icons.MapPin, "Mode", "In-person & Hybrid"],
                [Icons.Award, "Certificate", "GOLD FLI Certificate"],
                [Icons.Handshake, "Mentorship", "1-on-1 Mentoring Included"],
              ].map(([Icon, label, val]) => (
                <div key={label} style={{ display: "flex", gap: "1rem", alignItems: "center", padding: "0.7rem 0", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                  <span style={{ color: COLORS.goldLight, opacity: 0.8 }}><Icon /></span>
                  <span style={{ fontSize: "0.82rem", color: "rgba(255,255,255,0.45)", width: "100px" }}>{label}</span>
                  <span style={{ fontSize: "0.88rem", fontWeight: 500 }}>{val}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="sec-tag">Curriculum</div>
          <h2 className="sec-title" style={{ marginBottom: "1.5rem" }}>9 Learning <em>Modules</em></h2>
          <div className="fli-curriculum">
            {FLI_MODULES.map((m, i) => (
              <div className="fli-mod" key={m}>
                <div className="fli-num">0{i + 1}</div>
                <div className="fli-name">{m}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: COLORS.offWhite }}>
        <div className="section-inner">
          <div className="sec-tag">The Experience</div>
          <h2 className="sec-title" style={{ marginBottom: "2rem" }}>The <em>FLI</em> Journey</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "1.5rem" }}>
            {[
              { step: "01", title: "Application", desc: "Submit your application and express your commitment to leadership development and Africa's future." },
              { step: "02", title: "Orientation", desc: "Welcome cohort gathering, vision alignment, and introduction to GOLD's leadership philosophy." },
              { step: "03", title: "Curriculum", desc: "Nine-module immersive program covering all critical dimensions of leadership and nation-building." },
              { step: "04", title: "Graduation", desc: "Complete a capstone project, receive your certificate, and join the GOLD alumni network." },
            ].map(s => (
              <div key={s.step} style={{ background: COLORS.white, border: `1px solid rgba(26,74,46,0.1)`, borderRadius: 14, padding: "1.75rem", boxShadow: "0 2px 12px rgba(26,74,46,0.04)" }}>
                <div style={{ fontFamily: "'Playfair Display',serif", fontSize: "2.5rem", fontWeight: 700, color: COLORS.gold, opacity: 0.35, marginBottom: "0.5rem" }}>{s.step}</div>
                <div style={{ fontWeight: 700, fontSize: "1rem", marginBottom: "0.6rem", color: COLORS.text }}>{s.title}</div>
                <div style={{ fontSize: "0.83rem", lineHeight: 1.7, color: COLORS.textMuted }}>{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: COLORS.white }}>
        <div className="section-inner">
          <div className="sec-tag">Fellow Voices</div>
          <h2 className="sec-title" style={{ marginBottom: "2rem" }}>What <em>Fellows</em> Experience</h2>
          <div className="testi-grid">
            {TESTIMONIALS.map(t => (
              <div className="testi-card" key={t.name}>
                <div className="testi-quote">"</div>
                <p className="testi-text">{t.text}</p>
                <div className="testi-author">
                  <div className="testi-avatar">{t.initials}</div>
                  <div>
                    <div className="testi-name">{t.name}</div>
                    <div className="testi-role">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="cta-banner">
        <h2>Begin Your Leadership Journey Today</h2>
        <p>Applications are open for the next FLI cohort. Secure your place among Africa's emerging leaders.</p>
        <button className="btn-forest" onClick={() => setPage("join")} style={{ padding: "0.9rem 2rem", borderRadius: 10, fontSize: "0.9rem" }}>Apply for FLI <Icons.ArrowRight /></button>
      </div>
    </>
  );
}

// ── Podcast ──
function PodcastPage() {
  const allEps = [
    { ep: "EP 14", title: "Rebuilding Nigeria's Public Sector: A Leadership Blueprint", desc: "A deep-dive into ethical governance and what young leaders can do to restructure public institutions from within.", duration: "52 min", date: "May 2025", tags: ["Governance", "Nigeria"] },
    { ep: "EP 13", title: "Entrepreneurship as a Tool for African Liberation", desc: "How African entrepreneurs are driving economic independence and what the next generation of founders must know.", duration: "45 min", date: "Apr 2025", tags: ["Entrepreneurship", "Africa"] },
    { ep: "EP 12", title: "The Mentor I Needed: Stories of Transformational Guidance", desc: "Leaders share the mentorship moments that changed their trajectories and how to find your own guide.", duration: "38 min", date: "Mar 2025", tags: ["Mentorship", "Development"] },
    { ep: "EP 11", title: "Building Cities, Building Nations: Urban Leadership in Africa", desc: "Mayors, urban planners, and city leaders discuss governance at the local level and community transformation.", duration: "61 min", date: "Feb 2025", tags: ["Governance", "Community"] },
    { ep: "EP 10", title: "The Ethics of Ambition: Leading Without Losing Your Soul", desc: "A powerful conversation on how to pursue excellence, power, and impact without compromising your integrity.", duration: "44 min", date: "Jan 2025", tags: ["Ethics", "Character"] },
    { ep: "EP 09", title: "Financing Africa's Future: What Young Leaders Must Know", desc: "Financial experts and entrepreneurs break down how capital, investment, and fiscal policy shape African development.", duration: "55 min", date: "Dec 2024", tags: ["Finance", "Business"] },
  ];

  return (
    <>
      <section className="section" style={{ paddingTop: "8rem", background: COLORS.offWhite }}>
        <div className="section-inner">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center", marginBottom: "3rem" }}>
            <div>
              <div className="hero-pill" style={{ background: `rgba(26,74,46,0.08)`, border: `1px solid rgba(26,74,46,0.15)`, color: COLORS.forestMid, marginBottom: "1rem" }}>
                <div className="hero-pill-dot" style={{ background: COLORS.forestMid }} />GOLD Media Arm
              </div>
              <h1 className="sec-title" style={{ marginBottom: "1rem" }}>RE-BUILD <em>Podcast</em></h1>
              <p style={{ fontSize: "1rem", lineHeight: 1.8, color: COLORS.textMuted }}>Conversations that challenge conventional thinking, inspire transformational action, and equip a new generation of African leaders with insights to rebuild.</p>
              <div style={{ display: "flex", gap: "0.75rem", marginTop: "1.5rem", flexWrap: "wrap" }}>
                {["Spotify", "Apple Podcasts", "YouTube", "Google Podcasts"].map(p => (
                  <button key={p} style={{ background: COLORS.white, border: `1px solid rgba(26,74,46,0.12)`, color: COLORS.text, padding: "0.5rem 1rem", borderRadius: 8, fontSize: "0.8rem", cursor: "pointer", fontFamily: "'DM Sans',sans-serif", transition: "all 0.2s" }}>{p}</button>
                ))}
              </div>
            </div>
            <div style={{ background: COLORS.forest, border: `1px solid rgba(201,160,32,0.2)`, borderRadius: 20, padding: "2.5rem", textAlign: "center" }}>
              <div style={{ width: 72, height: 72, borderRadius: "50%", background: "rgba(201,160,32,0.15)", color: COLORS.goldLight, margin: "0 auto 1rem", display: "flex", alignItems: "center", justifyContent: "center" }}><Icons.Mic /></div>
              <div style={{ fontFamily: "'Playfair Display',serif", fontSize: "2rem", fontWeight: 700, marginBottom: "0.5rem", color: COLORS.white }}>RE-BUILD</div>
              <div style={{ fontSize: "0.75rem", letterSpacing: "0.2em", textTransform: "uppercase", color: COLORS.goldLight, marginBottom: "1rem" }}>by GOLD</div>
              <div style={{ fontSize: "0.83rem", color: "rgba(255,255,255,0.5)" }}>Business · Governance · Nation Building · Mentorship · Entrepreneurship</div>
            </div>
          </div>

          <div className="sec-tag">Episodes</div>
          <h2 className="sec-title" style={{ marginBottom: "2rem" }}>All <em>Episodes</em></h2>
          <div style={{ display: "grid", gap: "1rem" }}>
            {allEps.map(ep => (
              <div key={ep.ep} style={{ background: COLORS.white, border: `1px solid rgba(26,74,46,0.09)`, borderRadius: 14, padding: "1.5rem 2rem", display: "grid", gridTemplateColumns: "auto 1fr auto", gap: "1.5rem", alignItems: "center", cursor: "pointer", boxShadow: "0 2px 12px rgba(26,74,46,0.04)", transition: "all 0.3s" }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = COLORS.forestMid; e.currentTarget.style.transform = "translateY(-2px)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(26,74,46,0.09)"; e.currentTarget.style.transform = "none"; }}>
                <div style={{ width: 52, height: 52, borderRadius: 12, background: COLORS.forest, color: COLORS.goldLight, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: "0.75rem", flexShrink: 0 }}>{ep.ep}</div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: "0.95rem", marginBottom: "0.3rem", color: COLORS.text }}>{ep.title}</div>
                  <div style={{ fontSize: "0.82rem", color: COLORS.textMuted, lineHeight: 1.6, marginBottom: "0.5rem" }}>{ep.desc}</div>
                  <div style={{ display: "flex", gap: "0.6rem", flexWrap: "wrap" }}>
                    {ep.tags.map(t => (
                      <span key={t} style={{ background: COLORS.forestPale, color: COLORS.forestMid, fontSize: "0.68rem", fontWeight: 700, padding: "0.2rem 0.6rem", borderRadius: 6 }}>{t}</span>
                    ))}
                  </div>
                </div>
                <div style={{ textAlign: "right" }}>
                  <button className="play-btn"><Icons.Play /> Listen</button>
                  <div style={{ fontSize: "0.7rem", color: COLORS.textMuted, marginTop: "0.4rem", display: "flex", alignItems: "center", gap: "0.3rem", justifyContent: "flex-end" }}><Icons.Clock />{ep.duration} · {ep.date}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

// ── Impact ──
function ImpactPage() {
  return (
    <>
      <section className="section" style={{ paddingTop: "8rem", background: COLORS.offWhite }}>
        <div className="section-inner">
          <div className="sec-tag">Our Footprint</div>
          <h1 className="sec-title" style={{ marginBottom: "1rem" }}>Measuring Our <em>Impact</em></h1>
          <p style={{ fontSize: "1rem", lineHeight: 1.8, color: COLORS.textMuted, maxWidth: 540, marginBottom: "3rem" }}>Every number represents a young African whose trajectory was altered by the power of transformational leadership development.</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "1.5rem", marginBottom: "4rem" }}>
            {[...STATS, { number: "15+", label: "Partner Organizations" }, { number: "9", label: "FLI Modules" }, { number: "3", label: "Countries Reached" }, { number: "100%", label: "Free for Fellows" }].map(s => (
              <div key={s.label} style={{ background: COLORS.white, border: `1px solid rgba(26,74,46,0.1)`, borderRadius: 16, padding: "2rem", textAlign: "center", boxShadow: "0 2px 12px rgba(26,74,46,0.04)" }}>
                <div style={{ fontFamily: "'Playfair Display',serif", fontSize: "3rem", fontWeight: 700, color: COLORS.forestMid, lineHeight: 1 }}>{s.number}</div>
                <div style={{ fontSize: "0.75rem", color: COLORS.textMuted, textTransform: "uppercase", letterSpacing: "0.1em", marginTop: "0.5rem" }}>{s.label}</div>
              </div>
            ))}
          </div>

          <div className="sec-tag">Success Stories</div>
          <h2 className="sec-title" style={{ marginBottom: "2rem" }}>Stories of <em>Transformation</em></h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
            {[
              { name: "Emmanuel Chukwu", role: "FLI Fellow → Policy Analyst, Abuja", story: "After completing FLI, Emmanuel joined a policy think-tank in Abuja, where he now advises on youth employment frameworks. He credits GOLD's governance module for shifting his perspective from observer to actor.", avatar: "EC" },
              { name: "Ngozi Adeyemi", role: "FLI Fellow → Social Entrepreneur", story: "Ngozi launched a digital literacy initiative reaching 2,000+ students in rural Kwara State. The entrepreneurship and community impact modules gave her both the mindset and the methodology.", avatar: "NA" },
              { name: "Kofi Mensah", role: "FLI Fellow → Student Government Leader", story: "From shy university student to elected Student Union President at University of Ghana, Kofi's transformation through GOLD demonstrates how leadership education changes not just skills but identity.", avatar: "KM" },
              { name: "Zara Ahmed", role: "FLI Fellow → Public Health Advocate", story: "Zara used her GOLD training to mobilize community health volunteers in Kano, reaching over 500 households and catching the attention of state health officials.", avatar: "ZA" },
            ].map(s => (
              <div key={s.name} style={{ background: COLORS.white, border: `1px solid rgba(26,74,46,0.1)`, borderRadius: 16, padding: "2rem", boxShadow: "0 2px 12px rgba(26,74,46,0.04)" }}>
                <div style={{ display: "flex", gap: "1rem", alignItems: "center", marginBottom: "1rem" }}>
                  <div style={{ width: 52, height: 52, borderRadius: "50%", background: `linear-gradient(135deg,${COLORS.forest},${COLORS.forestLight})`, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, color: COLORS.white, fontSize: "0.9rem", flexShrink: 0 }}>{s.avatar}</div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: "0.95rem", color: COLORS.text }}>{s.name}</div>
                    <div style={{ fontSize: "0.75rem", color: COLORS.forestMid }}>{s.role}</div>
                  </div>
                </div>
                <p style={{ fontSize: "0.87rem", lineHeight: 1.75, color: COLORS.textMuted }}>{s.story}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: COLORS.white }}>
        <div className="section-inner">
          <div className="sec-tag">Voices</div>
          <h2 className="sec-title" style={{ marginBottom: "2rem" }}>Testimonials</h2>
          <div className="testi-grid">
            {TESTIMONIALS.map(t => (
              <div className="testi-card" key={t.name}>
                <div className="testi-quote">"</div>
                <p className="testi-text">{t.text}</p>
                <div className="testi-author">
                  <div className="testi-avatar">{t.initials}</div>
                  <div>
                    <div className="testi-name">{t.name}</div>
                    <div className="testi-role">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

// ── Join ──
function JoinPage() {
  return (
    <>
      <section className="section join-bg" style={{ paddingTop: "8rem" }}>
        <div className="section-inner">
          <div style={{ textAlign: "center", marginBottom: "0.5rem" }}>
            <div className="sec-tag" style={{ justifyContent: "center" }}>Get Involved</div>
          </div>
          <h1 className="sec-title" style={{ textAlign: "center", marginBottom: "1rem" }}>Join the <em>GOLD</em> Movement</h1>
          <p style={{ textAlign: "center", color: COLORS.textMuted, fontSize: "1rem", lineHeight: 1.8, maxWidth: 540, margin: "0 auto 1rem" }}>Whether as a fellow, volunteer, mentor, partner, or donor — your contribution matters.</p>
          <div className="join-grid">
            {JOIN_OPTIONS.map(j => (
              <div className="join-card" key={j.title}>
                <div className="join-icon"><j.Icon /></div>
                <div className="join-title">{j.title}</div>
                <div className="join-desc">{j.desc}</div>
                <button className="btn-forest">{j.action} →</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: "3rem", background: COLORS.white }}>
        <div className="section-inner" style={{ maxWidth: 640 }}>
          <div className="sec-tag">Apply Now</div>
          <h2 className="sec-title" style={{ marginBottom: "0.75rem" }}>FLI <em>Application</em></h2>
          <p style={{ fontSize: "0.9rem", color: COLORS.textMuted, marginBottom: "2rem" }}>Express your interest in the next Future Leaders Initiative cohort.</p>
          <div className="contact-form">
            <div className="form-row">
              <div className="form-group"><label className="form-label">First Name</label><input className="form-input" placeholder="Chidi" /></div>
              <div className="form-group"><label className="form-label">Last Name</label><input className="form-input" placeholder="Okonkwo" /></div>
            </div>
            <div className="form-group"><label className="form-label">Email Address</label><input className="form-input" type="email" placeholder="you@example.com" /></div>
            <div className="form-group"><label className="form-label">Phone Number</label><input className="form-input" placeholder="+234 xxx xxxx xxxx" /></div>
            <div className="form-group">
              <label className="form-label">Category</label>
              <select className="form-select form-input">
                <option value="">Select your category</option>
                <option>Secondary School Student</option>
                <option>University Student</option>
                <option>Young Professional</option>
                <option>Entrepreneur</option>
                <option>Emerging Public Leader</option>
              </select>
            </div>
            <div className="form-group"><label className="form-label">Institution / Organization</label><input className="form-input" placeholder="University of Nigeria, Nsukka" /></div>
            <div className="form-group">
              <label className="form-label">Why do you want to join GOLD FLI?</label>
              <textarea className="form-textarea" placeholder="Share your motivation, goals, and what you hope to achieve through FLI..." />
            </div>
            <button className="btn-forest" style={{ width: "100%", padding: "0.9rem", borderRadius: 10, fontSize: "0.9rem" }}>Submit Application →</button>
          </div>
        </div>
      </section>
    </>
  );
}

// ── Contact ──
function ContactPage() {
  return (
    <section className="section" style={{ paddingTop: "8rem", background: COLORS.offWhite }}>
      <div className="section-inner">
        <div className="sec-tag">Get In Touch</div>
        <h1 className="sec-title" style={{ marginBottom: "0.75rem" }}>Contact <em>GOLD</em></h1>
        <p style={{ fontSize: "0.95rem", color: COLORS.textMuted, maxWidth: 460, marginBottom: "1rem" }}>Have questions, partnership ideas, or want to learn more? We'd love to hear from you.</p>
        <div className="contact-grid">
          <div>
            <div className="contact-info-card" style={{ marginBottom: "1.5rem" }}>
              <div style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.2rem", fontWeight: 600, marginBottom: "1.5rem", color: COLORS.goldLight }}>Contact Information</div>
              {[
                { Icon: Icons.Mail, label: "Email", val: "info@goldleadershipafrica.org" },
                { Icon: Icons.MapPin, label: "Location", val: "Nigeria, West Africa" },
                { Icon: Icons.Globe, label: "Website", val: "goldleadershipafrica.org" },
              ].map(c => (
                <div className="contact-item" key={c.label}>
                  <div className="contact-icon"><c.Icon /></div>
                  <div>
                    <div className="contact-label">{c.label}</div>
                    <div className="contact-value">{c.val}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="contact-info-card">
              <div style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.2rem", fontWeight: 600, marginBottom: "1rem", color: COLORS.goldLight }}>Follow GOLD</div>
              <p style={{ fontSize: "0.82rem", color: "rgba(255,255,255,0.5)", marginBottom: "1rem" }}>Stay connected with our work, updates, and opportunities.</p>
              <div className="social-links">
                {[Icons.Twitter, Icons.Linkedin, Icons.Facebook, Icons.Youtube, Icons.Instagram].map((Icon, i) => (
                  <div className="social-btn" key={i}><Icon /></div>
                ))}
              </div>
            </div>
          </div>
          <div className="contact-form">
            <div style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.3rem", fontWeight: 600, marginBottom: "1.5rem", color: COLORS.text }}>Send Us a Message</div>
            <div className="form-row">
              <div className="form-group"><label className="form-label">First Name</label><input className="form-input" placeholder="Your name" /></div>
              <div className="form-group"><label className="form-label">Last Name</label><input className="form-input" placeholder="Your surname" /></div>
            </div>
            <div className="form-group"><label className="form-label">Email</label><input className="form-input" type="email" placeholder="you@email.com" /></div>
            <div className="form-group">
              <label className="form-label">Inquiry Type</label>
              <select className="form-select form-input">
                <option>General Inquiry</option>
                <option>Program Information</option>
                <option>Partnership / Sponsorship</option>
                <option>Volunteering</option>
                <option>Mentorship</option>
                <option>Media / Press</option>
                <option>Donation</option>
              </select>
            </div>
            <div className="form-group"><label className="form-label">Message</label><textarea className="form-textarea" placeholder="How can we help you? Share your message, ideas, or questions..." /></div>
            <button className="btn-forest" style={{ width: "100%", padding: "0.9rem", borderRadius: 10, fontSize: "0.9rem" }}>Send Message →</button>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Footer ──
function Footer({ setPage }) {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-logo">
              <Logo size={38} light />
              <div>
                <div className="footer-logo-text">GOLD</div>
                <div className="footer-logo-sub">Leadership Development</div>
              </div>
            </div>
            <p>Raising a generation of transformational leaders to build the Africa we all deserve — through character, competence, and commitment to service.</p>
            <div className="social-links">
              {[Icons.Twitter, Icons.Linkedin, Icons.Facebook, Icons.Youtube].map((Icon, i) => (
                <div className="social-btn" key={i}><Icon /></div>
              ))}
            </div>
          </div>
          <div>
            <div className="footer-col-title">Programs</div>
            <ul className="footer-links">
              {["Future Leaders Initiative", "Mentorship Programs", "Leadership Conferences", "Community Impact", "Capacity Building"].map(l => (
                <li key={l}><a onClick={() => setPage("programs")}>{l}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <div className="footer-col-title">Organization</div>
            <ul className="footer-links">
              {[["About GOLD", "about"], ["Our Impact", "impact"], ["RE-BUILD Podcast", "podcast"], ["Join GOLD", "join"]].map(([l, p]) => (
                <li key={l}><a onClick={() => setPage(p)}>{l}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <div className="footer-col-title">Get Involved</div>
            <ul className="footer-links">
              {[["Become a Fellow", "join"], ["Volunteer", "join"], ["Become a Mentor", "join"], ["Partner With Us", "join"], ["Donate", "join"], ["Contact Us", "contact"]].map(([l, p]) => (
                <li key={l}><a onClick={() => setPage(p)}>{l}</a></li>
              ))}
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <div>© 2025 <span>GOLD</span> — Governmental and Organizational Leadership Development. All rights reserved.</div>
          <div>Raising <span>Leaders</span>. Building <span>Nations</span>. Transforming <span>Africa</span>.</div>
        </div>
      </div>
    </footer>
  );
}

// ── App ──
export default function App() {
  const [activePage, setActivePage] = useState("home");

  const renderPage = () => {
    switch (activePage) {
      case "home": return <HomePage setPage={setActivePage} />;
      case "about": return <AboutPage />;
      case "programs": return <ProgramsPage setPage={setActivePage} />;
      case "fli": return <FLIPage setPage={setActivePage} />;
      case "podcast": return <PodcastPage />;
      case "impact": return <ImpactPage />;
      case "join": return <JoinPage />;
      case "contact": return <ContactPage />;
      default: return <HomePage setPage={setActivePage} />;
    }
  };

  return (
    <>
      <style>{styles}</style>
      <Navbar activePage={activePage} setActivePage={setActivePage} />
      <main>{renderPage()}</main>
      {activePage !== "home" && (
        <div className="cta-banner" style={{ padding: "3rem 2rem", background: `linear-gradient(135deg,${COLORS.forest},${COLORS.forestLight})` }}>
          <div style={{ maxWidth: 480, margin: "0 auto", textAlign: "center" }}>
            <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.85rem", marginBottom: "1rem" }}>Ready to be part of something transformational?</p>
            <button className="btn-gold" onClick={() => { setActivePage("join"); window.scrollTo(0, 0); }}>Join the GOLD Movement <Icons.ArrowRight /></button>
          </div>
        </div>
      )}
      <Footer setPage={setActivePage} />
    </>
  );
}
