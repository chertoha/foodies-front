import styled from "styled-components";
import { px } from "styles/atomic";
import theme from "styles/theme";

export const StyledContainer = styled("div")`
  margin: 0 auto;
  width: 100%;

  ${px(4)}

  ${theme.mq.mobileOnly} {
    max-width: ${theme.breakpoints.mobile};
  }

  ${theme.mq.tablet} {
    width: ${theme.breakpoints.tablet};

    ${px(8)}
  }

  ${theme.mq.desktop} {
    width: ${theme.breakpoints.desktop};

    ${px(20)}
  }
`;
