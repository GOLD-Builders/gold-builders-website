import React from "react";
import { PROGRAMS } from "../constants/data";
import { C } from "../constants/colors";
import { I } from "../components/icons";

export function ProgramsPage({ set }) {
  return (
    <>
      <section className="sec" style={{ paddingTop: "8rem", background: C.cream }}>
        <div className="sec-in">
          <div className="stag">What We Offer</div>
          <h1 className="stitle" style={{ marginBottom: ".75rem" }}>
            Our <em>Programs</em>
          </h1>
          <p className="ssub">Every GOLD program develops a different dimension of transformational leadership.</p>
          <div className="pgrid">
            {PROGRAMS.map((p) => (
              <div className="pcard" key={p.title} onClick={() => set(p.link)}>
                <div className="picon">
                  <p.Icon />
                </div>
                <div className="ptitle">{p.title}</div>
                <div className="pdesc">{p.desc}</div>
                <div className="plink">
                  Explore <I.ArrowRight />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section style={{ background: "linear-gradient(135deg,#0D1B10,#1A4A2E)", padding: "4rem 2rem", textAlign: "center" }}>
        <div className="sec-in">
          <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "2rem", fontWeight: 700, color: "#fff", marginBottom: ".75rem" }}>
            Also: <span style={{ fontStyle: "italic", color: C.goldLight }}>The Circles</span>
          </h2>
          <p style={{ color: "rgba(255,255,255,.5)", maxWidth: 460, margin: "0 auto 1.75rem", fontSize: ".88rem", lineHeight: 1.8 }}>
            Two exclusive, application-based mentorship circles — the GOLD-EN Circle (Entrepreneurship) and the Policy Circle (Governance & Civic Leadership).
          </p>
          <button className="btn-gold" onClick={() => set("circles")}>
            Learn About The Circles <I.ArrowRight />
          </button>
        </div>
      </section>
    </>
  );
}
