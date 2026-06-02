import React from "react";
import { C } from "../constants/colors";
import { I } from "../components/icons";

export function CirclesPage({ set }) {
  return (
    <div className="ch" style={{ paddingTop: "6rem" }}>
      <div className="ch-tex" />
      <div className="ch-gl" />
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
          {[
            { Icon: I.Lock, t: "Closed-Door Format", d: "Both Circles are invite-only. Access is through application and selection only." },
            { Icon: I.Users, t: "Curated Cohorts", d: "Small groups of 15–20 members to maximise depth, trust, and peer accountability." },
            { Icon: I.Award, t: "GOLD Selection Board", d: "Every application is personally reviewed by the GOLD leadership team." }
          ].map(x => (
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
