import styled from "styled-components";
import { mt } from "styles/atomic";
import theme from "styles/theme";

export const RecipePopularContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const RecipePopularList = styled.ul`
  width: 100%;
  /* display: flex; */
  /* flex-wrap: wrap; */
  gap: 20px;
  display: grid;
  grid-template-columns: 1fr;
  ${mt(8)};

  ${theme.mq.notDesktop} {
    flex-wrap: wrap;
  }

  ${({ theme }) => theme.mq.tablet} {
    flex-direction: row;
    column-gap: 20px;
    row-gap: 40px;
    ${mt(10)};
    grid-template-columns: 1fr 1fr;
  }
  ${({ theme }) => theme.mq.desktop} {
    flex-direction: row;
    gap: 20px;

    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

export const RecipeListItem = styled.li`
  /* width: 100%; */
  ${theme.mq.tablet} {
    /* flex-basis: calc((100% - 20px) / 2); */
  }

  ${theme.mq.desktop} {
    /* flex-basis: calc((100% - 60px) / 4); */
  }
`;
