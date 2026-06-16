import { COLORS, FONTS } from "../constants/theme";

// Injected as a <style> tag string in App.jsx
export const globalCSS = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Montserrat:wght@300;400;500;600&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  html, body, #root {
    width: 100%;
    min-height: 100vh;
    margin: 0;
    padding: 0;
    background: ${COLORS.deepBurgundy};
  }

  html { scroll-behavior: smooth; }
  ::selection { background: rgba(200,164,93,0.3); }
  ::-webkit-scrollbar { width: 4px; }
  ::-webkit-scrollbar-track { background: ${COLORS.deepBurgundy}; }
  ::-webkit-scrollbar-thumb { background: ${COLORS.matteGold}; border-radius: 2px; }

  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(30px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes fadeIn {
    from { opacity: 0; }
    to   { opacity: 1; }
  }
  @keyframes shimmer {
    0%   { opacity: 0.4; }
    50%  { opacity: 1; }
    100% { opacity: 0.4; }
  }

  .hero-title   { animation: fadeUp  1s ease 0.3s both; }
  .hero-divider { animation: fadeIn  1s ease 0.8s both; }
  .hero-sub     { animation: fadeUp  1s ease 0.9s both; }
  .hero-cta     { animation: fadeUp  1s ease 1.2s both; }

  .nav-link {
    font-family: ${FONTS.body};
    font-size: 11px;
    letter-spacing: 2.5px;
    text-transform: uppercase;
    color: rgba(247,243,238,0.92);
    text-decoration: none;
    cursor: pointer;
    transition: color 0.2s;
    background: none;
    border: none;
    padding: 0;
  }
  .nav-link:hover { color: ${COLORS.champagneGold}; }

  .cta-btn {
    font-family: ${FONTS.body};
    font-size: 11px;
    letter-spacing: 2.5px;
    text-transform: uppercase;
    background: transparent;
    border: 1px solid ${COLORS.matteGold};
    color: ${COLORS.matteGold};
    padding: 14px 36px;
    cursor: pointer;
    transition: all 0.3s ease;
    border-radius: 1px;
  }
  .cta-btn:hover {
    background: ${COLORS.matteGold};
    color: ${COLORS.deepBurgundy};
  }
  .cta-btn-solid {
    background: ${COLORS.matteGold};
    color: ${COLORS.deepBurgundy};
  }
  .cta-btn-solid:hover {
    background: ${COLORS.champagneGold};
    border-color: ${COLORS.champagneGold};
  }

  .why-item:hover .why-icon { color: ${COLORS.champagneGold} !important; }

  @media (max-width: 768px) {
    .services-grid       { grid-template-columns: 1fr !important; }
    .why-grid            { grid-template-columns: 1fr !important; }
    .nav-links           { display: none !important; }
    .mobile-menu-btn     { display: block !important; }
    .hero-eyebrow        { font-size: 10px !important; }
  }
`;

// ── Inline style objects ──────────────────────────────────────────────────────

export const layout = {
  page: {
    background: COLORS.deepBurgundy,
    minHeight: "100vh",
    width: "100%",
    overflowX: "hidden",
  },
};

export const navStyles = {
  nav: (scrolled) => ({
    position: "fixed",
    top: 0, left: 0, right: 0,
    zIndex: 100,
    padding: "0 40px",
    height: "72px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    background: scrolled ? "rgba(91,16,32,0.97)" : "transparent",
    borderBottom: scrolled ? `1px solid rgba(200,164,93,0.15)` : "1px solid transparent",
    backdropFilter: scrolled ? "blur(8px)" : "none",
    transition: "all 0.4s ease",
  }),
  mobileMenu: {
    position: "fixed", top: "72px", left: 0, right: 0,
    background: "rgba(91,16,32,0.98)",
    zIndex: 99,
    padding: "24px 40px",
    borderBottom: `1px solid rgba(200,164,93,0.2)`,
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
  mobileBtn: {
    display: "none",
    background: "none",
    border: "none",
    color: COLORS.matteGold,
    fontSize: "22px",
    cursor: "pointer",
  },
};

export const heroStyles = {
  section: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "120px 40px 80px",
    textAlign: "center",
    position: "relative",
    overflow: "hidden",
  },
  bgGradient: {
    position: "absolute", inset: 0,
    backgroundImage: `radial-gradient(circle at 20% 50%, rgba(109,15,31,0.6) 0%, transparent 60%),
                      radial-gradient(circle at 80% 20%, rgba(200,164,93,0.07) 0%, transparent 50%)`,
    pointerEvents: "none",
  },
  bgLogo: {
    position: "absolute",
    bottom: "-60px", right: "-60px",
    opacity: 0.12,
    pointerEvents: "none",
  },
  eyebrow: {
    fontFamily: FONTS.body,
    fontSize: "11px",
    letterSpacing: "4px",
    color: COLORS.matteGold,
    textTransform: "uppercase",
    marginBottom: "32px",
    opacity: 0,
    animation: "fadeIn 1s ease 0.1s both",
  },
  subtitle: {
    fontFamily: FONTS.heading,
    fontSize: "clamp(16px, 2.5vw, 22px)",
    fontStyle: "italic",
    color: "rgba(247,243,238,0.92)",
    lineHeight: 1.7,
    fontWeight: 400,
  },
  scrollIndicator: {
    position: "absolute",
    bottom: "40px",
    left: "50%",
    transform: "translateX(-50%)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "8px",
    opacity: 0.4,
    animation: "shimmer 2.5s ease infinite",
  },
  scrollLabel: {
    fontFamily: FONTS.body,
    fontSize: "9px",
    letterSpacing: "3px",
    color: COLORS.warmIvory,
    textTransform: "uppercase",
  },
};

export const sectionStyles = {
  sectionLabel: {
    fontFamily: FONTS.body,
    fontSize: "10px",
    letterSpacing: "4px",
    color: COLORS.matteGold,
    textTransform: "uppercase",
    marginBottom: "20px",
  },
  sectionHeading: {
    fontFamily: FONTS.heading,
    fontSize: "clamp(32px, 5vw, 48px)",
    color: COLORS.warmIvory,
    fontWeight: 400,
    marginBottom: "24px",
  },
  sectionIntro: {
    fontFamily: FONTS.body,
    fontSize: "14px",
    lineHeight: 1.8,
    color: "rgba(247,243,238,0.88)",
    maxWidth: "580px",
    margin: "24px auto 0",
  },
};

export const serviceCardStyles = {
  card: (open, visible, delay) => ({
    background: open ? COLORS.richBurgundy : "transparent",
    border: `1px solid rgba(200,164,93,${open ? 0.5 : 0.25})`,
    borderRadius: "2px",
    padding: "28px 32px",
    cursor: "pointer",
    transition: "all 0.4s ease",
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0)" : "translateY(20px)",
    transitionDelay: `${delay}s`,
  }),
  label: {
    fontFamily: FONTS.body,
    fontSize: "10px",
    letterSpacing: "3px",
    color: COLORS.matteGold,
    textTransform: "uppercase",
    marginBottom: "8px",
    opacity: 0.8,
  },
  title: {
    fontFamily: FONTS.heading,
    fontSize: "clamp(17px, 2vw, 20px)",
    color: COLORS.warmIvory,
    fontWeight: 500,
    lineHeight: 1.3,
    margin: 0,
  },
  toggle: (open) => ({
    color: COLORS.matteGold,
    fontSize: "20px",
    lineHeight: 1,
    flexShrink: 0,
    marginTop: "18px",
    transition: "transform 0.3s ease",
    transform: open ? "rotate(45deg)" : "rotate(0deg)",
  }),
  subtitle: {
    fontFamily: FONTS.heading,
    fontSize: "13px",
    fontStyle: "italic",
    color: COLORS.champagneGold,
    marginBottom: "14px",
    opacity: 0.9,
  },
  description: {
    fontFamily: FONTS.body,
    fontSize: "14px",
    lineHeight: 1.8,
    color: "rgba(247,243,238,0.9)",
    marginBottom: "20px",
  },
  bulletText: {
    fontFamily: FONTS.body,
    fontSize: "13px",
    color: "rgba(247,243,238,0.88)",
    lineHeight: 1.6,
    flex: 1,
    textAlign: "left",
  },
};

export const whyStyles = {
  card: {
    background: "rgba(109,15,31,0.3)",
    border: "1px solid rgba(200,164,93,0.15)",
    padding: "36px 32px",
    transition: "background 0.3s",
  },
  icon: {
    fontFamily: "serif",
    fontSize: "22px",
    color: COLORS.matteGold,
    marginBottom: "20px",
    transition: "color 0.2s",
  },
  heading: {
    fontFamily: FONTS.heading,
    fontSize: "18px",
    color: COLORS.warmIvory,
    fontWeight: 500,
    marginBottom: "14px",
  },
  body: {
    fontFamily: FONTS.body,
    fontSize: "14px",
    lineHeight: 1.8,
    color: "rgba(247,243,238,0.88)",
  },
  closingBox: {
    border: `1px solid rgba(200,164,93,0.25)`,
    padding: "48px",
    textAlign: "center",
  },
  closingText: {
    fontFamily: FONTS.body,
    fontSize: "13px",
    lineHeight: 2,
    color: "rgba(247,243,238,0.88)",
    maxWidth: "740px",
    margin: "0 auto",
  },
};

export const contactStyles = {
  section: {
    padding: "100px 40px",
    background: "rgba(0,0,0,0.2)",
  },
  intro: {
    fontFamily: FONTS.body,
    fontSize: "14px",
    lineHeight: 1.9,
    color: "rgba(247,243,238,0.88)",
    margin: "28px auto 44px",
  },
  label: {
    display: "block",
    fontFamily: FONTS.body,
    fontSize: "10px",
    letterSpacing: "2px",
    color: COLORS.matteGold,
    textTransform: "uppercase",
    marginBottom: "8px",
  },
  input: {
    width: "100%",
    padding: "14px 18px",
    background: "rgba(247,243,238,0.05)",
    border: "1px solid rgba(200,164,93,0.25)",
    borderRadius: "1px",
    color: COLORS.warmIvory,
    fontFamily: FONTS.body,
    fontSize: "13px",
    outline: "none",
    transition: "border-color 0.2s",
  },
  textarea: {
    width: "100%",
    padding: "14px 18px",
    background: "rgba(247,243,238,0.05)",
    border: "1px solid rgba(200,164,93,0.25)",
    borderRadius: "1px",
    color: COLORS.warmIvory,
    fontFamily: FONTS.body,
    fontSize: "13px",
    outline: "none",
    resize: "vertical",
    transition: "border-color 0.2s",
  },
};

export const footerStyles = {
  footer: {
    borderTop: `1px solid rgba(200,164,93,0.15)`,
    padding: "40px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: "20px",
  },
  tagline: {
    fontFamily: FONTS.body,
    fontSize: "11px",
    letterSpacing: "1px",
    color: "rgba(247,243,238,0.3)",
  },
  copy: {
    fontFamily: FONTS.body,
    fontSize: "11px",
    color: "rgba(247,243,238,0.25)",
  },
};

export const goldBandStyles = {
  band: {
    background: `linear-gradient(135deg, ${COLORS.matteGold} 0%, ${COLORS.champagneGold} 50%, ${COLORS.matteGold} 100%)`,
    padding: "60px 40px",
    textAlign: "center",
  },
  quote: {
    fontFamily: FONTS.heading,
    fontSize: "clamp(20px, 3.5vw, 32px)",
    fontStyle: "italic",
    color: COLORS.deepBurgundy,
    fontWeight: 400,
    maxWidth: "700px",
    margin: "0 auto",
    lineHeight: 1.6,
  },
};
