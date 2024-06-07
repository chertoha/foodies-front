import styled from "styled-components";
import { heading3 } from "styles/atomic";

export const RecipeMainInfoContainer = styled.div``;

export const RecipeTitle = styled.h1`
  ${heading3()}
  text-transform: uppercase;
`;

export const AuthorInfoContainer = styled.div`
  align-items: center;
  margin-top: 20px;
`;

export const AuthorName = styled.span`
  display: block;
  font-size: 16px;

  margin-top: 4px;
`;
