import styled from "styled-components";
import { heading3 } from "styles/atomic";

export const RecipePopularContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const RecipePopularTitle = styled.h3`
  ${heading3()}
  text-transform: uppercase;
`;

export const RecipeCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  ${({ theme }) => theme.mq.mobileOnly} {
    flex-direction: column;
    gap: 10px;
  }
`;

export const RecipePopularList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 32px;
  ${({ theme }) => theme.mq.tabletOnly} {
    flex-direction: row;
    column-gap: 20px;
    row-gap: 40px;
    margin-top: 40px;
  }
  ${({ theme }) => theme.mq.desktop} {
    flex-direction: row;
    gap: 20px;
  }
`;

export const RecipeListItem = styled.li`
  flex: 1 1 calc(100% - 20px);
  max-width: calc(100% - 20px);

  ${({ theme }) => theme.mq.tabletOnly} {
    flex: 1 1 calc(50% - 20px);
    max-width: calc(50% - 20px);
  }

  ${({ theme }) => theme.mq.desktop} {
    flex: 1 1 calc(25% - 20px);
    max-width: calc(25% - 20px);
  }
`;
