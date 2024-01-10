import React, { useEffect, useRef, useState } from "react";
import Draggable from "react-draggable";
import { Window, WindowContent, WindowHeader } from "react95";
import useZIndex from "../Hooks/setZIndex";
import useWindowDimensions from "../Hooks/useWindowDimensions";
const Summary = (isMobile) => {
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
              x: width * 0.03,
              y: height * 0.5,
            }
          : {
              x: width * 0.015,
              y: height * 0.035,
            }
      );
      // setPosition({
      //   x: Math.floor(
      //     Math.random() * (width - componentRef.current.offsetWidth + 1)
      //   ),
      //   y: Math.floor(
      //     Math.random() * (height - componentRef.current.offsetHeight - 49)
      //   ),
      // });
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
        bottom: height,
      }}
    >
      <Window
        onClick={handleClick}
        className="window"
        style={{
          position: "absolute",
          zIndex,
          width: isMobile.isMobile ? "90%" : width * 0.7,
        }}
        ref={componentRef}
      >
        <WindowHeader className="handle">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            Description.txt
            {/* <Button>_</Button> */}
          </div>
        </WindowHeader>
        <WindowContent>
          <p>
            An enthusiastic full-stack developer looking for a new role! I am
            looking for a company that I can grow with as both a developer and a
            person. I value organization learning the best practices since they
            are always changing! Outside of my career I have strong passions in
            both music and movies and I pride myself on being an easygoing and
            upbeat person.
          </p>
        </WindowContent>
      </Window>
    </Draggable>
  );
};

export default Summary;
