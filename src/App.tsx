import React, { useEffect, useState } from "react";

const stack = [
  { name: "React", version: "18", color: "#61dafb", desc: "UI library" },
  { name: "TypeScript", version: "5", color: "#3178c6", desc: "Type safety" },
  { name: "Webpack", version: "5", color: "#8dd6f9", desc: "Bundler" },
  { name: "Babel", version: "7", color: "#f9dc3e", desc: "Transpiler" },
];

const steps = [
  { cmd: "git clone https://github.com/gauravgorade/setup-react-with-webpack-and-babel.git", label: "Clone" },
  { cmd: "cd setup-react-with-webpack-and-babel", label: "Navigate" },
  { cmd: "npm install", label: "Install" },
  { cmd: "npm start", label: "Start" },
];

function App() {
  const [copied, setCopied] = useState<number | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  const copy = (text: string, i: number) => {
    navigator.clipboard.writeText(text);
    setCopied(i);
    setTimeout(() => setCopied(null), 1800);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0d0d0d",
        color: "#e8e8e8",
        fontFamily: "'IBM Plex Mono', monospace",
        padding: "0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "fixed",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          position: "fixed",
          top: -120,
          left: -120,
          width: 400,
          height: 400,
          background: "radial-gradient(circle, rgba(97,218,251,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: 760,
          margin: "0 auto",
          padding: "5rem 2rem 6rem",
          position: "relative",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(16px)",
          transition: "opacity 0.5s ease, transform 0.5s ease",
        }}
      >
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            background: "rgba(97,218,251,0.08)",
            border: "1px solid rgba(97,218,251,0.2)",
            borderRadius: 4,
            padding: "4px 12px",
            fontSize: 11,
            color: "#61dafb",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            marginBottom: "2rem",
          }}
        >
          <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#61dafb", display: "inline-block" }} />
          Starter Template
        </div>

        <h1
          style={{
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: "clamp(2rem, 5vw, 3.2rem)",
            fontWeight: 700,
            lineHeight: 1.15,
            margin: "0 0 1rem",
            color: "#ffffff",
            letterSpacing: "-0.02em",
          }}
        >
          React + Webpack
          <br />
          <span style={{ color: "#61dafb" }}>+ Babel</span>
        </h1>

        <p
          style={{
            fontSize: 15,
            color: "#888",
            lineHeight: 1.7,
            margin: "0 0 3.5rem",
            maxWidth: 480,
          }}
        >
          A minimal, production-ready scaffold. No Create React App. No magic. Just the tools wired together from scratch.
        </p>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 10,
            marginBottom: "3.5rem",
          }}
        >
          {stack.map((s) => (
            <div
              key={s.name}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                background: "#161616",
                border: "1px solid #2a2a2a",
                borderRadius: 6,
                padding: "8px 14px",
                fontSize: 13,
                transition: "border-color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = s.color + "55")}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = "#2a2a2a")}
            >
              <span style={{ width: 8, height: 8, borderRadius: "50%", background: s.color, flexShrink: 0 }} />
              <span style={{ color: "#ccc", fontWeight: 700 }}>{s.name}</span>
              <span style={{ color: "#555", fontSize: 11 }}>v{s.version}</span>
              <span style={{ color: "#555", fontSize: 11 }}>· {s.desc}</span>
            </div>
          ))}
        </div>

        <div style={{ borderTop: "1px solid #1f1f1f", marginBottom: "3rem" }} />

        <p style={{ fontSize: 11, color: "#555", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "1.2rem" }}>
          Getting Started
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {steps.map((s, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "center",
                background: "#111",
                border: "1px solid #1f1f1f",
                borderRadius: 8,
                padding: "12px 16px",
                gap: 12,
                transition: "border-color 0.2s",
                cursor: "default",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#333")}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = "#1f1f1f")}
            >
              <span
                style={{
                  fontSize: 10,
                  color: "#444",
                  minWidth: 20,
                  textAlign: "right",
                  userSelect: "none",
                }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <span style={{ color: "#61dafb", userSelect: "none", fontSize: 14 }}>$</span>
              <span style={{ flex: 1, fontSize: 13, color: "#ccc", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                {s.cmd}
              </span>
              <button
                onClick={() => copy(s.cmd, i)}
                style={{
                  background: "none",
                  border: "1px solid #2a2a2a",
                  borderRadius: 4,
                  padding: "3px 10px",
                  fontSize: 11,
                  color: copied === i ? "#61dafb" : "#555",
                  cursor: "pointer",
                  fontFamily: "inherit",
                  transition: "all 0.15s",
                  flexShrink: 0,
                }}
              >
                {copied === i ? "copied!" : "copy"}
              </button>
            </div>
          ))}
        </div>

        <div style={{ borderTop: "1px solid #1f1f1f", margin: "3rem 0" }} />

        <p style={{ fontSize: 11, color: "#555", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "1.2rem" }}>Scripts</p>

        <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
          {[
            { cmd: "npm start", desc: "Dev server at :8080", accent: "#61dafb" },
            { cmd: "npm run build", desc: "Production build → /dist", accent: "#a8ff78" },
          ].map((s, i) => (
            <div
              key={i}
              style={{
                flex: "1 1 200px",
                background: "#111",
                border: "1px solid #1f1f1f",
                borderRadius: 8,
                padding: "1rem 1.2rem",
              }}
            >
              <div style={{ fontSize: 14, color: s.accent, fontWeight: 700, marginBottom: 6 }}>{s.cmd}</div>
              <div style={{ fontSize: 12, color: "#555" }}>{s.desc}</div>
            </div>
          ))}
        </div>

        <div
          style={{
            marginTop: "4rem",
            fontSize: 12,
            color: "#333",
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 8,
          }}
        >
          <span>ISC License</span>
          <span>github.com/gauravgorade</span>
        </div>
      </div>
    </div>
  );
}

export default App;
