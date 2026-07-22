import { COLORS, FONTS } from "../../constants/theme";
import { footerStyles } from "../../styles/styles";
import logoMark from "../../assets/logo-mark.png";

export default function Footer() {
  return (
    <footer style={footerStyles.footer}>
      <div style={{ display: "flex", alignItems: "center", gap: "8px", opacity: 0.6 }}>
        <img src={logoMark} alt="Kameko" style={{ height: "24px", display: "block" }} />
        <span
          style={{
            fontFamily: FONTS.heading,
            fontSize: "15px",
            fontWeight: 500,
            letterSpacing: "4px",
            color: COLORS.matteGold,
            lineHeight: 1,
          }}
        >
          KAMEKO
        </span>
      </div>
      <p style={footerStyles.tagline}>Corporate Real Estate Consultancy</p>
      <p style={footerStyles.copy}>© {new Date().getFullYear()} Kameko. All rights reserved.</p>
    </footer>
  );
}
