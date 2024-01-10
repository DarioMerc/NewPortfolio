import { useState } from "react";

let currentZIndex = 1;

const useZIndex = () => {
  const [zIndex, setZIndex] = useState(currentZIndex);

  const handleZIndex = () => {
    currentZIndex += 1;
    setZIndex(currentZIndex);
  };

  return [zIndex, handleZIndex];
};

export default useZIndex;
