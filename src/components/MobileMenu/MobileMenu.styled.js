import styled from "styled-components";
import { NavLink } from "react-router-dom";
import theme from "../../styles/theme";
import { flexCenter } from "../../styles/atomic";

export const MobileNavWrapper = styled.div`
  position: fixed;
  top: 0;
  right: ${props => (props.open ? "0" : "-100%")};
  width: 100vw;
  /* height: 100vh; */
  background: #050505;
  flex-direction: column;
  transition: right 0.3s ease-in-out;
  z-index: 9999;
  padding: 24px;

  ${flexCenter}
`;

export const TopWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  margin-bottom: 218px;
`;

export const NavList = styled.ul`
  list-style: none;
  flex-direction: column;
  gap: 22px;
  /* color: #fff; */
  color: ${theme.colors.light};
  margin-bottom: 145px;

  ${flexCenter}
`;

export const NavItem = styled.li`
  margin: 0;
`;

export const NavLinks = styled(NavLink)`
  text-decoration: none;
  color: ${theme.colors.light};
  font-size: 14px;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: -0.025em;
  text-transform: uppercase;
`;

export const ImageWrapper = styled.div`
  ${flexCenter}
  gap: 20px;
  margin-top: 29px;

  ${theme.mq.tablet} {
    margin-top: 31px;
  }
  ${theme.mq.desktop} {
    margin-top: 40px;
  }
`;

export const ImageSmall = styled.img`
  display: block;
  width: 70px;
  height: 70px;

  transform: rotate(11deg);

  ${theme.mq.tablet} {
    width: 128px;
    height: 116px;
  }
`;

export const ImageBig = styled.img`
  display: block;
  width: 190px;
  height: 172px;
  margin-bottom: 116px;
  transform: rotate(-12deg);

  ${theme.mq.tablet} {
    width: 302px;
    height: 273px;
  }
`;

export const BtnClose = styled.button`
  stroke: ${theme.colors.light};
  margin-left: auto;
  background-color: ${theme.colors.accent};
  border: none;
  cursor: pointer;
  &:focus {
    outline: none;
  }
`;
