import styled from "styled-components";
import { heading2 } from "styles/atomic";
import theme from "styles/theme";

export const Wripper = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;

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

export const TextStyled = styled("p")`
  font-size: 14px;
  font-weight: 500;
  line-height: 1.42;
  letter-spacing: -0.02em;

  margin-bottom: 20px;

  color: rgba(5, 5, 5, 0.8);

  ${theme.mq.tablet} {
    font-size: 16px;
    line-height: 1.5;
  }

  ${theme.mq.desktop} {
  }
`;

export const ButtonStyled = styled("button")`
  width: 100%;
  height: 48px;

  padding: 14px;

  font-size: 14px;
  ligth-height: 1.42;
  font-weight: 700;
  text-transform: uppercase;

  border-radius: 30px;
  border: none;
  color: rgba(255, 255, 255, 1);
  background-color: rgba(5, 5, 5, 1);
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

export const ButtonCancelStyled = styled("button")`
  width: 100%;
  height: 48px;

  padding: 14px;

  font-size: 14px;
  ligth-height: 1.42;
  font-weight: 700;
  text-transform: uppercase;

  border-radius: 30px;
  border: 1px solid rgba(5, 5, 5, 0.9);
  color: rgba(5, 5, 5, 1);

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
    }
  }

  ${theme.mq.desktop} {
  }
`;
