import { sectionStyles } from "../../styles/styles";
import GoldDivider from "../GoldDivider";
import ServiceCard from "../ServiceCard";

export default function Services({ services }) {
  return (
    <section id="services" style={{ padding: "100px 40px", maxWidth: "1200px", margin: "0 auto" }}>
      <div style={{ textAlign: "center", marginBottom: "64px" }}>
        <p style={sectionStyles.sectionLabel}>What We Do</p>
        <h2 style={sectionStyles.sectionHeading}>Our Services</h2>
        <GoldDivider />
        {/* <p style={sectionStyles.sectionIntro}>
          Based on the RICS Corporate Real Estate competency framework, KAMEKO delivers across every dimension of corporate property strategy.
        </p> */}
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
  );
}
