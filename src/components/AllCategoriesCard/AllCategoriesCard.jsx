import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import theme from "styles/theme";

const CardContainer = styled.li`
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
    /* width: ${props => (props.large ? "100%" : "calc(50% - 10px)")}; */
    height: 369px;
    border-radius: 30px;
  }

  ${theme.mq.desktop} {
    /* width: ${props => (props.large ? "calc(40% - 13.33px)" : "calc(30% - 13.33px)")}; */
  }
`;

// export const CardContainer = styled.li`
//   position: relative;
//   width: 100%;
//   height: 250px;
//   border-radius: 30px;
//   overflow: hidden;
//   margin: 0;
//   padding: 0;
//   list-style: none;

//   ${theme.mq.tablet} {
//     height: 369px;
//     /* width: ${props => (props.$large ? "100%" : "calc(50% - 10px)")}; */
//   }

//   /* ${theme.mq.desktop} {
//     width: ${props => (props.$large ? "calc(40% - 13.33px)" : "calc(30% - 13.33px)")};
//   } */
// `;

const AllCategoriesCard = () => (
  <CardContainer>
    <Link
      to="/categories/all"
      style={{
        color: "white",
        textAlign: "center",
        textDecoration: "none",
      }}
    >
      <h2>ALL CATEGORIES</h2>
    </Link>
  </CardContainer>
);

export default AllCategoriesCard;
