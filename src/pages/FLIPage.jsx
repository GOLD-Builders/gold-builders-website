import React from "react";
import { FLI_MODULES } from "../constants/data";
import { C } from "../constants/colors";
import { I } from "../components/icons";

export function FLIPage({ set }) {
  return (
    <>
      <section className="sec dark" style={{ paddingTop: "8rem" }}>
        <div className="sec-in">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center", marginBottom: "4rem" }}>
            <div>
              <div className="hpill" style={{ marginBottom: "1rem" }}>
                <div className="hpill-dot" />GOLD Flagship Program
              </div>
              <h1 className="stitle" style={{ marginBottom: "1rem" }}>
                Future Leaders <em>Initiative</em>
              </h1>
              <p style={{ fontSize: ".94rem", lineHeight: 1.8, color: "rgba(255,255,255,.7)", marginBottom: "1.5rem" }}>
                FLI is GOLD's signature leadership development program — a structured, immersive curriculum that equips young Africans with the knowledge, skills, and character to lead with excellence in every sphere.
              </p>
              <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                <button className="btn-gold" onClick={() => set("join")}>
                  Apply Now <I.ArrowRight />
                </button>
                <button className="btn-wh">Download Brochure</button>
              </div>
            </div>
            <div style={{ background: "rgba(255,255,255,.06)", borderRadius: 20, padding: "2rem", border: "1px solid rgba(201,160,32,.2)" }}>
              <div style={{ fontSize: ".66rem", fontWeight: 700, letterSpacing: ".15em", textTransform: "uppercase", color: C.goldLight, marginBottom: "1.2rem" }}>
                Program Highlights
              </div>
              {[
                [I.Calendar, "Duration", "3–6 Month Cohort"],
                [I.Users, "Cohort Size", "25–40 Fellows"],
                [I.MapPin, "Mode", "In-person & Hybrid"],
                [I.Award, "Certificate", "GOLD FLI Certificate"],
                [I.Handshake, "Mentorship", "1-on-1 Mentoring Included"],
              ].map(([Icon, l, v]) => (
                <div key={l} style={{ display: "flex", gap: "1rem", alignItems: "center", padding: ".68rem 0", borderBottom: "1px solid rgba(255,255,255,.06)" }}>
                  <span style={{ color: C.goldLight, opacity: 0.8 }}>
                    <Icon />
                  </span>
                  <span style={{ fontSize: ".79rem", color: "rgba(255,255,255,.45)", width: 100 }}>{l}</span>
                  <span style={{ fontSize: ".85rem", fontWeight: 500 }}>{v}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="stag">Curriculum</div>
          <h2 className="stitle" style={{ marginBottom: "1.5rem" }}>
            9 Learning <em>Modules</em>
          </h2>
          <div className="flic">
            {FLI_MODULES.map((m, i) => (
              <div className="fmod" key={m}>
                <div className="fnum">0{i + 1}</div>
                <div className="fname">{m}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="sec" style={{ background: C.offWhite }}>
        <div className="sec-in">
          <div className="stag">The Journey</div>
          <h2 className="stitle" style={{ marginBottom: "2rem" }}>
            The <em>FLI</em> Experience
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "1.5rem" }}>
            {[
              { s: "01", t: "Application", d: "Submit your application and express your commitment to leadership development." },
              { s: "02", t: "Orientation", d: "Welcome cohort gathering and introduction to GOLD's leadership philosophy." },
              { s: "03", t: "Curriculum", d: "Nine-module immersive program covering all dimensions of leadership." },
              { s: "04", t: "Graduation", d: "Complete a capstone project, receive your certificate, and join the alumni network." },
            ].map((x) => (
              <div key={x.s} style={{ background: "#fff", border: `1px solid rgba(26,74,46,.1)`, borderRadius: 14, padding: "1.75rem", boxShadow: "0 2px 12px rgba(26,74,46,.04)" }}>
                <div style={{ fontFamily: "'Playfair Display',serif", fontSize: "2.5rem", fontWeight: 700, color: C.gold, opacity: 0.3, marginBottom: ".5rem" }}>
                  {x.s}
                </div>
                <div style={{ fontWeight: 700, fontSize: "1rem", marginBottom: ".6rem" }}>{x.t}</div>
                <div style={{ fontSize: ".82rem", lineHeight: 1.7, color: C.muted }}>{x.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="ctab">
        <h2>Begin Your Leadership Journey</h2>
        <p>Applications are open for the next FLI cohort.</p>
        <button className="btn-fg" onClick={() => set("join")} style={{ padding: ".9rem 2rem", borderRadius: 10, fontSize: ".88rem" }}>
          Apply for FLI <I.ArrowRight />
        </button>
      </div>
    </>
  );
}
