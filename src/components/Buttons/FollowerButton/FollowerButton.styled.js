import styled from "styled-components";
import { py, px, body1 } from "styles/atomic";
import theme from "styles/theme";

export const StyledButton = styled("button")`
  width: 92px;
  height: 36px;
  border-radius: 30px;
  border: 1px solid #0505051f;
  background-color: transparent;

  font-weight: ${theme.fontWeights.bold};
  color: #050505e5;
  text-transform: uppercase;

  ${body1()}
  ${py(2)}
  ${px("10")}
  ${theme.mq.mobileOnly} {
  }

  ${theme.mq.tablet} {
    width: 116px;
    height: 44px;
    ${py("10")}
    ${px("10")}
  }

  ${theme.mq.desktop} {
  }
`;
