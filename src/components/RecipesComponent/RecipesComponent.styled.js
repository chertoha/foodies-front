import styled from "styled-components";
import theme from "styles/theme";
import { mt, mb, body2 } from "styles/atomic";
import { Link } from "react-router-dom";

export const BackLink = styled(Link)`
  display: flex;
  gap: 6px;
  color: ${theme.colors.accent};
  ${body2()};
  ${mb(4)};

  font-weight: ${theme.fontWeights.bold};

  cursor: pointer;
  text-transform: uppercase;

  ${theme.mq.tablet} {
    ${mb(5)};
  }
`;
export const Icon = styled("svg")`
  fill: ${theme.colors.accent};
  display: block;
  width: 16px;
  height: 16px;

  ${theme.mq.tablet} {
    width: 18px;
    height: 18px;
  }
`;
export const RecipesWrapper = styled("div")`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 32px;
  ${mt(8)};

  ${theme.mq.tablet} {
    ${mt(10)};
    gap: 40px;
  }

  ${theme.mq.desktop} {
    flex-direction: row;
  }
`;
export const RecipeComponentList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  ${({ theme }) => theme.mq.tabletOnly} {
    flex-direction: row;
    column-gap: 20px;
    row-gap: 40px;
  }
  ${({ theme }) => theme.mq.desktop} {
    flex-direction: row;
    gap: 20px;
    width: 910px;
  }
`;

export const RecipeComponentItem = styled.li`
  width: 100%;

  ${theme.mq.mobileOnly} {
    max-width: 343px;
  }
  ${theme.mq.tablet} {
    max-width: 342px;
    flex-basis: calc((100% - 20px) / 2);
  }

  ${theme.mq.desktop} {
    max-width: 290px;
    flex-basis: calc((100% - 40px) / 3);
  }
`;
export const RecipeSubDiv = styled.div`
  display: flex;

  ${({ theme }) => theme.mq.desktop} {
    width: 910px;
  }
`;
export const TitleWrapp = styled("div")`
  ${mb(4)};

  ${theme.mq.tablet} {
    ${mb(5)};
  }
`;

export const SubTitleWrapp = styled("div")`
  width: 100%;
  ${theme.mq.mobileOnly} {
    max-width: 343px;
  }

  ${theme.mq.tablet} {
    max-width: 540px;
  }
`;
