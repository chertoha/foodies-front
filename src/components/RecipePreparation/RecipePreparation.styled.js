import styled from "styled-components";
import { body1, mb } from "styles/atomic";

export const RecipePreparationContainer = styled.div`
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const PreparationTitleWrapper = styled.div`
  ${mb(5)};
`;

export const PreparationDescriptionWrapper = styled.div`
  ${mb(8)};
  ${({ theme }) => theme.mq.tablet} {
    ${mb(10)};
  }
  & > *:not(:last-child) {
    ${mb(5)};
  }
`;

export const ReadMoreButton = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
  font-size: ${body1()};
  text-decoration: underline;

  &:hover {
    color: ${({ theme }) => theme.colors.dark};
  }

  &:focus {
    outline: none;
  }
`;
