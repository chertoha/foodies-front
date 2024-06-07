import styled from "styled-components";

export const RecipePageContainer = styled.div`
  padding-top: 64px;
  padding-bottom: 100px;
  ${({ theme }) => theme.mq.desktop} {
    padding-top: 80px;
    padding-bottom: 120px;
  }
`;
