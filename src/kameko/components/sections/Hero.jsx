import { COLORS } from "../../constants/theme";
import { heroStyles } from "../../styles/styles";
import GoldDivider from "../GoldDivider";
import logoVertical from "../../assets/logo-vertical.png";
import logoBg from "../../assets/logo-background.png";

export default function Hero({ scrollTo }) {
  return (
    <section id="hero" style={heroStyles.section}>
      {/* Background gradient */}
      <div style={heroStyles.bgGradient} />

      {/* Watermark logo */}
      <div style={heroStyles.bgLogo}>
        <img src={logoBg} alt="" style={{ width: "420px", display: "block" }} />
      </div>

      <div style={{ position: "relative", maxWidth: "800px" }}>
        {/* Eyebrow */}
        <p className="hero-eyebrow" style={heroStyles.eyebrow}>
          Corporate Real Estate Consultancy
        </p>

        {/* Vertical logo */}
        <div className="hero-title" style={{ marginBottom: "32px" }}>
          <img src={logoVertical} alt="Kameko" style={{ height: "180px", display: "block", margin: "0 auto" }} />
        </div>

        {/* Divider */}
        <div className="hero-divider" style={{ marginBottom: "32px" }}>
          <GoldDivider />
        </div>

        {/* Subtitle lines */}
        <p className="hero-sub" style={{ ...heroStyles.subtitle, marginBottom: "12px" }}>
          Strategic property consultancy solutions that align real estate decisions
        </p>
        <p style={{
          ...heroStyles.subtitle,
          marginBottom: "52px",
          animation: "fadeUp 1s ease 1s both",
          opacity: 0,
        }}>
          with operational performance and long-term business growth.
        </p>

        {/* CTAs */}
        <div className="hero-cta" style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap", marginBottom: "80px" }}>
          <button className="cta-btn cta-btn-solid" onClick={() => scrollTo("services")}>
            Explore Services
          </button>
          <button className="cta-btn" onClick={() => scrollTo("contact")}>
            Get in Touch
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={heroStyles.scrollIndicator}>
        <span style={heroStyles.scrollLabel}>Scroll</span>
        <div style={{ width: "1px", height: "32px", background: `linear-gradient(to bottom, ${COLORS.matteGold}, transparent)` }} />
      </div>
    </section>
  );
}
