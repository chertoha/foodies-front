import styled from "styled-components";
import theme from "styles/theme";

export const AllCategoriesCardContainer = styled.li`
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

  ${theme.mq.tablet} {
    height: 369px;
    border-radius: 30px;
  }
`;
