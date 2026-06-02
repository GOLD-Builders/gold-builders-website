import React from "react";
import { C } from "../constants/colors";
import { I } from "../components/icons";
import { AppForm } from "../components/AppForm";

export function PolicyApplyPage({ set }) {
  return (
    <div style={{ background: "#060D18", minHeight: "100vh", paddingTop: "6rem" }}>
      <div style={{ maxWidth: 860, margin: "0 auto", padding: "3rem 2rem" }}>
        <div style={{ display: "flex", alignItems: "center", gap: ".5rem", marginBottom: "2.5rem" }}>
          {[["The Circles","circles"],["Policy Circle","policy-circle"]].map(([l, p], i) => (
            <span key={l} style={{ display: "flex", alignItems: "center", gap: ".5rem" }}>
              <button 
                onClick={() => set(p)} 
                style={{ 
                  background: "none", 
                  border: "none", 
                  cursor: "pointer", 
                  color: "rgba(234,240,248,.35)", 
                  fontSize: ".77rem", 
                  fontFamily: "'DM Sans',sans-serif" 
                }}
              >
                {l}
              </button>
              {i < 1 && <span style={{ color: "rgba(234,240,248,.2)" }}>›</span>}
            </span>
          ))}
          <span style={{ color: "rgba(234,240,248,.2)" }}>›</span>
          <span style={{ color: C.pcText, fontSize: ".77rem", fontWeight: 600 }}>Apply</span>
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
