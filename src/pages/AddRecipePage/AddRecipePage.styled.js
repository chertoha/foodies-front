import styled from "styled-components";
import { pb, pt, body1 } from "styles/atomic";
import theme from "styles/theme";

export const AddRecipePageContainer = styled.div`
  ${pt(16)};
  ${pb(25)};
  /* ${({ theme }) => theme.mq.desktop} {
    ${pt(20)};
    ${pb(30)};
  } */
  @media screen and (min-width: 1280px) {
    ${pt(20)};
    ${pb(30)};
  }
`;
export const AddRecipePageTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media screen and (max-width: 767px) {
    gap: 16px;
    margin-top: 32px;
  }
  @media screen and (min-width: 768px) {
    gap: 20px;
    margin-top: 40px;
  }
`;
export const AddRecipePageSubtitleContainer = styled.p`
  ${body1()};
  color: #050505cc;
  ${theme.mq.mobileOnly} {
  }

  ${theme.mq.tablet} {
  }

  ${theme.mq.desktop} {
  }
  @media screen and (min-width: 768px) {
    width: 443px;
    font-size: 16px;
    line-height: 1.5;
    letter-spacing: -0.32px;
  }
`;
