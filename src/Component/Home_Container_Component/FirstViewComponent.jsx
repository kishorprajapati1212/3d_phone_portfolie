import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const FirstViewComponent = () => {
    const containerRef = useRef(null);
    const headingRef = useRef(null);
    const textRef = useRef(null);
    const glowRef = useRef(null); // Ref for the glow text

    useEffect(() => {
        const timeline = gsap.timeline();

        timeline
            .fromTo(
                headingRef.current,
                { y: -50, opacity: 0 },
                { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
            )
            .fromTo(
                textRef.current,
                { y: 50, opacity: 0 },
                { y: 0, opacity: 1, duration: 1, ease: "power3.out" },
                "-=0.5"
            )
            .fromTo(
                glowRef.current,
                { y: 10, opacity: 0 },
                { y: 0, opacity: 1, duration: 1, ease: "power3.out" },
            );
    }, []);

    return (
        <div
            ref={containerRef}
            style={{
                // marginTop: "60px",
                // top: "100px",
                width: "90vw",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start", // Align content to top
                // height: "100vh",  // Ensure full viewport height
                overflow: "hidden", // Prevent vertical scrollbar
                fontFamily: "'Montserrat', sans-serif",
                color: "white",
                textAlign: "center",
                paddingTop: "20px", // Reduced padding to bring text closer to top
            }}
        >
            <h1
                ref={headingRef}
                style={{
                    fontSize: "5rem", // Large font size for APEX 1
                    fontWeight: "900",
                    color: "#ffffff", // Pure white color for the text
                    margin: "0",
                    padding: "0",
                    lineHeight: "1.2",
                }}
            >
                APEX 1 GLOW
            </h1>

            <p
                ref={textRef}
                style={{
                    fontSize: "1.9rem", // Smaller font size for the description
                    fontWeight: "300",
                    marginTop: "0px",
                    lineHeight: "1.8",
                    maxWidth: "600px",
                    // padding: "20px",
                    fontFamily: "'Playfair Display', serif",
                }}
            >
                Built for Apex Intelligence
            </p>

            {/* Glow Text in the Center, Adjusted to Move Up */}
            <h2
                ref={glowRef}
                style={{
                    fontSize: "10rem", // Large font size for the glow effect text
                    fontWeight: "900",
                    color: "white", // White color for the text
                    marginTop: "50px", // Move glow text upwards by reducing marginTop
                    position: "relative",
                    top: "0px", // Additional fine-tuning for vertical position
                    textShadow: "0 0 30px rgba(255, 140, 0, 1), 0 0 80px rgba(255, 140, 0, 1), 0 0 150px rgba(255, 140, 0, 0.8), 0 0 300px rgba(255, 255, 255, 0.5), 0 0 500px rgba(255, 255, 255, 0.2), 0 0 1000px rgba(255, 255, 255, 0.1)", // More intense and further-reaching glow
                }}
            >
                GLOW
            </h2>
        </div>
    );
};

export default FirstViewComponent;
