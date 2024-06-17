import styled from "styled-components";
import theme from "styles/theme";
import { heading2 } from "styles/atomic";

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
`;
export const TitleStyled = styled("h2")`
  ${heading2};
  text-transform: uppercase;

  ${theme.mq.tablet} {
    font-size: 32px;
    line-height: 1.25;
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
`;

export const InputStyled = styled.input.attrs(props => props)`
  width: 100%;
  height: 48px;

  padding: 14px 45px 14px 14px;

  font-size: 14px;
  font-weight: 500;
  line-height: 1.42;
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
    line-height: 1.5;
  }
`;

export const InputContainerStyled = styled("div")`
  position: relative;
  width: 100%;
`;

export const IconStyled = styled.svg.attrs(props => props)`
  position: absolute;
  top: 24%;
  left: 85%;
  display: block;

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
  line-height: 1.42;
  font-weight: 700;
  text-transform: uppercase;

  border-radius: 30px;
  border: none;

  color: ${p => p.theme.colors.white};
  background-color: ${p => p.theme.colors.accent};

  transition: ${p => p.theme.transitions.prop("background-color")};

  ${theme.mq.mobile} {
    width: 283px;
  }

  ${theme.mq.tablet} {
    width: 401px;
    height: 56px;

    margin-top: 40px;
    padding: 16px;

    font-size: 16px;
    line-height: 1.5;

    &:focus-visible,
    &:hover {
      background-color: rgba(0, 0, 0, 0.7);
    }

    &:disabled {
      background-color: rgba(5, 5, 5, 0.2);
      color: rgba(255, 255, 255, 0.4);
    }
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
`;
