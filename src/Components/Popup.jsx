import React, { useEffect, useState } from "react";
import "./Popup.css"; // Make sure to create a corresponding CSS file

const Popup = ({ message, timeout }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, timeout);

    return () => clearTimeout(timer);
  }, [timeout]);

  return (
    <div className="popup" style={{ opacity: visible ? 1 : 0 }}>
      {message}
    </div>
  );
};

export default Popup;
