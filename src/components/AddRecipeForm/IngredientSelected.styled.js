import styled from "styled-components";
// import theme from "styles/theme";

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
