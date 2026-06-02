import React from "react";
import { C } from "../constants/colors";
import { I } from "../components/icons";

export function GoldenCirclePage({ set }) {
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
        <div className="geh-sh" />
        <div className="geh-li" />
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
              {[
                { t: "Mentorship", d: "Matched with a proven entrepreneur or operator who guides your journey." },
                { t: "Peer Circle", d: "Monthly sessions where members share wins, challenges, and solutions honestly." },
                { t: "Execution Focus", d: "Every session is results-oriented. Strategy meets accountability here." },
                { t: "Community", d: "A lifetime network of Africa's most ambitious young builders." }
              ].map(c => (
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
            {bens.map(b => (
              <div key={b.t} className="gecard">
                <div className="geico"><b.Icon /></div>
                <h4>{b.t}</h4>
                <p>{b.d}</p>
              </div>
            ))}
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
