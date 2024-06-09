import { Link } from "react-router-dom";
import styled from "styled-components";
import { py, px, mb, heading5, body2, body1 } from "styles/atomic";
import theme from "styles/theme";

export const FollowerList = styled("ul")`
  display: flex;
  justify-content: center;
  flex-direction: column;
  ${theme.mq.mobileOnly} {
    width: 100%;
    max-width: 343px;
  }

  ${theme.mq.tablet} {
  }

  ${theme.mq.desktop} {
  }
`;

export const FollowerItem = styled("li")`
  display: flex;
  justify-content: space-between;
  ${py(5)}
  border-bottom: 1px solid #0505051A;
  ${theme.mq.mobileOnly} {
  }

  ${theme.mq.tablet} {
    ${py(10)}
    display: flex;
    flex-direction: row;
    gap: 60px;
  }

  ${theme.mq.desktop} {
    gap: 75px;
  }
`;

export const FollowerItemWrapp = styled("div")`
  display: flex;
  flex-direction: row;
  gap: 16px;
  ${theme.mq.mobileOnly} {
  }

  ${theme.mq.tablet} {
  }

  ${theme.mq.desktop} {
  }
`;

export const FollowerImage = styled("img")`
  width: 60px;
  height: 60px;
  border-radius: 100px;
  ${theme.mq.mobileOnly} {
  }

  ${theme.mq.tablet} {
    width: 85px;
    height: 85px;
  }

  ${theme.mq.desktop} {
    flex-direction: row;
  }
`;

export const FollowerTitle = styled("h4")`
  color: ${theme.colors.accent};

  text-transform: uppercase;
  ${heading5()}
  ${mb(1)}
  
  ${theme.mq.mobileOnly} {
  }

  ${theme.mq.tablet} {
  }

  ${theme.mq.desktop} {
  }
`;

export const FollowerText = styled("p")`
  color: #05050599;

  ${body2()}
  ${mb(2)}
  ${theme.mq.mobileOnly} {
  }

  ${theme.mq.tablet} {
  }

  ${theme.mq.desktop} {
  }
`;

export const FollowerButton = styled("button")`
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
  ${px(4)}
  ${theme.mq.mobileOnly} {
  }

  ${theme.mq.tablet} {
    width: 116px;
    height: 44px;
    ${py("10")}
    ${px("24")}
  }

  ${theme.mq.desktop} {
  }
`;
export const CardList = styled("ul")`
  ${theme.mq.mobileOnly} {
    display: none;
  }

  ${theme.mq.tablet} {
    width: 324px;
    display: flex;
    flex-direction: row;
    gap: 12px;
    overflow: hidden;
  }

  ${theme.mq.desktop} {
    width: 436px;
  }
`;
export const CardListImage = styled("img")`
  ${theme.mq.mobileOnly} {
  }

  ${theme.mq.tablet} {
    width: 100px;
    height: 100px;
    border-radius: 15px;
  }

  ${theme.mq.desktop} {
  }
`;
export const LinkButton = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 36px;
  height: 36px;
  background-color: transparent;
  border: 1px solid #0505051a;
  border-radius: 100px;
  cursor: pointer;

  transition: border-color ${theme.transitions.default};
  &:focus,
  &:hover {
    background-color: ${theme.colors.accent};
  }
  ${theme.mq.tablet} {
    width: 42px;
    height: 42px;
  }

  ${theme.mq.desktop} {
  }
`;
export const Icon = styled("svg")`
  fill: ${theme.colors.accent};
  display: block;
  width: 16px;
  height: 16px;
  &:focus,
  &:hover {
    fill: ${theme.colors.light};
  }
  ${theme.mq.tablet} {
    width: 18px;
    height: 18px;
  }

  ${theme.mq.desktop} {
  }
`;
