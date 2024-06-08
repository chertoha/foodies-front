import styled from "styled-components";
import theme from "styles/theme";

export const RecipePopularContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
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
  ${theme.mq.tablet} {
    flex-basis: calc((100% - 20px) / 2);
  }

  ${theme.mq.desktop} {
    flex-basis: calc((100% - 60px) / 4);
  }
`;
