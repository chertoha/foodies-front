import styled from "styled-components";
import { body1, mb, my, numberTextRows } from "styles/atomic";
import theme from "styles/theme";

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: ${({ theme }) => theme.radii.lg};
`;

export const Image = styled.img`
  width: 100%;
  height: 230px;
  border-radius: ${({ theme }) => theme.radii.lg};
  ${mb(4)};
  ${theme.mq.tablet} {
    height: 275px;
  }
`;

export const TitleCardWrapper = styled.div`
  max-width: 290px;
  ${numberTextRows(1)}
  overflow: hidden;
  text-overflow: ellipsis;

  ${theme.mq.tabletOnly} {
    max-width: 340px;
  }
`;

export const ActionsContainer = styled.div`
  display: flex;
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
