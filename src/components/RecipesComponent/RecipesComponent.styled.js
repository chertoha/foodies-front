import styled from "styled-components";
import {} from "styles/atomic";
import theme from "styles/theme";

export const RecipesWrapper = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  ${theme.mq.mobileOnly} {
  }

  ${theme.mq.tablet} {
  }

  ${theme.mq.desktop} {
    justify-content: flex-start;
  }
`;
