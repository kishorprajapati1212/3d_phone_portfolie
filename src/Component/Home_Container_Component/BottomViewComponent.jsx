import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import EmojiAnimations, { MusicEmojiAnimation } from "./EmojiAnimations";

gsap.registerPlugin(ScrollTrigger);

const BottomViewComponent = () => {
  const cameras = [
    { id: 1, x: "49%", y: "59%", boxX: "40%", boxY: "34%", color: "green", text: "40 MP" },
    { id: 2, x: "55%", y: "60%", boxX: "61%", boxY: "30%", color: "blue", text: "108 MP" },
  ];

  // Refs to track each camera dot, box, and line
  const dotRefs = useRef([]);
  const boxRefs = useRef([]);
  const lineRefs = useRef([]);  // Ref for the lines
  const triggerRef = useRef(null); // Reference to the red bottom section

  useEffect(() => {
    // GSAP Animations for dots and boxes when the red section is detected
    if (triggerRef.current) {
      // GSAP Animations for dots
      gsap.fromTo(
        dotRefs.current,
        { scale: 0, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: triggerRef.current, // Bottom section as trigger
            start: "top 80%", // Trigger the animation when the bottom section is in view
            end: "top 60%", // When the bottom section is further down
            scrub: true, // Smooth animation tied to scroll
            toggleActions: "play none none none", // Play the animation once
          },
        }
      );

      // GSAP Animations for boxes
      gsap.fromTo(
        boxRefs.current,
        { scale: 0, opacity: 0, y: 50 },
        {
          scale: 1,
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: triggerRef.current, // Bottom section as trigger
            start: "top 80%", // Trigger the animation when the bottom section is in view
            end: "top 60%", // When the bottom section is further down
            scrub: true, // Smooth animation tied to scroll
            toggleActions: "play none none none", // Play the animation once
          },
        }
      );

      // GSAP Animations for lines (animate width from 0 to full)
      lineRefs.current.forEach((line, index) => {
        gsap.fromTo(
          line,
          { opacity:0 }, // Start with no width (invisible)
          {
            scaleX: 1, // Animate to full width
            opacity:1,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: triggerRef.current, // Bottom section as trigger
              start: "top 80%", // Trigger the animation when the bottom section is in view
              end: "top 60%", // When the bottom section is further down
              scrub: true, // Smooth animation tied to scroll
              toggleActions: "play none none none", // Play the animation once
            },
          }
        );
      });
    }
  }, []);

  return (
    <div
      style={{
        position: "relative",
        width: "98vw",
        height: "180vh", // Extend height to allow scrolling
        backgroundColor: "transparent",
      }}
    >
      <MusicEmojiAnimation />
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
              ref={(el) => (lineRefs.current[index] = el)} // Attach ref to each line
              x1={camera.x}
              y1={camera.y}
              x2={camera.boxX}
              y2={camera.boxY}
              stroke="#ffffff"
              strokeWidth="2"
              style={{
                transformOrigin: "left", // Make the line expand from the left
              }}
            />
          </svg>

          {/* Corresponding Box for Each Camera */}
          <div
            ref={(el) => (boxRefs.current[index] = el)} // Attach ref to each box
            style={{
              position: "absolute",
              top: camera.boxY,
              left: camera.boxX,
              width: "100px",
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
            //   textShadow: "2px 2px 5px rgba(0, 0, 0, 0.3)", // Subtle shadow for text
              letterSpacing: "1px", // Slight letter spacing for better readability
              lineHeight: "0.2", // Adjust line height for better text spacing
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)", // Soft shadow for box
            }}
          >
            {camera.text}
          </div>
        </React.Fragment>
      ))}

      {/* Bottom section with 10vh height and red background */}
      <div
        ref={triggerRef} // Attach ref to the bottom section
        style={{
          position: "relative",
          bottom: 150,
          width: "100%",
          height: "10vh", // 10vh height for the bottom section
        //   backgroundColor: "red", // Red background
        }}
      />
    </div>
  );
};

export default BottomViewComponent;
