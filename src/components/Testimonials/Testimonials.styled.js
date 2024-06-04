import styled from "styled-components";
import { body1, flexCenter, heading3, heading5, mt } from "styles/atomic";
import theme from "styles/theme";

export const Introduction = styled("p")`
  ${body1()}
  text-align: center;
  color: rgba(5, 5, 5, 0.6);
`;

export const TitleWrapper = styled("div")`
  text-align: center;
  ${mt(4)}
`;

export const SliderWrapper = styled("div")`
  ${mt(16)}

  ${theme.mq.tablet} {
    ${mt(20)}
  }

  ${theme.mq.desktop} {
    width: 822px;
    margin-left: auto;
    margin-right: auto;
  }

  & .swiper-slide {
    height: auto;
  }
`;

export const Card = styled("div")`
  text-align: center;
  height: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 64px;
`;

export const Text = styled("p")`
  flex-grow: 1;
  ${heading3()}
  font-weight: ${p => p.theme.fontWeights.medium};

  ${theme.mq.tablet} {
    line-height: ${p => p.theme.lineHeights.normal};
  }
`;
export const Author = styled("p")`
  ${heading5()}
  text-transform: uppercase;
`;

export const SwiperPagination = styled("div")`
  position: static;
  ${mt(10)}
  ${flexCenter()}
  column-gap: 8px;

  ${theme.mq.tablet} {
    column-gap: 12px;
  }

  & > span {
    margin: 0;
    cursor: pointer;
    width: 14px;
    height: 14px;
    background-color: #d9d9d9;

    ${theme.mq.tablet} {
      width: 16px;
      height: 16px;
    }
  }

  & > span.swiper-pagination-bullet-active {
    background-color: #000000;
  }
`;
