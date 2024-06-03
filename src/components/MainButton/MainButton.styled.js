import styled from "styled-components";
import { px, py, body1, flexCenter } from "../../styles/atomic";
import theme from "./styles/theme";

export const Button = styled("button")`
  border-radius: 30px;
  font-weight: ${theme.fontWeights.bold};
  font-size: ${theme.fontSizes.sm};
  line-height: ${theme.lineHeights.normal};
  letter-spacing: -0.32px;
  text-transform: uppercase;
  cursor: pointer;
  transition: ${theme.transitions.default};

  ${flexCenter()}
  ${body1()}
  ${px(2)}
  ${py(1)}

  ${theme.mq.mobile} {
    font-size: 16px ${theme.fontSizes.base};
  }
`;
