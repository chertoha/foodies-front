import styled from "styled-components";
import { body1, my, numberTextRows } from "styles/atomic";
import theme from "styles/theme";

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: ${({ theme }) => theme.radii.lg};
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: ${({ theme }) => theme.radii.lg};
  margin-bottom: 16px;
`;

export const TitleCardWrapper = styled.div`
  max-width: 290px;
  ${numberTextRows(1)}
  overflow: hidden;
  white-space: nowrap;
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
`;
