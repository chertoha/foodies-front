import styled from "styled-components";
import { body1 } from "styles/atomic";

export const RecipeIngredientsContainer = styled.div`
  padding-top: 32px;
  padding-bottom: 32px;
  ${({ theme }) => theme.mq.tabletOnly} {
    padding-top: 40px;
    padding-bottom: 40px;
  }
`;
export const IngredientsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(45%, 1fr));
  gap: 16px;
  list-style: none;
  padding: 0;
  margin-top: 20px;
  ${({ theme }) => theme.mq.tablet} {
    grid-template-columns: repeat(3, calc(33.33% - 20px));
    gap: 20px;
  }
`;

export const IngredientItem = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  column-gap: 10px;
  ${({ theme }) => theme.mq.tablet} {
    column-gap: 15px;
  }
`;

export const ImageWrapper = styled.div`
  display: flex;
  width: 55px;
  height: 55px;
  border-radius: 15px;
  padding: 10px;

  border: 1px solid rgba(5, 5, 5, 0.1);
  ${({ theme }) => theme.mq.tablet} {
    width: 60px;
    height: 60px;
    padding: 15px;
  }
`;

export const IngredientsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  span {
    ${body1()}
    color: ${({ theme }) => theme.colors.accent};
  }
  p {
    ${body1()}
    color: rgba(5, 5, 5, 0.60);
  }
`;
