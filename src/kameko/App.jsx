import { COLORS } from "./constants/theme";
import { globalCSS, layout } from "./styles/styles";
import { useLandingController } from "./controllers/useLandingController";

import Navbar    from "./components/sections/Navbar";
import Hero      from "./components/sections/Hero";
import Services  from "./components/sections/Services";
import GoldBand  from "./components/sections/GoldBand";
import WhyKameko from "./components/sections/WhyKameko";
import Contact   from "./components/sections/Contact";
import Footer    from "./components/sections/Footer";

export default function App() {
  const { services, whyItems, navLinks, contactFields, menuOpen, scrollTo, toggleMenu } =
    useLandingController();

  return (
    <div style={layout.page}>
      <style>{globalCSS}</style>

      <Navbar
        navLinks={navLinks}
        scrollTo={scrollTo}
        menuOpen={menuOpen}
        toggleMenu={toggleMenu}
      />

      <Hero scrollTo={scrollTo} />
      <Services services={services} />
      <GoldBand />
      <WhyKameko whyItems={whyItems} />
      <Contact contactFields={contactFields} />
      <Footer />
    </div>
  );
}
