import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Contactus = () => {
  // Refs for the text and form
  const contactTextRef = useRef(null);
  const formRef = useRef(null);

  useEffect(() => {
    // GSAP animation for the "Contact Me" heading
    gsap.fromTo(
      contactTextRef.current,
      { opacity: 0, y: -50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power2.out",
      }
    );

    // GSAP animation for the form appearing after the heading
    gsap.fromTo(
      formRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        delay: 0.5,
        ease: "power2.out",
      }
    );
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh", // Full screen height
        // backgroundColor: "#000", // Black background
        color: "#fff", // White text color for contrast
        padding: "20px",
      }}
    >
      {/* Contact "Me" Text */}
      <h1
        ref={contactTextRef}
        style={{
          fontSize: "3rem",
          fontWeight: "700",
          letterSpacing: "2px",
          textTransform: "uppercase",
          textAlign: "center",
          marginBottom: "20px",
          color: "#FF5733", // A bright color to make the title pop
        }}
      >
        Contact Me
      </h1>

      {/* Contact Form */}
      <div
        ref={formRef}
        style={{
          backgroundColor: "#222",
          padding: "30px",
          borderRadius: "8px",
          width: "80%",
          maxWidth: "500px",
          boxShadow: "0 10px 30px rgba(0, 0, 0, 0.5)",
        }}
      >
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <input
            type="text"
            placeholder="Your Name"
            style={{
              padding: "10px",
              border: "none",
              borderRadius: "5px",
              backgroundColor: "#333",
              color: "#fff",
              fontSize: "1rem",
              outline: "none",
              transition: "0.3s",
            }}
          />
          <input
            type="email"
            placeholder="Your Email"
            style={{
              padding: "10px",
              border: "none",
              borderRadius: "5px",
              backgroundColor: "#333",
              color: "#fff",
              fontSize: "1rem",
              outline: "none",
              transition: "0.3s",
            }}
          />
          <textarea
            placeholder="Your Message"
            rows="5"
            style={{
              padding: "10px",
              border: "none",
              borderRadius: "5px",
              backgroundColor: "#333",
              color: "#fff",
              fontSize: "1rem",
              outline: "none",
              resize: "none",
              transition: "0.3s",
            }}
          />
          <button
            type="submit"
            style={{
              padding: "12px",
              border: "none",
              borderRadius: "5px",
              backgroundColor: "#FF5733", // Matching button color
              color: "#fff",
              fontSize: "1rem",
              cursor: "pointer",
              transition: "0.3s",
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#C70039")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#FF5733")}
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contactus;
