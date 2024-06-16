import theme from "styles/theme";
import styled, { css } from "styled-components";
import { pb, pt, px } from "styles/atomic";

export const StyledHeader = styled("header")`
  position: relative;
  ${px(4)}
  border-radius: 20px;

  display: flex;
  justify-content: space-between;

  ${theme.mq.tablet} {
    ${px(8)}
    border-radius: 30px;
  }

  ${theme.mq.desktop} {
    ${px(15)}
  }

  ${p =>
    p.$ishome &&
    css`
      background-color: #050505;
      height: 796px;

      ${theme.mq.tablet} {
        height: 992px;
      }

      ${theme.mq.desktop} {
        height: 970px;
      }
    `}
`;

export const CommonWrapper = styled("div")`
  ${px(2)};
  ${pt(2)};
  width: 100%;
  margin: 0 auto;

  ${theme.mq.mobileOnly} {
    max-width: ${theme.breakpoints.mobile};
  }

  ${theme.mq.tablet} {
    ${px(4)}
    ${pt(4)}
    width: ${theme.breakpoints.tablet};
  }

  ${theme.mq.desktop} {
    ${px(5)}
    ${pt(5)}
    width: ${theme.breakpoints.desktop};
  }
`;

export const stripsStyles = () => css`
  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 0;
    width: 1px;
    height: 100%;
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.2) 0%,
      rgba(255, 255, 255, 0.036) 100%
    );
  }
`;

export const LogoWrapper = styled("div")`
  position: relative;
  /* width: 197px; */
  ${pt("16")}

  ${stripsStyles()}


  &::before {
    left: 0;
  }

  &::after {
    display: none;
    right: 0;
  }

  ${theme.mq.tablet} {
    ${pt("23")}

    width: 197px;

    &::after {
      display: block;
    }
  }
`;

export const AuthBarWrapper = styled("div")`
  position: relative;
  ${pt(4)}

  ${stripsStyles()}

   &::before {
    display: none;
    left: 0;
  }

  &::after {
    right: 0;
  }

  ${theme.mq.tablet} {
    ${pt(5)}
    width: 208px;

    &::before {
      display: block;
    }
  }
`;

export const HeroWrapper = styled("div")`
  position: absolute;
  overflow: hidden;
  ${pb("20")}

  z-index: 10;
  top: 194px;
  /* top: 54px; */
  left: 50%;
  transform: translateX(-50%);
  width: 300px;

  ${theme.mq.mobile} {
    width: 327px;
  }

  ${theme.mq.tablet} {
    width: 678px;
    /* top: 66px; */
    top: 217px;
  }

  ${theme.mq.desktop} {
    width: 875px;
    top: 154px;
  }
`;
