import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Canvas } from "@react-three/fiber";

// Register ScrollTrigger plugin
// gsap.registerPlugin(ScrollTrigger);

const FrontViewComponent = () => {
  // Define the positions for the cameras (dots)
  const cameras = [
    { id: 1, x: "43.5%", y: "41.2%", color: "gray", boxX: "11%", boxY: "20%", text: "33 MP" },
    { id: 2, x: "43.5%", y: "48%", color: "gray", boxX: "9%", boxY: "50%", text: "100 MP" },
    { id: 3, x: "48%", y: "44.5%", color: "gray", boxX: "80%", boxY: "20%", text: "20 MP" },
  ];

  // Refs to track each camera dot and box
  const dotRefs = useRef([]);
  const boxRefs = useRef([]);

  useEffect(() => {
    // GSAP Animations for dots
    dotRefs.current.forEach((dot, index) => {
      gsap.fromTo(
        dot,
        { scale: 0, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: dot,
            start: "top 80%",
            end: "top 60%",
            scrub: true, // Smooth animation tied to scroll
            toggleActions: "play none none none", // Play the animation once
          },
        }
      );
    });

    // GSAP Animations for boxes
    boxRefs.current.forEach((box, index) => {
      gsap.fromTo(
        box,
        { scale: 0, opacity: 0, y: 50 },
        {
          scale: 1,
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: box,
            start: "top 80%",
            end: "top 60%",
            scrub: true, // Smooth animation tied to scroll

            toggleActions: "play none none none", // Play the animation once
          },
        }
      );
    });
  }, []);

  return (
    <div
      style={{
        position: "relative",
        width: "98vw",
        height: "150vh", // Extend height to allow scrolling

        backgroundColor: "transparent",
      }}
    >
      {/* Render Dynamic Dots and Lines */}
      {cameras.map((camera, index) => (
        <React.Fragment key={camera.id}>
          {/* Camera Dot */}
          <div
            ref={(el) => (dotRefs.current[index] = el)} // Attach ref to each dot
            style={{
              position: "absolute",
              top: camera.y,
              left: camera.x,
              width: "15px",
              height: "15px",
              backgroundColor: camera.color,
              borderRadius: "50%",
              transform: "translate(-50%, -50%)", // Center the dot
            }}
          ></div>

          {/* Line from Camera Dot to its corresponding Box */}
          <svg
            width="100%"
            height="100%"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              pointerEvents: "none", // Prevent interaction with lines
            }}
          >
            <line
              x1={camera.x}
              y1={camera.y}
              x2={camera.boxX}
              y2={camera.boxY}
              stroke="#ffffff"
              strokeWidth="2"
            />
          </svg>

          {/* Corresponding Box for Each Camera */}
          <div
            ref={(el) => (boxRefs.current[index] = el)} // Attach ref to each box
            style={{
              position: "absolute",
              top: camera.boxY,
              left: camera.boxX,
              width: "100px", // Adjusted size for better visibility
              height: "100px",
              backgroundColor: "#ffffff", // Neutral background
              transform: "translate(-50%, -50%)", // Center the box
              borderRadius: "12px", // Softer corners for a modern look
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#000000", // Text color
              fontWeight: "700", // Bold for emphasis
              fontSize: "1.5rem", // Larger font for better visibility
              fontFamily: "'Montserrat', sans-serif", // Modern font
              textShadow: "2px 2px 5px rgba(0, 0, 0, 0.3)", // Subtle shadow for text
              letterSpacing: "1px", // Slight letter spacing for better readability
              lineHeight: "0.2", // Adjust line height for better text spacing
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)", // Soft shadow for box
            }}
          >
            {camera.text}
          </div>

        </React.Fragment>
      ))}
    </div>
  );
};

export default FrontViewComponent;
