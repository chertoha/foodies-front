import styled from "styled-components";
import theme from "styles/theme";

export const CardContainer = styled.li`
  position: relative;
  width: 100%;
  height: 250px;
  border-radius: 20px;
  overflow: hidden;
  margin: 0;
  padding: 0;
  list-style: none;

  ${theme.mq.tablet} {
    height: 369px;
    border-radius: 30px;
    /* width: ${props => (props.$large ? "100%" : "calc(50% - 10px)")}; */
  }

  /* ${theme.mq.desktop} {
    width: ${props => (props.$large ? "calc(40% - 13.33px)" : "calc(30% - 13.33px)")};
  } */
`;

export const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border: none;
  outline: none;
`;

export const ButtonsContainer = styled.div`
  position: absolute;
  bottom: 16px;
  left: 16px;
  display: flex;
  align-items: center;
  gap: var(--borderRadius, 4px);
`;

export const CardBadge = styled.div`
  display: flex;
  padding: 8px 12px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 30px;
  border: 1px solid rgba(255, 255, 255, 0.4);
  background: rgba(255, 255, 255, 0.3);
  color: rgba(255, 255, 255, 1);

  ${theme.mq.tablet} {
    padding: 10px 14px;
  }
`;

export const CardButton = styled.button`
  display: flex;
  padding: 11px;
  align-items: flex-start;
  gap: 10px;
  border-radius: 30px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: rgba(255, 255, 255, 1);
  cursor: pointer;
  font-size: 16px;
`;
