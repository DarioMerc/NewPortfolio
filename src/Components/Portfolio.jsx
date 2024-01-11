import React, { useEffect, useState } from "react";
import Education from "./Education";
import Experience from "./Experience";
import Header from "./Header";
import Popup from "./Popup";
import "./Portfolio.css";
import Portrait from "./Portrait";
import Projects from "./Projects";
import Summary from "./Summary";
const Portfolio = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      style={{
        position: "relative",
        height: "100vh",
        width: "100%",
        overflowX: "hidden",
      }}
    >
      {showPopup && (
        <Popup
          message="You can drag windows around by their blue header!"
          timeout={10000}
        />
      )}
      <Header />
      <Experience isMobile={isMobile} />
      <Portrait isMobile={isMobile} />
      <Summary isMobile={isMobile} />
      <Projects isMobile={isMobile} />
      <Education isMobile={isMobile} />
    </div>
  );
};

export default Portfolio;
