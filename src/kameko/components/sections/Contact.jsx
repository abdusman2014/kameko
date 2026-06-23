import { COLORS } from "../../constants/theme";
import { sectionStyles, contactStyles } from "../../styles/styles";
import GoldDivider from "../GoldDivider";

export default function Contact({ contactFields }) {
  return (
    <section id="contact" style={contactStyles.section}>
      <div style={{ maxWidth: "560px", margin: "0 auto", textAlign: "center" }}>
        <p style={sectionStyles.sectionLabel}>Begin a Conversation</p>
        <h2 style={{ ...sectionStyles.sectionHeading, fontSize: "clamp(30px, 5vw, 44px)" }}>
          Work With KAMEKO
        </h2>
        <GoldDivider />
        <p style={contactStyles.intro}>
          To discuss how KAMEKO can support your organisation's real estate strategy, please get in touch with our consultancy team.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: "14px", marginBottom: "40px" }}>
          {contactFields.map(({ label, placeholder, type }) => (
            <div key={label} style={{ textAlign: "left" }}>
              <label style={contactStyles.label}>{label}</label>
              <input
                type={type}
                placeholder={placeholder}
                style={contactStyles.input}
                onFocus={e => e.target.style.borderColor = "rgba(200,164,93,0.7)"}
                onBlur={e => e.target.style.borderColor = "rgba(200,164,93,0.25)"}
              />
            </div>
          ))}

          <div style={{ textAlign: "left" }}>
            <label style={contactStyles.label}>Message</label>
            <textarea
              placeholder="Tell us about your requirements..."
              rows={4}
              style={contactStyles.textarea}
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
  );
}
