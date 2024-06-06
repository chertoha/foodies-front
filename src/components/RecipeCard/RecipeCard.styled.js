import styled from "styled-components";
import { body1, heading4, numberTextRows } from "styles/atomic";

export const CardWrapper = styled.div`
  display: flex;
  width: 343px;
  flex-direction: column;
  gap: 12px;
  border-radius: ${({ theme }) => theme.radii.lg};
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: ${({ theme }) => theme.radii.lg};
  margin-bottom: 16px;
`;

export const ContentContainer = styled.div`
  padding: 16px;
`;

export const TitleCard = styled.h2`
  ${heading4()}
  text-transform: uppercase;
`;

export const DescriptionCard = styled.p`
  ${body1()}
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
