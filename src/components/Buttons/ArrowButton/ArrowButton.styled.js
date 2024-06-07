import { Link } from "react-router-dom";
import styled from "styled-components";
import theme from "styles/theme";

export const ButtonArrow = styled(Link)`
  background-color: ${theme.colors.accent};
  background: none;
  text-decoration: none;
  display: flex;
  align-items: center;
  border-radius: ${({ theme }) => theme.radii.lg};
  border: 1px solid rgba(5, 5, 5, 0.1);
  padding: 10px;
  color: ${p => p.theme.colors.dark};
  transition: ${p => p.theme.transitions.default};
  ${({ theme }) => theme.mq.tabletOnly} {
    padding: 12px;
  }

  &:hover {
    background-color: ${theme.colors.dark};
    color: ${p => p.theme.colors.light};
  }
  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(5, 5, 5, 0.2);
  }
`;
