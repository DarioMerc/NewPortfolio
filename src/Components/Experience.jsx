import React, { useEffect, useRef, useState } from "react";
import Draggable from "react-draggable";
import { GroupBox, Window, WindowContent, WindowHeader } from "react95";
import useZIndex from "../Hooks/setZIndex";
import useWindowDimensions from "../Hooks/useWindowDimensions";

const Experience = (isMobile) => {
  const [zIndex, handleClick] = useZIndex();
  const { height, width } = useWindowDimensions();
  const componentRef = useRef();
  const [dimensions, setDimensions] = useState({
    width: 0,
    height: 0,
  });
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (componentRef.current) {
      setDimensions({
        width: componentRef.current.offsetWidth,
        height: componentRef.current.offsetHeight,
      });
      setPosition(
        isMobile.isMobile
          ? {
              x: width * 0.01,
              y: 650,
            }
          : { x: width * 0.01, y: height * 0.3 }
      );
    }
  }, []);
  const onStop = (e, ui) => {
    setPosition({ x: ui.x, y: ui.y });
  };

  console.log(isMobile);
  return (
    <Draggable
      handle=".handle"
      onDrag={handleClick}
      onStop={onStop}
      position={position}
      bounds={{
        left: 0,
        top: 0,
        right: width - dimensions.width,
        // bottom: height - dimensions.height - 50,
      }}
    >
      <Window
        onClick={handleClick}
        className="window"
        style={{
          position: "absolute",
          zIndex,
          width: isMobile.isMobile ? "97%" : "auto",
        }}
        ref={componentRef}
      >
        <WindowHeader className="handle">Experience.exe</WindowHeader>
        <WindowContent style={{ paddingBottom: "0px" }}>
          <GroupBox
            label={
              isMobile.isMobile ? (
                <div style={{ fontWeight: "bold" }}>
                  Software Developer - SeeMyApps - (Nov 2022 - Nov 2023)
                </div>
              ) : (
                <div>
                  <span style={{ fontWeight: "bold" }}>Software Developer</span>
                  <div className="line"></div>
                  <span style={{ fontWeight: "bold" }}>SeeMyApps</span>
                  <div className="line"></div>
                  <span style={{ fontWeight: "bold" }}>
                    (Nov 2022 - Nov 2023)
                  </span>
                </div>
              )
            }
          >
            <p>
              Independently worked on a variety of projects specializing in
              online customer engagement and CMS services for businesses.
            </p>
            <p>
              Built a prototype SASS application from the ground up in Angular,
              .NET and MongoDB.{" "}
            </p>
            <p>
              Revamped the look and feel of multiple company services in both
              Ionic and Material.
            </p>{" "}
            <p>
              Planned and executed the integration of a Google Actions Center
              API into existing company software.
            </p>
          </GroupBox>
          <br />
          <GroupBox
            label={
              isMobile.isMobile ? (
                <div style={{ fontWeight: "bold" }}>
                  Software Developer - MindGeek - (Apr 2022 - Jul 2022)
                </div>
              ) : (
                <div>
                  <span style={{ fontWeight: "bold" }}>Software Developer</span>
                  <div className="line"></div>
                  <span style={{ fontWeight: "bold" }}>MindGeek</span>
                  <div className="line"></div>
                  <span style={{ fontWeight: "bold" }}>
                    (Apr 2022 - Jul 2022)
                  </span>
                </div>
              )
            }
          >
            <p>
              Collaborated with a small agile team to develop, discuss, and
              enhance features for multiple backend services using Laravel PHP.
            </p>
            <p>
              Terminated due to a corporate layoff following the resignation of
              the CEO and COO.
            </p>
          </GroupBox>
          <br />
          <GroupBox
            label={
              isMobile.isMobile ? (
                <div style={{ fontWeight: "bold" }}>
                  Computer Technician - Private Client - (May 2020 - Feb 2021)
                </div>
              ) : (
                <div>
                  <span style={{ fontWeight: "bold" }}>
                    Computer Technician
                  </span>
                  <div className="line"></div>
                  <span style={{ fontWeight: "bold" }}>Private Client</span>
                  <div className="line"></div>
                  <span style={{ fontWeight: "bold" }}>
                    (May 2020 - Feb 2021)
                  </span>
                </div>
              )
            }
          >
            Assisted in building, managing and maintaining hundreds of computers
            for cryptocurrency mining.
          </GroupBox>
          <br />
          <GroupBox
            label={
              isMobile.isMobile ? (
                <div style={{ fontWeight: "bold" }}>
                  Junior Web Developer - SignatureWEB - (Jan 2020 - May 2020)
                </div>
              ) : (
                <div>
                  <span style={{ fontWeight: "bold" }}>
                    Junior Web Developer
                  </span>
                  <div className="line"></div>
                  <span style={{ fontWeight: "bold" }}>SignatureWEB</span>
                  <div className="line"></div>
                  <span style={{ fontWeight: "bold" }}>
                    (Jan 2020 - May 2020)
                  </span>
                </div>
              )
            }
          >
            Worked on two client websites on a small agile team in both
            front-end and back-end development.{" "}
          </GroupBox>
          <br />
        </WindowContent>
      </Window>
    </Draggable>
  );
};

export default Experience;
