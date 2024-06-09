import styled from "styled-components";

export const MobileNavWrapper = styled.nav`
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  flex-direction: column;
  background-color: #333;
  position: absolute;
  top: 50px;
  width: 100%;
`;

export const NavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const NavItem = styled.li`
  margin: 0;
`;
export const MobileMenuIconWrapper = styled.div`
  display: none;
  font-size: 30px;
  cursor: pointer;
  padding: 15px;
  background-color: #333;
  color: white;

  @media (max-width: 768px) {
    display: block;
  }
`;
