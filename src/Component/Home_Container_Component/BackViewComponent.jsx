import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const BackViewComponent = () => {
  // Refs for the mobile front box and text information
  const mobileBoxRef = useRef(null);
  const mobileTextRef = useRef(null);

  useEffect(() => {
    // GSAP animation for the mobile front box sliding in from the right
    gsap.fromTo(
      mobileBoxRef.current,
      { opacity: 0, x: 100 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power2.out",
      }
    );

    // GSAP animation for the mobile information text
    gsap.fromTo(
      mobileTextRef.current,
      { opacity: 0, x: 50 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        delay: 0.5, // Delayed start for the text
        ease: "power2.out",
      }
    );
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        height: "100vh", // Full screen height
        backgroundColor: "#000", // Black background
        padding: "20px",
      }}
    >
      {/* Mobile Information Box on the Right */}
      <div
        ref={mobileTextRef}
        style={{
          backgroundColor: "#fff",
          color: "#333", // Slightly darker text color for better readability
          borderRadius: "12px",
          padding: "30px",
          marginLeft: "20px", // Space between the mobile and the information box
          marginRight: "200px", // Adding right margin to create space from the right edge
          width: "350px",
          boxShadow: "0px 10px 40px rgba(0, 0, 0, 0.1)",
          fontFamily: "'Roboto', sans-serif",
        }}
      >
        <h2
          style={{
            margin: "0",
            fontSize: "1.8rem",
            fontWeight: "700",
            color: "#4CAF50", // Green color for title
            letterSpacing: "1px", // Slight letter spacing for better look
          }}
        >
          APEX 1
        </h2>
        <p
          style={{
            marginTop: "12px",
            fontSize: "1rem",
            lineHeight: "1.6",
            fontWeight: "400",
            color: "#555", // Dark gray color for better readability
          }}
        >
          The APEX 1 features a 6.5-inch AMOLED display with a high
          refresh rate. Powered by a fast processor and 128GB of RAM, it delivers
          excellent performance.
        </p>
        <div style={{ marginTop: "25px" }}>
          <strong
            style={{
              fontSize: "1.2rem",
              fontWeight: "600", // Bold font weight for emphasis
              color: "#222", // Darker color for emphasis
            }}
          >
            Specifications:
          </strong>
          <ul
            style={{
              paddingLeft: "20px",
              listStyleType: "disc",
              marginTop: "10px",
              fontSize: "1rem",
              fontWeight: "400",
              color: "#555", // Keep the list items with consistent font style
            }}
          >
            <li>6.5-inch AMOLED Display</li>
            <li>108 MP Front Camera</li>
            <li>10000mAh Battery</li>
            <li>Fast Charging (300W)</li>
            <li>Apexa 1 Processor</li>
            <li>128GB RAM</li>
            <li>1TB ROM</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BackViewComponent;
