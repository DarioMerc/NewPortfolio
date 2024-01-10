import { useEffect, useRef, useState } from "react";
import Draggable from "react-draggable";
import { GroupBox, Window, WindowContent, WindowHeader } from "react95";
import useZIndex from "../Hooks/setZIndex";
import useWindowDimensions from "../Hooks/useWindowDimensions";
const Education = (isMobile) => {
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
          ? { x: width * 0.15, y: 1600 }
          : { x: width * 0.74, y: height * 0.68 }
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
        // bottom: height - dimensions.height - 50,
      }}
    >
      <Window
        onClick={handleClick}
        className="window"
        style={{ position: "absolute", zIndex }}
        ref={componentRef}
      >
        <WindowHeader className="handle">Education.exe</WindowHeader>
        <WindowContent>
          <GroupBox label="Concordia">
            Diploma in Full-Stack Development
          </GroupBox>
          <br />
          <GroupBox label="John Abbott College">
            DEC in Computer Science
          </GroupBox>
        </WindowContent>
      </Window>
    </Draggable>
  );
};

export default Education;
