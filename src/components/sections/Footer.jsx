import { footerStyles } from "../../styles/styles";
import logoHorizontal from "../../assets/logo-horizontal.png";

export default function Footer() {
  return (
    <footer style={footerStyles.footer}>
      <div>
        <img src={logoHorizontal} alt="Kameko" style={{ height: "32px", display: "block", opacity: 0.6 }} />
      </div>
      <p style={footerStyles.tagline}>Corporate Real Estate Consultancy</p>
      <p style={footerStyles.copy}>© {new Date().getFullYear()} Kameko. All rights reserved.</p>
    </footer>
  );
}
