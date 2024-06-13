import styled from "styled-components";
import { body1, px, py } from "styles/atomic";

export const RecipePreparationButton = styled.button`
  width: 260px;
  color: ${({ theme, $isFavorite }) => ($isFavorite ? theme.colors.light : theme.colors.dark)};
  ${body1()}
  text-transform: uppercase;
  display: flex;
  ${py("14")};
  ${px(5)};
  cursor: pointer;
  justify-content: center;
  align-items: center;
  border-radius: ${({ theme }) => theme.radii.lg};
  border: 1px solid rgba(5, 5, 5, 0.12);
  background-color: ${({ theme, $isFavorite }) =>
    $isFavorite ? theme.colors.dark : theme.colors.light};
  transition: ${({ theme }) => theme.transitions.default};
  ${({ theme }) => theme.mq.tablet} {
    ${py(4)};
    ${px(8)};
  }

  &:hover {
    color: ${({ theme }) => theme.colors.light};
    background-color: ${({ theme }) => theme.colors.dark};
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 1px rgba(5, 5, 5, 0.1);
  }
`;
