import { COLORS } from "../../constants/theme";
import { navStyles } from "../../styles/styles";
import { useScrolled } from "../../hooks/useScrolled";
import logoHorizontal from "../../assets/logo-horizontal.png";

export default function Navbar({ navLinks, scrollTo, menuOpen, toggleMenu }) {
  const scrolled = useScrolled();

  return (
    <>
      <nav style={navStyles.nav(scrolled)}>
        <div style={{ cursor: "pointer" }} onClick={() => scrollTo("hero")}>
          <img src={logoHorizontal} alt="Kameko" style={{ height: "44px", display: "block" }} />
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
