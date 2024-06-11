import styled, { css } from "styled-components";
import theme from "../../styles/theme";
import { px, py } from "../../styles/atomic";

const buttonColors = {
  clear: css`
    border: none;
    background: none;
    color: ${theme.colors.accent};
  `,
  black: css`
    background-color: ${theme.colors.accent};
    color: ${theme.colors.light};
  `,
};

export const SlideButton = styled("Button")`
  font-size: ${theme.fontSizes.xs};
  font-weight: ${theme.fontWeights.bold};
  line-height: ${theme.lineHeights.normal};
  border-radius: ${theme.radii.lg};
  letter-spacing: -0.025em;
  text-transform: uppercase;
  border: none;
  width: 80px;
  height: 37px;
  position: absolute;
  ${px(4)}
  ${py(2)}

  cursor: pointer;
  transition: transform 0.4s ease;
  transform: ${props => (props.$position === "left" ? "translateX(0)" : "translateX(74px)")};

  ${props => buttonColors[props.$colors]};

  ${theme.mq.tablet} {
    width: 107px;
    height: 45px;
    ${px(7)}
    ${py(4)}
    transform: ${props => (props.$position === "left" ? "translateX(0)" : "translateX(104px)")};
  }
`;

export const BtnWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 156px;
  height: 38px;

  background-color: ${theme.colors.light};
  border-radius: ${theme.radii.lg};
  border: 1px solid ${theme.colors.light};

  ${theme.mq.tablet} {
    width: 213px;
    height: 47px;
  }
`;
