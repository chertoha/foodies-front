import { Button } from "components/MainButton/MainButton.styled";
import styled, { css } from "styled-components";
import theme from "../../styles/theme";

const buttonColors = {
  clear: css`
    border: none;
    background: none;
    color: #050505;
  `,
  black: css`
    background-color: ${theme.colors.accent};
    color: ${theme.colors.light};
  `,
};

export const SlideButton = styled(Button)`
  font-family: Mulish;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: 18px;
  letter-spacing: -0.24px;
  text-transform: uppercase;

  width: 104px;
  position: absolute;
  padding: 14px 28px;

  cursor: pointer;
  transition: transform 0.4s ease;
  transform: ${props => (props.$position === "left" ? "translateX(0)" : "translateX(104px)")};
  ${props => buttonColors[props.$colors]};
`;

export const BtnWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 136px;
  height: 58px;
  background-color: #fff;
  border-radius: 30px;
  border: 1px solid #333;

  ${theme.mq.tablet} {
    width: 208px;
    height: 50px;
  }
`;
