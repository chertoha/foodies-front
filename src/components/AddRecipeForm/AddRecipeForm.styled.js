import styled from "styled-components";
// import theme from "styles/theme";

export const FormFields = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const DescriptionContainer = styled.div`
  @media screen and (max-width: 767px) {
    width: 100%;
    border-bottom: 1px rgba(5, 5, 5, 0.12) solid;
    padding-bottom: 16px;
  }
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 649px;
`;
export const IngredientDescription = styled.div`
  @media screen and (max-width: 767px) {
    width: 100%;
    flex-direction: column;
    gap: 20px;
    margin-top: 8px;
  }
  display: flex;
  justify-content: space-between;
  width: 649px;
`;

export const AddIngredientButton = styled.button`
  @media screen and (max-width: 767px) {
    width: 100%;
  }
  @media screen and (min-width: 768px) and (max-width: 1439px) {
    max-width: 279px;
  }

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

export const InputSymbolsCounter = styled.p`
  color: rgba(5, 5, 5, 0.6);

  /* Mobile/Main text */
  font-family: Mulish;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 142.857% */
  letter-spacing: -0.28px;
`;
export const Form = styled.form`
  margin-top: 40px;
  display: flex;
  align-items: flex-start;
  gap: 32px;
  @media screen and (max-width: 767px) {
    flex-direction: column;
    /* gap: 80px; */
    justify-content: center;
    align-items: center;
    margin-top: 32px;
  }
  @media screen and (min-width: 768px) and (max-width: 1439px) {
    display: inline-flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 80px;
  }
`;
export const IngredientsSelectorWrapper = styled.div`
  @media screen and (max-width: 767px) {
    padding-top: 8px;
  }
  @media screen and (min-width: 768px) {
    padding-top: 16px;
  }
`;

export const ImageField = styled.div`
  @media screen and (max-width: 1439px) {
    width: 100%;
  }
  @media screen {
  }
  /* display: flex; */
  width: 100%;
`;

export const FieldsInputStyled = styled.input`
  width: 100%;
  border: none;
  /* border-bottom: 1px solid rgba(5, 5, 5, 0.12); */
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

export const RecipeNameContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const RecipeNameInput = styled.input`
  width: 100%;
  border: none;

  font-family: Mulish;
  font-size: 18px;
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

  @media screen and (min-width: 376px) {
    font-size: 24px;
  }
  /* @media screen and (min-width: 768px) {
    
  } */
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
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
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
  gap: 8px;
  /* width: 100%; */
`;
export const SelectorCategories = styled.div`
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const SelectorIngredientsContainer = styled.div`
  width: 100%;
`;

export const IngredienQuantity = styled.input`
  width: 100%;
  border: none;
  border-bottom: 1px solid rgba(5, 5, 5, 0.12);
  outline: none;
  &:focus,
  &:hover {
    border-bottom-color: #050505;
  }
`;

export const FieldsInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  ${({ theme }) => theme.mq.tabletOnly} {
    gap: 10px;
  }
`;

export const BtnDelete = styled.button`
  align-self: flex-end;
  width: 16px;
  height: 16px;

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
