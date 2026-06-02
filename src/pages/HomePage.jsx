import React from "react";
import { STATS, PROGRAMS, TESTIMONIALS } from "../constants/data";
import { C } from "../constants/colors";
import { I } from "../components/icons";

export function HomePage({ set }) {
  return (
    <>
      <section className="hero">
        <div className="hero-mesh" />
        <div className="hero-dots" />
        <div className="hero-cnt">
          <div className="fu">
            <div className="hpill">
              <div className="hpill-dot" />Pan-African Leadership Institute
            </div>
            <h1 className="h1">
              Raising <em>Leaders.</em>
              <br />
              Building <em>Nations.</em>
              <br />
              Transforming Africa.
            </h1>
            <p className="hsub">
              Equipping young Africans with the leadership capacity, character, and competence required to shape the future of the continent.
            </p>
            <div className="hbtns">
              <button className="btn-gold" onClick={() => set("fli")}>
                Join FLI <I.ArrowRight />
              </button>
              <button className="btn-wh" onClick={() => set("circles")}>
                Explore The Circles
              </button>
            </div>
            <div className="hstats">
              {STATS.map((s) => (
                <div key={s.l}>
                  <div className="sn">{s.n}</div>
                  <div className="sl">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="hvisual fu2" style={{ position: "relative" }}>
            <div className="hfl hfl1">
              <div className="fn">500+</div>
              <div className="fl">Leaders Trained</div>
            </div>
            <div className="hcard">
              <div className="hcbadge">Future Leaders Initiative</div>
              <div className="hctitle">9-Module Leadership Curriculum</div>
              {["Leadership Foundations", "African History", "Governance & Policy", "Critical Thinking", "Entrepreneurship"].map((m) => (
                <div className="hci" key={m}>
                  <div className="hcdot" />
                  {m}
                </div>
              ))}
            </div>
            <div className="hfl hfl2">
              <div className="fn">12+</div>
              <div className="fl">Communities Reached</div>
            </div>
          </div>
        </div>
      </section>

      {/* Circles Teaser */}
      <section style={{ background: "linear-gradient(135deg,#0D1B10,#1A4A2E)", padding: "5rem 2rem" }}>
        <div className="sec-in" style={{ textAlign: "center" }}>
          <div style={{ fontFamily: "'Cinzel',serif", fontSize: ".6rem", fontWeight: 600, letterSpacing: ".28em", color: C.goldLight, textTransform: "uppercase", marginBottom: "1rem", opacity: 0.7 }}>
            GOLD EXCLUSIVE MEMBERSHIP
          </div>
          <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 700, color: "#fff", marginBottom: "1rem", lineHeight: 1.2 }}>
            Introducing <span style={{ fontStyle: "italic", color: C.goldLight }}>The Circles</span>
          </h2>
          <p style={{ color: "rgba(255,255,255,.52)", fontSize: ".96rem", lineHeight: 1.85, maxWidth: 520, margin: "0 auto 3rem" }}>
            Two closed-door leadership mentorship circles for Africa's most intentional emerging founders, builders, and civic leaders.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem", maxWidth: 740, margin: "0 auto" }}>
            {[
              {
                bg: "linear-gradient(145deg,#1A1200,#2A1E00)",
                bor: "rgba(218,165,32,.3)",
                hover: "rgba(184,134,11,.25)",
                Ico: I.Zap,
                col: C.geLight,
                name: "GOLD-EN Circle",
                desc: "Entrepreneurship mentorship for founders, builders, and operators building Africa's next great ventures.",
                pg: "golden-circle",
              },
              {
                bg: "linear-gradient(145deg,#050F1C,#0D1E2E)",
                bor: "rgba(122,176,224,.3)",
                hover: "rgba(26,58,92,.35)",
                Ico: I.Shield,
                col: C.pcAccent,
                name: "Policy Circle",
                desc: "Civic and policy leadership mentorship for those called to governance, public service, and nation-building.",
                pg: "policy-circle",
              },
            ].map((x) => (
              <div
                key={x.name}
                style={{
                  background: x.bg,
                  border: `1px solid ${x.bor}`,
                  borderRadius: 16,
                  padding: "2rem",
                  cursor: "pointer",
                  transition: "all .3s",
                }}
                onClick={() => set(x.pg)}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.boxShadow = `0 20px 50px ${x.hover}`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "none";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div style={{ color: x.col, marginBottom: ".85rem" }}>
                  <x.Ico />
                </div>
                <div style={{ fontFamily: "'Cinzel',serif", fontWeight: 600, fontSize: "1rem", color: x.col, marginBottom: ".5rem" }}>
                  {x.name}
                </div>
                <div
                  style={{
                    fontSize: ".82rem",
                    color: x.col === C.geLight ? "rgba(253,246,220,.52)" : "rgba(234,240,248,.5)",
                    lineHeight: 1.65,
                    marginBottom: "1rem",
                  }}
                >
                  {x.desc}
                </div>
                <div style={{ display: "inline-flex", alignItems: "center", gap: ".4rem", color: x.col, fontSize: ".73rem", fontWeight: 700, letterSpacing: ".08em" }}>
                  Apply Now <I.ArrowRight />
                </div>
              </div>
            ))}
          </div>
          <button className="btn-gold" style={{ marginTop: "2.5rem" }} onClick={() => set("circles")}>
            Explore All Circles <I.ArrowRight />
          </button>
        </div>
      </section>

      <section className="sec" style={{ background: C.offWhite }}>
        <div className="sec-in">
          <div className="stag">Our Foundation</div>
          <h2 className="stitle" style={{ marginBottom: ".5rem" }}>
            Vision & <em>Mission</em>
          </h2>
          <div className="vm-grid">
            <div className="vm vmv">
              <div className="vmlbl">Our Vision</div>
              <div className="vmtxt">"To empower and develop individuals, especially young Africans, as human capital for nation building."</div>
            </div>
            <div className="vm vmm">
              <div className="vmlbl">Our Mission</div>
              <div className="vmtxt">"To raise competent, ethical, visionary, and purpose-driven leaders who will transform Africa through service, innovation, and influence."</div>
            </div>
          </div>
        </div>
      </section>

      <section className="sec dark">
        <div className="sec-in">
          <div className="stag">The Imperative</div>
          <h2 className="stitle" style={{ marginBottom: ".75rem" }}>
            Why <em>Leadership</em> Matters
          </h2>
          <p className="ssub">
            Africa's greatest challenge is not resources — it is the lack of ethical, capable leaders equipped to harness them.
          </p>
          <div className="why-grid">
            {[
              { Icon: I.Globe, t: "Africa's Moment", d: "With the world's youngest population, the leadership we develop today will define Africa's trajectory for generations." },
              { Icon: I.Shield, t: "The Ethics Crisis", d: "Corruption and poor governance cost Africa billions annually. Raising ethical leaders is the foundation of development." },
              { Icon: I.Users, t: "Human Capital First", d: "Economic transformation begins with transformed minds. GOLD invests in the most powerful resource Africa has." },
              { Icon: I.Home, t: "Governance Matters", d: "Competent and visionary leadership in every sector separates thriving nations from struggling ones." },
              { Icon: I.Handshake, t: "The Mentorship Gap", d: "Many young Africans lack access to mentors who can guide development. We bridge that gap." },
              { Icon: I.Lightbulb, t: "Innovation is African", d: "Africa's challenges demand African solutions. We cultivate critical thinkers who reimagine what's possible." },
            ].map((c) => (
              <div className="wcard" key={c.t}>
                <div className="wicon">
                  <c.Icon />
                </div>
                <div className="wtitle">{c.t}</div>
                <div className="wdesc">{c.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec" style={{ background: C.cream }}>
        <div className="sec-in">
          <div className="stag">What We Do</div>
          <h2 className="stitle" style={{ marginBottom: ".75rem" }}>
            Our <em>Programs</em>
          </h2>
          <p className="ssub">Structured pathways to develop every dimension of transformational leadership.</p>
          <div className="pgrid">
            {PROGRAMS.map((p) => (
              <div className="pcard" key={p.title} onClick={() => set(p.link)}>
                <div className="picon">
                  <p.Icon />
                </div>
                <div className="ptitle">{p.title}</div>
                <div className="pdesc">{p.desc}</div>
                <div className="plink">
                  Learn More <I.ArrowRight />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="ist">
        <div className="ist-in">
          {STATS.map((s) => (
            <div key={s.l}>
              <div className="in">{s.n}</div>
              <div className="il">{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      <section className="sec" style={{ background: C.offWhite }}>
        <div className="sec-in">
          <div className="stag">Voices of Change</div>
          <h2 className="stitle">
            What Our <em>Fellows</em> Say
          </h2>
          <div className="tgrid">
            {TESTIMONIALS.map((t) => (
              <div className="tcard" key={t.name}>
                <div className="tq">"</div>
                <p className="ttxt">{t.text}</p>
                <div className="tau">
                  <div className="tav">{t.init}</div>
                  <div>
                    <div className="tn">{t.name}</div>
                    <div className="tr">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="ctab">
        <h2>Ready to Lead Africa's Future?</h2>
        <p>Join thousands of young Africans developing the character, competence, and vision to transform the continent.</p>
        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
          <button className="btn-fg" onClick={() => set("join")} style={{ padding: ".9rem 2rem", borderRadius: 10, fontSize: ".88rem" }}>
            Apply to FLI
          </button>
          <button
            style={{
              background: "transparent",
              color: C.forest,
              padding: ".9rem 2rem",
              borderRadius: 10,
              border: `1.5px solid ${C.forest}`,
              fontSize: ".88rem",
              cursor: "pointer",
              fontFamily: "'DM Sans',sans-serif",
            }}
            onClick={() => set("circles")}
          >
            Explore The Circles
          </button>
        </div>
      </div>
    </>
  );
}
