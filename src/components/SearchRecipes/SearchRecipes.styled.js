import styled from "styled-components";
import {} from "styles/atomic";
import theme from "styles/theme";

export const SearchRecipesForm = styled("form")`
  display: flex;
  align-items: center;
  flex-direction: column;
  row-gap: 14px;

  width: 100%;
  ${theme.mq.mobileOnly} {
    max-width: 343px;
  }

  ${theme.mq.tablet} {
    flex-direction: row;
    column-gap: 14px;
  }

  ${theme.mq.desktop} {
    flex-direction: column;
    column-gap: 14px;
    width: 330px;
  }

  #ingredients {
    width: 100%;
  }
  #areas {
    width: 100%;
  }
`;

export const SearchWrapp = styled("div")`
  width: 100%;
  ${theme.mq.mobileOnly} {
    max-width: 343px;
  }

  ${theme.mq.tablet} {
    max-width: 345px;
  }

  ${theme.mq.desktop} {
    max-width: 330px;
  }
`;
