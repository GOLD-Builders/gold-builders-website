import React from "react";
import { Logo } from "./Logo";
import { I } from "./icons";

export function Foot({ set }) {
  return (
    <footer className="ft">
      <div className="ft-in">
        <div className="ftg">
          <div className="ftb">
            <div className="ftlogo">
              <Logo h={36} inv />
              <div>
                <div className="ftlt">GOLD</div>
                <div className="ftls">Leadership Development</div>
              </div>
            </div>
            <p>
              Raising a generation of transformational leaders to build the Africa we all deserve — through character, competence, and commitment to service.
            </p>
            <div className="sbtn">
              {[I.Twitter, I.LinkedIn, I.Facebook, I.Youtube].map((Icon, i) => (
                <div className="sbtn2" key={i}>
                  <Icon />
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="ftct">Programs</div>
            <ul className="ftlinks">
              {[
                ["Future Leaders Initiative", "fli"],
                ["The Circles", "circles"],
                ["GOLD-EN Circle", "golden-circle"],
                ["Policy Circle", "policy-circle"],
                ["RE-BUILD Podcast", "podcast"],
              ].map(([l, p]) => (
                <li key={l}>
                  <a onClick={() => set(p)}>{l}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="ftct">The Circles</div>
            <ul className="ftlinks">
              {[
                ["GOLD-EN Circle", "golden-circle"],
                ["Policy Circle", "policy-circle"],
                ["Apply — GOLD-EN", "golden-apply"],
                ["Apply — Policy", "policy-apply"],
                ["About Circles", "circles"],
              ].map(([l, p]) => (
                <li key={l}>
                  <a onClick={() => set(p)}>{l}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="ftct">Get Involved</div>
            <ul className="ftlinks">
              {[
                ["Become a Fellow", "join"],
                ["Partner With Us", "join"],
                ["Donate", "join"],
                ["Contact Us", "contact"],
                ["About GOLD", "about"],
              ].map(([l, p]) => (
                <li key={l}>
                  <a onClick={() => set(p)}>{l}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="ftbot">
          <div>
            © 2025 <span>GOLD</span> — Governmental and Organizational Leadership Development.
          </div>
          <div>
            Raising <span>Leaders</span>. Building <span>Nations</span>. Transforming <span>Africa</span>.
          </div>
        </div>
      </div>
    </footer>
  );
}
