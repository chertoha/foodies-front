import styled from "styled-components";
import { body1 } from "styles/atomic";

export const RecipePreparationContainer = styled.div`
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const PreparationTitleWrapper = styled.div`
  margin-bottom: 20px;
`;

export const PreparationDescriptionWrapper = styled.div`
  margin-bottom: 32px;
  ${({ theme }) => theme.mq.tablet} {
    margin-bottom: 40px;
  }
  & > *:not(:last-child) {
    margin-bottom: 20px;
  }
`;

export const RecipePreparationButton = styled.button`
  color: ${({ theme }) => theme.colors.dark};
  ${body1()}
  text-transform: uppercase;
  display: flex;
  padding: 14px 20px;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  border-radius: ${({ theme }) => theme.radii.lg};
  border: 1px solid rgba(5, 5, 5, 0.12);
  background-color: ${p => (p.$isFavorite ? p.theme.colors.dark : p.theme.colors.light)};
  transition: ${p => p.theme.transitions.default};
  ${({ theme }) => theme.mq.tabletOnly} {
    padding: 16px 32px;
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
