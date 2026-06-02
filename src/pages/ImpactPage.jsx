import React from "react";
import { STATS } from "../constants/data";
import { C } from "../constants/colors";

export function ImpactPage() {
  return (
    <>
      <section className="sec" style={{ paddingTop: "8rem", background: C.offWhite }}>
        <div className="sec-in">
          <div className="stag">Our Footprint</div>
          <h1 className="stitle" style={{ marginBottom: "1rem" }}>
            Measuring Our <em>Impact</em>
          </h1>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "1.5rem", marginBottom: "4rem" }}>
            {[
              ...STATS,
              { n: "15+", l: "Partner Organizations" },
              { n: "9", l: "FLI Modules" },
              { n: "3", l: "Countries Reached" },
              { n: "100%", l: "Free for Fellows" },
            ].map((s) => (
              <div key={s.l} style={{ background: "#fff", border: `1px solid rgba(26,74,46,.1)`, borderRadius: 16, padding: "2rem", textAlign: "center", boxShadow: "0 2px 12px rgba(26,74,46,.04)" }}>
                <div style={{ fontFamily: "'Playfair Display',serif", fontSize: "3rem", fontWeight: 700, color: C.forestMid, lineHeight: 1 }}>{s.n}</div>
                <div style={{ fontSize: ".72rem", color: C.muted, textTransform: "uppercase", letterSpacing: ".1em", marginTop: ".5rem" }}>{s.l}</div>
              </div>
            ))}
          </div>
          <div className="stag">Success Stories</div>
          <h2 className="stitle" style={{ marginBottom: "2rem" }}>
            Stories of <em>Transformation</em>
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
            {[
              {
                n: "Emmanuel Chukwu",
                r: "FLI Fellow → Policy Analyst, Abuja",
                s: "After completing FLI, Emmanuel joined a policy think-tank in Abuja, where he now advises on youth employment frameworks.",
                a: "EC",
              },
              {
                n: "Ngozi Adeyemi",
                r: "FLI Fellow → Social Entrepreneur",
                s: "Ngozi launched a digital literacy initiative reaching 2,000+ students in rural Kwara State.",
                a: "NA",
              },
              {
                n: "Kofi Mensah",
                r: "FLI Fellow → Student Government Leader",
                s: "From shy university student to elected Student Union President at University of Ghana.",
                a: "KM",
              },
              {
                n: "Zara Ahmed",
                r: "FLI Fellow → Public Health Advocate",
                s: "Zara mobilized community health volunteers in Kano, reaching over 500 households.",
                a: "ZA",
              },
            ].map((x) => (
              <div key={x.n} style={{ background: "#fff", border: `1px solid rgba(26,74,46,.1)`, borderRadius: 16, padding: "2rem", boxShadow: "0 2px 12px rgba(26,74,46,.04)" }}>
                <div style={{ display: "flex", gap: "1rem", alignItems: "center", marginBottom: "1rem" }}>
                  <div
                    style={{
                      width: 52,
                      height: 52,
                      borderRadius: "50%",
                      background: `linear-gradient(135deg,${C.forest},${C.forestLight})`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: 700,
                      color: "#fff",
                      fontSize: ".88rem",
                      flexShrink: 0,
                    }}
                  >
                    {x.a}
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: ".92rem" }}>{x.n}</div>
                    <div style={{ fontSize: ".72rem", color: C.forestMid }}>{x.r}</div>
                  </div>
                </div>
                <p style={{ fontSize: ".84rem", lineHeight: 1.75, color: C.muted }}>{x.s}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
