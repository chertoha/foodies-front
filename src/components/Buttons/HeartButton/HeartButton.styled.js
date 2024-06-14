import styled from "styled-components";
import { px, py } from "styles/atomic";

export const ButtonHeart = styled.button`
  background-color: ${({ theme, $isFavorite }) =>
    $isFavorite ? theme.colors.dark : theme.colors.light};
  color: ${({ theme, $isFavorite }) => ($isFavorite ? theme.colors.light : theme.colors.dark)};
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
  ${({ theme }) => theme.mq.desktop} {
    &:hover {
      color: ${({ theme }) => theme.colors.light};
      background-color: ${({ theme }) => theme.colors.dark};
    }

    &:focus {
      outline: none;
      box-shadow: 0 0 0 3px rgba(5, 5, 5, 0.2);
    }
  }
`;
