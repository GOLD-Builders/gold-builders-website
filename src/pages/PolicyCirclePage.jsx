import React from "react";
import { C } from "../constants/colors";
import { I } from "../components/icons";

export function PolicyCirclePage({ set }) {
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
