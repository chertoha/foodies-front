import styled from "styled-components";
import { Link } from "react-router-dom";
import theme from "styles/theme";

export const LogoLink = styled(Link)`
  display: block;
  color: ${p => (p.$inverse ? p.theme.colors.light : p.theme.colors.accent)};
  font-size: ${p => p.theme.fontSizes.xl};
  font-weight: ${p => p.theme.fontWeights.extraBold};
  line-height: ${p => p.theme.lineHeights.normal};
  letter-spacing: -0.025em;
  text-transform: lowercase;
  text-decoration: none;

  transition: ${p => p.theme.transitions.default};
  transform-origin: left;
  &:hover {
    color: ${p => (p.$inverse ? p.theme.colors.grey : "rgba(5, 5, 5, 0.7)")};
    transform: scale(1.1);
  }

  &:focus-visible {
    outline: 2px solid ${p => (p.$inverse ? p.theme.colors.light : p.theme.colors.accent)};
  }

  ${theme.mq.tablet} {
    font-size: ${p => p.theme.fontSizes["2xl"]};
    letter-spacing: -0.03em;
  }

  ${theme.mq.desktop} {
    font-size: ${p => p.theme.fontSizes["2xl"]};
    letter-spacing: -0.03em;
  }
`;
