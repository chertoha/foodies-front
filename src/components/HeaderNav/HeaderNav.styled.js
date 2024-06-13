import styled from "styled-components";
import theme from "styles/theme";
import { NavLink } from "react-router-dom";
import { flexCenter, pt, py } from "styles/atomic";

export const Nav = styled("nav")`
  display: none;
  ${theme.mq.tablet} {
    display: block;
    ${pt("22")}
  }
`;

export const List = styled("ul")`
  ${theme.mq.tablet} {
    display: flex;
    align-items: center;
  }
`;

export const Item = styled("li")``;

export const Link = styled(NavLink)`
  ${py("14")};
  ${flexCenter()};
  text-transform: uppercase;
  color: ${p => (p.$inverse ? p.theme.colors.white : p.theme.colors.accent)};
  font-size: ${p => p.theme.fontSizes.sm};
  font-weight: ${p => p.theme.fontWeights.bold};
  line-height: ${p => p.theme.lineHeights.snug};
  transition: ${p => p.theme.transitions.prop("color")};

  ${theme.mq.tablet} {
    font-size: ${p => p.theme.fontSizes.xs};
    line-height: ${p => p.theme.lineHeights.normal};

    width: 99px;

    &.active {
      border: 1px solid ${p => (p.$inverse ? "rgba(255, 255, 255, 0.2)" : "rgba(5, 5, 5, 0.2)")};
      border-radius: ${p => p.theme.radii.lg};
    }

    &:hover {
      color: ${p => (p.$inverse ? "rgba(255,255,255,0.5)" : "rgba(5,5,5,0.5)")};
    }
  }
`;
