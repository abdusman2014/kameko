import { COLORS } from "../../constants/theme";
import { sectionStyles, contactStyles } from "../../styles/styles";
import GoldDivider from "../GoldDivider";

import { useState } from "react";
import { createClient } from "@supabase/supabase-js";

export default function Contact({ contactFields }) {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);
  const [formData, setFormData] = useState({ message: "" });

  const handleChange = (label, value) => {
    setFormData((prev) => ({ ...prev, [label]: value }));
  };

  const handleSubmit = async () => {
    setLoading(true);
    setStatus(null);
    console.log(formData);
    try {
      const supabase = createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
      );
      const { data, error } = await supabase.functions.invoke(
        "send-enquiry-email-kameko",
        {
          body: formData, //JSON.stringify(formData),
        },
      );
      // const res = await fetch("/api/send-enquiry", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify(formData),
      // });

      // const result = await res.json();
      // if (!res.ok) throw new Error(result.error || "Something went wrong");

      setStatus("success");
    } catch (err) {
      console.error(err);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" style={contactStyles.section}>
      <div style={{ maxWidth: "560px", margin: "0 auto", textAlign: "center" }}>
        <p style={sectionStyles.sectionLabel}>Begin a Conversation</p>
        <h2
          style={{
            ...sectionStyles.sectionHeading,
            fontSize: "clamp(30px, 5vw, 44px)",
          }}
        >
          Work With KAMEKO
        </h2>
        <GoldDivider />
        <p style={contactStyles.intro}>
          To discuss how KAMEKO can support your organisation's real estate
          strategy, please get in touch with our consultancy team.
        </p>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "14px",
            marginBottom: "40px",
          }}
        >
          {contactFields.map(({ label, placeholder, type }) => (
            <div key={label} style={{ textAlign: "left" }}>
              <label style={contactStyles.label}>{label}</label>
              <input
                type={type}
                placeholder={placeholder}
                style={contactStyles.input}
                value={formData[label] || ""}
                onChange={(e) => handleChange(label, e.target.value)}
                onFocus={(e) =>
                  (e.target.style.borderColor = "rgba(200,164,93,0.7)")
                }
                onBlur={(e) =>
                  (e.target.style.borderColor = "rgba(200,164,93,0.25)")
                }
              />
            </div>
          ))}

          <div style={{ textAlign: "left" }}>
            <label style={contactStyles.label}>Message</label>
            <textarea
              placeholder="Tell us about your requirements..."
              rows={4}
              style={contactStyles.textarea}
              value={formData.message}
              onChange={(e) => handleChange("message", e.target.value)}
              onFocus={(e) =>
                (e.target.style.borderColor = "rgba(200,164,93,0.7)")
              }
              onBlur={(e) =>
                (e.target.style.borderColor = "rgba(200,164,93,0.25)")
              }
            />
          </div>
        </div>

        <button
          className="cta-btn cta-btn-solid"
          onClick={handleSubmit}
          style={{ width: "100%", padding: "16px" }}
          disabled={loading}
        >
          {loading ? "Sending..." : "Submit Enquiry"}
        </button>

        {status === "success" && (
          <p style={{ marginTop: "12px", color: "green" }}>
            Thank you — your enquiry has been sent.
          </p>
        )}
        {status === "error" && (
          <p style={{ marginTop: "12px", color: "red" }}>
            Something went wrong. Please try again.
          </p>
        )}
      </div>
    </section>
  );
}
