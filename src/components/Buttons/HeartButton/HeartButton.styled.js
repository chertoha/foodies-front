import styled from "styled-components";
import theme from "styles/theme";

export const ButtonHeart = styled.button`
  background-color: ${props => (props.isFavorite ? theme.colors.accent : theme.colors.light)};
  color: ${props => props.theme.colors.light};
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
    fill: ${props => (props.isFavorite ? props.theme.colors.light : props.theme.colors.dark)};
  }

  &:hover {
    background-color: ${props => props.theme.colors.dark};
    svg {
      fill: ${props => props.theme.colors.light};
    }
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(5, 5, 5, 0.2);
  }
`;
