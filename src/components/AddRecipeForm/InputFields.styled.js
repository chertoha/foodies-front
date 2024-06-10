import styled from "styled-components";
import theme from "styles/theme";

export const FieldsInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  ${({ theme }) => theme.mq.tabletOnly} {
    gap: 10px;
  }
`;
