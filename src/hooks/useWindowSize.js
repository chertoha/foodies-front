import { useState, useEffect } from "react";
import { breakpoints } from "styles/theme";

export function useWindowSize() {
  const [isDesktop, setIsDesktop] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  function update() {
    setIsDesktop(window.innerWidth >= breakpoints.desktop);
    setIsTablet(
      window.innerWidth >= breakpoints.tablet && window.innerWidth < breakpoints.desktop - 0.02
    );
    setIsMobile(window.innerWidth < breakpoints.tablet - 0.02);
  }

  useEffect(() => {
    update();
    window.addEventListener("resize", update, false);

    return () => {
      window.removeEventListener("resize", update, false);
    };
  }, []);

  return { isDesktop, isMobile, isTablet };
}
