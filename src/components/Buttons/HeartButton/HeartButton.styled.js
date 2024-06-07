import styled from "styled-components";
import theme from "styles/theme";

export const ButtonHeart = styled.button`
  background-color: ${p => (p.$isFavorite ? theme.colors.accent : theme.colors.light)};
  color: ${p => p.theme.colors.light};
  border-radius: ${({ theme }) => theme.radii.lg};
  border: 1px solid rgba(5, 5, 5, 0.1);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  transition: ${p => p.theme.transitions.default};
  ${({ theme }) => theme.mq.tabletOnly} {
    padding: 12px;
  }

  svg {
    fill: ${p => (p.$isFavorite ? p.theme.colors.light : p.theme.colors.dark)};
  }

  &:hover {
    background-color: ${p => p.theme.colors.dark};
    svg {
      fill: ${p => p.theme.colors.light};
    }
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 1px rgba(5, 5, 5, 0.1);
  }
`;
