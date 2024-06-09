import styled from "styled-components";
import { mb, mt } from "styles/atomic";
import theme from "styles/theme";

export const PageWrapper = styled("div")`
  ${mb(20)}

  ${theme.mq.tablet} {
    ${mb(25)}
  }

  ${theme.mq.desktop} {
    ${mb(30)}
  }
`;

export const SectionWrapper = styled("div")`
  ${mt(16)}

  ${theme.mq.tablet} {
    ${mt(25)}
  }

  ${theme.mq.desktop} {
    ${mt(30)}
  }
`;
