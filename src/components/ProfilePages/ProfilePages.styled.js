import styled from "styled-components";
import { pt } from "styles/atomic";
import theme from "styles/theme";

export const SubTitleWrapper = styled("div")`
  ${pt(20)}
  margin-left: auto;
  margin-right: auto;
  width: 343px;

  ${theme.mq.mobileOnly} {
  }

  ${theme.mq.tablet} {
    width: 610px;
    ${pt("100")}
  }

  ${theme.mq.desktop} {
    ${pt("140")}
  }
`;
