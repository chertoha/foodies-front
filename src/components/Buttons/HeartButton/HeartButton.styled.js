import styled from "styled-components";
import theme from "styles/theme";

export const ButtonHeart = styled.button`
  background-color: ${props => (props.isFavorite ? theme.colors.accent : theme.colors.light)};
  color: ${theme.colors.light};
  border-radius: ${({ theme }) => theme.radii.lg};
  border: 1px solid rgba(5, 5, 5, 0.1);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  svg {
    fill: ${props => (props.isFavorite ? theme.colors.light : theme.colors.dark)};
  }
`;
