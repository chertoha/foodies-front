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
  margin-top: 60px;
  display: flex;
  flex-direction: row;
  gap: 20px;
`;

export const InstructionContainer = styled.textarea`
  width: 100%;
  height: auto;
  resize: none;

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

export const InstructionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
export const InstructionCounterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  gap: 20px;
`;
export const SelectorCategories = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
export const IngredientDescription = styled.div`
  display: flex;

  justify-content: space-between;
  width: 649px;
`;

export const SelectorIngredientsContainer = styled.div`
  width: 279px;
`;

export const IngredienQuantity = styled.input`
  width: 314px;
  border: none;
  border-bottom: 1px solid rgba(5, 5, 5, 0.12);
  outline: none;
  &:focus,
  &:hover {
    border-bottom-color: #050505;
  }
`;

export const AddIngredientButton = styled.button`
  color: #050505;

  font-family: Mulish;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px; /* 150% */
  letter-spacing: -0.32px;
  text-transform: uppercase;
  margin-top: 40px;
  display: flex;
  padding: 16px 32px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 30px;
  border: 1px solid rgba(5, 5, 5, 0.9);
  &:hover,
  &:focus {
    border-radius: 30px;
    background-color: ${p => p.theme.colors.dark};
    color: ${p => p.theme.colors.light};
  }
`;
export const FieldsInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  /* width: 100%; */
  ${({ theme }) => theme.mq.tabletOnly} {
    gap: 10px;
  }
`;

export const BtnDelete = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  right: 0;
  top: 0;
`;
