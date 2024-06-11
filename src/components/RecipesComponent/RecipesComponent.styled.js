import styled from "styled-components";
import { mt } from "styles/atomic";
import theme from "styles/theme";

export const RecipesWrapper = styled("div")`
  display: flex;
  justify-content: center;
  flex-direction: column;

  ${theme.mq.mobileOnly} {
  }

  ${theme.mq.tablet} {
  }

  ${theme.mq.desktop} {
    flex-direction: row;
    gap: 40px;
  }
`;
export const RecipeComponentList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  ${mt(8)};
  ${({ theme }) => theme.mq.tabletOnly} {
    flex-direction: row;
    column-gap: 20px;
    row-gap: 40px;
    ${mt(10)};
  }
  ${({ theme }) => theme.mq.desktop} {
    flex-direction: row;
    gap: 20px;
    width: 910px;
  }
`;

export const RecipeComponentItem = styled.li`
  ${theme.mq.tablet} {
    flex-basis: calc((100% - 20px) / 2);
  }

  ${theme.mq.desktop} {
    flex-basis: calc((100% - 60px) / 4);
  }
`;
export const RecipeSubDiv = styled.div`
  display: flex;

  ${({ theme }) => theme.mq.tabletOnly} {
  }
  ${({ theme }) => theme.mq.desktop} {
    width: 910px;
  }
`;
