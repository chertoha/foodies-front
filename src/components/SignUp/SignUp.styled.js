import styled from "styled-components";
import { heading2 } from "styles/atomic";
import theme from "styles/theme";

export const FormWripper = styled("div")`
  width: 100%;
  max-width: 343px;
  height: auto;

  padding: 60px 30px;

  border-radius: 20px;
  background-color: white;

  ${theme.mq.tablet} {
    max-width: 561px;
    padding: 80px;
    border-radius: 30px;
  }

  ${theme.mq.desktop} {
  }
`;
export const TitleStyled = styled("h2")`
  ${heading2};
  text-transform: uppercase;

  ${theme.mq.tablet} {
    font-size: 32px;
    line-height: 1.25;
  }

  ${theme.mq.desktop} {
  }
`;

export const FormStyled = styled("form")`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 14px;

  margin-top: 32px;

  ${theme.mq.tablet} {
    margin-top: 40px;
  }

  ${theme.mq.desktop} {
  }
`;

export const InputStyled = styled.input.attrs(props => props)`
  width: 100%;
  height: 48px;

  padding: 14px 45px 14px 14px;

  font-size: 14px;
  font-weight: 500;
  ligth-height: 1.42;
  letter-spacing: -0.02em;

  border-radius: 30px;
  border: 1px solid ${props => (props.$border ? props.$border : "rgba(5, 5, 5, 0.12)")};
  color: rgba(5, 5, 5, 0.8);

  transition: border 250ms cubic-bezier(0.4, 0, 0.2, 1);
  transition: outline-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:focus {
    outline: 1px solid ${props => (props.$border ? props.$border : "rgba(5, 5, 5, 1)")};
    border: 1px solid ${props => (props.$border ? props.$border : "rgba(5, 5, 5, 1)")};
  }

  ${theme.mq.mobile} {
    width: 283px;
  }

  ${theme.mq.tablet} {
    width: 400px;
    height: 56px;

    padding: 16px 45px 16px 18px;

    font-size: 16px;
    ligth-height: 1.5;
  }

  ${theme.mq.desktop} {
  }
`;

export const InputContainerStyled = styled("div")`
  position: relative;
  width: 100%;

  ${theme.mq.tablet} {
  }

  ${theme.mq.desktop} {
  }
`;

export const IconStyled = styled.svg.attrs(props => props)`
  position: absolute;
  top: 24%;
  left: 85%;
  display: block;
  // stroke: ${props => props.stroke};
  stroke: #050505;

  width: 18px;
  height: 18px;

  ${theme.mq.tablet} {
    top: 24%;
    left: 90%;

    width: 20px;
    height: 20px;

    &:focus,
    &:hover {
      cursor: pointer;
    }
  }
`;

export const ButtonStyled = styled("button")`
  width: 100%;
  height: 48px;

  margin-top: 18px;
  padding: 14px;

  font-size: 14px;
  ligth-height: 1.42;
  font-weight: 700;
  text-transform: uppercase;

  border-radius: 30px;
  border: none;
  color: rgba(255, 255, 255, 0.4);
  background-color: rgba(5, 5, 5, 0.2);
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  ${theme.mq.mobile} {
    width: 283px;
  }

  ${theme.mq.tablet} {
    width: 401px;
    height: 56px;

    margin-top: 40px;
    padding: 16px;

    font-size: 16px;
    ligth-height: 1.5;

    &:focus,
    &:hover {
      cursor: pointer;
      color: rgba(255, 255, 255, 1);
      background-color: rgba(5, 5, 5, 1);
    }
  }

  ${theme.mq.desktop} {
  }
`;

export const TextContainerStyled = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;

  margin-top: 16px;
  ${theme.mq.tablet} {
    margin-top: 20px;
  }

  ${theme.mq.desktop} {
  }
`;

export const TextStyled = styled("p")`
  font-size: 12px;
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: -0.02em;
  color: rgba(5, 5, 5, 0.6);
  ${theme.mq.tablet} {
    font-size: 14px;
    line-height: 1.28;
  }

  ${theme.mq.desktop} {
  }
`;

export const LinkTextStyled = styled("a")`
  font-size: 12px;
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: -0.02em;
  color: rgba(5, 5, 5, 1);

  ${theme.mq.tablet} {
    font-size: 14px;
    line-height: 1.28;

    &:focus,
    &:hover {
      cursor: pointer;
    }
  }

  ${theme.mq.desktop} {
  }
`;

export const ErrorTextStyled = styled("p")`
  display: block;
  min-height: 20px;
  margin: 0 auto;
  margin-top: 3px;

  font-size: 12px;
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: -0.02em;
  text-align: center;
  color: #f42424;

  ${theme.mq.tablet} {
    font-size: 14px;
    line-height: 1.28;
  }

  ${theme.mq.desktop} {
  }
`;
