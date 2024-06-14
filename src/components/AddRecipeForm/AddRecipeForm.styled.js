import styled from "styled-components";
// import theme from "styles/theme";

export const Form = styled.form`
  margin-top: 40px;
  display: flex;
  align-items: flex-start;
  gap: 80px;
`;
export const ImageField = styled.div`
  display: flex;
  width: 550px;
`;

export const FieldsInputStyled = styled.input`
  width: 551px;
  border: none;
  border-bottom: 1px solid rgba(5, 5, 5, 0.12);
  outline: none;
  &:focus,
  &:hover {
    border-bottom-color: #050505;
  }
  &::placeholder {
    color: ${({ $iserror }) => ($iserror ? "red" : "rgba(5, 5, 5, 0.5)")};
  }
  border-bottom-color: ${({ $iserror }) => ($iserror ? "red" : "rgba(5, 5, 5, 0.12)")};
`;

export const DescriptionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 649px;
`;

export const RecipeNameContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 649px;
`;

export const RecipeNameInput = styled.input`
  width: 100%;
  border: none;

  font-family: Mulish;
  font-size: 24px;
  font-style: normal;
  font-weight: 800;
  line-height: 28px; /* 116.667% */
  letter-spacing: -0.48px;
  text-transform: uppercase;
  outline: none;
  &:focus,
  &:hover {
    border-bottom-color: #050505;
  }
  &::placeholder {
    color: ${({ $iserror }) => ($iserror ? "red" : "rgba(5, 5, 5, 0.5)")};
  }
  border-bottom-color: ${({ $iserror }) => ($iserror ? "red" : "rgba(5, 5, 5, 0.12)")};
`;

export const FormTitles = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const CookingCategory = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`;

// export const InstructionContainer = styled.textarea`
//   width: 100%;

//   border: none;
//   border-bottom: 1px solid rgba(5, 5, 5, 0.12);
//   outline: none;
//   &:focus,
//   &:hover {
//     border-bottom-color: #050505;
//   }
//   &::placeholder {
//     color: ${({ $iserror }) => ($iserror ? "red" : "rgba(5, 5, 5, 0.5)")};
//   }
//   border-bottom-color: ${({ $iserror }) => ($iserror ? "red" : "rgba(5, 5, 5, 0.12)")};
// `;

// export const InstrucationWrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 20px;
// `;
// export const InstructionCounterWrapper = styled.div`
//   display: flex;
//   justify-content: space-between;
//   width: 100%;
// `;

// export const ButtonsWrapper = styled.div`
//   display: flex;
//   gap: 20px;
// `;
