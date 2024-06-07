import styled from "styled-components";
import theme from "styles/theme";
import { flexCenter } from "styles/atomic";

export const HeroStyled = styled("div")`
  width: 100%;
  height: 100%;
  padding: 0 16px;
  padding-bottom: 100px;
  border-radius: 0 0 20px 20px;
  background-color: ${theme.colors.accent};

  ${theme.mq.tablet} {
    border-radius: 0 0 30px 30px;
    padding-bottom: 91px;
  }
  ${theme.mq.desktop} {
    padding-bottom: 82px;
  }
`;
export const TitleStyled = styled("h1")`
  max-width: 327px;

  margin: 0 auto;
  padding-top: 140px;

  font-size: 40px;
  font-weight: 800;
  line-height: 1;
  letter-spacing: -2%;
  text-align: center;
  text-transform: uppercase;

  color: ${theme.colors.light};

  ${theme.mq.tablet} {
    max-width: 700px;
    padding-top: 151px;

    font-size: 70px;
  }
  ${theme.mq.desktop} {
    max-width: 900px;
    padding-top: 88px;

    font-size: 90px;
  }
`;

export const SubtitleStyled = styled("h1")`
  margin: 0 auto;
  margin-top: 20px;
  max-width: 338px;

  font-size: 14px;
  font-weight: 500;
  line-height: 1.42;
  letter-spacing: -2%;
  text-align: center;

  color: rgba(255, 255, 255, 0.8);

  ${theme.mq.tablet} {
    max-width: 577px;
    margin-top: 40px;

    font-size: 16px;
    line-height: 1.5;
  }
`;

export const ButtonStyled = styled("button")`
  display: block;
  min-width: 131px;
  height: 44px;

  margin: 0 auto;
  margin-top: 32px;
  padding: 12px 24px;

  font-size: 14px;
  font-weight: 700;
  line-height: 1.42;
  letter-spacing: -2%;
  text-align: center;
  text-transform: uppercase;

  color: ${theme.colors.light};
  background-color: ${theme.colors.accent};
  outline: none;
  border-radius: 30px;
  border: 1px solid rgba(255, 255, 255, 0.9);

  ${theme.mq.tablet} {
    min-width: 159px;
    height: 56px;

    margin-top: 40px;
    padding: 16px 32px;

    font-size: 16px;
    line-height: 1.5;

    &:hover {
      cursor: pointer;
    }
  }
`;

export const ImageWriperStyled = styled("div")`
  ${flexCenter}
  gap: 20px;
  margin-top: 29px;

  ${theme.mq.tablet} {
    margin-top: 31px;
  }
  ${theme.mq.desktop} {
    margin-top: 40px;
  }
`;

export const ImageSmallStyled = styled("img")`
  display: block;
  width: 70px;
  height: 70px;

  transform: rotate(11deg);

  ${theme.mq.tablet} {
    width: 128px;
    height: 116px;
  }
`;

export const ImageBigStyled = styled("img")`
  display: block;
  width: 190px;
  height: 172px;

  transform: rotate(-12deg);

  ${theme.mq.tablet} {
    width: 302px;
    height: 273px;
  }
`;
