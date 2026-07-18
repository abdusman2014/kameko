import { useState, useEffect, useRef } from "react";


import logoHorizontal from "./assets/logo-horizontal.png";
import logoVertical from "./assets/logo-vertical.png";
import logoBg from "./assets/logo-background.png";

const COLORS = {
  deepBurgundy: "#5B1020",
  richBurgundy: "#6D0F1F",
  matteGold: "#C8A45D",
  champagneGold: "#D6B97A",
  warmIvory: "#F7F3EE",
  charcoal: "#1E1E1E",
};

const services = [
  {
    title: "Business Alignment",
    subtitle: "Aligning Real Estate Strategy with Business Performance",
    description:
      "KAMEKO helps organisations ensure their real estate portfolio directly supports wider business objectives, operational efficiency, employee performance, and long-term growth strategies.",
    items: [
      "Corporate real estate strategy development",
      "Portfolio alignment reviews",
      "Operational performance analysis",
      "Workplace and occupancy optimisation",
      "Strategic reporting and stakeholder presentations",
      "Contingency and resilience planning",
    ],
  },
  {
    title: "Business Case Development",
    subtitle: "Building Data-Driven Property Investment Decisions",
    description:
      "KAMEKO develops detailed and commercially focused business cases that support strategic property decisions, investments, relocations, acquisitions, lease restructures, and workplace transformation projects.",
    items: [
      "Real estate investment business cases",
      "Relocation and expansion appraisals",
      "Financial impact assessments",
      "Occupancy cost analysis",
      "Stakeholder reporting and presentations",
      "Executive approval documentation",
    ],
  },
  {
    title: "Change Management",
    subtitle: "Delivering Successful Workplace and Property Transformation",
    description:
      "KAMEKO supports organisations through periods of operational and workplace change by developing structured strategies that minimise disruption and maximise engagement.",
    items: [
      "Workplace transformation strategies",
      "Relocation and consolidation planning",
      "Stakeholder engagement programmes",
      "Change impact assessments",
      "Communication planning",
      "Change implementation oversight",
    ],
  },
  {
    title: "Inspection",
    subtitle: "Professional Property Inspections and Strategic Reporting",
    description:
      "KAMEKO delivers detailed property inspections that support informed decision-making across acquisitions, leasing, management, occupation, and strategic planning.",
    items: [
      "Commercial property inspections",
      "Building condition reviews",
      "Occupier suitability assessments",
      "Site and location analysis",
      "Risk and compliance observations",
      "Due diligence support",
    ],
  },
  {
    title: "Landlord & Tenant",
    subtitle: "Strategic Advice for Occupiers and Property Owners",
    description:
      "KAMEKO provides specialist landlord and tenant consultancy services that help occupiers, investors, and property owners manage lease obligations, negotiations, and strategic property decisions.",
    items: [
      "Lease advisory services",
      "Occupier representation",
      "Lease negotiations and restructuring",
      "Tenant strategy reviews",
      "Landlord negotiations",
      "Property dispute support",
    ],
  },
  {
    title: "Leasing & Letting",
    subtitle: "Commercial Leasing Strategies That Deliver Long-Term Value",
    description:
      "KAMEKO supports occupiers, landlords, and organisations through every stage of the leasing and letting process, combining market insight with financial strategy.",
    items: [
      "Commercial leasing consultancy",
      "Tenant representation",
      "Landlord advisory services",
      "Lease negotiations",
      "Transaction management",
      "Lease structure optimisation",
    ],
  },
  {
    title: "Local Taxation & Assessment",
    subtitle: "Strategic Property Tax and Rates Consultancy",
    description:
      "KAMEKO advises organisations on local property taxation, business rates, and assessment strategies to ensure effective cost management across corporate real estate portfolios.",
    items: [
      "Property tax advisory",
      "Business rates strategy",
      "Assessment reviews",
      "Portfolio taxation analysis",
      "Tax liability management",
      "Appeals support",
    ],
  },
  {
    title: "Measurement",
    subtitle: "Accurate Property Measurement and Spatial Analysis",
    description:
      "KAMEKO provides professional measurement services that support leasing, valuation, workplace planning, portfolio management, and operational decision-making.",
    items: [
      "Commercial property measurement",
      "Floor area calculations",
      "Space utilisation analysis",
      "Occupancy measurement",
      "Measurement reporting",
      "Building area assessments",
    ],
  },
  {
    title: "Programming & Planning",
    subtitle: "Strategic Project Planning and Delivery Management",
    description:
      "KAMEKO supports organisations with structured project programming and operational planning across workplace, relocation, fit-out, and corporate real estate initiatives.",
    items: [
      "Project programming",
      "Timeline and milestone planning",
      "Critical path analysis",
      "Workplace project planning",
      "Programme monitoring",
      "Delivery performance reporting",
    ],
  },
  {
    title: "Property Management",
    subtitle: "Efficient Property Operations and Occupier Management",
    description:
      "KAMEKO provides strategic property management consultancy focused on maintaining operational efficiency, occupier satisfaction, regulatory compliance, and long-term asset performance.",
    items: [
      "Commercial property management",
      "Occupier coordination",
      "Operational property support",
      "Maintenance strategy planning",
      "Lease compliance monitoring",
      "Facilities coordination",
    ],
  },
  {
    title: "Purchase & Sale",
    subtitle: "Strategic Acquisition and Disposal Advisory",
    description:
      "KAMEKO provides end-to-end consultancy support for commercial property acquisitions, disposals, and portfolio restructuring.",
    items: [
      "Acquisition advisory",
      "Disposal strategy consultancy",
      "Commercial negotiations",
      "Transaction management",
      "Market analysis and reporting",
      "Portfolio restructuring advice",
    ],
  },
  {
    title: "Strategic Consultancy",
    subtitle: "Corporate Real Estate Strategy for Modern Organisations",
    description:
      "KAMEKO delivers strategic real estate consultancy that helps organisations use property as a driver of business performance, operational efficiency, and long-term resilience.",
    items: [
      "Corporate real estate strategy",
      "Portfolio optimisation",
      "Occupancy and workplace strategy",
      "Organisational alignment reviews",
      "Real estate transformation planning",
      "Executive-level advisory services",
    ],
  },
  {
    title: "Sustainability",
    subtitle: "Sustainable Real Estate and Workplace Strategies",
    description:
      "KAMEKO helps organisations integrate sustainability into their real estate operations, workplace strategies, and long-term property decisions.",
    items: [
      "Sustainability strategy development",
      "ESG-focused property consultancy",
      "Sustainable workplace planning",
      "Environmental performance analysis",
      "Corporate responsibility alignment",
      "Sustainability reporting support",
    ],
  },
  {
    title: "Workspace Strategy",
    subtitle: "Designing Workplaces That Improve Business Performance",
    description:
      "KAMEKO develops workplace strategies that align physical work environments with operational requirements, employee experience, productivity, and long-term business objectives.",
    items: [
      "Workplace strategy development",
      "Hybrid working strategies",
      "Workspace utilisation analysis",
      "Occupier experience reviews",
      "Workplace transformation planning",
      "Employee engagement analysis",
    ],
  },
];

const TurtleLogo = ({ size = 48, color = COLORS.matteGold }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="50" cy="50" rx="28" ry="22" stroke={color} strokeWidth="2" fill="none"/>
    <line x1="35" y1="38" x2="42" y2="50" stroke={color} strokeWidth="1.5"/>
    <line x1="50" y1="28" x2="50" y2="50" stroke={color} strokeWidth="1.5"/>
    <line x1="65" y1="38" x2="58" y2="50" stroke={color} strokeWidth="1.5"/>
    <line x1="35" y1="62" x2="42" y2="50" stroke={color} strokeWidth="1.5"/>
    <line x1="65" y1="62" x2="58" y2="50" stroke={color} strokeWidth="1.5"/>
    <line x1="42" y1="50" x2="58" y2="50" stroke={color} strokeWidth="1.5"/>
    <line x1="42" y1="50" x2="50" y2="28" stroke={color} strokeWidth="1.5"/>
    <line x1="58" y1="50" x2="50" y2="28" stroke={color} strokeWidth="1.5"/>
    <ellipse cx="50" cy="18" rx="7" ry="5" stroke={color} strokeWidth="2" fill="none"/>
    <circle cx="47" cy="17" r="1" fill={color}/>
    <ellipse cx="22" cy="45" rx="9" ry="5" transform="rotate(-20 22 45)" stroke={color} strokeWidth="1.8" fill="none"/>
    <ellipse cx="78" cy="45" rx="9" ry="5" transform="rotate(20 78 45)" stroke={color} strokeWidth="1.8" fill="none"/>
    <ellipse cx="28" cy="70" rx="8" ry="4" transform="rotate(30 28 70)" stroke={color} strokeWidth="1.8" fill="none"/>
    <ellipse cx="72" cy="70" rx="8" ry="4" transform="rotate(-30 72 70)" stroke={color} strokeWidth="1.8" fill="none"/>
    <ellipse cx="50" cy="80" rx="5" ry="8" stroke={color} strokeWidth="1.8" fill="none"/>
  </svg>
);

const GoldDivider = () => (
  <div style={{ display: "flex", alignItems: "center", gap: "12px", margin: "0 auto", width: "fit-content" }}>
    <div style={{ width: "40px", height: "1px", background: COLORS.matteGold, opacity: 0.6 }} />
    <div style={{ width: "6px", height: "6px", background: COLORS.matteGold, transform: "rotate(45deg)", opacity: 0.8 }} />
    <div style={{ width: "40px", height: "1px", background: COLORS.matteGold, opacity: 0.6 }} />
  </div>
);

function ServiceCard({ service, index }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      onClick={() => setOpen(!open)}
      style={{
        background: open ? COLORS.richBurgundy : "transparent",
        border: `1px solid rgba(200,164,93,${open ? 0.5 : 0.25})`,
        borderRadius: "2px",
        padding: "28px 32px",
        cursor: "pointer",
        transition: "all 0.4s ease",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(20px)",
        transitionDelay: `${(index % 3) * 0.08}s`,
      }}
      onMouseEnter={e => { if (!open) e.currentTarget.style.borderColor = "rgba(200,164,93,0.55)"; }}
      onMouseLeave={e => { if (!open) e.currentTarget.style.borderColor = "rgba(200,164,93,0.25)"; }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "16px" }}>
        <div style={{ textAlign: "left" }}>
          <p style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: "10px",
            letterSpacing: "3px",
            color: COLORS.matteGold,
            textTransform: "uppercase",
            marginBottom: "8px",
            opacity: 0.8,
          }}>
            Service
          </p>
          <h3 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(17px, 2vw, 20px)",
            color: COLORS.warmIvory,
            fontWeight: 500,
            lineHeight: 1.3,
            margin: 0,
          }}>
            {service.title}
          </h3>
        </div>
        <div style={{
          color: COLORS.matteGold,
          fontSize: "20px",
          lineHeight: 1,
          flexShrink: 0,
          marginTop: "18px",
          transition: "transform 0.3s ease",
          transform: open ? "rotate(45deg)" : "rotate(0deg)",
        }}>+</div>
      </div>

      <div style={{
        maxHeight: open ? "600px" : "0",
        overflow: "hidden",
        transition: "max-height 0.5s ease",
      }}>
        <div style={{ paddingTop: "20px" }}>
          <p style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "13px",
            fontStyle: "italic",
            color: COLORS.champagneGold,
            marginBottom: "14px",
            opacity: 0.9,
          }}>
            {service.subtitle}
          </p>
          <p style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: "14px",
            lineHeight: 1.8,
            color: "rgba(247,243,238,0.9)",
            marginBottom: "20px",
          }}>
            {service.description}
          </p>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(min(220px, 100%), 1fr))",
            gap: "8px",
            textAlign: "left",
          }}>
            {service.items.map((item, i) => (
              <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                <span style={{ color: COLORS.matteGold, fontSize: "8px", flexShrink: 0, display: "block", paddingTop: "5px", lineHeight: 1 }}>◆</span>
                <span style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: "13px",
                  color: "rgba(247,243,238,0.88)",
                  lineHeight: 1.6,
                  flex: 1,
                  textAlign: "left",
                }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function KamekoLanding() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div style={{ background: COLORS.deepBurgundy, minHeight: "100vh", width: "100%", overflowX: "hidden" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Montserrat:wght@300;400;500;600&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html, body, #root {
          width: 100%;
          min-height: 100vh;
          margin: 0;
          padding: 0;
          background: #5B1020;
        }
        html { scroll-behavior: smooth; }
        ::selection { background: rgba(200,164,93,0.3); }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: ${COLORS.deepBurgundy}; }
        ::-webkit-scrollbar-thumb { background: ${COLORS.matteGold}; border-radius: 2px; }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes shimmer {
          0% { opacity: 0.4; }
          50% { opacity: 1; }
          100% { opacity: 0.4; }
        }

        .hero-title { animation: fadeUp 1s ease 0.3s both; }
        .hero-divider { animation: fadeIn 1s ease 0.8s both; }
        .hero-sub { animation: fadeUp 1s ease 0.9s both; }
        .hero-cta { animation: fadeUp 1s ease 1.2s both; }

        .nav-link {
          font-family: 'Montserrat', sans-serif;
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
          font-family: 'Montserrat', sans-serif;
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
          .services-grid { grid-template-columns: 1fr !important; }
          .why-grid { grid-template-columns: 1fr !important; }
          .nav-links { display: none !important; }
          .mobile-menu-btn { display: block !important; }
          .hero-eyebrow { font-size: 10px !important; }
        }
      `}</style>

      {/* NAV */}
      <nav style={{
        position: "fixed",
        top: 0, left: 0, right: 0,
        zIndex: 100,
        padding: "0 40px",
        height: "72px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: scrolled ? `rgba(91,16,32,0.97)` : "transparent",
        borderBottom: scrolled ? `1px solid rgba(200,164,93,0.15)` : "1px solid transparent",
        backdropFilter: scrolled ? "blur(8px)" : "none",
        transition: "all 0.4s ease",
      }}>
        <div style={{ cursor: "pointer" }} onClick={() => scrollTo("hero")}>
          <img src={logoHorizontal} alt="Kameko" style={{ height: "44px", display: "block" }} />
        </div>

        <div className="nav-links" style={{ display: "flex", gap: "36px", alignItems: "center" }}>
          {["services", "about", "contact"].map(id => (
            <button key={id} className="nav-link" onClick={() => scrollTo(id)}>
              {id}
            </button>
          ))}
        </div>

        <button
          className="mobile-menu-btn"
          style={{ display: "none", background: "none", border: "none", color: COLORS.matteGold, fontSize: "22px", cursor: "pointer" }}
          onClick={() => setMenuOpen(!menuOpen)}
        >☰</button>
      </nav>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div style={{
          position: "fixed", top: "72px", left: 0, right: 0,
          background: `rgba(91,16,32,0.98)`,
          zIndex: 99,
          padding: "24px 40px",
          borderBottom: `1px solid rgba(200,164,93,0.2)`,
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}>
          {["services", "about", "contact"].map(id => (
            <button key={id} className="nav-link" onClick={() => scrollTo(id)} style={{ textAlign: "left" }}>
              {id}
            </button>
          ))}
        </div>
      )}

      {/* HERO */}
      <section id="hero" style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "120px 40px 80px",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}>
        {/* Background pattern */}
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: `radial-gradient(circle at 20% 50%, rgba(109,15,31,0.6) 0%, transparent 60%), radial-gradient(circle at 80% 20%, rgba(200,164,93,0.07) 0%, transparent 50%)`,
          pointerEvents: "none",
        }} />
        <div style={{
          position: "absolute",
          bottom: "-60px", right: "-60px",
          opacity: 0.12,
          pointerEvents: "none",
        }}>
          <img src={logoBg} alt="" style={{ width: "420px", display: "block" }} />
        </div>

        <div style={{ position: "relative", maxWidth: "800px" }}>
          <p className="hero-eyebrow" style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: "11px",
            letterSpacing: "4px",
            color: COLORS.matteGold,
            textTransform: "uppercase",
            marginBottom: "32px",
            opacity: 0,
            animation: "fadeIn 1s ease 0.1s both",
          }}>
            Corporate Real Estate Consultancy
          </p>

          <div className="hero-title" style={{ marginBottom: "32px" }}>
            <img src={logoVertical} alt="Kameko" style={{ height: "180px", display: "block", margin: "0 auto" }} />
          </div>

          <div className="hero-divider" style={{ marginBottom: "32px" }}>
            <GoldDivider />
          </div>

          <p className="hero-sub" style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(16px, 2.5vw, 22px)",
            fontStyle: "italic",
            color: "rgba(247,243,238,0.92)",
            lineHeight: 1.7,
            marginBottom: "12px",
            fontWeight: 400,
          }}>
            Strategic property consultancy solutions that align real estate decisions
          </p>
          <p style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(16px, 2.5vw, 22px)",
            fontStyle: "italic",
            color: "rgba(247,243,238,0.92)",
            lineHeight: 1.7,
            marginBottom: "52px",
            fontWeight: 400,
            animation: "fadeUp 1s ease 1s both",
            opacity: 0,
          }}>
            with operational performance and long-term business growth.
          </p>

          <div className="hero-cta" style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap", marginBottom: "80px" }}>
            <button className="cta-btn cta-btn-solid" onClick={() => scrollTo("services")}>
              Explore Services
            </button>
            <button className="cta-btn" onClick={() => scrollTo("contact")}>
              Get in Touch
            </button>
          </div>
        </div>

        <div style={{
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
        }}>
          <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "9px", letterSpacing: "3px", color: COLORS.warmIvory, textTransform: "uppercase" }}>Scroll</span>
          <div style={{ width: "1px", height: "32px", background: `linear-gradient(to bottom, ${COLORS.matteGold}, transparent)` }} />
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" style={{
        padding: "100px 40px",
        maxWidth: "1200px",
        margin: "0 auto",
      }}>
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <p style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: "10px",
            letterSpacing: "4px",
            color: COLORS.matteGold,
            textTransform: "uppercase",
            marginBottom: "20px",
          }}>What We Do</p>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(32px, 5vw, 48px)",
            color: COLORS.warmIvory,
            fontWeight: 400,
            marginBottom: "24px",
          }}>
            Our Services
          </h2>
          <GoldDivider />
         
        </div>

        <div className="services-grid" style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "12px",
        }}>
          {services.map((service, i) => (
            <ServiceCard key={i} service={service} index={i} />
          ))}
        </div>
      </section>

      {/* GOLD BAND */}
      <div style={{
        background: `linear-gradient(135deg, ${COLORS.matteGold} 0%, ${COLORS.champagneGold} 50%, ${COLORS.matteGold} 100%)`,
        padding: "60px 40px",
        textAlign: "center",
      }}>
        <p style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "clamp(20px, 3.5vw, 32px)",
          fontStyle: "italic",
          color: COLORS.deepBurgundy,
          fontWeight: 400,
          maxWidth: "700px",
          margin: "0 auto",
          lineHeight: 1.6,
        }}>
          "Helping organisations use property as a driver of business performance, operational efficiency, and long-term resilience."
        </p>
      </div>

      {/* ABOUT / WHY KAMEKO */}
      <section id="about" style={{
        padding: "100px 40px",
        maxWidth: "1100px",
        margin: "0 auto",
      }}>
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <p style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: "10px",
            letterSpacing: "4px",
            color: COLORS.matteGold,
            textTransform: "uppercase",
            marginBottom: "20px",
          }}>Our Approach</p>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(32px, 5vw, 48px)",
            color: COLORS.warmIvory,
            fontWeight: 400,
            marginBottom: "24px",
          }}>
            Why Choose KAMEKO
          </h2>
          <GoldDivider />
        </div>

        <div className="why-grid" style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "20px",
          marginBottom: "60px",
        }}>
          {[
            {
              icon: "◈",
              heading: "Strategic Thinking",
              body: "We combine commercial insight with operational intelligence to build real estate strategies grounded in how your business actually works.",
            },
            {
              icon: "◈",
              heading: "Operational Insight",
              body: "From workplace design to portfolio restructuring, we understand the full complexity of corporate property decisions.",
            },
            {
              icon: "◈",
              heading: "Long-Term Value",
              body: "Every recommendation is designed to deliver lasting value — not just solve today's challenge, but build resilience for the future.",
            },
            {
              icon: "◈",
              heading: "Tailored Solutions",
              body: "KAMEKO delivers bespoke consultancy shaped around the specific needs, objectives, and challenges of modern organisations.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="why-item"
              style={{
                background: "rgba(109,15,31,0.3)",
                border: "1px solid rgba(200,164,93,0.15)",
                padding: "36px 32px",
                transition: "background 0.3s",
              }}
              onMouseEnter={e => e.currentTarget.style.background = "rgba(109,15,31,0.55)"}
              onMouseLeave={e => e.currentTarget.style.background = "rgba(109,15,31,0.3)"}
            >
              <div className="why-icon" style={{
                fontFamily: "serif",
                fontSize: "22px",
                color: COLORS.matteGold,
                marginBottom: "20px",
                transition: "color 0.2s",
              }}>{item.icon}</div>
              <h3 style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "18px",
                color: COLORS.warmIvory,
                fontWeight: 500,
                marginBottom: "14px",
              }}>{item.heading}</h3>
              <p style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "14px",
                lineHeight: 1.8,
                color: "rgba(247,243,238,0.88)",
              }}>{item.body}</p>
            </div>
          ))}
        </div>

        <div style={{
          border: `1px solid rgba(200,164,93,0.25)`,
          padding: "48px",
          textAlign: "center",
        }}>
          <p style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: "13px",
            lineHeight: 2,
            color: "rgba(247,243,238,0.88)",
            maxWidth: "740px",
            margin: "0 auto",
          }}>
            Whether supporting workplace transformation, portfolio strategy, acquisitions, leasing, sustainability, or operational performance, KAMEKO delivers tailored solutions designed around the needs of modern organisations.
          </p>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{
        padding: "100px 40px",
        background: "rgba(0,0,0,0.2)",
      }}>
        <div style={{ maxWidth: "560px", margin: "0 auto", textAlign: "center" }}>
          <p style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: "10px",
            letterSpacing: "4px",
            color: COLORS.matteGold,
            textTransform: "uppercase",
            marginBottom: "20px",
          }}>Begin a Conversation</p>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(30px, 5vw, 44px)",
            color: COLORS.warmIvory,
            fontWeight: 400,
            marginBottom: "24px",
          }}>
            Work With KAMEKO
          </h2>
          <GoldDivider />
          <p style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: "14px",
            lineHeight: 1.9,
            color: "rgba(247,243,238,0.88)",
            margin: "28px auto 44px",
          }}>
            To discuss how KAMEKO can support your organisation's real estate strategy, please get in touch with our consultancy team.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "14px", marginBottom: "40px" }}>
            {[
              { label: "Name", placeholder: "Your full name", type: "text" },
              { label: "Organisation", placeholder: "Company name", type: "text" },
              { label: "Email", placeholder: "your@organisation.com", type: "email" },
            ].map(({ label, placeholder, type }) => (
              <div key={label} style={{ textAlign: "left" }}>
                <label style={{
                  display: "block",
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: "10px",
                  letterSpacing: "2px",
                  color: COLORS.matteGold,
                  textTransform: "uppercase",
                  marginBottom: "8px",
                }}>
                  {label}
                </label>
                <input
                  type={type}
                  placeholder={placeholder}
                  style={{
                    width: "100%",
                    padding: "14px 18px",
                    background: "rgba(247,243,238,0.05)",
                    border: "1px solid rgba(200,164,93,0.25)",
                    borderRadius: "1px",
                    color: COLORS.warmIvory,
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: "13px",
                    outline: "none",
                    transition: "border-color 0.2s",
                  }}
                  onFocus={e => e.target.style.borderColor = "rgba(200,164,93,0.7)"}
                  onBlur={e => e.target.style.borderColor = "rgba(200,164,93,0.25)"}
                />
              </div>
            ))}
            <div style={{ textAlign: "left" }}>
              <label style={{
                display: "block",
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "10px",
                letterSpacing: "2px",
                color: COLORS.matteGold,
                textTransform: "uppercase",
                marginBottom: "8px",
              }}>
                Message
              </label>
              <textarea
                placeholder="Tell us about your requirements..."
                rows={4}
                style={{
                  width: "100%",
                  padding: "14px 18px",
                  background: "rgba(247,243,238,0.05)",
                  border: "1px solid rgba(200,164,93,0.25)",
                  borderRadius: "1px",
                  color: COLORS.warmIvory,
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: "13px",
                  outline: "none",
                  resize: "vertical",
                  transition: "border-color 0.2s",
                }}
                onFocus={e => e.target.style.borderColor = "rgba(200,164,93,0.7)"}
                onBlur={e => e.target.style.borderColor = "rgba(200,164,93,0.25)"}
              />
            </div>
          </div>

          <button className="cta-btn cta-btn-solid" style={{ width: "100%", padding: "16px" }}>
            Submit Enquiry
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{
        borderTop: `1px solid rgba(200,164,93,0.15)`,
        padding: "40px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: "20px",
      }}>
        <div>
          <img src={logoHorizontal} alt="Kameko" style={{ height: "32px", display: "block", opacity: 0.6 }} />
        </div>
        <p style={{
          fontFamily: "'Montserrat', sans-serif",
          fontSize: "11px",
          letterSpacing: "1px",
          color: "rgba(247,243,238,0.3)",
        }}>
          Corporate Real Estate Consultancy
        </p>
        <p style={{
          fontFamily: "'Montserrat', sans-serif",
          fontSize: "11px",
          color: "rgba(247,243,238,0.25)",
        }}>
          © {new Date().getFullYear()} Kameko. All rights reserved.
        </p>
      </footer>
    </div>
  );
}