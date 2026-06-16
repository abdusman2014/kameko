import { useState, useEffect, useRef } from "react";
import { COLORS } from "../constants/theme";
import { serviceCardStyles } from "../styles/styles";

export default function ServiceCard({ service, index }) {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const delay = (index % 3) * 0.08;

  return (
    <div
      ref={ref}
      onClick={() => setOpen(!open)}
      style={serviceCardStyles.card(open, visible, delay)}
      onMouseEnter={e => { if (!open) e.currentTarget.style.borderColor = "rgba(200,164,93,0.55)"; }}
      onMouseLeave={e => { if (!open) e.currentTarget.style.borderColor = "rgba(200,164,93,0.25)"; }}
    >
      {/* Header row */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "16px" }}>
        <div style={{ textAlign: "left" }}>
          <p style={serviceCardStyles.label}>Service</p>
          <h3 style={serviceCardStyles.title}>{service.title}</h3>
        </div>
        <div style={serviceCardStyles.toggle(open)}>+</div>
      </div>

      {/* Expandable body */}
      <div style={{ maxHeight: open ? "600px" : "0", overflow: "hidden", transition: "max-height 0.5s ease" }}>
        <div style={{ paddingTop: "20px" }}>
          <p style={serviceCardStyles.subtitle}>{service.subtitle}</p>
          <p style={serviceCardStyles.description}>{service.description}</p>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(min(220px, 100%), 1fr))",
            gap: "8px",
            textAlign: "left",
          }}>
            {service.items.map((item, i) => (
              <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                <span style={{ color: COLORS.matteGold, fontSize: "8px", flexShrink: 0, display: "block", paddingTop: "5px", lineHeight: 1 }}>◆</span>
                <span style={serviceCardStyles.bulletText}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
