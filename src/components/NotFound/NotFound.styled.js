import styled from "styled-components";
import theme from "styles/theme";

export const Main = styled("div")`
  /* min-height: 600px; */
  height: 300px;
  /* height: 200px; */
  margin: 0px auto;
  width: auto;
  /* max-width: 460px; */
  /* max-width: 1060px; */
  display: flex;
  align-items: center;
  justify-content: center;

  ${theme.mq.tablet} {
    max-width: 460px;
  }

  ${theme.mq.desktop} {
    height: 400px;
    max-width: 560px;
  }

  & .fundo {
    animation: scales 3s alternate infinite;
    transform-origin: center;
  }
  & .pao-baixo {
    animation: rotatepao 14s cubic-bezier(0.1, 0.49, 0.41, 0.97) infinite;
    transform-origin: center;
  }
  & .pao-cima {
    animation: rotatepao 7s 1s cubic-bezier(0.1, 0.49, 0.41, 0.97) infinite;
    transform-origin: center;
  }
  & .olhos {
    animation: olhos 2s alternate infinite;
    transform-origin: center;
  }

  & .left-sparks {
    animation: left-sparks 4s alternate infinite;
    transform-origin: 150px 156px;
  }

  & .right-sparks {
    animation: left-sparks 4s alternate infinite;
    transform-origin: 310px 150px;
  }

  & .olhos {
    animation: olhos 2s alternate infinite;
    transform-origin: center;
  }
  @keyframes scales {
    from {
      transform: scale(0.98);
    }
    to {
      transform: scale(1);
    }
  }

  @keyframes rotatepao {
    0% {
      transform: rotate(0deg);
    }
    50%,
    60% {
      transform: rotate(-20deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }

  @keyframes olhos {
    0% {
      transform: rotateX(0deg);
    }
    100% {
      transform: rotateX(30deg);
    }
  }

  @keyframes left-sparks {
    0% {
      opacity: 0;
    }
  }

  & .path {
    stroke-dasharray: 300;
    stroke-dashoffset: 300;
    animation: dash 4s alternate infinite;
  }

  @keyframes dash {
    0%,
    30% {
      fill: 4B4B62;
      stroke-dashoffset: 0;
    }
    80%,
    100% {
      fill: transparent;
      stroke-dashoffset: -200;
    }
  }
`;
