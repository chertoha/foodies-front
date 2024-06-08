import styled from "styled-components";

export const RecipeInfoContainer = styled.div`
  padding-bottom: 64px;
  ${({ theme }) => theme.mq.tablet} {
    padding-bottom: 100px;
  }
  ${({ theme }) => theme.mq.desktop} {
    display: flex;
    flex-direction: row;
    padding-bottom: 64px;
    padding-bottom: 120px;
    padding-top: 40px;
    gap: 80px;
  }
`;

export const RecipeImageWrapper = styled.div`
  width: 100%;
  padding-top: 32px;
  padding-bottom: 32px;
  ${({ theme }) => theme.mq.tabletOnly} {
    padding-top: 40px;
    padding-bottom: 40px;
  }
  ${({ theme }) => theme.mq.desktop} {
    padding-top: 0px;
    padding-bottom: 0px;
    flex: 1;
  }
`;

export const Image = styled.img`
  width: 100%;
  display: block;
  height: auto;
  border-radius: ${({ theme }) => theme.radii.lg};
`;

export const RecipeContentWrapper = styled.div`
  width: 100%;
  ${({ theme }) => theme.mq.desktop} {
    display: flex;
    flex-direction: column;
    gap: 20px;
    flex: 1;
  }
`;
