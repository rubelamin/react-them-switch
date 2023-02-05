import { useState } from "react";
import styles from "../assets/css/Logo.module.css";

export default function Logo() {
  const [glassColor, setGlassColor] = useState("green");

  const pickColorRandomly = () => {
    const colors = ["red", "black", "yellow", "blue", "orange"];
    const color = colors[Math.floor(Math.random() * colors.length)];

    return color;
  };
  return (
    <div className={styles.logo}>
      <div className={styles.hair}>
        <svg viewBox="0 0 150 150" xmlns="http://www.w3.org/2000/svg">
          <g fill="white" stroke={glassColor} stroke-width="5">
            <circle cx="40" cy="40" r="25" />
            <circle cx="116" cy="40" r="25" />
            <line x1="120" y1="15" x2="24" y2="20" stroke={glassColor} />
          </g>
        </svg>
      </div>
      <div className={styles.glasses}>
        <p>glasses</p>
      </div>
      <div className={styles.play}>
        <button
          type="button"
          onClick={() => setGlassColor(pickColorRandomly())}
        >
          Colorize Glass
        </button>
        <button type="button" onClick={() => setGlassColor("green")}>
          Reset Glass
        </button>
      </div>
    </div>
  );
}
