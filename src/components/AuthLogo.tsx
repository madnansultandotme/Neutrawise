import React from "react";
import neutrawiseIcon from "../assets/Neutrawise Icon.png";

export default function AuthLogo() {
  return (
    <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 16, justifyContent: "center", width: "100%", marginBottom: 12 }}>
      <img
        src={neutrawiseIcon}
        alt="Neutrawise Icon"
        style={{ width: 80, height: 100, marginBottom: 0, flexShrink: 0, filter: 'drop-shadow(0 4px 16px #82C92C33)' }}
      />
      <span
        style={{
          fontFamily: 'DM Sans, Segoe UI, Arial, sans-serif',
          fontWeight: 900,
          fontSize: 49,
          letterSpacing: 0.0,
          background: 'linear-gradient(135deg, #82C92C 0%, #4696D2 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          color: 'transparent',
          textShadow: '0 4px 20px rgba(130, 201, 44, 0.3)',
          lineHeight: 1,
          display: 'block',
        }}
      >
        Neutrawise
      </span>
    </div>
  );
}
