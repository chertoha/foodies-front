import styled from "styled-components";
import { pb, pt, py } from "styles/atomic";

export const RecipeInfoContainer = styled.div`
  ${pb(16)}
  ${({ theme }) => theme.mq.tablet} {
    ${pb(25)}
  }
  ${({ theme }) => theme.mq.desktop} {
    display: flex;
    flex-direction: row;
    ${pt(10)}
    ${pb(30)}
    gap: 80px;
  }
`;

export const RecipeImageWrapper = styled.div`
  ${py(8)}
  ${({ theme }) => theme.mq.tablet} {
    ${py(10)}
  }
  ${({ theme }) => theme.mq.desktop} {
    min-width: 551px;
    padding-top: 0px;
    padding-bottom: 0px;
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
