import styled from "styled-components";
import { Link } from "react-router-dom";

export const UserBarMenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 6px;
  width: 148px;
  height: 74px;
  background-color: #050505;
  border-radius: 15px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 16px;
`;

export const UserBarMenuLink = styled(Link)`
  color: #fff;
  font-family: Mulish;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: 18px;
  letter-spacing: -0.24px;
  text-transform: uppercase;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;
