import styled from "styled-components";

export const IngredientDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 649px;
`;

export const IngredienQuantity = styled.input`
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
`;
