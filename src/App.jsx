import React, { useState } from "react";
import { Nav } from "./components/Nav";
import { Foot } from "./components/Foot";
import { C } from "./constants/colors";
import { I } from "./components/icons";

// Styles
import "./styles/index.css";

// Pages
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { ProgramsPage } from "./pages/ProgramsPage";
import { CirclesPage } from "./pages/CirclesPage";
import { GoldenCirclePage } from "./pages/GoldenCirclePage";
import { PolicyCirclePage } from "./pages/PolicyCirclePage";
import { GoldenApplyPage } from "./pages/GoldenApplyPage";
import { PolicyApplyPage } from "./pages/PolicyApplyPage";
import { FLIPage } from "./pages/FLIPage";
import { PodcastPage } from "./pages/PodcastPage";
import { ImpactPage } from "./pages/ImpactPage";
import { JoinPage } from "./pages/JoinPage";
import { ContactPage } from "./pages/ContactPage";

export default function App() {
  const [pg, setPg] = useState("home");
  const go = (id) => {
    setPg(id);
    window.scrollTo(0, 0);
  };

  const isCircle = ["circles", "golden-circle", "policy-circle", "golden-apply", "policy-apply"].includes(pg);

  const Page = () => {
    switch (pg) {
      case "home":
        return <HomePage set={go} />;
      case "about":
        return <AboutPage />;
      case "programs":
        return <ProgramsPage set={go} />;
      case "circles":
        return <CirclesPage set={go} />;
      case "golden-circle":
        return <GoldenCirclePage set={go} />;
      case "policy-circle":
        return <PolicyCirclePage set={go} />;
      case "golden-apply":
        return <GoldenApplyPage set={go} />;
      case "policy-apply":
        return <PolicyApplyPage set={go} />;
      case "fli":
        return <FLIPage set={go} />;
      case "podcast":
        return <PodcastPage />;
      case "impact":
        return <ImpactPage />;
      case "join":
        return <JoinPage />;
      case "contact":
        return <ContactPage />;
      default:
        return <HomePage set={go} />;
    }
  };

  return (
    <>
      <Nav pg={pg} set={go} />
      <main>
        <Page />
      </main>
      {!isCircle && pg !== "home" && (
        <div style={{ padding: "3rem 2rem", textAlign: "center", background: `linear-gradient(135deg,${C.forest},${C.forestLight})` }}>
          <p style={{ color: "rgba(255,255,255,.45)", fontSize: ".82rem", marginBottom: "1rem" }}>
            Ready to be part of something transformational?
          </p>
          <button className="btn-gold" onClick={() => go("join")}>
            Join the GOLD Movement <I.ArrowRight />
          </button>
        </div>
      )}
      <Foot set={go} />
    </>
  );
}
