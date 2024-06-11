import { NavLink } from "react-router-dom";
import styled from "styled-components";
import theme from "../../styles/theme";
import { px, py, flexCenter } from "../../styles/atomic";

export const NavMenuWrapper = styled.nav`
  ${flexCenter()}
  gap: 26px;

  @media (max-width: 767px) {
    display: none;
  }
`;

export const NavMenuLink = styled(NavLink)`
  ${flexCenter()}
  ${py(3)}
  ${px(3)}
 
  color: ${p => (p.$inverse ? p.theme.colors.light : p.theme.colors.accent)};
  font-size: ${theme.fontSizes.xs};
  font-weight: ${theme.fontWeights.bold};
  line-height: ${theme.lineHeights.normal};
  letter-spacing: -0.02em;
  text-transform: uppercase;

  &.active {
    border: 2px solid ${p => (p.$inverse ? "rgba(5, 5, 5, 0.20)" : p.theme.colors.accent)};
    border-radius: ${theme.radii.lg};
  }
`;
