import { sectionStyles, whyStyles } from "../../styles/styles";
import GoldDivider from "../GoldDivider";

export default function WhyKameko({ whyItems }) {
  return (
    <section id="about" style={{ padding: "100px 40px", maxWidth: "1100px", margin: "0 auto" }}>
      <div style={{ textAlign: "center", marginBottom: "64px" }}>
        <p style={sectionStyles.sectionLabel}>Our Approach</p>
        <h2 style={sectionStyles.sectionHeading}>Why Choose KAMEKO</h2>
        <GoldDivider />
      </div>

      <div className="why-grid" style={{
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gap: "20px",
        marginBottom: "60px",
      }}>
        {whyItems.map((item, i) => (
          <div
            key={i}
            className="why-item"
            style={whyStyles.card}
            onMouseEnter={e => e.currentTarget.style.background = "rgba(109,15,31,0.55)"}
            onMouseLeave={e => e.currentTarget.style.background = "rgba(109,15,31,0.3)"}
          >
            <div className="why-icon" style={whyStyles.icon}>{item.icon}</div>
            <h3 style={whyStyles.heading}>{item.heading}</h3>
            <p style={whyStyles.body}>{item.body}</p>
          </div>
        ))}
      </div>

      <div style={whyStyles.closingBox}>
        <p style={whyStyles.closingText}>
          Whether supporting workplace transformation, portfolio strategy, acquisitions, leasing, sustainability, or operational performance, KAMEKO delivers tailored solutions designed around the needs of modern organisations.
        </p>
      </div>
    </section>
  );
}
