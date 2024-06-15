import styled from "styled-components";
import { flexCenter } from "styles/atomic";
import theme from "styles/theme";

export const Wrapper = styled("div")`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 156px;
  height: 38px;
  border-radius: 30px;
  background-color: #ffffff;
  border: 1px solid ${p => p.theme.colors.dark};

  ${theme.mq.tablet} {
    width: 208px;
    height: 46px;
  }
`;

export const Button = styled("button")`
  position: relative;
  height: 100%;
  width: 50%;
  ${flexCenter()};
  text-transform: uppercase;
  color: ${props => props.$color};
  background-color: ${props => props.$backgroundColor};
  font-size: ${p => p.theme.fontSizes.xs};
  font-weight: ${p => p.theme.fontWeights.bold};
  line-height: ${p => p.theme.lineHeights.normal};
  border-radius: ${p => p.theme.radii.lg};
  transition: ${p => p.theme.transitions.prop("color")};
  border: 1px solid white;

  // &:first-child {
  //   color: ${p => p.theme.colors.dark};
  // }

  // &:first-child:hover {
  //   color: #ffffff;
  // }

  // &:first-child ~ button > span {
  //   transition: ${p => p.theme.transitions.prop("color")};
  // }

  // &:first-child:hover ~ button > span {
  //   color: ${p => p.theme.colors.dark};
  // }

  // &:first-child::before {
  //   position: absolute;
  //   content: "";
  //   width: 100%;
  //   height: 100%;
  //   border-radius: ${p => p.theme.radii.lg};
  //   border: 1px solid ${p => p.theme.colors.grey};
  //   background-color: ${p => p.theme.colors.dark};
  //   transform: translateX(100%);
  //   transition: ${p => p.theme.transitions.prop("transform")};
  // }

  // &:first-child:hover::before {
  //   transform: translateX(0);
  // }
`;

export const Label = styled("span")`
  position: absolute;
  z-index: 10;
  height: 100%;
  width: 100%;
  ${flexCenter()};
`;
