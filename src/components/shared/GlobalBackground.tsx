import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const DISABLED_ROUTES = ["/work", "/services"];

const GlobalBackground = () => {
  const location = useLocation();
  const [hiddenByDarkSection, setHiddenByDarkSection] = useState(false);

  const disabledForRoute = DISABLED_ROUTES.includes(location.pathname);

  useEffect(() => {
    if (disabledForRoute) return;
    let raf: number | null = null;

    const update = () => {
      raf = null;
      const probeY = window.innerHeight * 0.35;
      const el = document.elementFromPoint(window.innerWidth / 2, probeY);
      const darkSection = el?.closest('[data-bg="dark"]');
      setHiddenByDarkSection(!!darkSection);
    };

    const onScroll = () => {
      if (raf === null) raf = requestAnimationFrame(update);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    update();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf !== null) cancelAnimationFrame(raf);
    };
  }, [disabledForRoute]);

  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden transition-opacity duration-500 ease-out"
      style={{ zIndex: 0, opacity: disabledForRoute || hiddenByDarkSection ? 0 : 1 }}
    >
      <div
        className="aurora-blob"
        style={{
          top: "-30%",
          right: "-20%",
          width: "65vw",
          height: "65vw",
          maxWidth: "900px",
          maxHeight: "900px",
          background: "radial-gradient(circle at 50% 50%, hsl(var(--accent) / 0.1), transparent 65%)",
        }}
      />
      <svg
        viewBox="0 0 640 640"
        preserveAspectRatio="xMidYMid meet"
        style={{
          position: "absolute",
          top: "-22%",
          right: "-20%",
          width: "min(128vh, 1440px)",
          height: "min(128vh, 1440px)",
          overflow: "visible",
          filter: "blur(56px)",
          opacity: 0.35,
          pointerEvents: "none",
          animation: "roam 52s ease-in-out infinite",
        }}
      >
        <text
          x="320"
          y="332"
          textAnchor="middle"
          dominantBaseline="central"
          fontSize="360"
          fill="hsl(var(--accent))"
          style={{ transformBox: "fill-box", transformOrigin: "center", animation: "bubble 32s ease-in-out infinite" }}
        >
          &#10022;
        </text>
        <text
          x="452"
          y="212"
          textAnchor="middle"
          dominantBaseline="central"
          fontSize="150"
          fill="hsl(var(--accent))"
          style={{ transformBox: "fill-box", transformOrigin: "center", animation: "bubble 32s ease-in-out infinite", animationDelay: "-2.4s" }}
        >
          &#10022;
        </text>
        <text
          x="214"
          y="452"
          textAnchor="middle"
          dominantBaseline="central"
          fontSize="112"
          fill="hsl(var(--accent))"
          style={{ transformBox: "fill-box", transformOrigin: "center", animation: "bubble 32s ease-in-out infinite", animationDelay: "-3.6s" }}
        >
          &#10022;
        </text>
        <path
          d="M200,150 L200,514 L380,514 L480,332 L380,150 Z"
          pathLength={1000}
          fill="none"
          stroke="hsl(var(--accent))"
          strokeWidth={54}
          strokeLinejoin="miter"
          strokeLinecap="round"
          style={{ strokeDasharray: 1000, strokeDashoffset: 1000, animation: "drawD 32s ease-in-out infinite" }}
        />
        <path
          d="M452,192 L214,192 L214,306 L426,342 L426,472 L198,472"
          pathLength={1000}
          fill="none"
          stroke="hsl(var(--accent))"
          strokeWidth={54}
          strokeLinejoin="miter"
          strokeLinecap="round"
          style={{ strokeDasharray: 1000, strokeDashoffset: 1000, animation: "drawS 32s ease-in-out infinite" }}
        />
      </svg>
      <div className="grain-overlay" />
    </div>
  );
};

export default GlobalBackground;
