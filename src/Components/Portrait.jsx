import { useEffect, useRef, useState } from "react";
import Draggable from "react-draggable";
import { Anchor, Window, WindowContent, WindowHeader } from "react95";
import useZIndex from "../Hooks/setZIndex";
import useWindowDimensions from "../Hooks/useWindowDimensions";

const Portrait = (isMobile) => {
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
          ? { x: width * 0.25, y: height * 0.01 }
          : {
              x: width * 0.76,
              y: height * 0.01,
            }
      );
      //RANDOM POSITION WITHIN WINDOW
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
      position={position}
      onStop={onStop}
      bounds={{
        left: 0,
        top: 0,
        right: width - dimensions.width + 1,
        bottom: height,
      }}
    >
      <Window
        onClick={handleClick}
        className="window"
        style={{ position: "absolute", zIndex }}
        ref={componentRef}
      >
        <WindowHeader className="handle">Portrait.png</WindowHeader>
        <WindowContent
          style={{
            padding: "10px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img
            src="src\assets\images\Portrait.jpg"
            style={{
              width: "200px",
              height: "auto",
            }}
            className="unselectable"
          ></img>
          <div style={{ padding: "0px 10px" }}>
            <div className="portraitLink">
              <img
                src="../assets/icons/Agent.ico"
                alt=""
                className="portraitIcon"
              />
              Dario Mercuri
            </div>
            <div className="portraitLink">
              <img
                src="../assets/icons/Mailbox.ico"
                alt=""
                className="portraitIcon"
              />
              <Anchor href="mailto:dario.mercuri31@gmail.com">
                dario.mercuri31@gmail.com
              </Anchor>
            </div>
            <div className="portraitLink">
              <img
                src="../assets/icons/Phone.ico"
                alt=""
                className="portraitIcon"
              />
              <Anchor href="tel:5148021614">(514) 802-1614</Anchor>
            </div>
          </div>
        </WindowContent>
      </Window>
    </Draggable>
  );
};

export default Portrait;
