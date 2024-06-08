import styled from "styled-components";

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
  padding: 10px;
`;

export const RecipeTime = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: rgba(5, 5, 5, 0.6);
  border-radius: ${({ theme }) => theme.radii.md};
  border: 1px solid rgba(5, 5, 5, 0.12);
  padding: 10px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const AuthorInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
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
