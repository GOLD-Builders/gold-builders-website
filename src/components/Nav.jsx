import React, { useState, useEffect } from "react";
import { NAV_LINKS } from "../constants/data";
import { Logo } from "./Logo";
import { I } from "./icons";

export function Nav({ pg, set }) {
  const [sc, setSc] = useState(false);
  const [mo, setMo] = useState(false);

  useEffect(() => {
    const handleScroll = () => setSc(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const go = (id) => {
    set(id);
    setMo(false);
    window.scrollTo(0, 0);
  };

  return (
    <nav className={`nav${sc ? " on" : ""}`}>
      <div className="nav-in">
        <div className="nlogo" onClick={() => go("home")}>
          <Logo h={38} />
          <div>
            <div className="nlogo-t">GOLD</div>
            <div className="nlogo-s">Leadership Development</div>
          </div>
        </div>
        <div className="nlinks">
          {NAV_LINKS.map((l) => (
            <button
              key={l.id}
              className={`nlink${pg === l.id ? " act" : ""}${l.highlight ? " hl" : ""}`}
              onClick={() => go(l.id)}
            >
              {l.label}
            </button>
          ))}
        </div>
        <button className="ncta" onClick={() => go("join")}>
          Join GOLD
        </button>
        <button className="mb-btn" onClick={() => setMo((o) => !o)}>
          {mo ? <I.X /> : <I.Menu />}
        </button>
      </div>
      {mo && (
        <div className="mb-nav">
          {NAV_LINKS.map((l) => (
            <button
              key={l.id}
              className={`nlink${pg === l.id ? " act" : ""}${l.highlight ? " hl" : ""}`}
              onClick={() => go(l.id)}
            >
              {l.label}
            </button>
          ))}
          <button
            className="btn-gold"
            style={{ marginTop: ".5rem", justifyContent: "center" }}
            onClick={() => go("join")}
          >
            Join GOLD
          </button>
        </div>
      )}
    </nav>
  );
}
