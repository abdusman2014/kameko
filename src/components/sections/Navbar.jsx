import { COLORS, FONTS } from "../../constants/theme";
import { navStyles } from "../../styles/styles";
import { useScrolled } from "../../hooks/useScrolled";
import logoMark from "../../assets/logo-mark.png";

export default function Navbar({ navLinks, scrollTo, menuOpen, toggleMenu }) {
  const scrolled = useScrolled();

  return (
    <>
      <nav style={navStyles.nav(scrolled)}>
        <div
          style={{ cursor: "pointer", display: "flex", alignItems: "center", gap: "10px" }}
          onClick={() => scrollTo("hero")}
        >
          <img src={logoMark} alt="Kameko" style={{ height: "32px", display: "block" }} />
          <span
            style={{
              fontFamily: FONTS.heading,
              fontSize: "20px",
              fontWeight: 500,
              letterSpacing: "5px",
              color: COLORS.matteGold,
              lineHeight: 1,
            }}
          >
            KAMEKO
          </span>
        </div>

        <div className="nav-links" style={{ display: "flex", gap: "36px", alignItems: "center" }}>
          {navLinks.map(id => (
            <button key={id} className="nav-link" onClick={() => scrollTo(id)}>
              {id}
            </button>
          ))}
        </div>

        <button
          className="mobile-menu-btn"
          style={navStyles.mobileBtn}
          onClick={toggleMenu}
        >☰</button>
      </nav>

      {menuOpen && (
        <div style={navStyles.mobileMenu}>
          {navLinks.map(id => (
            <button key={id} className="nav-link" onClick={() => scrollTo(id)} style={{ textAlign: "left" }}>
              {id}
            </button>
          ))}
        </div>
      )}
    </>
  );
}
