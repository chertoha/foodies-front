import styled from "styled-components";

export const StyledCounter = styled.div`
  @media screen and (max-width: 768px) {
    align-items: flex-start;
  }
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  flex-direction: column;
  width: 100%;
`;

export const StyledButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;

export const StyledCounterValue = styled.input`
  width: ${p => p.width}px;
  border: none;
  text-align: right;
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  outline: none;
`;

export const StyledCounterFields = styled.div`
  display: flex;

  align-items: center;
  gap: 8px;
`;
