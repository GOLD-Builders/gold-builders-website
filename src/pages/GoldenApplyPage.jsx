import React from "react";
import { C } from "../constants/colors";
import { I } from "../components/icons";
import { AppForm } from "../components/AppForm";

export function GoldenApplyPage({ set }) {
  return (
    <div style={{ background: "#0E0900", minHeight: "100vh", paddingTop: "6rem" }}>
      <div style={{ maxWidth: 860, margin: "0 auto", padding: "3rem 2rem" }}>
        <div style={{ display: "flex", alignItems: "center", gap: ".5rem", marginBottom: "2.5rem" }}>
          {[["The Circles","circles"],["GOLD-EN Circle","golden-circle"]].map(([l, p], i) => (
            <span key={l} style={{ display: "flex", alignItems: "center", gap: ".5rem" }}>
              <button 
                onClick={() => set(p)} 
                style={{ 
                  background: "none", 
                  border: "none", 
                  cursor: "pointer", 
                  color: "rgba(253,246,220,.35)", 
                  fontSize: ".77rem", 
                  fontFamily: "'DM Sans',sans-serif" 
                }}
              >
                {l}
              </button>
              {i < 1 && <span style={{ color: "rgba(253,246,220,.2)" }}>›</span>}
            </span>
          ))}
          <span style={{ color: "rgba(253,246,220,.2)" }}>›</span>
          <span style={{ color: C.geLight, fontSize: ".77rem", fontWeight: 600 }}>Apply</span>
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
