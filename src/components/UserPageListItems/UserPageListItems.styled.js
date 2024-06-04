import styled from "styled-components";
import { mt, mb, heading5, body1 } from "styles/atomic";
import theme from "styles/theme";

export const UserPageList = styled("ul")`
  display: flex;
  flex-direction: column;
  gap: 32px;
  ${mt(8)}

  ${theme.mq.mobileOnly} {
  }

  ${theme.mq.tablet} {
    ${mt(10)};
  }

  ${theme.mq.desktop} {
  }
`;
export const UserPageListItem = styled("li")`
  display: flex;
  flex-direction: row;
  gap: 10px;
  ${theme.mq.mobileOnly} {
  }

  ${theme.mq.tablet} {
    gap: 16px;
  }

  ${theme.mq.desktop} {
  }
`;

export const UserPageListImage = styled("img")`
  width: 75px;
  height: 75px;
  border-radius: 15px;

  ${theme.mq.mobileOnly} {
  }

  ${theme.mq.tablet} {
    width: 100px;
    height: 100px;
  }

  ${theme.mq.desktop} {
  }
`;
export const UserPageListTitle = styled("h4")`
  width: 166px;
  height: 24px;
  overflow: hidden;
  color: #050505;
  ${heading5()};
  ${mb(2)};
  ${theme.mq.mobileOnly} {
  }

  ${theme.mq.tablet} {
    width: 100%;
    ${mb(2.5)};
  }

  ${theme.mq.desktop} {
  }
`;
export const UserPageListText = styled("p")`
  width: 166px;
  height: 43px;
  overflow: hidden;
  color: #050505cc;
  ${body1()};

  ${theme.mq.mobileOnly} {
  }

  ${theme.mq.tablet} {
    width: 100%;
    height: 68px;
  }

  ${theme.mq.desktop} {
  }
`;
