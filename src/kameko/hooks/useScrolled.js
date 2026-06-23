import { useState, useEffect } from "react";

/**
 * Returns true when the page has scrolled past the given threshold (default 60px).
 */
export function useScrolled(threshold = 60) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  return scrolled;
}
