import styled from "styled-components";
import theme from "styles/theme";

export const CardContainer = styled.li`
  position: relative;
  width: 100%;
  height: 250px;
  border-radius: 30px;
  overflow: hidden;

  ${theme.mq.tablet} {
    width: ${props => (props.$large ? "100%" : "calc(50% - 10px)")};
  }

  ${theme.mq.desktop} {
    width: ${props => (props.$large ? "calc(40% - 13.33px)" : "calc(30% - 13.33px)")};
  }
`;

export const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border: none;
  outline: none;
`;

export const CardBadge = styled.div`
  position: absolute;
  bottom: 10px;
  left: 10px;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  padding: 5px 10px;
  border-radius: 5px;
`;

export const CardButton = styled.button`
  position: absolute;
  bottom: 10px;
  right: 10px;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 16px;
`;
