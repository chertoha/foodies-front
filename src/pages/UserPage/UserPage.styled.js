import styled from "styled-components";
import { mb, pb, mt, my, heading4 } from "styles/atomic";
import theme from "styles/theme";

export const SectionWrapper = styled("div")`
  ${my(16)}

  ${theme.mq.tablet} {
    ${my(25)}
  }

  ${theme.mq.desktop} {
    ${my(20)}
  }
`;

export const TitleWrapp = styled("div")`
  ${mb(4)};
  ${theme.mq.mobileOnly} {
  }

  ${theme.mq.tablet} {
    ${mb(5)};
  }

  ${theme.mq.desktop} {
  }
`;
export const ProfileWrapp = styled("div")`
  display: flex;
  justify-content: center;
  gap: 64px;
  flex-direction: column;
  ${mt(8)};
  ${theme.mq.mobileOnly} {
  }

  ${theme.mq.tablet} {
    ${mt(10)};
    gap: 80px;
  }

  ${theme.mq.desktop} {
    flex-direction: row;
    gap: 40px;
  }
`;

export const ListWrapp = styled("div")`
  ${theme.mq.mobileOnly} {
  }

  ${theme.mq.tablet} {
    width: 704px;
    gap: 14px;
  }

  ${theme.mq.desktop} {
    width: 846px;
  }
`;
export const TabsList = styled("ul")`
  display: flex;
  align-items: center;
  gap: 30px;
  border-bottom: 1px solid #05050533;

  overflow: scroll;
  scrollbar-width: none;
  ${theme.mq.mobileOnly} {
    width: 100%;
    max-width: 343px;
  }

  ${theme.mq.tablet} {
    width: 100%;
    overflow: none;
    gap: 40px;
  }

  ${theme.mq.desktop} {
  }
`;
export const TabsButton = styled("button")`
  width: 130px;
  height: 24px;

  color: #05050599;
  ${heading4()}
  // ${pb(4)}
  padding-bottom: 30px;
  text-transform: uppercase;

  border: none;
  background-color: transparent;
  cursor: pointer;
  ${theme.mq.mobileOnly} {
  }

  ${theme.mq.tablet} {
    width: 150px;
    font-size: ${theme.fontSizes.xl};
  }

  ${theme.mq.desktop} {
  }
  ${props => props.$variant === "active" && `border-bottom: 3px solid #050505; color: #050505;`}
`;
