import styled, { css } from "styled-components";
import theme from "styles/theme";
import bgImage_1x2 from "assets/images/hero/hero-image1-mobile@2x.png";
import bgImage_1x2_tab from "assets/images/hero/hero-image1-tablet@2x.png";
import bgImage_2x1 from "assets/images/hero/hero-image2-mobile.png";
import bgImage_2x2 from "assets/images/hero/hero-image2-mobile@2x.png";
import bgImage_2x1_tab from "assets/images/hero/hero-image2-tablet.png";
import bgImage_2x2_tab from "assets/images/hero/hero-image2-tablet@2x.png";
import { NavLink } from "react-router-dom";
import { mt, py } from "styles/atomic";

export const MenuButton = styled("button")`
  color: ${p => (p.$inverse ? p.theme.colors.white : p.theme.colors.accent)};

  ${theme.mq.tablet} {
    display: none;
  }
`;

export const MobileMenu = styled("div")`
  overflow-y: auto;
  padding: 24px;
  position: fixed;
  z-index: 9999;
  top: 0;
  right: 0;
  transform: translateX(100%);
  width: 100vw;
  height: 100vh;
  background-color: ${p => p.theme.colors.accent};

  transition: ${p => p.theme.transitions.prop("transform")};
  ${p =>
    p.$open &&
    css`
      transform: translateX(0);
    `}

  background-repeat: no-repeat;
  background-image: url(${bgImage_1x2}), url(${bgImage_2x1});
  background-size: 24vw, 59vw;
  background-position:
    top 620px left 30px,
    top 520px right 20px;

  @media (min-device-pixel-ratio: 2), (min-resolution: 192dpi), (min-resolution: 2dppx) {
    background-image: url(${bgImage_1x2}), url(${bgImage_2x2});
  }

  @media (min-width: 400px) {
    background-image: url(${bgImage_1x2}), url(${bgImage_2x2});
  }

  @media (min-width: 550px) {
    background-image: url(${bgImage_1x2_tab}), url(${bgImage_2x1_tab});

    @media (min-device-pixel-ratio: 2), (min-resolution: 192dpi), (min-resolution: 2dppx) {
      background-image: url(${bgImage_1x2}), url(${bgImage_2x2_tab});
    }
  }
`;

export const HeadBar = styled("div")`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CloseButton = styled("button")`
  display: block;
  color: ${p => p.theme.colors.white};
`;

export const Nav = styled("nav")`
  display: none;
  ${theme.mq.mobileOnly} {
    ${mt("218")};
    display: block;
  }
`;

export const List = styled("ul")``;

export const Item = styled("li")`
  text-align: center;
  margin-bottom: 8px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const Link = styled(NavLink)`
  ${py("14")};

  display: inline-flex;
  justify-content: center;
  width: 140px;

  text-transform: uppercase;
  color: ${p => p.theme.colors.white};
  font-size: ${p => p.theme.fontSizes.sm};
  font-weight: ${p => p.theme.fontWeights.bold};
  line-height: ${p => p.theme.lineHeights.snug};

  transition: ${p => p.theme.transitions.prop("color")};

  &.active {
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: ${p => p.theme.radii.lg};
  }

  &:hover {
    color: rgba(255, 255, 255, 0.5);
  }
`;
