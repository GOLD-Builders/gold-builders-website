import React, { useState } from "react";
import { C } from "../constants/colors";
import { I } from "./icons";

export function AppForm({ circle, onBack }) {
  const ge = circle === "golden";
  const [step, setStep] = useState(1);
  const [done, setDone] = useState(false);
  const [loading, setLoading] = useState(false);
  const [chk, setChk] = useState(false);
  const [f, setF] = useState({ 
    fn: "", 
    ln: "", 
    em: "", 
    ph: "", 
    loc: "", 
    role: "", 
    spec: "", 
    mot: "" 
  });
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
    const rec = { 
      ...f, 
      circle: ge ? "GOLD-EN Circle" : "Policy Circle", 
      ref, 
      at: new Date().toISOString() 
    };
    try { 
      const ex = JSON.parse(localStorage.getItem("gold_apps") || "[]"); 
      ex.push(rec); 
      localStorage.setItem("gold_apps", JSON.stringify(ex)); 
    } catch (_) { }
    await new Promise(r => setTimeout(r, 1600));
    setLoading(false);
    setDone(true);
  };

  const BtnBack = ({ onClick }) => (
    <button 
      onClick={onClick} 
      style={{ 
        background: "transparent", 
        border: "1.5px solid rgba(0,0,0,.1)", 
        color: C.muted, 
        borderRadius: 10, 
        padding: ".82rem 1.5rem", 
        fontWeight: 600, 
        fontSize: ".86rem", 
        cursor: "pointer", 
        fontFamily: "'DM Sans',sans-serif" 
      }}
    >
      ← Back
    </button>
  );
  
  const BtnNext = ({ onClick, disabled }) => (
    <button 
      onClick={onClick} 
      disabled={disabled} 
      style={{ 
        background: disabled ? "rgba(0,0,0,.08)" : ac, 
        color: disabled ? C.muted : atxt, 
        border: "none", 
        borderRadius: 10, 
        padding: ".82rem 2rem", 
        fontWeight: 700, 
        fontSize: ".86rem", 
        cursor: disabled ? "not-allowed" : "pointer", 
        fontFamily: "'DM Sans',sans-serif", 
        display: "inline-flex", 
        alignItems: "center", 
        gap: ".5rem", 
        transition: "all .2s" 
      }}
    >
      Continue <I.ArrowRight />
    </button>
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
