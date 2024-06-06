import styled from "styled-components";
import { NavLink } from "react-router-dom";
import theme from "styles/theme";
import { px, py, flexCenter } from "../../styles/atomic";

export const NavMenuWrapper = styled.div`
  ${flexCenter()}
`;

export const NavLinks = styled(NavLink)`
  color: ${props => (props.isDarkBackground ? "white" : "black")};
  border: none;
  background: none;
  /* color: ${theme.colors.light}; */
  width: ${px(25.25)};
  height: ${px(11)};
  ${py(3.5)}

  font-size: ${theme.fontSizes.xs};
  font-weight: ${theme.fontWeights.bold};
  line-height: ${px(4.5)};
  letter-spacing: -0.02em;
  text-transform: uppercase;
  &.active {
    border: 2px solid ${theme.colors.light};
  }

  ${theme.mq.mobileOnly} {
    font-size: ${theme.fontSizes.sm};
    line-height: ${theme.lineHeights.tight};
  }

  ${theme.mq.tablet} {
    font-size: ${theme.fontSizes.base};
    line-height: ${theme.lineHeights.normal};
  }
  
  ${theme.mq.desktop} {
    font-size: ${theme.fontSizes.lg};
    line-height: ${theme.lineHeights.loose};
  }
`;
