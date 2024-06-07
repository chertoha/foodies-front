import { Link } from "react-router-dom";
import styled from "styled-components";
import theme from "styles/theme";

export const ButtonArrow = styled(Link)`
  background-color: ${theme.colors.accent};
  color: ${theme.colors.light};
  background: none;
  text-decoration: none;
  display: flex;
  align-items: center;
  border-radius: ${({ theme }) => theme.radii.lg};
  border: 1px solid rgba(5, 5, 5, 0.1);
  padding: 10px;
  svg {
    fill: ${theme.colors.dark};
  }

  &:hover {
    background-color: ${theme.colors.dark};

    svg {
      fill: ${theme.colors.light};
    }
  }
`;
