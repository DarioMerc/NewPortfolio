import React, { useEffect, useRef, useState } from "react";
import Draggable from "react-draggable";
import { Anchor, Window, WindowContent, WindowHeader } from "react95";
import useZIndex from "../Hooks/setZIndex";
import useWindowDimensions from "../Hooks/useWindowDimensions";

const Projects = (isMobile) => {
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
          ? { x: width * 0.03, y: 1350 }
          : { x: width * 0.73, y: height * 0.6 }
      );
    }
  }, []);
  const onStop = (e, ui) => {
    setPosition({ x: ui.x, y: ui.y });
  };
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
      }}
    >
      <Window
        onClick={handleClick}
        className="window"
        style={{ position: "absolute", zIndex }}
        ref={componentRef}
      >
        <WindowHeader className="handle">Projects</WindowHeader>
        <WindowContent>
          <a href="https://github.com/DarioMerc/MangoMarket">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "5px",
              }}
              className="project"
            >
              <img
                src="/assets/icons/WelcomeProgram.ico"
                alt=""
                style={{ width: "50px" }}
              />
              <Anchor style={{ fontSize: "14px" }}>Mango Market</Anchor>
            </div>
          </a>
        </WindowContent>
      </Window>
    </Draggable>
  );
};

export default Projects;
