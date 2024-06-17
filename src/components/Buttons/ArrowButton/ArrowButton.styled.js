import styled from "styled-components";
import theme from "styles/theme";
import { Link } from "react-router-dom";
import { px, py } from "styles/atomic";

export const ButtonArrow = styled(Link)`
  background-color: ${theme.colors.accent};
  background: none;
  text-decoration: none;
  display: flex;
  align-items: center;
  border-radius: ${({ theme }) => theme.radii.lg};
  border: 1px solid rgba(5, 5, 5, 0.1);
  ${py("10")};
  ${px("10")};
  color: ${p => p.theme.colors.dark};
  transition: ${p => p.theme.transitions.default};

  ${({ theme }) => theme.mq.tablet} {
    ${py(3)};
    ${px(3)};
  }

  ${({ theme }) => theme.mq.desktop} {
    &:hover {
      background-color: ${theme.colors.dark};
      color: ${p => p.theme.colors.light};
    }
    &:focus {
      outline: none;
      box-shadow: 0 0 0 3px rgba(5, 5, 5, 0.2);
    }
  }
`;
