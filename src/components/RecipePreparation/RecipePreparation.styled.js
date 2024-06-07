import styled from "styled-components";
import { body1, heading3 } from "styles/atomic";

export const RecipePreparationContainer = styled.div`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 64px;
  ${({ theme }) => theme.mq.tablet} {
    padding-bottom: 100px;
  }
  ${({ theme }) => theme.mq.desktop} {
    padding-bottom: 120px;
  }
`;

export const RecipePreparationTitle = styled.h3`
  ${heading3()}
  text-transform: uppercase;
  margin-bottom: 20px;
`;

export const RecipePreparationDescription = styled.p`
  ${body1()}
  margin-bottom: 20px;
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
