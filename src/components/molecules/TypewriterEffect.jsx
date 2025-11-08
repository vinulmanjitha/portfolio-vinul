import React, { useState, useEffect } from "react";

const TypewriterEffect = ({ text, speed }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (index < text.length) {
        setDisplayedText((prev) => prev + text[index]);
        setIndex(index + 1);
      } else {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [index, text, speed]);

  return (
    <span
      className="typewriter-text"
      style={{
        fontSize: "2rem", 
        fontWeight: "600",
        color: "#ffffff",
        textShadow: "2px 2px 10px rgba(0,0,0,0.6)",
        fontFamily: "Courier New",
        letterSpacing: "2px",
      }}
    >
      {displayedText}
    </span>
  );
};

export default TypewriterEffect;
