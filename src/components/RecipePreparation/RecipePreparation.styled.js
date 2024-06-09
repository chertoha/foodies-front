import styled from "styled-components";
import { body1, mb, px, py } from "styles/atomic";

export const RecipePreparationContainer = styled.div`
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const PreparationTitleWrapper = styled.div`
  ${mb(5)};
`;

export const PreparationDescriptionWrapper = styled.div`
  ${mb(8)};
  ${({ theme }) => theme.mq.tablet} {
    ${mb(10)};
  }
  & > *:not(:last-child) {
    ${mb(5)};
  }
`;

export const RecipePreparationButton = styled.button`
  color: ${({ theme }) => theme.colors.dark};
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
  background-color: ${p => (p.$isFavorite ? p.theme.colors.dark : p.theme.colors.light)};
  transition: ${p => p.theme.transitions.default};
  ${({ theme }) => theme.mq.tabletOnly} {
    ${py(4)};
    ${px(8)};
  }

  &:hover {
    color: ${({ theme }) => theme.colors.light};
    background-color: ${p => p.theme.colors.dark};
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 1px rgba(5, 5, 5, 0.1);
  }
`;
export const ReadMoreButton = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
  font-size: ${body1()};
  text-decoration: underline;

  &:hover {
    color: ${({ theme }) => theme.colors.dark};
  }

  &:focus {
    outline: none;
  }
`;
