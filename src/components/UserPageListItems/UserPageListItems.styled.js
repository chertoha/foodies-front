import styled from "styled-components";
import theme from "styles/theme";
import { NavLink } from "react-router-dom";
import { mt, mb, heading5, body1 } from "styles/atomic";

export const UserPageList = styled("ul")`
  display: flex;
  flex-direction: column;
  gap: 32px;
  ${mt(8)}
  ${theme.mq.mobileOnly} {
    width: 100%;
    max-width: 343px;
  }

  ${theme.mq.tablet} {
    width: 100%;
    ${mt(10)};
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
`;

export const UserPageListImage = styled("img")`
  width: 75px;
  height: 75px;
  border-radius: 15px;
  object-fit: cover;
  object-position: center;

  ${theme.mq.tablet} {
    width: 100px;
    height: 100px;
  }
`;

export const SpaceWrapp = styled("div")`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 258px;

  ${theme.mq.mobileOnly} {
    width: 100%;
    max-width: 258px;
  }

  ${theme.mq.tablet} {
    width: 588px;
  }

  ${theme.mq.desktop} {
    width: 730px;
  }
`;
export const UserPageWrappText = styled("div")`
  width: 166px;

  ${theme.mq.mobileOnly} {
    width: 100%;
    max-width: 166px;
  }

  ${theme.mq.tablet} {
    width: 468px;
  }

  ${theme.mq.desktop} {
    width: 610px;
  }
`;
export const UserPageListTitle = styled("h4")`
  width: 166px;
  height: 24px;
  overflow: hidden;
  color: ${theme.colors.accent};
  ${heading5()};
  ${mb(2)};
  ${theme.mq.mobileOnly} {
    width: 100%;
    max-width: 166px;
  }

  ${theme.mq.tablet} {
    width: 100%;
    ${mb("10")};
  }
`;
export const UserPageListText = styled("p")`
  width: 166px;
  height: 43px;
  overflow: hidden;
  color: #050505cc;
  ${body1()};

  ${theme.mq.mobileOnly} {
    width: 100%;
    max-width: 166px;
  }

  ${theme.mq.tablet} {
    width: 100%;
    height: 68px;
  }
`;
export const ButtonWrapp = styled("div")`
  display: flex;
  gap: 4px;
`;
export const LinkButton = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 36px;
  height: 36px;
  background-color: transparent;
  color: ${theme.colors.accent};
  border: 1px solid #0505051a;
  border-radius: 100px;
  cursor: pointer;

  transition: ${theme.transitions.default};
  &:focus,
  &:hover {
    background-color: ${theme.colors.accent};
    color: ${theme.colors.light};
  }

  ${theme.mq.tablet} {
    width: 42px;
    height: 42px;
  }
`;
export const Button = styled("button")`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 36px;
  height: 36px;
  background-color: transparent;
  border: 1px solid #0505051a;
  border-radius: 100px;
  cursor: pointer;

  transition: ${theme.transitions.default};
  &:focus,
  &:hover {
    background-color: ${theme.colors.accent};
    color: ${theme.colors.light};
  }

  ${theme.mq.tablet} {
    width: 42px;
    height: 42px;
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
`;
