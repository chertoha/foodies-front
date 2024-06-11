import styled from "styled-components";
import { body1, mt, my, px, py } from "styles/atomic";

export const RecipeMainInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const RecipeCategory = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: rgba(5, 5, 5, 0.6);
  border-radius: 20px;
  border: 1px solid rgba(5, 5, 5, 0.12);
  ${px("10")};
  ${py("10")};
`;

export const RecipeTime = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: rgba(5, 5, 5, 0.6);
  border-radius: ${({ theme }) => theme.radii.md};
  border: 1px solid rgba(5, 5, 5, 0.12);
  ${px("10")};
  ${py("10")};
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 8px;
  ${my(5)};
`;

export const AuthorInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  ${mt(4)};
  gap: 16px;
`;

export const AuthorTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CreatedByText = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: rgba(5, 5, 5, 0.6);
`;

export const OwnerTitle = styled.span`
  ${body1()}
  color: ${({ theme }) => theme.colors.dark};
`;
