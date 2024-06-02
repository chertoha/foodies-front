export const breakpoints = {
  mobile: 375,
  tablet: 768,
  desktop: 1440,
};

const theme = {
  colors: {
    accent: "#050505",
    dark: "rgba(5,5,5,0.9)",
    light: "#FFFFFF",
    grey: "#E8E8E8",
  },

  fontSizes: {
    xs: "12px",
    sm: "14px",
    base: "16px",
    lg: "18px",
    xl: "20px",
    "2xl": "24px",
    "3xl": "30px",
    "4xl": "36px",
    "5xl": "48px",
  },

  fontWeights: {
    regular: 400,
    medium: 500,
    bold: 700,
    extraBold: 800,
  },

  lineHeights: { none: 1, tight: 1.25, snug: 1.375, normal: 1.5, relaxed: 1.625, loose: 2 },

  radii: {
    none: "0",
    sm: "15px",
    md: "20px",
    lg: "30px",
    round: "50%",
  },

  breakpoints: {
    mobile: `${breakpoints.mobile}px`,
    tablet: `${breakpoints.tablet}px`,
    desktop: `${breakpoints.desktop}px`,
  },

  mq: {
    mobileOnly: `@media screen and (max-width: ${breakpoints.tablet - 0.02}px)`,

    mobile: `@media screen and (min-width: ${breakpoints.mobile}px)`,

    tabletOnly: `@media screen and (min-width: ${
      breakpoints.tablet
    }px) and (max-width: ${breakpoints.desktop - 0.02}px)`,

    tablet: `@media screen and (min-width: ${breakpoints.tablet}px)`,

    notDesktop: `@media screen and (max-width: ${breakpoints.desktop - 0.02}px)`,

    desktop: `@media screen and (min-width: ${breakpoints.desktop}px)`,
  },

  transitions: {
    default: "all 250ms cubic-bezier(0.4, 0, 0.2, 1)",
    prop: p => `${p} 250ms cubic-bezier(0.4, 0, 0.2, 1)`,
  },
};

export default theme;
