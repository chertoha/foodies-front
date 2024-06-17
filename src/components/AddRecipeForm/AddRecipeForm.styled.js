import styled from "styled-components";
import theme from "styles/theme";
import { body1, mt } from "styles/atomic";

export const FormFields = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DescriptionContainer = styled.div`
  width: 100%;
  border-bottom: 1px rgba(5, 5, 5, 0.12) solid;
  padding-bottom: 16px;

  display: flex;
  justify-content: space-between;
`;
export const IngredientDescription = styled.div`
  ${theme.mq.mobileOnly} {
    width: 100%;
    flex-direction: column;
    gap: 20px;
  }

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 649px;
  gap: 20px;
`;

export const AddIngredientButton = styled.button`
  ${theme.mq.mobileOnly} {
    width: 100%;
    margin-top: 24px;
  }

  ${theme.mq.tablet} {
    max-width: 279px;
  }

  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: -0.32px;
  text-transform: uppercase;

  display: flex;
  padding: 16px 32px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 30px;
  border: 1px solid rgba(5, 5, 5, 0.9);

  transition: ${p => p.theme.transitions.default};
  &:hover,
  &:focus {
    border-radius: 30px;
    background-color: ${p => p.theme.colors.dark};
    color: ${p => p.theme.colors.light};
  }
`;

export const InputSymbolsCounter = styled.p`
  color: rgba(5, 5, 5, 0.6);

  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: -0.28px;
`;
export const Form = styled.form`
  width: 100%;
  margin-top: 40px;
  display: flex;
  align-items: flex-start;
  gap: 32px;

  ${theme.mq.mobileOnly} {
    flex-direction: column;

    justify-content: center;
    align-items: center;
    margin-top: 32px;
  }

  ${theme.mq.tablet} {
    gap: 80px;
  }

  ${theme.mq.tabletOnly} {
    display: inline-flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 80px;
  }
`;

export const IngredientsSelectorWrapper = styled.div`
  @media screen and (max-width: 767px) {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  ${theme.mq.mobileOnly} {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const IngredientsWrapper = styled.div`
  ${theme.mq.mobileOnly} {
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-top: 20px;
  }

  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 60px;
`;

export const ImageField = styled.div`
  ${theme.mq.notDesktop} {
    width: 100%;
  }

  width: 100%;
`;

export const FieldsInputStyled = styled.input`
  width: 100%;
  border: none;

  font-family: "Mulish", sans-serif;
  ${body1()};

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
  font-family: "Mulish", sans-serif;

  font-size: 18px;
  font-style: normal;
  font-weight: 800;
  line-height: 28px;
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

  ${theme.mq.mobile} {
    font-size: 24px;
  }
`;

export const FormTitles = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const CookingCategory = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: row;
  gap: 20px;

  ${theme.mq.mobileOnly} {
    flex-direction: column;
  }

  ${theme.mq.tablet} {
    margin-top: 60px;
  }
`;

export const InstructionContainer = styled.textarea`
  font-family: "Mulish", sans-serif;

  ${theme.mq.mobileOnly} {
    color: rgba(5, 5, 5, 0.8);

    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: -0.28px;
  }

  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.32px;
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
  ${mt(16)};
  ${theme.mq.mobileOnly} {
    gap: 16px;
  }

  ${theme.mq.tablet} {
    ${mt(20)};
  }

  display: flex;
  flex-direction: column;
  gap: 40px;
`;
export const InstructionCounterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
export const YulpErrorMessage = styled.p`
  ${theme.mq.mobileOnly} {
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: -0.28px;
  }

  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.32px;
  color: ${({ theme }) => theme.colors.error};
`;

export const ButtonsWrapper = styled.div`
  ${theme.mq.mobileOnly} {
    margin-top: 32px;
  }

  display: flex;
  gap: 8px;
  margin-top: 80px;
`;
export const SelectorCategories = styled.div`
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;

  ${theme.mq.tablet} {
    gap: 16px;
    width: 315px;
  }
`;

export const SelectorIngredientsContainer = styled.div`
  width: 100%;
`;

export const IngredientQuantity = styled.input`
  font-family: "Mulish", sans-serif;

  ${theme.mq.mobileOnly} {
    color: rgba(5, 5, 5, 0.8);
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: -0.28px;
  }

  padding-bottom: 16px;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.32px;
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

export const FieldsInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  width: 100%;

  ${theme.mq.tablet} {
    width: 649px;
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

export const SelectorAreas = styled.div`
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 20px;

  ${theme.mq.tablet} {
    max-width: 315px;
    margin-top: 60px;
  }
`;
