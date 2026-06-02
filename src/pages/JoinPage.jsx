import React from "react";
import { JOIN_OPTS } from "../constants/data";
import { C } from "../constants/colors";

export function JoinPage() {
  return (
    <>
      <section className="sec" style={{ paddingTop: "8rem", background: C.forestPale }}>
        <div className="sec-in">
          <div style={{ textAlign: "center" }}>
            <div className="stag" style={{ justifyContent: "center" }}>
              Get Involved
            </div>
          </div>
          <h1 className="stitle" style={{ textAlign: "center", marginBottom: "1rem" }}>
            Join the <em>GOLD</em> Movement
          </h1>
          <p style={{ textAlign: "center", color: C.muted, fontSize: "1rem", lineHeight: 1.8, maxWidth: 520, margin: "0 auto 1rem" }}>
            Whether as a fellow, volunteer, mentor, partner, or donor — your contribution matters.
          </p>
          <div className="jgrid">
            {JOIN_OPTS.map((j) => (
              <div className="jcard" key={j.title}>
                <div className="jico">
                  <j.Icon />
                </div>
                <div className="jtitle">{j.title}</div>
                <div className="jdesc">{j.desc}</div>
                <button className="btn-fg">{j.action} →</button>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="sec" style={{ paddingTop: "3rem" }}>
        <div className="sec-in" style={{ maxWidth: 640 }}>
          <div className="stag">Apply Now</div>
          <h2 className="stitle" style={{ marginBottom: ".75rem" }}>
            FLI <em>Application</em>
          </h2>
          <p style={{ fontSize: ".88rem", color: C.muted, marginBottom: "2rem" }}>Express your interest in the next Future Leaders Initiative cohort.</p>
          <div className="cform">
            <div className="frow">
              <div className="fg">
                <label className="flbl">First Name</label>
                <input className="fi" placeholder="Chidi" />
              </div>
              <div className="fg">
                <label className="flbl">Last Name</label>
                <input className="fi" placeholder="Okonkwo" />
              </div>
            </div>
            <div className="fg">
              <label className="flbl">Email Address</label>
              <input className="fi" type="email" placeholder="you@example.com" />
            </div>
            <div className="fg">
              <label className="flbl">Phone Number</label>
              <input className="fi" placeholder="+234 xxx xxxx xxxx" />
            </div>
            <div className="fg">
              <label className="flbl">Category</label>
              <select className="fsel fi">
                <option value="">Select your category</option>
                <option>Secondary School Student</option>
                <option>University Student</option>
                <option>Young Professional</option>
                <option>Entrepreneur</option>
                <option>Emerging Public Leader</option>
              </select>
            </div>
            <div className="fg">
              <label className="flbl">Institution / Organization</label>
              <input className="fi" placeholder="University of Nigeria, Nsukka" />
            </div>
            <div className="fg">
              <label className="flbl">Why do you want to join GOLD FLI?</label>
              <textarea className="fta" placeholder="Share your motivation and goals..." />
            </div>
            <button className="btn-fg" style={{ width: "100%", padding: ".9rem", borderRadius: 10, fontSize: ".88rem" }}>
              Submit Application →
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
