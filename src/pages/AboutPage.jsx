import React from "react";
import { CORE_VALUES } from "../constants/data";
import { C } from "../constants/colors";

export function AboutPage() {
  return (
    <>
      <section className="sec" style={{ paddingTop: "8rem", background: C.offWhite }}>
        <div className="sec-in">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "start" }}>
            <div>
              <div className="stag">Our Story</div>
              <h1 className="stitle" style={{ marginBottom: "1.5rem" }}>
                About <em>GOLD</em>
              </h1>
              <p style={{ fontSize: "1rem", lineHeight: 1.85, color: C.muted, marginBottom: "1.25rem" }}>
                GOLD — Governmental and Organizational Leadership Development — was born out of a deep conviction: that Africa's greatest need is not more resources, but more leaders equipped with integrity, vision, and the competence to serve.
              </p>
              <p style={{ fontSize: "1rem", lineHeight: 1.85, color: C.muted, marginBottom: "1.25rem" }}>
                We exist to raise a generation of transformational leaders in business, government, ministry, education, and community development who will contribute meaningfully to nation-building across Nigeria and the African continent.
              </p>
              <p style={{ fontSize: "1rem", lineHeight: 1.85, color: C.muted }}>
                Through structured programs, mentorship, conferences, and our media arm, we are building an ecosystem that nurtures leaders from the inside out — character first, competence second, contribution always.
              </p>
            </div>
            <div>
              <div className="vm vmv" style={{ marginBottom: "1.5rem" }}>
                <div className="vmlbl">Our Vision</div>
                <div className="vmtxt">"To empower and develop individuals, especially young Africans, as human capital for nation building."</div>
              </div>
              <div className="vm vmm">
                <div className="vmlbl">Our Mission</div>
                <div className="vmtxt">"To raise competent, ethical, visionary, and purpose-driven leaders who will transform Africa through service, innovation, and influence."</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="sec">
        <div className="sec-in">
          <div className="stag">What We Stand For</div>
          <h2 className="stitle">
            Core <em>Values</em>
          </h2>
          <div className="vgrid">
            {CORE_VALUES.map((v) => (
              <div className="vcard" key={v.name}>
                <div className="vicon">
                  <v.Icon />
                </div>
                <div className="vname">{v.name}</div>
                <div className="vdesc">{v.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="sec dark">
        <div className="sec-in" style={{ maxWidth: 760, textAlign: "center" }}>
          <div className="stag" style={{ justifyContent: "center" }}>
            Philosophy
          </div>
          <h2 className="stitle" style={{ marginBottom: "1.5rem" }}>
            Our <em>Philosophy</em>
          </h2>
          <p style={{ fontFamily: "'Playfair Display',serif", fontStyle: "italic", fontSize: "1.2rem", lineHeight: 1.85, color: "rgba(255,255,255,.78)" }}>
            "True leadership is not about position or power — it is about character and service. Africa needs leaders shaped by purpose, driven by integrity, and committed to the flourishing of their communities and nations."
          </p>
        </div>
      </section>
    </>
  );
}
