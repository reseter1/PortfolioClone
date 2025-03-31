import React, { useState, useEffect, useRef } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";
import Resume from "./components/Resume/ResumeNew";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { LanguageProvider } from "./contexts/LanguageContext";

function App() {
  const [load, upadateLoad] = useState(true);
  const audioRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);

      if (audioRef.current) {
        if (audioRef.current.paused) {
          audioRef.current.play().catch(err => {
            console.error("Error playing audio after preload:", err);
          });
        } else {
          console.log("Audio is already playing, no need to restart");
        }
      } else {
        console.warn("Audio reference not available when preloader finished");
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const getAudioRef = (ref) => {
    console.log("Received audio reference in App:", ref);
    audioRef.current = ref;

    window.bgAudioElement = ref;
  };

  return (
    <LanguageProvider>
      <Router>
        <Preloader load={load} getAudioRef={getAudioRef} />
        <div className="App" id={load ? "no-scroll" : "scroll"}>
          <Navbar />
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;
