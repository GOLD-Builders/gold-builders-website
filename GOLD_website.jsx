import { useState, useEffect } from "react";

// ─── Navigation ───────────────────────────────────────────────────────────────
const NAV_LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "programs", label: "Programs" },
  { id: "circles", label: "The Circles", highlight: true },
  { id: "fli", label: "FLI" },
  { id: "podcast", label: "RE-BUILD" },
  { id: "impact", label: "Impact" },
  { id: "join", label: "Join GOLD" },
  { id: "contact", label: "Contact" },
];

// ─── Colors ───────────────────────────────────────────────────────────────────
const C = {
  forest: "#1A4A2E", forestMid: "#22613C", forestLight: "#2D7A4F",
  forestPale: "#EAF3EC", gold: "#C9A020", goldLight: "#E8BE3A",
  white: "#FFFFFF", offWhite: "#F7F9F5", cream: "#FDFAF3",
  text: "#1A2E1F", muted: "#5E7A68",
  // GOLD-EN Circle
  ge: "#B8860B", geLight: "#DAA520", gePale: "#FDF6DC", geDark: "#7A5C00",
  // Policy Circle
  pc: "#1A3A5C", pcLight: "#2A5A8C", pcPale: "#EAF0F8", pcAccent: "#7AB0E0", pcText: "#A8D0F0",
};

// ─── SVG Icon Library ─────────────────────────────────────────────────────────
const I = {
  ArrowRight: () => <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12,5 19,12 12,19"/></svg>,
  Check: () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20,6 9,17 4,12"/></svg>,
  CheckCircle: () => <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22,4 12,14.01 9,11.01"/></svg>,
  Lock: () => <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>,
  Send: () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22,2 15,22 11,13 2,9"/></svg>,
  Menu: () => <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>,
  X: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>,
  Play: () => <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><polygon points="5,3 19,12 5,21"/></svg>,
  Clock: () => <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><polyline points="12,6 12,12 16,14"/></svg>,
  Calendar: () => <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>,
  Star: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/></svg>,
  Users: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
  Mic: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/></svg>,
  Globe: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>,
  BookOpen: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>,
  Home: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9,22 9,12 15,12 15,22"/></svg>,
  Lightbulb: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><line x1="9" y1="18" x2="15" y2="18"/><line x1="10" y1="22" x2="14" y2="22"/><path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14"/></svg>,
  Award: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>,
  Heart: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>,
  Handshake: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z"/></svg>,
  GradCap: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>,
  TrendUp: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="23,6 13.5,15.5 8.5,10.5 1,18"/><polyline points="17,6 23,6 23,12"/></svg>,
  Shield: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
  Zap: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polygon points="13,2 3,14 12,14 11,22 21,10 12,10"/></svg>,
  Network: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="5" r="3"/><circle cx="5" cy="19" r="3"/><circle cx="19" cy="19" r="3"/><line x1="12" y1="8" x2="5.5" y2="16.5"/><line x1="12" y1="8" x2="18.5" y2="16.5"/></svg>,
  Briefcase: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>,
  Building: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="2" width="16" height="20" rx="2"/><line x1="9" y1="22" x2="9" y2="10"/><line x1="15" y1="22" x2="15" y2="10"/><line x1="4" y1="6" x2="20" y2="6"/><line x1="4" y1="10" x2="20" y2="10"/></svg>,
  Diamond: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.58a2.41 2.41 0 0 0 3.41 0l7.59-7.58a2.41 2.41 0 0 0 0-3.41l-7.59-7.58a2.41 2.41 0 0 0-3.41 0z"/></svg>,
  Target: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>,
  Mail: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>,
  MapPin: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>,
  Twitter: () => <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>,
  LinkedIn: () => <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>,
  Facebook: () => <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>,
  Youtube: () => <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z"/></svg>,
  Broadcast: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="2"/><path d="M4.93 4.93a10 10 0 0 0 0 14.14"/><path d="M7.76 7.76a6 6 0 0 0 0 8.49"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/><path d="M16.24 7.76a6 6 0 0 1 0 8.49"/></svg>,
};

const LOGO = "/mnt/user-data/uploads/GOLD_LOGO2.png";

// ─── Data ─────────────────────────────────────────────────────────────────────
const STATS = [
  { n: "500+", l: "Leaders Trained" }, { n: "20+", l: "Events Organized" },
  { n: "12+", l: "Communities Reached" }, { n: "5+", l: "Years of Impact" },
];
const PROGRAMS = [
  { Icon: I.Star, title: "Future Leaders Initiative", desc: "A structured curriculum covering leadership, governance, critical thinking, entrepreneurship, African history, ethics, and civic responsibility.", link: "fli" },
  { Icon: I.Users, title: "Mentorship Programs", desc: "Connecting emerging leaders with experienced mentors across business, government, education, and community development.", link: "join" },
  { Icon: I.Globe, title: "Leadership Conferences", desc: "High-impact gatherings bringing together thought leaders, policymakers, and young changemakers to exchange ideas and strategies.", link: "join" },
  { Icon: I.Home, title: "Community Impact Projects", desc: "Hands-on initiatives that empower participants to apply leadership skills in solving real community challenges.", link: "join" },
  { Icon: I.BookOpen, title: "Capacity Building", desc: "Workshops and seminars designed to strengthen the professional and personal competencies of young leaders.", link: "join" },
  { Icon: I.Mic, title: "RE-BUILD Podcast", desc: "Conversations on business, governance, entrepreneurship, mentorship, and African development for the next generation.", link: "podcast" },
];
const TESTIMONIALS = [
  { text: "GOLD transformed how I see leadership and Africa's future. The FLI curriculum gave me practical tools and a burning sense of purpose for nation-building.", name: "Chidera Nwosu", role: "FLI Fellow, University of Nigeria", init: "CN" },
  { text: "The mentorship I received through GOLD connected me to a network of extraordinary leaders. I entered as a student and left as a changemaker.", name: "Amara Osei", role: "Young Entrepreneur, Accra", init: "AO" },
  { text: "RE-BUILD Podcast opened my eyes to governance and what ethical leadership truly means. GOLD is doing essential work for our continent.", name: "Fatima Al-Hassan", role: "Law Student, ABU Zaria", init: "FA" },
];
const FLI_MODULES = ["Leadership Foundations","African History & Civilization","Governance & Public Policy","Critical Thinking","Entrepreneurship","Nation Building","Public Speaking","Ethics & Integrity","Civic Responsibility"];
const CORE_VALUES = [
  { Icon: I.Shield, name: "Integrity", desc: "We uphold honesty, transparency, and ethical conduct in all we do." },
  { Icon: I.Heart, name: "Service", desc: "We are called to serve Africa and humanity with humility and dedication." },
  { Icon: I.Award, name: "Excellence", desc: "We pursue the highest standards in leadership development and character." },
  { Icon: I.Lightbulb, name: "Innovation", desc: "We embrace new ideas and creative approaches to Africa's development challenges." },
  { Icon: I.Check, name: "Accountability", desc: "We take responsibility for our actions and commitments to those we serve." },
  { Icon: I.Globe, name: "Nation Building", desc: "Every action is guided by a deep commitment to building strong African nations." },
];
const PODCAST_EPS = [
  { ep:"EP 14", title:"Rebuilding Nigeria's Public Sector: A Leadership Blueprint", dur:"52 min", date:"May 2025" },
  { ep:"EP 13", title:"Entrepreneurship as a Tool for African Liberation", dur:"45 min", date:"Apr 2025" },
  { ep:"EP 12", title:"The Mentor I Needed: Stories of Transformational Guidance", dur:"38 min", date:"Mar 2025" },
];
const JOIN_OPTS = [
  { Icon: I.GradCap, title:"Become a Fellow", desc:"Apply to the Future Leaders Initiative and begin your transformational leadership journey.", action:"Apply Now" },
  { Icon: I.Heart, title:"Volunteer", desc:"Offer your time, skills, and energy to support GOLD's programs and community outreach.", action:"Volunteer" },
  { Icon: I.Users, title:"Become a Mentor", desc:"Share your expertise to guide the next generation of transformational leaders.", action:"Mentor" },
  { Icon: I.Handshake, title:"Partner With Us", desc:"Align your organization with GOLD's mission through conferences, sponsorship, and programs.", action:"Partner" },
  { Icon: I.TrendUp, title:"Donate", desc:"Your support directly funds leadership training, scholarships, and community impact.", action:"Donate" },
  { Icon: I.Broadcast, title:"Spread the Word", desc:"Become an ambassador. Share GOLD's mission within your networks across Africa.", action:"Ambassador" },
];

// ─── Styles ───────────────────────────────────────────────────────────────────
const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,500;0,600;0,700;1,400;1,600&family=DM+Sans:wght@300;400;500;600;700&family=Cinzel:wght@400;500;600&display=swap');
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
html{scroll-behavior:smooth}
body{font-family:'DM Sans',sans-serif;background:#fff;color:#1A2E1F;overflow-x:hidden;line-height:1.6}
::-webkit-scrollbar{width:4px}::-webkit-scrollbar-track{background:#F7F9F5}::-webkit-scrollbar-thumb{background:#1A4A2E;border-radius:2px}

/* NAV */
.nav{position:fixed;top:0;left:0;right:0;z-index:1000;transition:all .4s}
.nav.on{background:rgba(255,255,255,.97);backdrop-filter:blur(16px);border-bottom:1px solid rgba(26,74,46,.1);box-shadow:0 2px 24px rgba(26,74,46,.08)}
.nav-in{max-width:1320px;margin:0 auto;display:flex;align-items:center;justify-content:space-between;padding:.95rem 2rem}
.nlogo{display:flex;align-items:center;gap:.6rem;cursor:pointer}
.nlogo img{height:40px;width:auto;object-fit:contain}
.nlogo-t{font-weight:700;font-size:1.05rem;color:#1A4A2E}
.nlogo-s{font-size:.58rem;font-weight:400;color:#5E7A68;letter-spacing:.14em;text-transform:uppercase}
.nlinks{display:flex;gap:.05rem;align-items:center}
.nlink{padding:.42rem .75rem;font-size:.8rem;font-weight:500;color:#1A2E1F;cursor:pointer;border-radius:6px;transition:all .2s;border:none;background:none;font-family:'DM Sans',sans-serif}
.nlink:hover{color:#1A4A2E;background:#EAF3EC}
.nlink.act{color:#1A4A2E;font-weight:700}
.nlink.hl{color:#B8860B;font-weight:700}
.nlink.hl:hover{background:#FDF6DC}
.ncta{background:#1A4A2E;color:#fff;font-weight:700;padding:.5rem 1.2rem;border-radius:8px;border:none;font-size:.8rem;cursor:pointer;font-family:'DM Sans',sans-serif;transition:all .2s}
.ncta:hover{background:#22613C;box-shadow:0 4px 16px rgba(26,74,46,.3);transform:translateY(-1px)}
.mb-btn{display:none;background:none;border:none;cursor:pointer;color:#1A4A2E;padding:.5rem}
.mb-nav{background:rgba(255,255,255,.98);padding:.75rem 1.5rem 1.5rem;display:flex;flex-direction:column;gap:.15rem;border-top:1px solid rgba(26,74,46,.08);box-shadow:0 8px 24px rgba(0,0,0,.08)}
.mb-nav .nlink{padding:.7rem .5rem;font-size:.92rem}

/* HERO */
.hero{min-height:100vh;background:#1A4A2E;position:relative;overflow:hidden;display:flex;align-items:center}
.hero-mesh{position:absolute;inset:0;background:radial-gradient(ellipse 70% 60% at 80% 30%,rgba(201,160,32,.12) 0%,transparent 65%),radial-gradient(ellipse 50% 70% at 10% 90%,rgba(45,122,79,.5) 0%,transparent 55%)}
.hero-dots{position:absolute;inset:0;opacity:.06;background-image:radial-gradient(circle,rgba(201,160,32,1) 1.2px,transparent 1.2px);background-size:32px 32px}
.hero-cnt{max-width:1320px;margin:0 auto;padding:8rem 2rem 5rem;position:relative;z-index:2;display:grid;grid-template-columns:1.1fr .9fr;gap:5rem;align-items:center}
.hpill{display:inline-flex;align-items:center;gap:.5rem;background:rgba(201,160,32,.15);border:1px solid rgba(201,160,32,.35);color:#E8BE3A;font-size:.68rem;font-weight:700;letter-spacing:.15em;text-transform:uppercase;padding:.38rem .85rem;border-radius:100px;margin-bottom:1.5rem}
.hpill-dot{width:6px;height:6px;border-radius:50%;background:#E8BE3A;animation:blink 2s infinite}
@keyframes blink{0%,100%{opacity:1}50%{opacity:.2}}
.h1{font-family:'Playfair Display',serif;font-size:clamp(2.8rem,5.5vw,4.5rem);font-weight:700;line-height:1.08;color:#fff;letter-spacing:-.02em;margin-bottom:1.5rem}
.h1 em{font-style:italic;color:#E8BE3A}
.hsub{font-size:1.02rem;line-height:1.8;color:rgba(255,255,255,.72);font-weight:300;max-width:520px;margin-bottom:2.5rem}
.hbtns{display:flex;gap:1rem;flex-wrap:wrap}
.hstats{display:flex;gap:2.5rem;margin-top:3rem;padding-top:2rem;border-top:1px solid rgba(255,255,255,.1)}
.sn{font-family:'Playfair Display',serif;font-size:2.6rem;font-weight:700;color:#E8BE3A;line-height:1}
.sl{font-size:.68rem;color:rgba(255,255,255,.45);text-transform:uppercase;letter-spacing:.1em;margin-top:.3rem}
.hcard{background:rgba(255,255,255,.06);border:1px solid rgba(201,160,32,.25);border-radius:20px;padding:2rem;backdrop-filter:blur(12px);box-shadow:0 32px 64px rgba(0,0,0,.25)}
.hcbadge{background:rgba(201,160,32,.2);color:#E8BE3A;font-size:.66rem;font-weight:700;letter-spacing:.12em;text-transform:uppercase;padding:.33rem .75rem;border-radius:6px;display:inline-block;margin-bottom:1.2rem}
.hctitle{font-family:'Playfair Display',serif;font-size:1.3rem;font-weight:600;line-height:1.3;color:#fff;margin-bottom:1.25rem}
.hci{display:flex;align-items:center;gap:.65rem;font-size:.82rem;color:rgba(255,255,255,.7);padding:.42rem 0;border-bottom:1px solid rgba(255,255,255,.06)}
.hci:last-child{border:none}
.hcdot{width:6px;height:6px;border-radius:50%;background:#C9A020;flex-shrink:0}
.hfl{position:absolute;background:rgba(26,74,46,.9);border:1px solid rgba(201,160,32,.2);border-radius:14px;padding:1rem 1.25rem;backdrop-filter:blur(16px)}
.hfl1{top:-20px;right:-24px}
.hfl2{bottom:-16px;left:-28px}
.fn{font-family:'Playfair Display',serif;font-size:1.9rem;font-weight:700;color:#E8BE3A;line-height:1}
.fl{font-size:.66rem;color:rgba(255,255,255,.5);margin-top:.2rem}

/* SECTIONS */
.sec{padding:6rem 2rem}
.sec-in{max-width:1320px;margin:0 auto}
.stag{display:inline-flex;align-items:center;gap:.6rem;color:#22613C;font-size:.68rem;font-weight:700;letter-spacing:.2em;text-transform:uppercase;margin-bottom:.75rem}
.stag::before{content:'';display:block;width:20px;height:2px;background:#C9A020;border-radius:1px}
.stitle{font-family:'Playfair Display',serif;font-size:clamp(1.85rem,3.5vw,2.9rem);font-weight:700;line-height:1.15;letter-spacing:-.02em;color:#1A2E1F}
.stitle em{font-style:italic;color:#22613C}
.ssub{font-size:.95rem;line-height:1.8;color:#5E7A68;max-width:540px}
.dark{background:#1A4A2E;color:#fff}
.dark .stag{color:#E8BE3A}
.dark .stag::before{background:#E8BE3A}
.dark .stitle{color:#fff}
.dark .stitle em{color:#E8BE3A}
.dark .ssub{color:rgba(255,255,255,.6)}

/* BUTTONS */
.btn-gold{background:linear-gradient(135deg,#C9A020,#E8BE3A);color:#1A4A2E;font-weight:700;padding:.88rem 2.1rem;border-radius:10px;border:none;font-size:.88rem;cursor:pointer;font-family:'DM Sans',sans-serif;transition:all .25s;display:inline-flex;align-items:center;gap:.5rem}
.btn-gold:hover{transform:translateY(-2px);box-shadow:0 10px 30px rgba(201,160,32,.45)}
.btn-wh{background:transparent;color:#fff;padding:.88rem 2.1rem;border-radius:10px;border:1.5px solid rgba(255,255,255,.3);font-size:.88rem;cursor:pointer;font-family:'DM Sans',sans-serif;font-weight:500;transition:all .25s}
.btn-wh:hover{border-color:#E8BE3A;color:#E8BE3A}
.btn-fg{background:#1A4A2E;color:#fff;border:none;border-radius:8px;padding:.62rem 1.4rem;font-size:.8rem;font-weight:700;cursor:pointer;font-family:'DM Sans',sans-serif;transition:all .2s}
.btn-fg:hover{background:#22613C}
.btn-ge{background:linear-gradient(135deg,#B8860B,#DAA520);color:#1A1200;font-weight:700;padding:.9rem 2.1rem;border-radius:10px;border:none;font-size:.88rem;cursor:pointer;font-family:'DM Sans',sans-serif;transition:all .25s;display:inline-flex;align-items:center;gap:.5rem}
.btn-ge:hover{transform:translateY(-2px);box-shadow:0 12px 35px rgba(184,134,11,.5)}
.btn-ge-ol{background:transparent;color:#DAA520;padding:.9rem 2.1rem;border-radius:10px;border:1.5px solid rgba(218,165,32,.4);font-size:.88rem;cursor:pointer;font-family:'DM Sans',sans-serif;font-weight:500;transition:all .25s}
.btn-ge-ol:hover{border-color:#DAA520;background:rgba(218,165,32,.06)}
.btn-pc{background:linear-gradient(135deg,#1A3A5C,#2A5A8C);color:#fff;font-weight:700;padding:.9rem 2.1rem;border-radius:10px;border:none;font-size:.88rem;cursor:pointer;font-family:'DM Sans',sans-serif;transition:all .25s;display:inline-flex;align-items:center;gap:.5rem}
.btn-pc:hover{transform:translateY(-2px);box-shadow:0 12px 35px rgba(42,90,140,.5)}
.btn-pc-ol{background:transparent;color:#A8D0F0;padding:.9rem 2.1rem;border-radius:10px;border:1.5px solid rgba(122,176,224,.35);font-size:.88rem;cursor:pointer;font-family:'DM Sans',sans-serif;font-weight:500;transition:all .25s}
.btn-pc-ol:hover{border-color:#7AB0E0;background:rgba(122,176,224,.06)}

/* VM Cards */
.vm-grid{display:grid;grid-template-columns:1fr 1fr;gap:1.5rem;margin-top:3rem}
.vm{padding:2.5rem;border-radius:16px}
.vmv{background:#1A4A2E}
.vmm{background:#EAF3EC;border:1px solid rgba(26,74,46,.12)}
.vmlbl{font-size:.66rem;font-weight:700;letter-spacing:.2em;text-transform:uppercase;color:#C9A020;margin-bottom:1rem}
.vmtxt{font-family:'Playfair Display',serif;font-size:1.3rem;font-weight:500;line-height:1.55}
.vmv .vmtxt{color:#fff}
.vmm .vmtxt{color:#1A4A2E}

/* Why grid */
.why-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1.5rem;margin-top:3rem}
.wcard{background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.1);border-radius:14px;padding:1.85rem;transition:all .3s}
.wcard:hover{border-color:rgba(201,160,32,.4);transform:translateY(-4px)}
.wicon{width:48px;height:48px;border-radius:12px;background:rgba(201,160,32,.15);color:#E8BE3A;display:flex;align-items:center;justify-content:center;margin-bottom:1.25rem}
.wtitle{font-size:1rem;font-weight:700;margin-bottom:.55rem;color:#fff}
.wdesc{font-size:.83rem;line-height:1.7;color:rgba(255,255,255,.55)}

/* Programs */
.pgrid{display:grid;grid-template-columns:repeat(3,1fr);gap:1.5rem;margin-top:3rem}
.pcard{background:#fff;border:1px solid rgba(26,74,46,.09);border-radius:16px;padding:2rem;transition:all .3s;cursor:pointer;position:relative;overflow:hidden}
.pcard::after{content:'';position:absolute;bottom:0;left:0;right:0;height:3px;background:linear-gradient(90deg,#1A4A2E,#2D7A4F);transform:scaleX(0);transition:transform .3s;transform-origin:left}
.pcard:hover::after{transform:scaleX(1)}
.pcard:hover{box-shadow:0 12px 40px rgba(26,74,46,.1);transform:translateY(-4px)}
.picon{width:52px;height:52px;border-radius:14px;background:#1A4A2E;color:#E8BE3A;display:flex;align-items:center;justify-content:center;margin-bottom:1.25rem}
.ptitle{font-size:1rem;font-weight:700;color:#1A2E1F;margin-bottom:.5rem}
.pdesc{font-size:.82rem;line-height:1.7;color:#5E7A68}
.plink{display:inline-flex;align-items:center;gap:.4rem;color:#22613C;font-size:.76rem;font-weight:700;margin-top:1rem;letter-spacing:.05em;text-transform:uppercase}

/* Impact strip */
.ist{background:linear-gradient(135deg,#1A4A2E,#22613C);padding:4.5rem 2rem}
.ist-in{max-width:1320px;margin:0 auto;display:grid;grid-template-columns:repeat(4,1fr);gap:2rem;text-align:center}
.in{font-family:'Playfair Display',serif;font-size:3.5rem;font-weight:700;color:#E8BE3A;line-height:1}
.il{font-size:.73rem;font-weight:600;color:rgba(255,255,255,.5);text-transform:uppercase;letter-spacing:.12em;margin-top:.5rem}

/* Testimonials */
.tgrid{display:grid;grid-template-columns:repeat(3,1fr);gap:1.5rem;margin-top:3rem}
.tcard{background:#fff;border:1px solid rgba(26,74,46,.1);border-radius:16px;padding:2rem;position:relative;box-shadow:0 2px 16px rgba(26,74,46,.05)}
.tq{font-size:3.5rem;line-height:1;color:#C9A020;opacity:.22;font-family:'Playfair Display',serif;position:absolute;top:1.2rem;right:1.5rem}
.ttxt{font-family:'Playfair Display',serif;font-size:1rem;line-height:1.75;font-style:italic;color:#1A2E1F;margin-bottom:1.5rem;opacity:.85}
.tau{display:flex;align-items:center;gap:.75rem}
.tav{width:42px;height:42px;border-radius:50%;background:linear-gradient(135deg,#1A4A2E,#2D7A4F);display:flex;align-items:center;justify-content:center;font-weight:700;font-size:.8rem;color:#fff;flex-shrink:0}
.tn{font-size:.87rem;font-weight:700;color:#1A2E1F}
.tr{font-size:.73rem;color:#5E7A68}

/* Podcast */
.pfeat{background:#1A4A2E;border:1px solid rgba(201,160,32,.2);border-radius:20px;padding:2.5rem;display:grid;grid-template-columns:auto 1fr;gap:2rem;align-items:center;margin-bottom:2rem}
.pcov{width:110px;height:110px;border-radius:14px;flex-shrink:0;background:linear-gradient(135deg,#C9A020,#E8BE3A);display:flex;align-items:center;justify-content:center;color:#1A4A2E}
.pgrid2{display:grid;grid-template-columns:repeat(3,1fr);gap:1.5rem}
.pcard2{background:#fff;border:1px solid rgba(26,74,46,.1);border-radius:14px;padding:1.5rem;transition:all .3s;cursor:pointer;box-shadow:0 2px 12px rgba(26,74,46,.04)}
.pcard2:hover{border-color:#1A4A2E;transform:translateY(-3px)}
.pep{font-size:.66rem;color:#1A4A2E;font-weight:700;letter-spacing:.12em;text-transform:uppercase;margin-bottom:.5rem}
.ptitle2{font-weight:600;font-size:.88rem;line-height:1.4;margin-bottom:.75rem;color:#1A2E1F}
.pmeta{font-size:.71rem;color:#5E7A68;display:flex;gap:.5rem;align-items:center}
.pbtn{background:#1A4A2E;color:#fff;border:none;border-radius:8px;padding:.5rem 1rem;font-size:.76rem;font-weight:700;cursor:pointer;font-family:'DM Sans',sans-serif;margin-top:1rem;display:inline-flex;align-items:center;gap:.4rem;transition:all .2s}
.pbtn:hover{background:#22613C}

/* FLI Modules */
.flic{display:grid;grid-template-columns:repeat(3,1fr);gap:1rem;margin-top:2rem}
.fmod{background:rgba(255,255,255,.07);border:1px solid rgba(255,255,255,.1);border-radius:12px;padding:1.1rem 1.25rem;display:flex;align-items:center;gap:.75rem;transition:all .2s}
.fmod:hover{border-color:rgba(201,160,32,.45)}
.fnum{width:32px;height:32px;border-radius:8px;flex-shrink:0;background:rgba(201,160,32,.15);color:#E8BE3A;font-weight:700;font-size:.76rem;display:flex;align-items:center;justify-content:center}
.fname{font-size:.83rem;font-weight:500;color:rgba(255,255,255,.85)}

/* Values */
.vgrid{display:grid;grid-template-columns:repeat(3,1fr);gap:1.5rem;margin-top:3rem}
.vcard{text-align:center;padding:2rem 1.5rem;background:#fff;border:1px solid rgba(26,74,46,.1);border-radius:14px;transition:all .3s;box-shadow:0 2px 12px rgba(26,74,46,.04)}
.vcard:hover{border-color:#1A4A2E;transform:translateY(-3px)}
.vicon{width:56px;height:56px;border-radius:50%;background:#EAF3EC;color:#1A4A2E;margin:0 auto 1rem;display:flex;align-items:center;justify-content:center}
.vname{font-weight:700;font-size:.93rem;color:#1A4A2E;margin-bottom:.5rem}
.vdesc{font-size:.81rem;line-height:1.65;color:#5E7A68}

/* Join */
.jgrid{display:grid;grid-template-columns:repeat(3,1fr);gap:1.5rem;margin-top:3rem}
.jcard{background:#fff;border-radius:16px;padding:2rem;border:1px solid rgba(26,74,46,.09);transition:all .3s;cursor:pointer;text-align:center}
.jcard:hover{border-color:#1A4A2E;box-shadow:0 12px 40px rgba(26,74,46,.12);transform:translateY(-4px)}
.jico{width:60px;height:60px;border-radius:50%;background:#1A4A2E;color:#E8BE3A;margin:0 auto 1.25rem;display:flex;align-items:center;justify-content:center}
.jtitle{font-weight:700;font-size:1.03rem;color:#1A2E1F;margin-bottom:.5rem}
.jdesc{font-size:.81rem;line-height:1.7;color:#5E7A68;margin-bottom:1.25rem}

/* Contact */
.cgrid{display:grid;grid-template-columns:1fr 1.4fr;gap:3rem;margin-top:3rem}
.cinfo{background:#1A4A2E;border-radius:16px;padding:2.5rem;color:#fff}
.citem{display:flex;gap:1rem;margin-bottom:1.5rem;align-items:flex-start}
.cico{width:42px;height:42px;border-radius:10px;flex-shrink:0;background:rgba(201,160,32,.15);color:#E8BE3A;display:flex;align-items:center;justify-content:center}
.clbl{font-size:.66rem;color:rgba(255,255,255,.45);text-transform:uppercase;letter-spacing:.12em;margin-bottom:.25rem}
.cval{font-size:.9rem;font-weight:500;color:#fff}
.cform{background:#fff;border:1px solid rgba(26,74,46,.1);border-radius:16px;padding:2.5rem;box-shadow:0 4px 24px rgba(26,74,46,.07)}
.fg{margin-bottom:1.2rem}
.flbl{font-size:.76rem;font-weight:700;color:#1A2E1F;margin-bottom:.42rem;display:block;letter-spacing:.03em}
.fi,.fta,.fsel{width:100%;background:#F7F9F5;border:1.5px solid rgba(26,74,46,.12);border-radius:8px;padding:.72rem 1rem;color:#1A2E1F;font-size:.87rem;font-family:'DM Sans',sans-serif;transition:all .2s;outline:none}
.fi:focus,.fta:focus,.fsel:focus{border-color:#22613C;background:#fff;box-shadow:0 0 0 3px rgba(26,74,46,.08)}
.fta{resize:vertical;min-height:120px}
.frow{display:grid;grid-template-columns:1fr 1fr;gap:1rem}
.sbtn{display:flex;gap:.6rem;margin-top:1.5rem}
.sbtn2{width:38px;height:38px;border-radius:9px;background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.12);display:flex;align-items:center;justify-content:center;color:rgba(255,255,255,.5);cursor:pointer;transition:all .2s}
.sbtn2:hover{border-color:#E8BE3A;color:#E8BE3A}

/* CTA Banner */
.ctab{background:linear-gradient(135deg,#C9A020,#E8BE3A);padding:5rem 2rem;text-align:center}
.ctab h2{font-family:'Playfair Display',serif;font-size:clamp(1.8rem,3.8vw,2.8rem);font-weight:700;color:#1A4A2E;line-height:1.2;margin-bottom:1rem}
.ctab p{color:rgba(26,74,46,.7);font-size:1rem;max-width:480px;margin:0 auto 2rem}

/* Footer */
.ft{background:#1A4A2E;padding:4rem 2rem 2rem;color:#fff}
.ft-in{max-width:1320px;margin:0 auto}
.ftg{display:grid;grid-template-columns:2fr 1fr 1fr 1fr;gap:3rem;padding-bottom:3rem;border-bottom:1px solid rgba(255,255,255,.08);margin-bottom:2rem}
.ftb p{font-size:.83rem;line-height:1.8;color:rgba(255,255,255,.45);margin-top:1rem;max-width:280px}
.ftlogo{display:flex;align-items:center;gap:.6rem}
.ftlogo img{height:38px;width:auto;filter:brightness(0) invert(1);opacity:.85}
.ftlt{font-weight:700;font-size:1.02rem;color:#fff}
.ftls{font-size:.58rem;color:rgba(255,255,255,.4);letter-spacing:.14em;text-transform:uppercase}
.ftct{font-size:.68rem;font-weight:700;letter-spacing:.18em;text-transform:uppercase;color:#E8BE3A;margin-bottom:1rem}
.ftlinks{list-style:none}
.ftlinks li{margin-bottom:.55rem}
.ftlinks a{color:rgba(255,255,255,.45);font-size:.83rem;text-decoration:none;transition:color .2s;cursor:pointer}
.ftlinks a:hover{color:#E8BE3A}
.ftbot{display:flex;justify-content:space-between;align-items:center;font-size:.74rem;color:rgba(255,255,255,.3)}
.ftbot span{color:#E8BE3A}

/* ──── CIRCLES HUB ──── */
.ch{min-height:85vh;position:relative;overflow:hidden;display:flex;align-items:center;background:linear-gradient(165deg,#0D1B10 0%,#1A4A2E 50%,#0D1B10 100%)}
.ch-tex{position:absolute;inset:0;opacity:.04;background-image:repeating-linear-gradient(0deg,transparent,transparent 60px,rgba(201,160,32,.8) 60px,rgba(201,160,32,.8) 61px),repeating-linear-gradient(90deg,transparent,transparent 60px,rgba(201,160,32,.8) 60px,rgba(201,160,32,.8) 61px)}
.ch-gl{position:absolute;inset:0;background:radial-gradient(ellipse 60% 50% at 50% 40%,rgba(201,160,32,.08) 0%,transparent 70%)}
.ch-title{font-family:'Cinzel',serif;font-size:clamp(2.5rem,5vw,4.5rem);font-weight:600;color:#fff;letter-spacing:.05em;line-height:1.15;text-align:center;margin-bottom:1.5rem}
.ch-title span{color:#E8BE3A}
.ch-sub{text-align:center;font-size:1.03rem;color:rgba(255,255,255,.62);max-width:560px;margin:0 auto 3.5rem;line-height:1.85;font-weight:300}
.csg{display:grid;grid-template-columns:1fr 1fr;gap:2rem;max-width:920px;margin:0 auto}
.csc{border-radius:20px;padding:2.5rem;cursor:pointer;transition:all .35s cubic-bezier(.34,1.56,.64,1);position:relative;overflow:hidden;display:flex;flex-direction:column}
.csc:hover{transform:translateY(-8px)}
.csc-ge{background:linear-gradient(145deg,#1A1200,#3D2A00,#1A1200);border:1px solid rgba(184,134,11,.4);box-shadow:0 8px 40px rgba(184,134,11,.15),inset 0 1px 0 rgba(218,165,32,.15)}
.csc-ge:hover{box-shadow:0 24px 60px rgba(184,134,11,.3),inset 0 1px 0 rgba(218,165,32,.2);border-color:rgba(218,165,32,.6)}
.csc-pc{background:linear-gradient(145deg,#050F1C,#1A3A5C,#050F1C);border:1px solid rgba(42,90,140,.5);box-shadow:0 8px 40px rgba(26,58,92,.25)}
.csc-pc:hover{box-shadow:0 24px 60px rgba(26,58,92,.4);border-color:rgba(100,160,230,.5)}
.cglyph{font-family:'Cinzel',serif;font-size:.64rem;font-weight:600;letter-spacing:.25em;text-transform:uppercase;margin-bottom:1.5rem;display:flex;align-items:center;gap:.6rem}
.cglyph::before,.cglyph::after{content:'';flex:1;height:1px}
.csc-ge .cglyph{color:#DAA520}
.csc-ge .cglyph::before,.csc-ge .cglyph::after{background:rgba(218,165,32,.25)}
.csc-pc .cglyph{color:#7AB0E0}
.csc-pc .cglyph::before,.csc-pc .cglyph::after{background:rgba(122,176,224,.2)}
.cname{font-family:'Playfair Display',serif;font-size:1.7rem;font-weight:700;line-height:1.2;margin-bottom:.75rem}
.csc-ge .cname{color:#DAA520}
.csc-pc .cname{color:#A8D0F0}
.ctag2{font-size:.62rem;font-weight:700;letter-spacing:.12em;text-transform:uppercase;padding:.25rem .7rem;border-radius:100px;margin-right:.4rem;display:inline-block;margin-bottom:.4rem}
.csc-ge .ctag2{background:rgba(218,165,32,.1);color:#DAA520;border:1px solid rgba(218,165,32,.2)}
.csc-pc .ctag2{background:rgba(122,176,224,.08);color:#7AB0E0;border:1px solid rgba(122,176,224,.18)}
.ctagline{font-size:.87rem;line-height:1.7;margin-bottom:1.75rem;font-weight:300}
.csc-ge .ctagline{color:rgba(253,246,220,.68)}
.csc-pc .ctagline{color:rgba(234,240,248,.65)}
.ccta{display:inline-flex;align-items:center;gap:.5rem;font-size:.78rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;padding:.72rem 1.5rem;border-radius:8px;border:none;cursor:pointer;font-family:'DM Sans',sans-serif;transition:all .2s;align-self:flex-start;margin-top:auto}
.csc-ge .ccta{background:rgba(218,165,32,.15);color:#DAA520;border:1px solid rgba(218,165,32,.3)}
.csc-ge .ccta:hover{background:rgba(218,165,32,.25)}
.csc-pc .ccta{background:rgba(122,176,224,.1);color:#A8D0F0;border:1px solid rgba(122,176,224,.25)}
.csc-pc .ccta:hover{background:rgba(122,176,224,.18)}
.cbadge{position:absolute;top:1.25rem;right:1.25rem;font-size:.6rem;font-weight:700;letter-spacing:.15em;text-transform:uppercase;padding:.28rem .7rem;border-radius:100px}
.csc-ge .cbadge{background:rgba(218,165,32,.15);color:#DAA520;border:1px solid rgba(218,165,32,.25)}
.csc-pc .cbadge{background:rgba(122,176,224,.1);color:#7AB0E0;border:1px solid rgba(122,176,224,.2)}

/* ──── GE HERO ──── */
.geh{min-height:80vh;position:relative;overflow:hidden;display:flex;align-items:center;background:linear-gradient(160deg,#0E0900 0%,#2A1E00 40%,#1A1200 100%);padding-top:6rem}
.geh-sh{position:absolute;inset:0;background:radial-gradient(ellipse 70% 55% at 65% 40%,rgba(218,165,32,.1) 0%,transparent 65%),radial-gradient(ellipse 40% 60% at 5% 80%,rgba(184,134,11,.12) 0%,transparent 50%)}
.geh-li{position:absolute;inset:0;opacity:.03;background-image:repeating-linear-gradient(45deg,rgba(218,165,32,1) 0,rgba(218,165,32,1) 1px,transparent 0,transparent 50%);background-size:24px 24px}
.geb{font-family:'Cinzel',serif;font-size:.64rem;font-weight:600;letter-spacing:.3em;color:#DAA520;text-transform:uppercase;margin-bottom:1.25rem;display:flex;align-items:center;gap:.75rem}
.geb::before{content:'◆';font-size:.5rem}
.geh1{font-family:'Cinzel',serif;font-size:clamp(2.4rem,5vw,4.2rem);font-weight:600;color:#DAA520;line-height:1.15;letter-spacing:.03em;margin-bottom:.75rem}
.geh1s{font-family:'Playfair Display',serif;font-size:clamp(1.1rem,2vw,1.5rem);font-weight:400;font-style:italic;color:rgba(253,246,220,.58);margin-bottom:1.75rem}
.ged{font-size:1rem;line-height:1.85;color:rgba(253,246,220,.63);font-weight:300;max-width:520px;margin-bottom:2.5rem}
.gest{display:flex;gap:2rem;margin-top:2.5rem;padding-top:2rem;border-top:1px solid rgba(218,165,32,.15)}
.gesn{font-family:'Playfair Display',serif;font-size:2.2rem;font-weight:700;color:#DAA520;line-height:1}
.gesl{font-size:.65rem;color:rgba(253,246,220,.4);text-transform:uppercase;letter-spacing:.1em;margin-top:.3rem}
.gevc{background:rgba(218,165,32,.05);border:1px solid rgba(218,165,32,.2);border-radius:20px;padding:2rem;backdrop-filter:blur(8px)}
.ges{background:#0E0900}
.ges .stag{color:#DAA520}
.ges .stag::before{background:#DAA520}
.ges .stitle{color:#DAA520}
.ges .stitle em{color:rgba(253,246,220,.65)}
.ges .ssub{color:rgba(253,246,220,.52)}
.gecard{background:rgba(218,165,32,.05);border:1px solid rgba(218,165,32,.15);border-radius:14px;padding:1.75rem;transition:all .3s}
.gecard:hover{border-color:rgba(218,165,32,.4);background:rgba(218,165,32,.08);transform:translateY(-3px)}
.geico{width:48px;height:48px;border-radius:12px;background:rgba(218,165,32,.12);color:#DAA520;display:flex;align-items:center;justify-content:center;margin-bottom:1.25rem}
.gecard h4{font-size:1rem;font-weight:700;color:#DAA520;margin-bottom:.5rem}
.gecard p{font-size:.82rem;line-height:1.7;color:rgba(253,246,220,.52)}

/* ──── PC HERO ──── */
.pch{min-height:80vh;position:relative;overflow:hidden;display:flex;align-items:center;background:linear-gradient(160deg,#030910 0%,#0D1E2E 40%,#1A3A5C 100%);padding-top:6rem}
.pch-sh{position:absolute;inset:0;background:radial-gradient(ellipse 65% 50% at 60% 35%,rgba(42,90,140,.3) 0%,transparent 65%)}
.pch-do{position:absolute;inset:0;opacity:.05;background-image:radial-gradient(circle,rgba(122,176,224,1) 1px,transparent 1px);background-size:28px 28px}
.pcb{font-family:'Cinzel',serif;font-size:.64rem;font-weight:600;letter-spacing:.3em;color:#7AB0E0;text-transform:uppercase;margin-bottom:1.25rem;display:flex;align-items:center;gap:.75rem}
.pcb::before{content:'◈';font-size:.55rem}
.pch1{font-family:'Cinzel',serif;font-size:clamp(2.4rem,5vw,4.2rem);font-weight:600;color:#A8D0F0;line-height:1.15;letter-spacing:.03em;margin-bottom:.75rem}
.pch1s{font-family:'Playfair Display',serif;font-size:clamp(1.1rem,2vw,1.5rem);font-weight:400;font-style:italic;color:rgba(234,240,248,.52);margin-bottom:1.75rem}
.pcd{font-size:1rem;line-height:1.85;color:rgba(234,240,248,.6);font-weight:300;max-width:520px;margin-bottom:2.5rem}
.pcst{display:flex;gap:2rem;margin-top:2.5rem;padding-top:2rem;border-top:1px solid rgba(122,176,224,.15)}
.pcsn{font-family:'Playfair Display',serif;font-size:2.2rem;font-weight:700;color:#A8D0F0;line-height:1}
.pcsl{font-size:.65rem;color:rgba(234,240,248,.4);text-transform:uppercase;letter-spacing:.1em;margin-top:.3rem}
.pcvc{background:rgba(42,90,140,.1);border:1px solid rgba(122,176,224,.2);border-radius:20px;padding:2rem;backdrop-filter:blur(8px)}
.pcs{background:#060D18}
.pcs .stag{color:#7AB0E0}
.pcs .stag::before{background:#7AB0E0}
.pcs .stitle{color:#A8D0F0}
.pcs .stitle em{color:rgba(234,240,248,.6)}
.pcs .ssub{color:rgba(234,240,248,.5)}
.pccard{background:rgba(42,90,140,.08);border:1px solid rgba(122,176,224,.15);border-radius:14px;padding:1.75rem;transition:all .3s}
.pccard:hover{border-color:rgba(122,176,224,.4);background:rgba(42,90,140,.14);transform:translateY(-3px)}
.pcico{width:48px;height:48px;border-radius:12px;background:rgba(122,176,224,.1);color:#7AB0E0;display:flex;align-items:center;justify-content:center;margin-bottom:1.25rem}
.pccard h4{font-size:1rem;font-weight:700;color:#A8D0F0;margin-bottom:.5rem}
.pccard p{font-size:.82rem;line-height:1.7;color:rgba(234,240,248,.5)}

/* ──── APPLICATION FORM ──── */
.afw{background:#fff;border-radius:20px;overflow:hidden;box-shadow:0 4px 40px rgba(0,0,0,.1)}
.afb{padding:2.5rem}
.afi,.afta,.afsel{width:100%;background:#F7F9F5;border:1.5px solid rgba(26,74,46,.12);border-radius:10px;padding:.85rem 1.1rem;color:#1A2E1F;font-size:.87rem;font-family:'DM Sans',sans-serif;transition:all .2s;outline:none}
.afi-ge:focus{border-color:#DAA520;box-shadow:0 0 0 3px rgba(184,134,11,.1)}
.afi-pc:focus{border-color:#2A5A8C;box-shadow:0 0 0 3px rgba(42,90,140,.1)}
.afta{resize:vertical;min-height:130px}
.aflbl{font-size:.77rem;font-weight:700;color:#1A2E1F;margin-bottom:.48rem;display:block;letter-spacing:.02em}
.afg{margin-bottom:1.25rem}
.afrow{display:grid;grid-template-columns:1fr 1fr;gap:1rem}
.tb{display:flex;align-items:center;gap:.75rem;padding:.85rem 1.2rem;border-radius:10px;margin-bottom:1.5rem}
.tb-ge{background:rgba(218,165,32,.08);border:1px solid rgba(218,165,32,.2)}
.tb-pc{background:rgba(42,90,140,.07);border:1px solid rgba(122,176,224,.2)}
.tb-t{font-size:.77rem;line-height:1.5}
.tb-t strong{display:block;margin-bottom:.1rem}
.tb-ge .tb-t strong{color:#7A5C00}
.tb-pc .tb-t strong{color:#1A3A5C}
.tb-ge .tb-t{color:rgba(26,18,0,.75)}
.tb-pc .tb-t{color:rgba(6,13,24,.72)}
.cbrow{display:flex;align-items:flex-start;gap:.75rem;padding:1rem;background:#F7F9F5;border-radius:10px;border:1.5px solid rgba(26,74,46,.08);margin-bottom:1.5rem;cursor:pointer;transition:all .2s}
.cbrow:hover{background:#EAF3EC}
.cbx{width:20px;height:20px;border-radius:5px;flex-shrink:0;border:2px solid rgba(26,74,46,.25);display:flex;align-items:center;justify-content:center;transition:all .2s;margin-top:1px}
.cbx-ge{background:#B8860B;border-color:#B8860B;color:#fff}
.cbx-pc{background:#2A5A8C;border-color:#2A5A8C;color:#fff}
.cblbl{font-size:.81rem;line-height:1.6;color:#5E7A68}
.sub-ge{width:100%;background:linear-gradient(135deg,#B8860B,#DAA520);color:#1A1200;font-weight:700;padding:1rem 2rem;border-radius:10px;border:none;font-size:.91rem;cursor:pointer;font-family:'DM Sans',sans-serif;transition:all .25s;display:flex;align-items:center;justify-content:center;gap:.6rem}
.sub-ge:hover:not(:disabled){transform:translateY(-2px);box-shadow:0 12px 35px rgba(184,134,11,.4)}
.sub-ge:disabled{opacity:.55;cursor:not-allowed;transform:none}
.sub-pc{width:100%;background:linear-gradient(135deg,#1A3A5C,#2A5A8C);color:#fff;font-weight:700;padding:1rem 2rem;border-radius:10px;border:none;font-size:.91rem;cursor:pointer;font-family:'DM Sans',sans-serif;transition:all .25s;display:flex;align-items:center;justify-content:center;gap:.6rem}
.sub-pc:hover:not(:disabled){transform:translateY(-2px);box-shadow:0 12px 35px rgba(42,90,140,.4)}
.sub-pc:disabled{opacity:.55;cursor:not-allowed;transform:none}

/* ──── CONFIRMATION ──── */
.cs{min-height:70vh;display:flex;align-items:center;justify-content:center;padding:4rem 2rem}
.cc{max-width:580px;width:100%;text-align:center;padding:3.5rem 3rem;border-radius:24px}
.cc-ge{background:linear-gradient(145deg,#1A1200,#2A1E00);border:1px solid rgba(218,165,32,.3)}
.cc-pc{background:linear-gradient(145deg,#060D18,#0D1E2E);border:1px solid rgba(122,176,224,.3)}
.cico2{width:80px;height:80px;border-radius:50%;margin:0 auto 2rem;display:flex;align-items:center;justify-content:center}
.cc-ge .cico2{background:rgba(218,165,32,.15);color:#DAA520}
.cc-pc .cico2{background:rgba(122,176,224,.12);color:#7AB0E0}
.ctitle2{font-family:'Cinzel',serif;font-size:1.6rem;font-weight:600;margin-bottom:1rem}
.cc-ge .ctitle2{color:#DAA520}
.cc-pc .ctitle2{color:#A8D0F0}
.cref{display:inline-flex;align-items:center;gap:.5rem;font-size:.68rem;font-weight:700;letter-spacing:.15em;text-transform:uppercase;padding:.33rem 1rem;border-radius:100px;margin-bottom:1.5rem}
.cc-ge .cref{background:rgba(218,165,32,.12);color:#DAA520;border:1px solid rgba(218,165,32,.25)}
.cc-pc .cref{background:rgba(122,176,224,.1);color:#7AB0E0;border:1px solid rgba(122,176,224,.2)}
.cbody{font-size:.91rem;line-height:1.8;margin-bottom:1.5rem}
.cc-ge .cbody{color:rgba(253,246,220,.63)}
.cc-pc .cbody{color:rgba(234,240,248,.6)}
.cdiv{height:1px;margin:1.5rem 0}
.cc-ge .cdiv{background:rgba(218,165,32,.15)}
.cc-pc .cdiv{background:rgba(122,176,224,.15)}
.cstep{display:flex;gap:1rem;align-items:flex-start;margin-bottom:1rem;text-align:left}
.cstepn{width:26px;height:26px;border-radius:50%;flex-shrink:0;display:flex;align-items:center;justify-content:center;font-size:.68rem;font-weight:700}
.cc-ge .cstepn{background:rgba(218,165,32,.15);color:#DAA520}
.cc-pc .cstepn{background:rgba(122,176,224,.12);color:#7AB0E0}
.cstept{font-size:.82rem;line-height:1.6;padding-top:.15rem}
.cc-ge .cstept{color:rgba(253,246,220,.58)}
.cc-pc .cstept{color:rgba(234,240,248,.55)}

/* Animations */
@keyframes fadeUp{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}
@keyframes scaleIn{from{opacity:0;transform:scale(.92)}to{opacity:1;transform:scale(1)}}
.fu{animation:fadeUp .6s ease both}
.fu2{animation:fadeUp .6s .15s ease both}
.fi2{animation:fadeUp .5s ease both}
.si{animation:scaleIn .5s ease both}

/* Responsive */
@media(max-width:1024px){
  .hero-cnt,.geh .hcnt,.pch .hcnt{grid-template-columns:1fr}
  .hvisual{display:none}
  .vm-grid,.csg{grid-template-columns:1fr}
  .why-grid,.pgrid{grid-template-columns:1fr 1fr}
  .tgrid{grid-template-columns:1fr 1fr}
  .ftg{grid-template-columns:1fr 1fr}
}
@media(max-width:768px){
  .nlinks,.ncta{display:none}
  .mb-btn{display:flex}
  .why-grid,.pgrid,.vgrid,.jgrid,.tgrid,.pgrid2,.flic{grid-template-columns:1fr}
  .ist-in{grid-template-columns:1fr 1fr}
  .cgrid,.frow,.afrow{grid-template-columns:1fr}
  .ftg{grid-template-columns:1fr}
  .ftbot{flex-direction:column;gap:.5rem;text-align:center}
  .pfeat{grid-template-columns:1fr}
  .hstats,.gest,.pcst{gap:1.5rem;flex-wrap:wrap}
  .cc{padding:2.5rem 1.5rem}
}
`;

// ─── Shared helpers ───────────────────────────────────────────────────────────
function Logo({ h = 40, inv = false }) {
  return <img src={LOGO} alt="GOLD" style={{ height: h, width: "auto", objectFit: "contain", filter: inv ? "brightness(0) invert(1)" : "none" }} />;
}

// ─── Navbar ───────────────────────────────────────────────────────────────────
function Nav({ pg, set }) {
  const [sc, setSc] = useState(false);
  const [mo, setMo] = useState(false);
  useEffect(() => {
    const h = () => setSc(window.scrollY > 50);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);
  const go = id => { set(id); setMo(false); window.scrollTo(0, 0); };
  return (
    <nav className={`nav${sc ? " on" : ""}`}>
      <div className="nav-in">
        <div className="nlogo" onClick={() => go("home")}><Logo h={38} /><div><div className="nlogo-t">GOLD</div><div className="nlogo-s">Leadership Development</div></div></div>
        <div className="nlinks">{NAV_LINKS.map(l => <button key={l.id} className={`nlink${pg === l.id ? " act" : ""}${l.highlight ? " hl" : ""}`} onClick={() => go(l.id)}>{l.label}</button>)}</div>
        <button className="ncta" onClick={() => go("join")}>Join GOLD</button>
        <button className="mb-btn" onClick={() => setMo(o => !o)}>{mo ? <I.X /> : <I.Menu />}</button>
      </div>
      {mo && <div className="mb-nav">{NAV_LINKS.map(l => <button key={l.id} className={`nlink${pg === l.id ? " act" : ""}${l.highlight ? " hl" : ""}`} onClick={() => go(l.id)}>{l.label}</button>)}<button className="btn-gold" style={{ marginTop: ".5rem", justifyContent: "center" }} onClick={() => go("join")}>Join GOLD</button></div>}
    </nav>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────
function Foot({ set }) {
  return (
    <footer className="ft">
      <div className="ft-in">
        <div className="ftg">
          <div className="ftb">
            <div className="ftlogo"><Logo h={36} inv /><div><div className="ftlt">GOLD</div><div className="ftls">Leadership Development</div></div></div>
            <p>Raising a generation of transformational leaders to build the Africa we all deserve — through character, competence, and commitment to service.</p>
            <div className="sbtn">{[I.Twitter, I.LinkedIn, I.Facebook, I.Youtube].map((Icon, i) => <div className="sbtn2" key={i}><Icon /></div>)}</div>
          </div>
          <div>
            <div className="ftct">Programs</div>
            <ul className="ftlinks">{[["Future Leaders Initiative","fli"],["The Circles","circles"],["GOLD-EN Circle","golden-circle"],["Policy Circle","policy-circle"],["RE-BUILD Podcast","podcast"]].map(([l, p]) => <li key={l}><a onClick={() => set(p)}>{l}</a></li>)}</ul>
          </div>
          <div>
            <div className="ftct">The Circles</div>
            <ul className="ftlinks">{[["GOLD-EN Circle","golden-circle"],["Policy Circle","policy-circle"],["Apply — GOLD-EN","golden-apply"],["Apply — Policy","policy-apply"],["About Circles","circles"]].map(([l, p]) => <li key={l}><a onClick={() => set(p)}>{l}</a></li>)}</ul>
          </div>
          <div>
            <div className="ftct">Get Involved</div>
            <ul className="ftlinks">{[["Become a Fellow","join"],["Partner With Us","join"],["Donate","join"],["Contact Us","contact"],["About GOLD","about"]].map(([l, p]) => <li key={l}><a onClick={() => set(p)}>{l}</a></li>)}</ul>
          </div>
        </div>
        <div className="ftbot">
          <div>© 2025 <span>GOLD</span> — Governmental and Organizational Leadership Development.</div>
          <div>Raising <span>Leaders</span>. Building <span>Nations</span>. Transforming <span>Africa</span>.</div>
        </div>
      </div>
    </footer>
  );
}

// ─── Application Form (shared, theme-aware) ───────────────────────────────────
function AppForm({ circle, onBack }) {
  const ge = circle === "golden";
  const [step, setStep] = useState(1);
  const [done, setDone] = useState(false);
  const [loading, setLoading] = useState(false);
  const [chk, setChk] = useState(false);
  const [f, setF] = useState({ fn: "", ln: "", em: "", ph: "", loc: "", role: "", spec: "", mot: "" });
  const [ref] = useState(() => `${ge ? "GEN" : "POL"}-${Date.now().toString(36).toUpperCase().slice(-6)}`);
  const u = (k, v) => setF(x => ({ ...x, [k]: v }));

  const ac = ge ? C.ge : C.pcLight;
  const atxt = ge ? "#1A1200" : "#fff";
  const ic = ge ? "afi-ge" : "afi-pc";
  const fi = `afi ${ic}`;
  const fs = `afsel afi ${ic}`;
  const fta = `afta afi ${ic}`;

  const ok1 = f.fn && f.ln && f.em && f.ph;
  const ok2 = f.loc && f.role && f.spec.trim().length > 10;
  const ok3 = f.mot.split(/\s+/).filter(Boolean).length >= 30 && chk;

  const submit = async () => {
    if (!ok3) return;
    setLoading(true);
    const rec = { ...f, circle: ge ? "GOLD-EN Circle" : "Policy Circle", ref, at: new Date().toISOString() };
    try { const ex = JSON.parse(localStorage.getItem("gold_apps") || "[]"); ex.push(rec); localStorage.setItem("gold_apps", JSON.stringify(ex)); } catch (_) { }
    await new Promise(r => setTimeout(r, 1600));
    setLoading(false);
    setDone(true);
  };

  const BtnBack = ({ onClick }) => (
    <button onClick={onClick} style={{ background: "transparent", border: "1.5px solid rgba(0,0,0,.1)", color: C.muted, borderRadius: 10, padding: ".82rem 1.5rem", fontWeight: 600, fontSize: ".86rem", cursor: "pointer", fontFamily: "'DM Sans',sans-serif" }}>← Back</button>
  );
  const BtnNext = ({ onClick, disabled }) => (
    <button onClick={onClick} disabled={disabled} style={{ background: disabled ? "rgba(0,0,0,.08)" : ac, color: disabled ? C.muted : atxt, border: "none", borderRadius: 10, padding: ".82rem 2rem", fontWeight: 700, fontSize: ".86rem", cursor: disabled ? "not-allowed" : "pointer", fontFamily: "'DM Sans',sans-serif", display: "inline-flex", alignItems: "center", gap: ".5rem", transition: "all .2s" }}>Continue <I.ArrowRight /></button>
  );

  if (done) return (
    <div className="cs fi2">
      <div className={`cc si ${ge ? "cc-ge" : "cc-pc"}`}>
        <div className="cico2"><I.CheckCircle /></div>
        <div className="cref">Application Received · {ref}</div>
        <div className="ctitle2">You're In the Queue</div>
        <div className="cbody">Thank you, <strong>{f.fn}</strong>. Your application to the <strong>{ge ? "GOLD-EN Circle" : "Policy Circle"}</strong> has been submitted with reference <strong>{ref}</strong>.</div>
        <div className="cdiv" />
        <div>{[["01","Application reviewed by the GOLD Selection Board (7–10 business days)"],["02","Shortlisted applicants contacted for a brief assessment conversation"],["03","Selected members receive formal admission and onboarding details"]].map(([n, t]) => (
          <div className="cstep" key={n}><div className="cstepn">{n}</div><div className="cstept">{t}</div></div>
        ))}</div>
        <div className="cdiv" />
        <div style={{ fontSize: ".77rem", textAlign: "center" }} className="cbody">Questions? Email <span style={{ color: ge ? C.geLight : C.pcAccent, fontWeight: 600 }}>circles@goldleadershipafrica.org</span></div>
        <button onClick={onBack} style={{ marginTop: "1.75rem", background: "transparent", border: `1.5px solid ${ge ? "rgba(218,165,32,.3)" : "rgba(122,176,224,.3)"}`, color: ge ? C.geLight : C.pcText, padding: ".72rem 2rem", borderRadius: 10, cursor: "pointer", fontFamily: "'DM Sans',sans-serif", fontWeight: 600, fontSize: ".84rem" }}>← Back to Program</button>
      </div>
    </div>
  );

  const hBg = ge ? "linear-gradient(135deg,#1A1200,#2A1E00)" : "linear-gradient(135deg,#060D18,#0D1E2E)";
  const hBor = ge ? "rgba(218,165,32,.2)" : "rgba(122,176,224,.2)";
  const hTxt = ge ? C.geLight : C.pcText;
  const steps = ["Personal Info", "Background", "Statement"];

  return (
    <div className="afw fu">
      {/* Header */}
      <div style={{ background: hBg, borderBottom: `1px solid ${hBor}`, padding: "2.5rem 2.5rem 2rem" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1.5rem" }}>
          <div>
            <div style={{ fontFamily: "'Cinzel',serif", fontSize: ".6rem", fontWeight: 600, letterSpacing: ".25em", textTransform: "uppercase", color: hTxt, marginBottom: ".5rem" }}>{ge ? "◆ GOLD-EN Circle Application" : "◈ Policy Circle Application"}</div>
            <div style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.25rem", fontWeight: 700, color: hTxt }}>{ge ? "Apply to Join the GOLD-EN Circle" : "Apply for Policy Circle Admission"}</div>
          </div>
          <div style={{ fontSize: ".62rem", fontWeight: 700, letterSpacing: ".12em", textTransform: "uppercase", padding: ".28rem .75rem", borderRadius: 100, background: ge ? "rgba(218,165,32,.12)" : "rgba(122,176,224,.1)", color: hTxt, border: `1px solid ${hBor}` }}>Selective Intake</div>
        </div>
        {/* Steps progress */}
        <div style={{ display: "flex", alignItems: "flex-start" }}>
          {steps.map((s, i) => (
            <div key={s} style={{ display: "flex", alignItems: "flex-start", flex: 1 }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flex: 1 }}>
                <div style={{ display: "flex", alignItems: "center", width: "100%" }}>
                  <div style={{ width: 29, height: 29, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: ".68rem", fontWeight: 700, flexShrink: 0, background: i + 1 <= step ? ac : "rgba(255,255,255,.06)", color: i + 1 <= step ? atxt : "rgba(255,255,255,.3)", border: i + 1 > step ? "1px solid rgba(255,255,255,.12)" : "none", transition: "all .3s" }}>
                    {i + 1 < step ? <I.Check /> : i + 1}
                  </div>
                  {i < steps.length - 1 && <div style={{ flex: 1, height: 2, background: i + 1 < step ? ac : "rgba(255,255,255,.08)", transition: "all .3s" }} />}
                </div>
                <div style={{ fontSize: ".58rem", fontWeight: 600, letterSpacing: ".06em", textTransform: "uppercase", marginTop: ".35rem", color: i + 1 === step ? hTxt : "rgba(255,255,255,.28)", textAlign: "center" }}>{s}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="afb">
        {/* Trust badge */}
        <div className={`tb ${ge ? "tb-ge" : "tb-pc"}`}>
          <div style={{ color: ge ? C.geDark : C.pc, flexShrink: 0 }}><I.Lock /></div>
          <div className="tb-t"><strong>{ge ? "Applications reviewed by GOLD Selection Board" : "Applications reviewed by GOLD Selection Committee"}</strong>All submissions are confidential. Selected members contacted within 7–10 business days.</div>
        </div>

        {/* STEP 1 */}
        {step === 1 && <div className="fi2">
          <div style={{ fontSize: ".76rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: ".12em", color: C.muted, marginBottom: "1.25rem" }}>Step 1 of 3 — Personal Information</div>
          <div className="afrow">
            <div className="afg"><label className="aflbl">First Name *</label><input className={fi} placeholder="Chidi" value={f.fn} onChange={e => u("fn", e.target.value)} /></div>
            <div className="afg"><label className="aflbl">Last Name *</label><input className={fi} placeholder="Okonkwo" value={f.ln} onChange={e => u("ln", e.target.value)} /></div>
          </div>
          <div className="afg"><label className="aflbl">Email Address *</label><input className={fi} type="email" placeholder="you@example.com" value={f.em} onChange={e => u("em", e.target.value)} /></div>
          <div className="afg"><label className="aflbl">Phone Number *</label><input className={fi} placeholder="+234 xxx xxxx xxxx" value={f.ph} onChange={e => u("ph", e.target.value)} /></div>
          <div style={{ display: "flex", justifyContent: "flex-end", marginTop: ".5rem" }}><BtnNext onClick={() => ok1 && setStep(2)} disabled={!ok1} /></div>
        </div>}

        {/* STEP 2 */}
        {step === 2 && <div className="fi2">
          <div style={{ fontSize: ".76rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: ".12em", color: C.muted, marginBottom: "1.25rem" }}>Step 2 of 3 — Background & Context</div>
          <div className="afg"><label className="aflbl">Location (City & Country) *</label><input className={fi} placeholder="Lagos, Nigeria" value={f.loc} onChange={e => u("loc", e.target.value)} /></div>
          <div className="afg">
            <label className="aflbl">Current Role *</label>
            <select className={fs} value={f.role} onChange={e => u("role", e.target.value)}>
              <option value="">Select your current role</option>
              <option>Student (Secondary)</option><option>Student (University)</option>
              <option>Entrepreneur / Founder</option><option>Young Professional</option>
              <option>Civil Servant / Government Official</option><option>NGO / Social Sector</option><option>Other</option>
            </select>
          </div>
          <div className="afg">
            <label className="aflbl">{ge ? "What are you currently building or planning to build? *" : "What area of leadership or public service interests you? *"}</label>
            <textarea className={fta} placeholder={ge ? "Describe your venture, project, or idea — its stage, the problem it solves, and what you're building toward..." : "Describe the sector, issue area, or institution you feel called to — e.g. public health policy, governance reform, constitutional law, civic education..."} value={f.spec} onChange={e => u("spec", e.target.value)} style={{ minHeight: 110 }} />
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", marginTop: ".5rem" }}><BtnBack onClick={() => setStep(1)} /><BtnNext onClick={() => ok2 && setStep(3)} disabled={!ok2} /></div>
        </div>}

        {/* STEP 3 */}
        {step === 3 && <div className="fi2">
          <div style={{ fontSize: ".76rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: ".12em", color: C.muted, marginBottom: "1.25rem" }}>Step 3 of 3 — Personal Statement</div>
          <div className="afg">
            <label className="aflbl">Why do you want to join the {ge ? "GOLD-EN Circle" : "Policy Circle"}? *</label>
            <div style={{ fontSize: ".73rem", color: C.muted, marginBottom: ".6rem", lineHeight: 1.6 }}>This is your most important field. Speak honestly about your motivation, what you hope to gain, and what you will contribute. Minimum 30 words.</div>
            <textarea className={fta} placeholder={ge ? "Speak to your entrepreneurial journey, the challenges you face, what you hope to gain from mentorship and peer accountability, and why you're ready now..." : "Speak to your vision for leadership and public service, what draws you to policy or governance, and why this circle aligns with the leader you're becoming..."} value={f.mot} onChange={e => u("mot", e.target.value)} style={{ minHeight: 165 }} />
            <div style={{ textAlign: "right", fontSize: ".7rem", color: f.mot.split(/\s+/).filter(Boolean).length >= 30 ? C.forestMid : C.muted, marginTop: ".35rem" }}>
              {f.mot.split(/\s+/).filter(Boolean).length} words {f.mot.split(/\s+/).filter(Boolean).length >= 30 ? "✓" : "(min 30)"}
            </div>
          </div>
          <div className="cbrow" onClick={() => setChk(c => !c)}>
            <div className={`cbx${chk ? (ge ? " cbx-ge" : " cbx-pc") : ""}`}>{chk && <I.Check />}</div>
            <div className="cblbl">I understand that <strong>admission to this Circle is selective</strong> and not guaranteed. I commit to full participation, confidentiality within Circle sessions, and upholding the values of the GOLD community if selected.</div>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", marginTop: ".5rem" }}>
            <BtnBack onClick={() => setStep(2)} />
            <button onClick={submit} disabled={!ok3 || loading} className={ge ? "sub-ge" : "sub-pc"} style={{ width: "auto", padding: ".85rem 2rem" }}>
              {loading ? "Submitting…" : <><I.Send /> Submit Application</>}
            </button>
          </div>
        </div>}
      </div>
    </div>
  );
}

// ─── PAGE: Circles Hub ────────────────────────────────────────────────────────
function CirclesPage({ set }) {
  return (
    <div className="ch" style={{ paddingTop: "6rem" }}>
      <div className="ch-tex" /><div className="ch-gl" />
      <div style={{ position: "relative", zIndex: 2, width: "100%", maxWidth: 1320, margin: "0 auto", padding: "4rem 2rem" }}>
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <div style={{ fontFamily: "'Cinzel',serif", fontSize: ".6rem", fontWeight: 600, letterSpacing: ".35em", color: C.goldLight, textTransform: "uppercase", marginBottom: "1.5rem", opacity: .7 }}>GOLD EXCLUSIVE MEMBERSHIP</div>
          <h1 className="ch-title">The <span>Circles</span></h1>
          <p className="ch-sub">Two closed-door mentorship circles for Africa's most intentional emerging leaders. Curated. Exclusive. Transformational.</p>
        </div>
        <div className="csg">
          {/* GOLD-EN */}
          <div className="csc csc-ge" onClick={() => set("golden-circle")}>
            <div className="cbadge">Entrepreneurship</div>
            <div className="cglyph">GOLD-EN Circle</div>
            <div style={{ color: C.geLight, marginBottom: "1.25rem" }}><I.Zap /></div>
            <div className="cname">GOLD-EN Circle</div>
            <p className="ctagline">The entrepreneurship mentorship circle for Africa's next generation of founders, builders, and high-growth operators. Not a network — an execution community.</p>
            <div style={{ marginBottom: "1.75rem" }}>
              {["Mentorship","Execution","Peer Learning","Strategy"].map(t => <span key={t} className="ctag2">{t}</span>)}
            </div>
            <button className="ccta" onClick={e => { e.stopPropagation(); set("golden-circle"); }}>Explore Program <I.ArrowRight /></button>
          </div>
          {/* Policy */}
          <div className="csc csc-pc" onClick={() => set("policy-circle")}>
            <div className="cbadge">Governance & Policy</div>
            <div className="cglyph">Policy Circle</div>
            <div style={{ color: C.pcAccent, marginBottom: "1.25rem" }}><I.Shield /></div>
            <div className="cname">Policy Circle</div>
            <p className="ctagline">The civic and policy leadership circle for emerging leaders committed to governance, public service, and nation-building in Africa. Leadership as a calling.</p>
            <div style={{ marginBottom: "1.75rem" }}>
              {["Governance","Policy Thinking","Civic Leadership","Nation Building"].map(t => <span key={t} className="ctag2">{t}</span>)}
            </div>
            <button className="ccta" onClick={e => { e.stopPropagation(); set("policy-circle"); }}>Explore Program <I.ArrowRight /></button>
          </div>
        </div>
        {/* Trust strip */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "1.5rem", maxWidth: 920, margin: "3rem auto 0" }}>
          {[{ Icon: I.Lock, t: "Closed-Door Format", d: "Both Circles are invite-only. Access is through application and selection only." }, { Icon: I.Users, t: "Curated Cohorts", d: "Small groups of 15–20 members to maximise depth, trust, and peer accountability." }, { Icon: I.Award, t: "GOLD Selection Board", d: "Every application is personally reviewed by the GOLD leadership team." }].map(x => (
            <div key={x.t} style={{ background: "rgba(255,255,255,.04)", border: "1px solid rgba(255,255,255,.08)", borderRadius: 14, padding: "1.5rem", textAlign: "center" }}>
              <div style={{ width: 44, height: 44, borderRadius: "50%", background: "rgba(201,160,32,.1)", color: C.goldLight, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1rem" }}><x.Icon /></div>
              <div style={{ fontWeight: 700, fontSize: ".88rem", color: "#fff", marginBottom: ".45rem" }}>{x.t}</div>
              <div style={{ fontSize: ".79rem", lineHeight: 1.65, color: "rgba(255,255,255,.43)" }}>{x.d}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── PAGE: GOLD-EN Circle ─────────────────────────────────────────────────────
function GoldenCirclePage({ set }) {
  const bens = [
    { Icon: I.Users, t: "1-on-1 Mentorship", d: "Matched with an experienced entrepreneur or investor for structured, ongoing mentorship throughout the cycle." },
    { Icon: I.Network, t: "Peer Circle Sessions", d: "Monthly facilitated sessions with your cohort — honest peer accountability, shared problem-solving, and execution reviews." },
    { Icon: I.Target, t: "Strategy & Execution", d: "Work through business challenges with practical frameworks, mentor feedback, and peer insights that move you forward." },
    { Icon: I.Briefcase, t: "Market & Partner Access", d: "Gain connections to investors, partners, customers, and resources relevant to your stage and sector across Africa." },
    { Icon: I.TrendUp, t: "Investor Readiness", d: "Coaching on pitch preparation, financial modelling, and how to tell your venture's story compellingly to capital." },
    { Icon: I.Diamond, t: "GOLD-EN Alumni Network", d: "Graduate into a lifetime network of Africa's most ambitious founders — a community that opens doors at every stage." },
  ];
  return (
    <>
      <div className="geh">
        <div className="geh-sh" /><div className="geh-li" />
        <div style={{ position: "relative", zIndex: 2, maxWidth: 1320, margin: "0 auto", padding: "4rem 2rem", display: "grid", gridTemplateColumns: "1.1fr .9fr", gap: "5rem", alignItems: "center" }} className="hcnt">
          <div className="fu">
            <div className="geb">GOLD Exclusive · Entrepreneurship Circle</div>
            <h1 className="geh1">GOLD-EN Circle</h1>
            <div className="geh1s">For founders, builders, and operators serious about execution.</div>
            <p className="ged">An exclusive, closed-door entrepreneurship mentorship circle for Africa's most intentional young founders and builders. This is not a networking group. It is a curated execution community where serious people get serious support.</p>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <button className="btn-ge" onClick={() => set("golden-apply")}>Apply to Join <I.ArrowRight /></button>
              <button className="btn-ge-ol" onClick={() => set("circles")}>← All Circles</button>
            </div>
            <div className="gest">
              {[["20","Members/Cohort"],["6mo","Circle Cycle"],["100%","Application-Based"]].map(([n, l]) => <div key={l}><div className="gesn">{n}</div><div className="gesl">{l}</div></div>)}
            </div>
          </div>
          <div className="fu2">
            <div className="gevc">
              <div style={{ fontFamily: "'Cinzel',serif", fontSize: ".57rem", fontWeight: 600, letterSpacing: ".25em", color: C.geLight, textTransform: "uppercase", marginBottom: "1.5rem", textAlign: "center", borderBottom: "1px solid rgba(218,165,32,.15)", paddingBottom: "1rem" }}>Circle Overview</div>
              {[["Format","Closed-Door, In-Person & Virtual"],["Cohort Size","15–20 Selected Members"],["Duration","6-Month Intensive Cycle"],["Mentors","Entrepreneurs & Investors"],["Sessions","Monthly Circle + Mentor Check-ins"],["Access","By Application Only"]].map(([k, v]) => (
                <div key={k} style={{ display: "flex", justifyContent: "space-between", padding: ".62rem 0", borderBottom: "1px solid rgba(218,165,32,.08)", alignItems: "center" }}>
                  <span style={{ fontSize: ".73rem", color: "rgba(253,246,220,.4)", fontWeight: 500 }}>{k}</span>
                  <span style={{ fontSize: ".82rem", color: C.geLight, fontWeight: 600, textAlign: "right", maxWidth: "55%" }}>{v}</span>
                </div>
              ))}
              <button className="btn-ge" style={{ width: "100%", justifyContent: "center", marginTop: "1.75rem" }} onClick={() => set("golden-apply")}>Apply to Join <I.ArrowRight /></button>
            </div>
          </div>
        </div>
      </div>

      {/* What it is */}
      <div className="ges sec">
        <div className="sec-in">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }}>
            <div>
              <div className="stag">What the GOLD-EN Circle Is</div>
              <h2 className="stitle" style={{ marginBottom: "1.5rem" }}>Built for <em>Builders</em></h2>
              <p style={{ fontSize: ".96rem", lineHeight: 1.85, color: "rgba(253,246,220,.6)", marginBottom: "1.25rem" }}>The GOLD-EN Circle brings together a curated cohort of founders, operators, and innovators at various stages — pre-launch through early growth — and wraps them in structured mentorship, peer accountability, and execution support.</p>
              <p style={{ fontSize: ".96rem", lineHeight: 1.85, color: "rgba(253,246,220,.6)", marginBottom: "1.75rem" }}>We do not celebrate ideas here. We celebrate momentum, learning, and results.</p>
              {["Founders at pre-launch or early stage","Operators building within existing businesses","Innovators creating social or community impact ventures","Young professionals transitioning to entrepreneurship"].map(t => (
                <div key={t} style={{ display: "flex", alignItems: "center", gap: ".75rem", fontSize: ".86rem", color: "rgba(253,246,220,.7)", marginBottom: ".75rem" }}>
                  <div style={{ width: 22, height: 22, borderRadius: "50%", background: "rgba(218,165,32,.15)", color: C.geLight, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}><I.Check /></div>{t}
                </div>
              ))}
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
              {[{ t: "Mentorship", d: "Matched with a proven entrepreneur or operator who guides your journey." }, { t: "Peer Circle", d: "Monthly sessions where members share wins, challenges, and solutions honestly." }, { t: "Execution Focus", d: "Every session is results-oriented. Strategy meets accountability here." }, { t: "Community", d: "A lifetime network of Africa's most ambitious young builders." }].map(c => (
                <div key={c.t} style={{ background: "rgba(218,165,32,.05)", border: "1px solid rgba(218,165,32,.12)", borderRadius: 12, padding: "1.35rem" }}>
                  <div style={{ fontWeight: 700, fontSize: ".92rem", color: C.geLight, marginBottom: ".4rem" }}>{c.t}</div>
                  <div style={{ fontSize: ".79rem", lineHeight: 1.65, color: "rgba(253,246,220,.5)" }}>{c.d}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Benefits */}
      <div style={{ background: "#140E00", padding: "5rem 2rem" }}>
        <div className="sec-in">
          <div className="stag" style={{ color: C.geLight }}><span style={{ display: "block", width: 20, height: 2, background: C.geLight, borderRadius: 1 }} />What You Gain</div>
          <h2 className="stitle" style={{ color: C.geLight, marginBottom: ".75rem" }}>Circle <em style={{ color: "rgba(253,246,220,.6)" }}>Benefits</em></h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "1.5rem", marginTop: "3rem" }}>
            {bens.map(b => <div key={b.t} className="gecard"><div className="geico"><b.Icon /></div><h4>{b.t}</h4><p>{b.d}</p></div>)}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div style={{ background: "linear-gradient(135deg,#1A1200,#3D2A00)", padding: "5rem 2rem", textAlign: "center" }}>
        <div style={{ maxWidth: 560, margin: "0 auto" }}>
          <div style={{ fontFamily: "'Cinzel',serif", fontSize: ".6rem", fontWeight: 600, letterSpacing: ".3em", color: C.geLight, textTransform: "uppercase", marginBottom: "1.25rem", opacity: .7 }}>Limited Cohort · Applications Open</div>
          <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "2.4rem", fontWeight: 700, color: C.geLight, marginBottom: "1rem", lineHeight: 1.2 }}>Ready to Build at a Higher Level?</h2>
          <p style={{ color: "rgba(253,246,220,.6)", fontSize: "1rem", lineHeight: 1.8, marginBottom: "2rem" }}>The GOLD-EN Circle admits a select cohort twice yearly. Applications are reviewed personally by the GOLD Selection Board.</p>
          <button className="btn-ge" style={{ fontSize: ".93rem", padding: "1rem 2.5rem" }} onClick={() => set("golden-apply")}>Apply to Join the GOLD-EN Circle <I.ArrowRight /></button>
          <div style={{ fontSize: ".73rem", color: "rgba(253,246,220,.3)", marginTop: "1rem" }}>Applications reviewed · Selective admission · Confidential process</div>
        </div>
      </div>
    </>
  );
}

// ─── PAGE: Policy Circle ──────────────────────────────────────────────────────
function PolicyCirclePage({ set }) {
  const bens = [
    { Icon: I.Shield, t: "Policy Leadership Mentorship", d: "Matched with a seasoned public servant, policy expert, or governance professional for structured mentorship." },
    { Icon: I.Building, t: "Civic Exposure & Access", d: "Gain access to government spaces, policy discussions, and civic institutions that shape national and regional decisions." },
    { Icon: I.BookOpen, t: "Policy Thinking & Analysis", d: "Develop the capacity to analyze and contribute to policy discourse on Africa's most pressing governance challenges." },
    { Icon: I.Users, t: "Leadership Formation Sessions", d: "Monthly Circle sessions focused on developing your leadership identity, ethical foundation, and public service vision." },
    { Icon: I.Globe, t: "Nation-Building Framework", d: "A structured intellectual framework for thinking about development, governance, and Africa's place in the world." },
    { Icon: I.Network, t: "Policy Circle Alumni Network", d: "Join a growing cohort of Africa's emerging civic leaders — officials, advocates, lawyers, and governance reformers." },
  ];
  return (
    <>
      <div className="pch">
        <div className="pch-sh" /><div className="pch-do" />
        <div style={{ position: "relative", zIndex: 2, maxWidth: 1320, margin: "0 auto", padding: "4rem 2rem", display: "grid", gridTemplateColumns: "1.1fr .9fr", gap: "5rem", alignItems: "center" }} className="hcnt">
          <div className="fu">
            <div className="pcb">GOLD Exclusive · Civic & Policy Circle</div>
            <h1 className="pch1">The Policy Circle</h1>
            <div className="pch1s">For those who believe governance is the foundation of a flourishing Africa.</div>
            <p className="pcd">A closed-door civic and policy leadership mentorship circle for Africa's most intentional emerging leaders in governance, public service, law, and nation-building. This is a space for those who take leadership seriously — not as a career move, but as a calling.</p>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <button className="btn-pc" onClick={() => set("policy-apply")}>Apply for Admission <I.ArrowRight /></button>
              <button className="btn-pc-ol" onClick={() => set("circles")}>← All Circles</button>
            </div>
            <div className="pcst">
              {[["20","Members/Cohort"],["6mo","Circle Cycle"],["100%","By Selection Only"]].map(([n, l]) => <div key={l}><div className="pcsn">{n}</div><div className="pcsl">{l}</div></div>)}
            </div>
          </div>
          <div className="fu2">
            <div className="pcvc">
              <div style={{ fontFamily: "'Cinzel',serif", fontSize: ".57rem", fontWeight: 600, letterSpacing: ".25em", color: C.pcText, textTransform: "uppercase", marginBottom: "1.5rem", textAlign: "center", borderBottom: "1px solid rgba(122,176,224,.15)", paddingBottom: "1rem" }}>Circle Overview</div>
              {[["Format","Closed-Door, In-Person & Virtual"],["Cohort Size","15–20 Selected Members"],["Duration","6-Month Intensive Cycle"],["Mentors","Policy Experts & Public Servants"],["Sessions","Monthly Circle + 1-on-1 Mentoring"],["Access","By Application Only"]].map(([k, v]) => (
                <div key={k} style={{ display: "flex", justifyContent: "space-between", padding: ".62rem 0", borderBottom: "1px solid rgba(122,176,224,.08)", alignItems: "center" }}>
                  <span style={{ fontSize: ".73rem", color: "rgba(234,240,248,.4)", fontWeight: 500 }}>{k}</span>
                  <span style={{ fontSize: ".82rem", color: C.pcText, fontWeight: 600, textAlign: "right", maxWidth: "55%" }}>{v}</span>
                </div>
              ))}
              <button className="btn-pc" style={{ width: "100%", justifyContent: "center", marginTop: "1.75rem" }} onClick={() => set("policy-apply")}>Apply for Admission <I.ArrowRight /></button>
            </div>
          </div>
        </div>
      </div>

      {/* What it is */}
      <div className="pcs sec">
        <div className="sec-in">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }}>
            <div>
              <div className="stag">What the Policy Circle Is</div>
              <h2 className="stitle" style={{ marginBottom: "1.5rem" }}>A Space for <em>Governance</em></h2>
              <p style={{ fontSize: ".96rem", lineHeight: 1.85, color: "rgba(234,240,248,.58)", marginBottom: "1.25rem" }}>The Policy Circle is GOLD's highest-level civic and governance leadership program. A curated, closed-door space for young Africans called to shape the public sphere — through law, policy, administration, advocacy, or community governance.</p>
              <p style={{ fontSize: ".96rem", lineHeight: 1.85, color: "rgba(234,240,248,.58)", marginBottom: "1.75rem" }}>We believe Africa's greatest governance failures trace back to a leadership vacuum — not a resource vacuum. The Policy Circle exists to fill that gap, one leader at a time.</p>
              {["Students of law, political science, public administration","Young public servants and civil servants","Emerging advocates, activists, and policy researchers","Future candidates for public office or leadership roles"].map(t => (
                <div key={t} style={{ display: "flex", alignItems: "center", gap: ".75rem", fontSize: ".86rem", color: "rgba(234,240,248,.63)", marginBottom: ".75rem" }}>
                  <div style={{ width: 22, height: 22, borderRadius: "50%", background: "rgba(122,176,224,.1)", color: C.pcAccent, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}><I.Check /></div>{t}
                </div>
              ))}
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
              {[{ t: "Mentorship", d: "Matched with experienced policy practitioners, lawyers, or governance leaders." }, { t: "Civic Formation", d: "Develop your identity as a public servant and leader with integrity." }, { t: "Policy Thinking", d: "Frameworks for analyzing, designing, and advocating for effective policy." }, { t: "Community", d: "A network of Africa's most committed emerging civic leaders." }].map(c => (
                <div key={c.t} style={{ background: "rgba(42,90,140,.08)", border: "1px solid rgba(122,176,224,.12)", borderRadius: 12, padding: "1.35rem" }}>
                  <div style={{ fontWeight: 700, fontSize: ".92rem", color: C.pcText, marginBottom: ".4rem" }}>{c.t}</div>
                  <div style={{ fontSize: ".79rem", lineHeight: 1.65, color: "rgba(234,240,248,.46)" }}>{c.d}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Benefits */}
      <div style={{ background: "#040912", padding: "5rem 2rem" }}>
        <div className="sec-in">
          <div className="stag" style={{ color: C.pcAccent }}><span style={{ display: "block", width: 20, height: 2, background: C.pcAccent, borderRadius: 1 }} />What You Gain</div>
          <h2 className="stitle" style={{ color: C.pcText, marginBottom: ".75rem" }}>Circle <em style={{ color: "rgba(234,240,248,.55)" }}>Benefits</em></h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "1.5rem", marginTop: "3rem" }}>
            {bens.map(b => <div key={b.t} className="pccard"><div className="pcico"><b.Icon /></div><h4>{b.t}</h4><p>{b.d}</p></div>)}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div style={{ background: "linear-gradient(135deg,#060D18,#1A3A5C)", padding: "5rem 2rem", textAlign: "center" }}>
        <div style={{ maxWidth: 560, margin: "0 auto" }}>
          <div style={{ fontFamily: "'Cinzel',serif", fontSize: ".6rem", fontWeight: 600, letterSpacing: ".3em", color: C.pcAccent, textTransform: "uppercase", marginBottom: "1.25rem", opacity: .7 }}>Limited Cohort · Applications Open</div>
          <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "2.4rem", fontWeight: 700, color: C.pcText, marginBottom: "1rem", lineHeight: 1.2 }}>Called to Shape Africa's Governance?</h2>
          <p style={{ color: "rgba(234,240,248,.57)", fontSize: "1rem", lineHeight: 1.8, marginBottom: "2rem" }}>The Policy Circle admits a carefully selected cohort twice yearly. All applications are personally reviewed by the GOLD Selection Committee.</p>
          <button className="btn-pc" style={{ fontSize: ".93rem", padding: "1rem 2.5rem" }} onClick={() => set("policy-apply")}>Apply for Policy Circle Admission <I.ArrowRight /></button>
          <div style={{ fontSize: ".73rem", color: "rgba(234,240,248,.28)", marginTop: "1rem" }}>Applications reviewed · Selective admission · Confidential process</div>
        </div>
      </div>
    </>
  );
}

// ─── Apply Pages ──────────────────────────────────────────────────────────────
function GoldenApplyPage({ set }) {
  return (
    <div style={{ background: "#0E0900", minHeight: "100vh", paddingTop: "6rem" }}>
      <div style={{ maxWidth: 860, margin: "0 auto", padding: "3rem 2rem" }}>
        <div style={{ display: "flex", alignItems: "center", gap: ".5rem", marginBottom: "2.5rem" }}>
          {[["The Circles","circles"],["GOLD-EN Circle","golden-circle"]].map(([l, p], i) => <span key={l} style={{ display: "flex", alignItems: "center", gap: ".5rem" }}><button onClick={() => set(p)} style={{ background: "none", border: "none", cursor: "pointer", color: "rgba(253,246,220,.35)", fontSize: ".77rem", fontFamily: "'DM Sans',sans-serif" }}>{l}</button>{i < 1 && <span style={{ color: "rgba(253,246,220,.2)" }}>›</span>}</span>)}
          <span style={{ color: "rgba(253,246,220,.2)" }}>›</span><span style={{ color: C.geLight, fontSize: ".77rem", fontWeight: 600 }}>Apply</span>
        </div>
        <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
          <div style={{ fontFamily: "'Cinzel',serif", fontSize: ".59rem", fontWeight: 600, letterSpacing: ".3em", color: C.geLight, textTransform: "uppercase", marginBottom: "1rem", opacity: .75 }}>◆ Selective Membership Application</div>
          <h1 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 700, color: C.geLight, marginBottom: ".75rem", lineHeight: 1.2 }}>Apply to the GOLD-EN Circle</h1>
          <p style={{ color: "rgba(253,246,220,.5)", fontSize: ".93rem", lineHeight: 1.8, maxWidth: 520, margin: "0 auto" }}>A curated entrepreneurship mentorship circle. Applications reviewed by the GOLD Selection Board. Honesty is valued above polish.</p>
        </div>
        <AppForm circle="golden" onBack={() => set("golden-circle")} />
      </div>
    </div>
  );
}

function PolicyApplyPage({ set }) {
  return (
    <div style={{ background: "#060D18", minHeight: "100vh", paddingTop: "6rem" }}>
      <div style={{ maxWidth: 860, margin: "0 auto", padding: "3rem 2rem" }}>
        <div style={{ display: "flex", alignItems: "center", gap: ".5rem", marginBottom: "2.5rem" }}>
          {[["The Circles","circles"],["Policy Circle","policy-circle"]].map(([l, p], i) => <span key={l} style={{ display: "flex", alignItems: "center", gap: ".5rem" }}><button onClick={() => set(p)} style={{ background: "none", border: "none", cursor: "pointer", color: "rgba(234,240,248,.35)", fontSize: ".77rem", fontFamily: "'DM Sans',sans-serif" }}>{l}</button>{i < 1 && <span style={{ color: "rgba(234,240,248,.2)" }}>›</span>}</span>)}
          <span style={{ color: "rgba(234,240,248,.2)" }}>›</span><span style={{ color: C.pcText, fontSize: ".77rem", fontWeight: 600 }}>Apply</span>
        </div>
        <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
          <div style={{ fontFamily: "'Cinzel',serif", fontSize: ".59rem", fontWeight: 600, letterSpacing: ".3em", color: C.pcAccent, textTransform: "uppercase", marginBottom: "1rem", opacity: .75 }}>◈ Admission Application</div>
          <h1 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 700, color: C.pcText, marginBottom: ".75rem", lineHeight: 1.2 }}>Apply for Policy Circle Admission</h1>
          <p style={{ color: "rgba(234,240,248,.5)", fontSize: ".93rem", lineHeight: 1.8, maxWidth: 520, margin: "0 auto" }}>A closed-door civic and policy leadership circle. Reviewed by the GOLD Selection Committee. Depth of conviction valued above years of experience.</p>
        </div>
        <AppForm circle="policy" onBack={() => set("policy-circle")} />
      </div>
    </div>
  );
}

// ─── Existing Pages ───────────────────────────────────────────────────────────
function HomePage({ set }) {
  return (<>
    <section className="hero"><div className="hero-mesh" /><div className="hero-dots" />
      <div className="hero-cnt">
        <div className="fu">
          <div className="hpill"><div className="hpill-dot" />Pan-African Leadership Institute</div>
          <h1 className="h1">Raising <em>Leaders.</em><br />Building <em>Nations.</em><br />Transforming Africa.</h1>
          <p className="hsub">Equipping young Africans with the leadership capacity, character, and competence required to shape the future of the continent.</p>
          <div className="hbtns">
            <button className="btn-gold" onClick={() => set("fli")}>Join FLI <I.ArrowRight /></button>
            <button className="btn-wh" onClick={() => set("circles")}>Explore The Circles</button>
          </div>
          <div className="hstats">{STATS.map(s => <div key={s.l}><div className="sn">{s.n}</div><div className="sl">{s.l}</div></div>)}</div>
        </div>
        <div className="hvisual fu2" style={{ position: "relative" }}>
          <div className="hfl hfl1"><div className="fn">500+</div><div className="fl">Leaders Trained</div></div>
          <div className="hcard">
            <div className="hcbadge">Future Leaders Initiative</div>
            <div className="hctitle">9-Module Leadership Curriculum</div>
            {["Leadership Foundations","African History","Governance & Policy","Critical Thinking","Entrepreneurship"].map(m => <div className="hci" key={m}><div className="hcdot" />{m}</div>)}
          </div>
          <div className="hfl hfl2"><div className="fn">12+</div><div className="fl">Communities Reached</div></div>
        </div>
      </div>
    </section>

    {/* Circles Teaser */}
    <section style={{ background: "linear-gradient(135deg,#0D1B10,#1A4A2E)", padding: "5rem 2rem" }}>
      <div className="sec-in" style={{ textAlign: "center" }}>
        <div style={{ fontFamily: "'Cinzel',serif", fontSize: ".6rem", fontWeight: 600, letterSpacing: ".28em", color: C.goldLight, textTransform: "uppercase", marginBottom: "1rem", opacity: .7 }}>GOLD EXCLUSIVE MEMBERSHIP</div>
        <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 700, color: "#fff", marginBottom: "1rem", lineHeight: 1.2 }}>Introducing <span style={{ fontStyle: "italic", color: C.goldLight }}>The Circles</span></h2>
        <p style={{ color: "rgba(255,255,255,.52)", fontSize: ".96rem", lineHeight: 1.85, maxWidth: 520, margin: "0 auto 3rem" }}>Two closed-door leadership mentorship circles for Africa's most intentional emerging founders, builders, and civic leaders.</p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem", maxWidth: 740, margin: "0 auto" }}>
          {[{ bg: "linear-gradient(145deg,#1A1200,#2A1E00)", bor: "rgba(218,165,32,.3)", hover: "rgba(184,134,11,.25)", Ico: I.Zap, col: C.geLight, name: "GOLD-EN Circle", desc: "Entrepreneurship mentorship for founders, builders, and operators building Africa's next great ventures.", pg: "golden-circle" },
          { bg: "linear-gradient(145deg,#050F1C,#0D1E2E)", bor: "rgba(122,176,224,.3)", hover: "rgba(26,58,92,.35)", Ico: I.Shield, col: C.pcAccent, name: "Policy Circle", desc: "Civic and policy leadership mentorship for those called to governance, public service, and nation-building.", pg: "policy-circle" }].map(x => (
            <div key={x.name} style={{ background: x.bg, border: `1px solid ${x.bor}`, borderRadius: 16, padding: "2rem", cursor: "pointer", transition: "all .3s" }} onClick={() => set(x.pg)}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-5px)"; e.currentTarget.style.boxShadow = `0 20px 50px ${x.hover}`; }}
              onMouseLeave={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "none"; }}>
              <div style={{ color: x.col, marginBottom: ".85rem" }}><x.Ico /></div>
              <div style={{ fontFamily: "'Cinzel',serif", fontWeight: 600, fontSize: "1rem", color: x.col, marginBottom: ".5rem" }}>{x.name}</div>
              <div style={{ fontSize: ".82rem", color: x.col === C.geLight ? "rgba(253,246,220,.52)" : "rgba(234,240,248,.5)", lineHeight: 1.65, marginBottom: "1rem" }}>{x.desc}</div>
              <div style={{ display: "inline-flex", alignItems: "center", gap: ".4rem", color: x.col, fontSize: ".73rem", fontWeight: 700, letterSpacing: ".08em" }}>Apply Now <I.ArrowRight /></div>
            </div>
          ))}
        </div>
        <button className="btn-gold" style={{ marginTop: "2.5rem" }} onClick={() => set("circles")}>Explore All Circles <I.ArrowRight /></button>
      </div>
    </section>

    <section className="sec" style={{ background: C.offWhite }}>
      <div className="sec-in">
        <div className="stag">Our Foundation</div><h2 className="stitle" style={{ marginBottom: ".5rem" }}>Vision & <em>Mission</em></h2>
        <div className="vm-grid">
          <div className="vm vmv"><div className="vmlbl">Our Vision</div><div className="vmtxt">"To empower and develop individuals, especially young Africans, as human capital for nation building."</div></div>
          <div className="vm vmm"><div className="vmlbl">Our Mission</div><div className="vmtxt">"To raise competent, ethical, visionary, and purpose-driven leaders who will transform Africa through service, innovation, and influence."</div></div>
        </div>
      </div>
    </section>

    <section className="sec dark">
      <div className="sec-in">
        <div className="stag">The Imperative</div><h2 className="stitle" style={{ marginBottom: ".75rem" }}>Why <em>Leadership</em> Matters</h2>
        <p className="ssub">Africa's greatest challenge is not resources — it is the lack of ethical, capable leaders equipped to harness them.</p>
        <div className="why-grid">
          {[{ Icon: I.Globe, t: "Africa's Moment", d: "With the world's youngest population, the leadership we develop today will define Africa's trajectory for generations." }, { Icon: I.Shield, t: "The Ethics Crisis", d: "Corruption and poor governance cost Africa billions annually. Raising ethical leaders is the foundation of development." }, { Icon: I.Users, t: "Human Capital First", d: "Economic transformation begins with transformed minds. GOLD invests in the most powerful resource Africa has." }, { Icon: I.Home, t: "Governance Matters", d: "Competent and visionary leadership in every sector separates thriving nations from struggling ones." }, { Icon: I.Handshake, t: "The Mentorship Gap", d: "Many young Africans lack access to mentors who can guide development. We bridge that gap." }, { Icon: I.Lightbulb, t: "Innovation is African", d: "Africa's challenges demand African solutions. We cultivate critical thinkers who reimagine what's possible." }].map(c => (
            <div className="wcard" key={c.t}><div className="wicon"><c.Icon /></div><div className="wtitle">{c.t}</div><div className="wdesc">{c.d}</div></div>
          ))}
        </div>
      </div>
    </section>

    <section className="sec" style={{ background: C.cream }}>
      <div className="sec-in">
        <div className="stag">What We Do</div><h2 className="stitle" style={{ marginBottom: ".75rem" }}>Our <em>Programs</em></h2>
        <p className="ssub">Structured pathways to develop every dimension of transformational leadership.</p>
        <div className="pgrid">{PROGRAMS.map(p => <div className="pcard" key={p.title} onClick={() => set(p.link)}><div className="picon"><p.Icon /></div><div className="ptitle">{p.title}</div><div className="pdesc">{p.desc}</div><div className="plink">Learn More <I.ArrowRight /></div></div>)}</div>
      </div>
    </section>

    <div className="ist"><div className="ist-in">{STATS.map(s => <div key={s.l}><div className="in">{s.n}</div><div className="il">{s.l}</div></div>)}</div></div>

    <section className="sec" style={{ background: C.offWhite }}>
      <div className="sec-in">
        <div className="stag">Voices of Change</div><h2 className="stitle">What Our <em>Fellows</em> Say</h2>
        <div className="tgrid">{TESTIMONIALS.map(t => <div className="tcard" key={t.name}><div className="tq">"</div><p className="ttxt">{t.text}</p><div className="tau"><div className="tav">{t.init}</div><div><div className="tn">{t.name}</div><div className="tr">{t.role}</div></div></div></div>)}</div>
      </div>
    </section>

    <div className="ctab">
      <h2>Ready to Lead Africa's Future?</h2>
      <p>Join thousands of young Africans developing the character, competence, and vision to transform the continent.</p>
      <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
        <button className="btn-fg" onClick={() => set("fli")} style={{ padding: ".9rem 2rem", borderRadius: 10, fontSize: ".88rem" }}>Apply to FLI</button>
        <button style={{ background: "transparent", color: C.forest, padding: ".9rem 2rem", borderRadius: 10, border: `1.5px solid ${C.forest}`, fontSize: ".88rem", cursor: "pointer", fontFamily: "'DM Sans',sans-serif" }} onClick={() => set("circles")}>Explore The Circles</button>
      </div>
    </div>
  </>);
}

function AboutPage() {
  return (<>
    <section className="sec" style={{ paddingTop: "8rem", background: C.offWhite }}>
      <div className="sec-in">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "start" }}>
          <div>
            <div className="stag">Our Story</div><h1 className="stitle" style={{ marginBottom: "1.5rem" }}>About <em>GOLD</em></h1>
            <p style={{ fontSize: "1rem", lineHeight: 1.85, color: C.muted, marginBottom: "1.25rem" }}>GOLD — Governmental and Organizational Leadership Development — was born out of a deep conviction: that Africa's greatest need is not more resources, but more leaders equipped with integrity, vision, and the competence to serve.</p>
            <p style={{ fontSize: "1rem", lineHeight: 1.85, color: C.muted, marginBottom: "1.25rem" }}>We exist to raise a generation of transformational leaders in business, government, ministry, education, and community development who will contribute meaningfully to nation-building across Nigeria and the African continent.</p>
            <p style={{ fontSize: "1rem", lineHeight: 1.85, color: C.muted }}>Through structured programs, mentorship, conferences, and our media arm, we are building an ecosystem that nurtures leaders from the inside out — character first, competence second, contribution always.</p>
          </div>
          <div>
            <div className="vm vmv" style={{ marginBottom: "1.5rem" }}><div className="vmlbl">Our Vision</div><div className="vmtxt">"To empower and develop individuals, especially young Africans, as human capital for nation building."</div></div>
            <div className="vm vmm"><div className="vmlbl">Our Mission</div><div className="vmtxt">"To raise competent, ethical, visionary, and purpose-driven leaders who will transform Africa through service, innovation, and influence."</div></div>
          </div>
        </div>
      </div>
    </section>
    <section className="sec"><div className="sec-in"><div className="stag">What We Stand For</div><h2 className="stitle">Core <em>Values</em></h2><div className="vgrid">{CORE_VALUES.map(v => <div className="vcard" key={v.name}><div className="vicon"><v.Icon /></div><div className="vname">{v.name}</div><div className="vdesc">{v.desc}</div></div>)}</div></div></section>
    <section className="sec dark"><div className="sec-in" style={{ maxWidth: 760, textAlign: "center" }}><div className="stag" style={{ justifyContent: "center" }}>Philosophy</div><h2 className="stitle" style={{ marginBottom: "1.5rem" }}>Our <em>Philosophy</em></h2><p style={{ fontFamily: "'Playfair Display',serif", fontStyle: "italic", fontSize: "1.2rem", lineHeight: 1.85, color: "rgba(255,255,255,.78)" }}>"True leadership is not about position or power — it is about character and service. Africa needs leaders shaped by purpose, driven by integrity, and committed to the flourishing of their communities and nations."</p></div></section>
  </>);
}

function ProgramsPage({ set }) {
  return (<>
    <section className="sec" style={{ paddingTop: "8rem", background: C.cream }}>
      <div className="sec-in">
        <div className="stag">What We Offer</div><h1 className="stitle" style={{ marginBottom: ".75rem" }}>Our <em>Programs</em></h1>
        <p className="ssub">Every GOLD program develops a different dimension of transformational leadership.</p>
        <div className="pgrid">{PROGRAMS.map(p => <div className="pcard" key={p.title} onClick={() => set(p.link)}><div className="picon"><p.Icon /></div><div className="ptitle">{p.title}</div><div className="pdesc">{p.desc}</div><div className="plink">Explore <I.ArrowRight /></div></div>)}</div>
      </div>
    </section>
    <section style={{ background: "linear-gradient(135deg,#0D1B10,#1A4A2E)", padding: "4rem 2rem", textAlign: "center" }}>
      <div className="sec-in">
        <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "2rem", fontWeight: 700, color: "#fff", marginBottom: ".75rem" }}>Also: <span style={{ fontStyle: "italic", color: C.goldLight }}>The Circles</span></h2>
        <p style={{ color: "rgba(255,255,255,.5)", maxWidth: 460, margin: "0 auto 1.75rem", fontSize: ".88rem", lineHeight: 1.8 }}>Two exclusive, application-based mentorship circles — the GOLD-EN Circle (Entrepreneurship) and the Policy Circle (Governance & Civic Leadership).</p>
        <button className="btn-gold" onClick={() => set("circles")}>Learn About The Circles <I.ArrowRight /></button>
      </div>
    </section>
  </>);
}

function FLIPage({ set }) {
  return (<>
    <section className="sec dark" style={{ paddingTop: "8rem" }}>
      <div className="sec-in">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center", marginBottom: "4rem" }}>
          <div>
            <div className="hpill" style={{ marginBottom: "1rem" }}><div className="hpill-dot" />GOLD Flagship Program</div>
            <h1 className="stitle" style={{ marginBottom: "1rem" }}>Future Leaders <em>Initiative</em></h1>
            <p style={{ fontSize: ".94rem", lineHeight: 1.8, color: "rgba(255,255,255,.7)", marginBottom: "1.5rem" }}>FLI is GOLD's signature leadership development program — a structured, immersive curriculum that equips young Africans with the knowledge, skills, and character to lead with excellence in every sphere.</p>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}><button className="btn-gold" onClick={() => set("join")}>Apply Now <I.ArrowRight /></button><button className="btn-wh">Download Brochure</button></div>
          </div>
          <div style={{ background: "rgba(255,255,255,.06)", borderRadius: 20, padding: "2rem", border: "1px solid rgba(201,160,32,.2)" }}>
            <div style={{ fontSize: ".66rem", fontWeight: 700, letterSpacing: ".15em", textTransform: "uppercase", color: C.goldLight, marginBottom: "1.2rem" }}>Program Highlights</div>
            {[[I.Calendar,"Duration","3–6 Month Cohort"],[I.Users,"Cohort Size","25–40 Fellows"],[I.MapPin,"Mode","In-person & Hybrid"],[I.Award,"Certificate","GOLD FLI Certificate"],[I.Handshake,"Mentorship","1-on-1 Mentoring Included"]].map(([Icon, l, v]) => (
              <div key={l} style={{ display: "flex", gap: "1rem", alignItems: "center", padding: ".68rem 0", borderBottom: "1px solid rgba(255,255,255,.06)" }}>
                <span style={{ color: C.goldLight, opacity: .8 }}><Icon /></span>
                <span style={{ fontSize: ".79rem", color: "rgba(255,255,255,.45)", width: 100 }}>{l}</span>
                <span style={{ fontSize: ".85rem", fontWeight: 500 }}>{v}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="stag">Curriculum</div><h2 className="stitle" style={{ marginBottom: "1.5rem" }}>9 Learning <em>Modules</em></h2>
        <div className="flic">{FLI_MODULES.map((m, i) => <div className="fmod" key={m}><div className="fnum">0{i + 1}</div><div className="fname">{m}</div></div>)}</div>
      </div>
    </section>
    <section className="sec" style={{ background: C.offWhite }}>
      <div className="sec-in">
        <div className="stag">The Journey</div><h2 className="stitle" style={{ marginBottom: "2rem" }}>The <em>FLI</em> Experience</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "1.5rem" }}>
          {[{ s: "01", t: "Application", d: "Submit your application and express your commitment to leadership development." }, { s: "02", t: "Orientation", d: "Welcome cohort gathering and introduction to GOLD's leadership philosophy." }, { s: "03", t: "Curriculum", d: "Nine-module immersive program covering all dimensions of leadership." }, { s: "04", t: "Graduation", d: "Complete a capstone project, receive your certificate, and join the alumni network." }].map(x => (
            <div key={x.s} style={{ background: "#fff", border: `1px solid rgba(26,74,46,.1)`, borderRadius: 14, padding: "1.75rem", boxShadow: "0 2px 12px rgba(26,74,46,.04)" }}>
              <div style={{ fontFamily: "'Playfair Display',serif", fontSize: "2.5rem", fontWeight: 700, color: C.gold, opacity: .3, marginBottom: ".5rem" }}>{x.s}</div>
              <div style={{ fontWeight: 700, fontSize: "1rem", marginBottom: ".6rem" }}>{x.t}</div>
              <div style={{ fontSize: ".82rem", lineHeight: 1.7, color: C.muted }}>{x.d}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
    <div className="ctab"><h2>Begin Your Leadership Journey</h2><p>Applications are open for the next FLI cohort.</p><button className="btn-fg" onClick={() => set("join")} style={{ padding: ".9rem 2rem", borderRadius: 10, fontSize: ".88rem" }}>Apply for FLI <I.ArrowRight /></button></div>
  </>);
}

function PodcastPage() {
  const eps = [
    { ep: "EP 14", t: "Rebuilding Nigeria's Public Sector: A Leadership Blueprint", d: "Ethical governance and how young leaders can restructure public institutions from within.", dur: "52 min", dt: "May 2025", tgs: ["Governance","Nigeria"] },
    { ep: "EP 13", t: "Entrepreneurship as a Tool for African Liberation", d: "How African entrepreneurs are driving economic independence.", dur: "45 min", dt: "Apr 2025", tgs: ["Entrepreneurship","Africa"] },
    { ep: "EP 12", t: "The Mentor I Needed: Stories of Transformational Guidance", d: "Leaders share mentorship moments that changed their trajectories.", dur: "38 min", dt: "Mar 2025", tgs: ["Mentorship","Development"] },
    { ep: "EP 11", t: "Building Cities, Building Nations: Urban Leadership in Africa", d: "City leaders discuss governance at the local level.", dur: "61 min", dt: "Feb 2025", tgs: ["Governance","Community"] },
    { ep: "EP 10", t: "The Ethics of Ambition: Leading Without Losing Your Soul", d: "Pursuing excellence and impact without compromising integrity.", dur: "44 min", dt: "Jan 2025", tgs: ["Ethics","Character"] },
    { ep: "EP 09", t: "Financing Africa's Future: What Young Leaders Must Know", d: "Capital, investment, and fiscal policy for African development.", dur: "55 min", dt: "Dec 2024", tgs: ["Finance","Business"] },
  ];
  return (
    <section className="sec" style={{ paddingTop: "8rem", background: C.offWhite }}>
      <div className="sec-in">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center", marginBottom: "3rem" }}>
          <div>
            <h1 className="stitle" style={{ marginBottom: "1rem" }}>RE-BUILD <em>Podcast</em></h1>
            <p style={{ fontSize: "1rem", lineHeight: 1.8, color: C.muted }}>Conversations that challenge conventional thinking and equip Africa's next generation of leaders.</p>
            <div style={{ display: "flex", gap: ".75rem", marginTop: "1.5rem", flexWrap: "wrap" }}>
              {["Spotify","Apple Podcasts","YouTube","Google Podcasts"].map(p => <button key={p} style={{ background: "#fff", border: `1px solid rgba(26,74,46,.12)`, color: C.text, padding: ".5rem 1rem", borderRadius: 8, fontSize: ".77rem", cursor: "pointer", fontFamily: "'DM Sans',sans-serif" }}>{p}</button>)}
            </div>
          </div>
          <div style={{ background: C.forest, border: `1px solid rgba(201,160,32,.2)`, borderRadius: 20, padding: "2.5rem", textAlign: "center" }}>
            <div style={{ width: 68, height: 68, borderRadius: "50%", background: "rgba(201,160,32,.15)", color: C.goldLight, margin: "0 auto 1rem", display: "flex", alignItems: "center", justifyContent: "center" }}><I.Mic /></div>
            <div style={{ fontFamily: "'Playfair Display',serif", fontSize: "2rem", fontWeight: 700, marginBottom: ".5rem", color: "#fff" }}>RE-BUILD</div>
            <div style={{ fontSize: ".72rem", letterSpacing: ".2em", textTransform: "uppercase", color: C.goldLight, marginBottom: "1rem" }}>by GOLD</div>
            <div style={{ fontSize: ".81rem", color: "rgba(255,255,255,.46)" }}>Business · Governance · Nation Building · Mentorship</div>
          </div>
        </div>
        <div className="stag">Episodes</div><h2 className="stitle" style={{ marginBottom: "2rem" }}>All <em>Episodes</em></h2>
        <div style={{ display: "grid", gap: "1rem" }}>
          {eps.map(e => (
            <div key={e.ep} style={{ background: "#fff", border: `1px solid rgba(26,74,46,.09)`, borderRadius: 14, padding: "1.5rem 2rem", display: "grid", gridTemplateColumns: "auto 1fr auto", gap: "1.5rem", alignItems: "center", cursor: "pointer", transition: "all .3s" }}
              onMouseEnter={ev => { ev.currentTarget.style.borderColor = C.forestMid; ev.currentTarget.style.transform = "translateY(-2px)"; }}
              onMouseLeave={ev => { ev.currentTarget.style.borderColor = "rgba(26,74,46,.09)"; ev.currentTarget.style.transform = "none"; }}>
              <div style={{ width: 52, height: 52, borderRadius: 12, background: C.forest, color: C.goldLight, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: ".72rem", flexShrink: 0 }}>{e.ep}</div>
              <div>
                <div style={{ fontWeight: 700, fontSize: ".92rem", marginBottom: ".3rem", color: C.text }}>{e.t}</div>
                <div style={{ fontSize: ".8rem", color: C.muted, lineHeight: 1.6, marginBottom: ".5rem" }}>{e.d}</div>
                <div style={{ display: "flex", gap: ".6rem", flexWrap: "wrap" }}>{e.tgs.map(tg => <span key={tg} style={{ background: C.forestPale, color: C.forestMid, fontSize: ".65rem", fontWeight: 700, padding: ".2rem .6rem", borderRadius: 6 }}>{tg}</span>)}</div>
              </div>
              <div style={{ textAlign: "right" }}>
                <button className="pbtn"><I.Play /> Listen</button>
                <div style={{ fontSize: ".69rem", color: C.muted, marginTop: ".4rem", display: "flex", alignItems: "center", gap: ".3rem", justifyContent: "flex-end" }}><I.Clock />{e.dur} · {e.dt}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ImpactPage() {
  return (<>
    <section className="sec" style={{ paddingTop: "8rem", background: C.offWhite }}>
      <div className="sec-in">
        <div className="stag">Our Footprint</div><h1 className="stitle" style={{ marginBottom: "1rem" }}>Measuring Our <em>Impact</em></h1>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "1.5rem", marginBottom: "4rem" }}>
          {[...STATS,{n:"15+",l:"Partner Organizations"},{n:"9",l:"FLI Modules"},{n:"3",l:"Countries Reached"},{n:"100%",l:"Free for Fellows"}].map(s => (
            <div key={s.l} style={{ background: "#fff", border: `1px solid rgba(26,74,46,.1)`, borderRadius: 16, padding: "2rem", textAlign: "center", boxShadow: "0 2px 12px rgba(26,74,46,.04)" }}>
              <div style={{ fontFamily: "'Playfair Display',serif", fontSize: "3rem", fontWeight: 700, color: C.forestMid, lineHeight: 1 }}>{s.n}</div>
              <div style={{ fontSize: ".72rem", color: C.muted, textTransform: "uppercase", letterSpacing: ".1em", marginTop: ".5rem" }}>{s.l}</div>
            </div>
          ))}
        </div>
        <div className="stag">Success Stories</div><h2 className="stitle" style={{ marginBottom: "2rem" }}>Stories of <em>Transformation</em></h2>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
          {[{n:"Emmanuel Chukwu",r:"FLI Fellow → Policy Analyst, Abuja",s:"After completing FLI, Emmanuel joined a policy think-tank in Abuja, where he now advises on youth employment frameworks.",a:"EC"},{n:"Ngozi Adeyemi",r:"FLI Fellow → Social Entrepreneur",s:"Ngozi launched a digital literacy initiative reaching 2,000+ students in rural Kwara State.",a:"NA"},{n:"Kofi Mensah",r:"FLI Fellow → Student Government Leader",s:"From shy university student to elected Student Union President at University of Ghana.",a:"KM"},{n:"Zara Ahmed",r:"FLI Fellow → Public Health Advocate",s:"Zara mobilized community health volunteers in Kano, reaching over 500 households.",a:"ZA"}].map(x => (
            <div key={x.n} style={{ background: "#fff", border: `1px solid rgba(26,74,46,.1)`, borderRadius: 16, padding: "2rem", boxShadow: "0 2px 12px rgba(26,74,46,.04)" }}>
              <div style={{ display: "flex", gap: "1rem", alignItems: "center", marginBottom: "1rem" }}>
                <div style={{ width: 52, height: 52, borderRadius: "50%", background: `linear-gradient(135deg,${C.forest},${C.forestLight})`, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, color: "#fff", fontSize: ".88rem", flexShrink: 0 }}>{x.a}</div>
                <div><div style={{ fontWeight: 700, fontSize: ".92rem" }}>{x.n}</div><div style={{ fontSize: ".72rem", color: C.forestMid }}>{x.r}</div></div>
              </div>
              <p style={{ fontSize: ".84rem", lineHeight: 1.75, color: C.muted }}>{x.s}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </>);
}

function JoinPage() {
  return (<>
    <section className="sec" style={{ paddingTop: "8rem", background: C.forestPale }}>
      <div className="sec-in">
        <div style={{ textAlign: "center" }}><div className="stag" style={{ justifyContent: "center" }}>Get Involved</div></div>
        <h1 className="stitle" style={{ textAlign: "center", marginBottom: "1rem" }}>Join the <em>GOLD</em> Movement</h1>
        <p style={{ textAlign: "center", color: C.muted, fontSize: "1rem", lineHeight: 1.8, maxWidth: 520, margin: "0 auto 1rem" }}>Whether as a fellow, volunteer, mentor, partner, or donor — your contribution matters.</p>
        <div className="jgrid">{JOIN_OPTS.map(j => <div className="jcard" key={j.title}><div className="jico"><j.Icon /></div><div className="jtitle">{j.title}</div><div className="jdesc">{j.desc}</div><button className="btn-fg">{j.action} →</button></div>)}</div>
      </div>
    </section>
    <section className="sec" style={{ paddingTop: "3rem" }}>
      <div className="sec-in" style={{ maxWidth: 640 }}>
        <div className="stag">Apply Now</div><h2 className="stitle" style={{ marginBottom: ".75rem" }}>FLI <em>Application</em></h2>
        <p style={{ fontSize: ".88rem", color: C.muted, marginBottom: "2rem" }}>Express your interest in the next Future Leaders Initiative cohort.</p>
        <div className="cform">
          <div className="frow"><div className="fg"><label className="flbl">First Name</label><input className="fi" placeholder="Chidi" /></div><div className="fg"><label className="flbl">Last Name</label><input className="fi" placeholder="Okonkwo" /></div></div>
          <div className="fg"><label className="flbl">Email Address</label><input className="fi" type="email" placeholder="you@example.com" /></div>
          <div className="fg"><label className="flbl">Phone Number</label><input className="fi" placeholder="+234 xxx xxxx xxxx" /></div>
          <div className="fg"><label className="flbl">Category</label><select className="fsel fi"><option value="">Select your category</option><option>Secondary School Student</option><option>University Student</option><option>Young Professional</option><option>Entrepreneur</option><option>Emerging Public Leader</option></select></div>
          <div className="fg"><label className="flbl">Institution / Organization</label><input className="fi" placeholder="University of Nigeria, Nsukka" /></div>
          <div className="fg"><label className="flbl">Why do you want to join GOLD FLI?</label><textarea className="fta" placeholder="Share your motivation and goals..." /></div>
          <button className="btn-fg" style={{ width: "100%", padding: ".9rem", borderRadius: 10, fontSize: ".88rem" }}>Submit Application →</button>
        </div>
      </div>
    </section>
  </>);
}

function ContactPage() {
  return (
    <section className="sec" style={{ paddingTop: "8rem", background: C.offWhite }}>
      <div className="sec-in">
        <div className="stag">Get In Touch</div><h1 className="stitle" style={{ marginBottom: ".75rem" }}>Contact <em>GOLD</em></h1>
        <div className="cgrid">
          <div>
            <div className="cinfo" style={{ marginBottom: "1.5rem" }}>
              <div style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.2rem", fontWeight: 600, marginBottom: "1.5rem", color: C.goldLight }}>Contact Information</div>
              {[{Icon:I.Mail,l:"Email",v:"info@goldleadershipafrica.org"},{Icon:I.MapPin,l:"Location",v:"Nigeria, West Africa"},{Icon:I.Globe,l:"Website",v:"goldleadershipafrica.org"}].map(c => (
                <div className="citem" key={c.l}><div className="cico"><c.Icon /></div><div><div className="clbl">{c.l}</div><div className="cval">{c.v}</div></div></div>
              ))}
            </div>
            <div className="cinfo">
              <div style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.2rem", fontWeight: 600, marginBottom: "1rem", color: C.goldLight }}>Follow GOLD</div>
              <div className="sbtn">{[I.Twitter,I.LinkedIn,I.Facebook,I.Youtube].map((Icon,i) => <div className="sbtn2" key={i}><Icon /></div>)}</div>
            </div>
          </div>
          <div className="cform">
            <div style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.3rem", fontWeight: 600, marginBottom: "1.5rem" }}>Send Us a Message</div>
            <div className="frow"><div className="fg"><label className="flbl">First Name</label><input className="fi" placeholder="Your name" /></div><div className="fg"><label className="flbl">Last Name</label><input className="fi" placeholder="Your surname" /></div></div>
            <div className="fg"><label className="flbl">Email</label><input className="fi" type="email" placeholder="you@email.com" /></div>
            <div className="fg"><label className="flbl">Inquiry Type</label><select className="fsel fi"><option>General Inquiry</option><option>Program Information</option><option>The Circles — GOLD-EN</option><option>The Circles — Policy</option><option>Partnership / Sponsorship</option><option>Volunteering</option><option>Donation</option></select></div>
            <div className="fg"><label className="flbl">Message</label><textarea className="fta" placeholder="How can we help you?" /></div>
            <button className="btn-fg" style={{ width: "100%", padding: ".9rem", borderRadius: 10, fontSize: ".88rem" }}>Send Message →</button>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── App ──────────────────────────────────────────────────────────────────────
export default function App() {
  const [pg, setPg] = useState("home");
  const go = id => { setPg(id); window.scrollTo(0, 0); };
  const isCircle = ["circles","golden-circle","policy-circle","golden-apply","policy-apply"].includes(pg);

  const Page = () => {
    switch (pg) {
      case "home": return <HomePage set={go} />;
      case "about": return <AboutPage />;
      case "programs": return <ProgramsPage set={go} />;
      case "circles": return <CirclesPage set={go} />;
      case "golden-circle": return <GoldenCirclePage set={go} />;
      case "policy-circle": return <PolicyCirclePage set={go} />;
      case "golden-apply": return <GoldenApplyPage set={go} />;
      case "policy-apply": return <PolicyApplyPage set={go} />;
      case "fli": return <FLIPage set={go} />;
      case "podcast": return <PodcastPage />;
      case "impact": return <ImpactPage />;
      case "join": return <JoinPage />;
      case "contact": return <ContactPage />;
      default: return <HomePage set={go} />;
    }
  };

  return (
    <>
      <style>{CSS}</style>
      <Nav pg={pg} set={go} />
      <main><Page /></main>
      {!isCircle && pg !== "home" && (
        <div style={{ padding: "3rem 2rem", textAlign: "center", background: `linear-gradient(135deg,${C.forest},${C.forestLight})` }}>
          <p style={{ color: "rgba(255,255,255,.45)", fontSize: ".82rem", marginBottom: "1rem" }}>Ready to be part of something transformational?</p>
          <button className="btn-gold" onClick={() => go("join")}>Join the GOLD Movement <I.ArrowRight /></button>
        </div>
      )}
      <Foot set={go} />
    </>
  );
}
