import styled from "styled-components";
import theme from "styles/theme";

export const AllCategoriesCardContainer = styled.div`
  position: relative;
  width: 100%;
  height: 250px;
  border-radius: 20px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;
  margin: 0;
  padding: 0;
  list-style: none;
  cursor: pointer;
  color: white;
  text-align: center;
  text-decoration: none;
  transition: background 0.3s ease;

  ${theme.mq.tablet} {
    height: 369px;
    border-radius: 30px;
  }

  &:hover {
    background-color: rgba(0, 0, 0, 0.8);
  }
`;
