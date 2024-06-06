import styled from "styled-components";
import theme from "styles/theme";

export const UserBarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  align-items: center;
  width: 122px;
  height: 32px;
  border-radius: 30px;
  background-color: #050505;
  border: 1px solid #ccc;
  ${theme.mq.tablet} {
    width: 148px;
    height: 50px;
  }
`;

export const Wrapper = styled.div`
  width: 122px;
  display: flex;
  gap: 6px;
  height: 100%;
  ${theme.mq.tablet} {
    width: 148px;
    display: flex;
    gap: 6px;
    height: 100%;
  }
`;

export const UserName = styled.p`
  color: #fff;
  font-family: Mulish;
  font-size: 12px;
  font-weight: 700;
  line-height: 18px;
  letter-spacing: -0.24px;
  text-transform: uppercase;
  margin: 0;
`;

export const WrappersIcons = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;
