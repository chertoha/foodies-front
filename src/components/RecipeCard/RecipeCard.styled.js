import styled from "styled-components";
import { body1, mb, my, numberTextRows } from "styles/atomic";
import theme from "styles/theme";

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: ${({ theme }) => theme.radii.lg};
`;

export const ImageWrapper = styled("div")`
  height: 230px;
  border-radius: ${({ theme }) => theme.radii.lg};
  overflow: hidden;
  ${mb(4)};

  ${theme.mq.tablet} {
    height: 275px;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
  /* height: 230px; */

  /* ${theme.mq.tablet} {
    height: 275px;
  } */
`;

export const TitleCardWrapper = styled.div`
  max-width: 280px;
  ${numberTextRows(1)}
  overflow: hidden;
  text-overflow: ellipsis;

  ${theme.mq.tabletOnly} {
    max-width: none;
    width: 320px;
  }
  @media (max-width: 320px) {
    ${numberTextRows(2)}
    width: 290px;
  }
  ${theme.mq.desktop} {
    width: 280px;
  }
`;

export const ActionsContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;

export const Actions = styled.div`
  display: flex;
  flex-direction: row;
  gap: 4px;
`;

export const Text = styled.p`
  ${body1()}
  ${numberTextRows(2)}
  ${my(2)}
  min-height: 40px;
  ${theme.mq.tablet} {
    min-height: 48px;
  }
`;
