import React from "react";
import { C } from "../constants/colors";
import { I } from "../components/icons";

export function PodcastPage() {
  const eps = [
    { ep: "EP 14", t: "Rebuilding Nigeria's Public Sector: A Leadership Blueprint", d: "Ethical governance and how young leaders can restructure public institutions from within.", dur: "52 min", dt: "May 2025", tgs: ["Governance", "Nigeria"] },
    { ep: "EP 13", t: "Entrepreneurship as a Tool for African Liberation", d: "How African entrepreneurs are driving economic independence.", dur: "45 min", dt: "Apr 2025", tgs: ["Entrepreneurship", "Africa"] },
    { ep: "EP 12", t: "The Mentor I Needed: Stories of Transformational Guidance", d: "Leaders share mentorship moments that changed their trajectories.", dur: "38 min", dt: "Mar 2025", tgs: ["Mentorship", "Development"] },
    { ep: "EP 11", t: "Building Cities, Building Nations: Urban Leadership in Africa", d: "City leaders discuss governance at the local level.", dur: "61 min", dt: "Feb 2025", tgs: ["Governance", "Community"] },
    { ep: "EP 10", t: "The Ethics of Ambition: Leading Without Losing Your Soul", d: "Pursuing excellence and impact without compromising integrity.", dur: "44 min", dt: "Jan 2025", tgs: ["Ethics", "Character"] },
    { ep: "EP 09", t: "Financing Africa's Future: What Young Leaders Must Know", d: "Capital, investment, and fiscal policy for African development.", dur: "55 min", dt: "Dec 2024", tgs: ["Finance", "Business"] },
  ];

  return (
    <section className="sec" style={{ paddingTop: "8rem", background: C.offWhite }}>
      <div className="sec-in">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center", marginBottom: "3rem" }}>
          <div>
            <h1 className="stitle" style={{ marginBottom: "1rem" }}>
              RE-BUILD <em>Podcast</em>
            </h1>
            <p style={{ fontSize: "1rem", lineHeight: 1.8, color: C.muted }}>
              Conversations that challenge conventional thinking and equip Africa's next generation of leaders.
            </p>
            <div style={{ display: "flex", gap: ".75rem", marginTop: "1.5rem", flexWrap: "wrap" }}>
              {["Spotify", "Apple Podcasts", "YouTube", "Google Podcasts"].map((p) => (
                <button
                  key={p}
                  style={{
                    background: "#fff",
                    border: `1px solid rgba(26,74,46,.12)`,
                    color: C.text,
                    padding: ".5rem 1rem",
                    borderRadius: 8,
                    fontSize: ".77rem",
                    cursor: "pointer",
                    fontFamily: "'DM Sans',sans-serif",
                  }}
                >
                  {p}
                </button>
              ))}
            </div>
          </div>
          <div style={{ background: C.forest, border: `1px solid rgba(201,160,32,.2)`, borderRadius: 20, padding: "2.5rem", textAlign: "center" }}>
            <div style={{ width: 68, height: 68, borderRadius: "50%", background: "rgba(201,160,32,.15)", color: C.goldLight, margin: "0 auto 1rem", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <I.Mic />
            </div>
            <div style={{ fontFamily: "'Playfair Display',serif", fontSize: "2rem", fontWeight: 700, marginBottom: ".5rem", color: "#fff" }}>
              RE-BUILD
            </div>
            <div style={{ fontSize: ".72rem", letterSpacing: ".2em", textTransform: "uppercase", color: C.goldLight, marginBottom: "1rem" }}>
              by GOLD
            </div>
            <div style={{ fontSize: ".81rem", color: "rgba(255,255,255,.46)" }}>Business · Governance · Nation Building · Mentorship</div>
          </div>
        </div>
        <div className="stag">Episodes</div>
        <h2 className="stitle" style={{ marginBottom: "2rem" }}>
          All <em>Episodes</em>
        </h2>
        <div style={{ display: "grid", gap: "1rem" }}>
          {eps.map((e) => (
            <div
              key={e.ep}
              style={{
                background: "#fff",
                border: `1px solid rgba(26,74,46,.09)`,
                borderRadius: 14,
                padding: "1.5rem 2rem",
                display: "grid",
                gridTemplateColumns: "auto 1fr auto",
                gap: "1.5rem",
                alignItems: "center",
                cursor: "pointer",
                transition: "all .3s",
              }}
              onMouseEnter={(ev) => {
                ev.currentTarget.style.borderColor = C.forestMid;
                ev.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(ev) => {
                ev.currentTarget.style.borderColor = "rgba(26,74,46,.09)";
                ev.currentTarget.style.transform = "none";
              }}
            >
              <div style={{ width: 52, height: 52, borderRadius: 12, background: C.forest, color: C.goldLight, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: ".72rem", flexShrink: 0 }}>
                {e.ep}
              </div>
              <div>
                <div style={{ fontWeight: 700, fontSize: ".92rem", marginBottom: ".3rem", color: C.text }}>{e.t}</div>
                <div style={{ fontSize: ".8rem", color: C.muted, lineHeight: 1.6, marginBottom: ".5rem" }}>{e.d}</div>
                <div style={{ display: "flex", gap: ".6rem", flexWrap: "wrap" }}>
                  {e.tgs.map((tg) => (
                    <span key={tg} style={{ background: C.forestPale, color: C.forestMid, fontSize: ".65rem", fontWeight: 700, padding: ".2rem .6rem", borderRadius: 6 }}>
                      {tg}
                    </span>
                  ))}
                </div>
              </div>
              <div style={{ textAlign: "right" }}>
                <button className="pbtn">
                  <I.Play /> Listen
                </button>
                <div style={{ fontSize: ".69rem", color: C.muted, marginTop: ".4rem", display: "flex", alignItems: "center", gap: ".3rem", justifyContent: "flex-end" }}>
                  <I.Clock />
                  {e.dur} · {e.dt}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
