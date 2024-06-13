import styled from "styled-components";
import { px, py } from "styles/atomic";
import theme from "styles/theme";

export const ButtonHeart = styled.button`
  background-color: ${p => (p.$isFavorite ? theme.colors.accent : theme.colors.light)};
  color: ${p => (p.$isFavorite ? theme.colors.light : theme.colors.dark)};
  border-radius: ${({ theme }) => theme.radii.lg};
  border: 1px solid rgba(5, 5, 5, 0.1);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  ${py("10")};
  ${px("10")};
  transition: ${p => p.theme.transitions.default};
  ${({ theme }) => theme.mq.tablet} {
    ${py(3)};
    ${px(3)};
  }

  &:hover {
    background-color: ${p => p.theme.colors.dark};
    color: ${p => p.theme.colors.light};
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 1px rgba(5, 5, 5, 0.1);
  }
`;
