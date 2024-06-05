import styled from "styled-components";
import { heading4 } from "styles/atomic";
import theme from "styles/theme";

export const ProfileWrapp = styled("div")`
  display: flex;
  justify-content: center;
  gap: 64px;
  flex-direction: column;
  ${theme.mq.mobileOnly} {
  }

  ${theme.mq.tablet} {
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

  width: 343px;
  overflow: scroll;
  ${theme.mq.mobileOnly} {
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
  color: #05050599;
  ${heading4()}
  text-transform: uppercase;

  border: none;
  background-color: transparent;
  ${theme.mq.mobileOnly} {
  }

  ${theme.mq.tablet} {
    font-size: ${theme.fontSizes.xl};
  }

  ${theme.mq.desktop} {
  }
  ${props => props.variant === "active" && `border-bottom: 3px solid #050505; color: #050505;`}
`;
