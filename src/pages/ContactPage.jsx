import React from "react";
import { C } from "../constants/colors";
import { I } from "../components/icons";

export function ContactPage() {
  return (
    <section className="sec" style={{ paddingTop: "8rem", background: C.offWhite }}>
      <div className="sec-in">
        <div className="stag">Get In Touch</div>
        <h1 className="stitle" style={{ marginBottom: ".75rem" }}>
          Contact <em>GOLD</em>
        </h1>
        <div className="cgrid">
          <div>
            <div className="cinfo" style={{ marginBottom: "1.5rem" }}>
              <div style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.2rem", fontWeight: 600, marginBottom: "1.5rem", color: C.goldLight }}>
                Contact Information
              </div>
              {[
                { Icon: I.Mail, l: "Email", v: "info@goldleadershipafrica.org" },
                { Icon: I.MapPin, l: "Location", v: "Nigeria, West Africa" },
                { Icon: I.Globe, l: "Website", v: "goldleadershipafrica.org" },
              ].map((c) => (
                <div className="citem" key={c.l}>
                  <div className="cico">
                    <c.Icon />
                  </div>
                  <div>
                    <div className="clbl">{c.l}</div>
                    <div className="cval">{c.v}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="cinfo">
              <div style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.2rem", fontWeight: 600, marginBottom: "1rem", color: C.goldLight }}>
                Follow GOLD
              </div>
              <div className="sbtn">
                {[I.Twitter, I.LinkedIn, I.Facebook, I.Youtube].map((Icon, i) => (
                  <div className="sbtn2" key={i}>
                    <Icon />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="cform">
            <div style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.3rem", fontWeight: 600, marginBottom: "1.5rem" }}>Send Us a Message</div>
            <div className="frow">
              <div className="fg">
                <label className="flbl">First Name</label>
                <input className="fi" placeholder="Your name" />
              </div>
              <div className="fg">
                <label className="flbl">Last Name</label>
                <input className="fi" placeholder="Your surname" />
              </div>
            </div>
            <div className="fg">
              <label className="flbl">Email</label>
              <input className="fi" type="email" placeholder="you@email.com" />
            </div>
            <div className="fg">
              <label className="flbl">Inquiry Type</label>
              <select className="fsel fi">
                <option>General Inquiry</option>
                <option>Program Information</option>
                <option>The Circles — GOLD-EN</option>
                <option>The Circles — Policy</option>
                <option>Partnership / Sponsorship</option>
                <option>Volunteering</option>
                <option>Donation</option>
              </select>
            </div>
            <div className="fg">
              <label className="flbl">Message</label>
              <textarea className="fta" placeholder="How can we help you?" />
            </div>
            <button className="btn-fg" style={{ width: "100%", padding: ".9rem", borderRadius: 10, fontSize: ".88rem" }}>
              Send Message →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
