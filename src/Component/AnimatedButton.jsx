import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const ScrollAnimation = () => {
  const boxRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      boxRef.current,
      { opacity: 0, y: 100 }, // Start state: invisible, moved down
      {
        opacity: 1,          // End state: fully visible
        y: 0,                // Moves back to original position
        duration: 1,
        scrollTrigger: {
          trigger: boxRef.current, // Start animation when this element is in view
          start: "top 80%",       // Trigger starts when the top of the element is 80% down the viewport
          end: "top 50%",         // Trigger ends when the top of the element is at 50%
          scrub: true,            // Smooth scrolling effect
        },
      }
    );
  }, []);

  return (
    <div style={{ height: "200vh", padding: "50px" }}>
      <div
        ref={boxRef}
        style={{
          width: "200px",
          height: "200px",
          backgroundColor: "#71a3c1",
          margin: "50px auto",
          borderRadius: "10px",
        }}
      ></div>
    </div>
  );
};

export default ScrollAnimation;
