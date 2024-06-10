import styled from "styled-components";
import { pb, pt } from "styles/atomic";

export const RecipePageContainer = styled.div`
  ${pt(16)};
  ${pb(25)};
  ${({ theme }) => theme.mq.desktop} {
    ${pt(20)};
    ${pb(30)};
  }
`;
