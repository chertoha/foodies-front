import styled, { css } from "styled-components";
import theme from "styles/theme";
import { body2, flexCenter } from "styles/atomic";

const activeStyles = () => css`
  color: ${p => p.theme.colors.accent};

  -webkit-box-shadow: 0px 0px 34px -30px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 34px -30px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 34px -30px rgba(0, 0, 0, 0.75);
`;

export const MainWrapper = styled("div")`
  position: relative;
  height: 318px;

  ${theme.mq.tablet} {
    height: 400px;
    width: 100%;
  }
`;

export const DropZone = styled("label")`
  cursor: ${p => (p.$disabled ? "default" : "pointer")};

  height: 100%;

  ${flexCenter()};

  color: rgba(5, 5, 5, 0.3);

  border: 1px dashed rgba(5, 5, 5, 0.2);
  border-radius: ${p => p.theme.radii.lg};
  border-style: dashed;

  transition: ${p => p.theme.transitions.default};

  &:hover,
  &:focus-visible {
    ${activeStyles()}
  }

  ${p => p.$isdrag && activeStyles()}
`;

export const Preview = styled("div")`
  position: relative;
  display: block;
  height: 100%;
  overflow: hidden;

  border: 1px dashed rgba(5, 5, 5, 0.2);
  border-radius: ${p => p.theme.radii.lg};
  border-style: dashed;
`;

export const Image = styled("img")`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const ClearPreviewButton = styled("button")`
  position: absolute;
  ${flexCenter()};
  top: 30px;
  right: 30px;
  width: 40px;
  height: 40px;
  border-radius: ${p => p.theme.radii.round};
  background: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(5px);

  transition: ${p => p.theme.transitions.prop("transform")};
  &:hover,
  &:focus-visible {
    transform: scale(1.1);
  }
`;

export const ErrorMessage = styled("p")`
  position: absolute;
  ${body2()};
  bottom: 40px;
  left: 50%;

  width: 90%;
  text-align: center;
  transform: translateX(-50%);
  color: ${p => p.theme.colors.error};
`;

export const ImageUploadBox = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

export const ImageUploadBoxText = styled("p")`
  color: #050505;
  /* font-family: Mulish; */
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 150% */
  letter-spacing: -0.32px;
  text-decoration-line: underline;
`;
//
