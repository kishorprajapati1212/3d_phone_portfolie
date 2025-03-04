import React, { useState, useEffect } from "react";

const MousePositionDisplay = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [percentagePosition, setPercentagePosition] = useState({ x: 0, y: 0 });

  // Track mouse position and calculate percentage
  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = e.clientX;
      const y = e.clientY;

      // Calculate percentage based on screen size
      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight;

      const percentageX = (x / screenWidth) * 100;
      const percentageY = (y / screenHeight) * 100;

      setMousePosition({ x, y });
      setPercentagePosition({ x: percentageX, y: percentageY });
    };

    // Add event listener for mouse move
    window.addEventListener("mousemove", handleMouseMove);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      style={{
        position: "absolute",
        top: "20px",
        left: "20px",
        color: "#fff",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        padding: "10px",
        borderRadius: "5px",
        fontSize: "16px",
      }}
    >
      {/* <p>X: {mousePosition.x} px</p>
      <p>Y: {mousePosition.y} px</p> */}
      <p>X: {percentagePosition.x}%</p>
      <p>Y: {percentagePosition.y}%</p>
    </div>
  );
};

export default MousePositionDisplay;
