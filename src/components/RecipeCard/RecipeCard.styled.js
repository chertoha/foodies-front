import styled from "styled-components";
import { numberTextRows } from "styles/atomic";

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
  ${numberTextRows(1)}
`;

export const DescriptionCardWrapper = styled.div`
  ${numberTextRows(2)}
  margin-top: 8px;
  margin-bottom: 8px;
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
