import styled from "styled-components";
// import theme from "styles/theme";

export const Form = styled.form`
  align-items: flex-start;
  gap: 80px;
`;

export const FieldsInputStyled = styled.input`
  width: 550px;
  border: none;
  border-bottom: 1px solid rgba(5, 5, 5, 0.12);
  outline: none;
  &:focus,
  &:hover {
    border-bottom-color: #050505;
  }
  &::placeholder {
    color: ${({ iserror }) => (iserror ? "red" : "rgba(5, 5, 5, 0.5)")};
  }
  border-bottom-color: ${({ iserror }) => (iserror ? "red" : "rgba(5, 5, 5, 0.12)")};
`;

export const DescriptionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 649px;
`;
