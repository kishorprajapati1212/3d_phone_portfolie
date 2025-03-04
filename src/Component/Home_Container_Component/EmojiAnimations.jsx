import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const EmojiAnimations = () => {
  const emojiContainerRef = useRef(); // Reference for emoji container

  const items = [
    { icon: "/icons/p1.png", top: "20%", left: "10%", size: 50 },
    { icon: "/icons/p2.png", top: "50%", left: "20%", size: 60 },
    { icon: "/icons/p3.png", top: "30%", left: "70%", size: 55 },
    { icon: "/icons/p4.png", top: "60%", left: "80%", size: 50 },
    { icon: "/icons/p5.png", top: "10%", left: "40%", size: 55 },
    { icon: "/icons/p6.png", top: "40%", left: "30%", size: 58 }, 
    { icon: "/icons/p7.png", top: "70%", left: "60%", size: 55 }, 
    { icon: "/icons/p8.png", top: "15%", left: "85%", size: 50 },
  ];

  useEffect(() => {
    // Select all emoji elements within the container
    const emojiElements = emojiContainerRef.current.querySelectorAll(".emoji");

    emojiElements.forEach((emoji) => {
      const randomX = Math.random() * 600 - 300; // Random X direction (left and right)
      const randomY = Math.random() * 300 - 150; // Random Y direction (up and down)
      const randomRotation = Math.random() * 360; // Random rotation for added visual effect
      const randomDuration = Math.random() * 4 + 3; // Random animation duration

      gsap.fromTo(
        emoji,
        { x: 0, y: 0, opacity: 1, rotation: 0 },
        {
          x: randomX,
          y: randomY,
          opacity: 1,
          rotation: randomRotation,
          duration: randomDuration,
          ease: "power1.out", // Smoother ease
          scrollTrigger: {
            trigger: emoji,
            start: "top bottom", // Animation starts when emoji enters viewport
            end: "top top", // Animation ends when emoji exits viewport
            scrub: true,
            markers: false,
          },
        }
      );
    });
  }, []);

  return (
    <div
      ref={emojiContainerRef}
      style={{
        position: "relative",
        height: "100vh", // Increased height for more scroll area
        overflow: "hidden",
        width:"95vw",
        marginBottom:"100px"
      }}
    >
      {items.map((item, index) => (
        <img
          key={index}
          className="emoji"
          src={`${item.icon}`} // Replace with the correct path
          alt={item.icon}
          style={{
            position: "absolute",
            width: `100px`, // Use size from item
            height: `100px`, // Same height as width
            top: item.top, // Static vertical position
            left: item.left, // Static horizontal position
            objectFit: "contain", // Ensures the icon scales properly
            pointerEvents: "none", // Prevent interaction with emojis
            filter: "drop-shadow(0 0 100px rgba(255, 255, 255, 0.7))",
          }}
        />
      ))}
    </div>
  );
};

export default EmojiAnimations;

export const MusicEmojiAnimation = () =>{
  const emojiContainerRef = useRef(); // Reference for emoji container

  const items = [
    { icon: "/Music_icons/p1.png", top: "20%", left: "10%", size: 50 },
    { icon: "/Music_icons/p2.png", top: "50%", left: "20%", size: 60 },
    { icon: "/Music_icons/p3.png", top: "30%", left: "70%", size: 55 },
    { icon: "/Music_icons/p4.png", top: "60%", left: "80%", size: 50 },
  ];

  useEffect(() => {
    // Select all emoji elements within the container
    const emojiElements = emojiContainerRef.current.querySelectorAll(".emoji");

    emojiElements.forEach((emoji) => {
      const randomX = Math.random() * 600 - 300; // Random X direction (left and right)
      const randomY = Math.random() * 300 - 150; // Random Y direction (up and down)
      const randomRotation = Math.random() * 360; // Random rotation for added visual effect
      const randomDuration = Math.random() * 4 + 3; // Random animation duration

      gsap.fromTo(
        emoji,
        { x: 0, y: 0, opacity: 1, rotation: 0 },
        {
          x: randomX,
          y: randomY,
          opacity: 1,
          rotation: randomRotation,
          duration: randomDuration,
          ease: "power1.out", // Smoother ease
          scrollTrigger: {
            trigger: emoji,
            start: "top bottom", // Animation starts when emoji enters viewport
            end: "top top", // Animation ends when emoji exits viewport
            scrub: true,
            markers: false,
          },
        }
      );
    });
  }, []);

  return (
    <div
      ref={emojiContainerRef}
      style={{
        position: "relative",
        height: "100vh", // Increased height for more scroll area
        overflow: "hidden",
        width:"95vw",
        marginBottom:"100px"
      }}
    >
      {items.map((item, index) => (
        <img
          key={index}
          className="emoji"
          src={`${item.icon}`} // Replace with the correct path
          alt={item.icon}
          style={{
            position: "absolute",
            width: `100px`, // Use size from item
            height: `100px`, // Same height as width
            top: item.top, // Static vertical position
            left: item.left, // Static horizontal position
            objectFit: "contain", // Ensures the icon scales properly
            pointerEvents: "none", // Prevent interaction with emojis
            filter: "drop-shadow(0 0 100px rgba(255, 255, 255, 0.7))",
          }}
        />
      ))}
    </div>
  );
}

