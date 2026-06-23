import { useState } from "react";
import { services, whyItems } from "../data/services";

/**
 * useLandingController
 * Bridges the data layer and UI layer.
 * All state, derived data, and handlers live here — components stay pure.
 */
export function useLandingController() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Smooth-scroll to a section by id and close mobile menu
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  const navLinks = ["services", "about", "contact"];

  const contactFields = [
    { label: "Name",         placeholder: "Your full name",          type: "text"  },
    { label: "Organisation", placeholder: "Company name",            type: "text"  },
    { label: "Email",        placeholder: "your@organisation.com",   type: "email" },
  ];

  return {
    // data
    services,
    whyItems,
    navLinks,
    contactFields,
    // state
    menuOpen,
    // handlers
    scrollTo,
    toggleMenu,
  };
}
