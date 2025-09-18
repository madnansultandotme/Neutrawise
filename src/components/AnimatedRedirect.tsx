import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

const AnimatedRedirect: React.FC<{ to: string }> = ({ to }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate(to);
    }, 1200); // 1.2s animation
    return () => clearTimeout(timer);
  }, [navigate, to]);

  return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "#f8fafc" }}>
      <div className="fade-in-scale" style={{ textAlign: "center" }}>
        <div style={{
          width: 80,
          height: 80,
          margin: "0 auto 24px auto",
          borderRadius: "50%",
          background: "linear-gradient(90deg, #82C92C 0%, #4696D2 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          animation: "spin 1.2s linear infinite"
        }}>
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
            <circle cx="20" cy="20" r="18" stroke="#fff" strokeWidth="4" opacity="0.3" />
            <path d="M20 4a16 16 0 1 1-11.31 27.31" stroke="#fff" strokeWidth="4" strokeLinecap="round"/>
          </svg>
        </div>
        <div style={{ fontSize: 22, fontWeight: 700, color: "#222", fontFamily: "DM Sans, Segoe UI, Arial, sans-serif" }}>
          Getting things ready...
        </div>
      </div>
    </div>
  );
};

export default AnimatedRedirect;
