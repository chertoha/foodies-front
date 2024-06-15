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

  &::after {
    content: "";
    pointer-events: none;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(0deg, rgba(5, 5, 5, 0.18) 0%, rgba(5, 5, 5, 0.18) 100%);
  }
  ${theme.mq.tablet} {
    height: 369px;
    border-radius: 30px;
  }
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
  font-weight: 700;

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
  transition: background 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.3);
  }
`;
