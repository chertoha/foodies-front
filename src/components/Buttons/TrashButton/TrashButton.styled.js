import styled from "styled-components";
import { px, py } from "styles/atomic";
import theme from "styles/theme";

export const ButtonTrash = styled.button`
  background-color: ${p => (p.$isFavorite ? theme.colors.accent : theme.colors.light)};
  color: ${p => (p.$isFavorite ? theme.colors.light : theme.colors.dark)};
  border-radius: ${({ theme }) => theme.radii.lg};
  border: 1px solid rgba(5, 5, 5, 0.1);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  transition: ${p => p.theme.transitions.default};
  ${({ theme }) => theme.mq.tabletOnly} {
    ${py(3)};
    ${px(3)};
  }
  height: 48px;
  width: 48px;
<<<<<<< HEAD
  @media screen and (min-width: 767px) {
=======
  @media screen and (min-width: 767px) {
>>>>>>> cb3906bb024b43bc9ee3a0be2cf644751ece2b65
    height: 56px;
    width: 56px;
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
