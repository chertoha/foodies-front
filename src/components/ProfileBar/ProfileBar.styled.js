import styled from "styled-components";
import theme from "styles/theme";
import { Link } from "react-router-dom";
import { flexCenter, ml, mr, pr } from "styles/atomic";

export const Wrapper = styled("div")`
  text-align: right;
`;

export const InnerWrapper = styled("div")`
  position: relative;
  display: inline-flex;
`;

export const Button = styled("button")`
  ${pr("14")};
  display: inline-flex;
  align-items: center;

  font-size: 12px;
  font-weight: ${p => p.theme.fontWeights.bold};
  line-height: ${p => p.theme.lineHeights.normal};
  letter-spacing: -0.02em;
  color: #ffffff;
  text-transform: uppercase;

  border-radius: ${p => p.theme.radii.lg};
  background-color: ${p => p.theme.colors.dark};

  transition: ${p => p.theme.transitions.prop("color")};

  &:hover {
    color: rgba(255, 255, 255, 0.7);
  }
`;

export const AvatarWrapper = styled("span")`
  width: 32px;
  height: 32px;
  overflow: hidden;
  border-radius: ${p => p.theme.radii.round};

  ${theme.mq.tablet} {
    width: 50px;
    height: 50px;
  }
`;

export const Avatar = styled("img")`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Label = styled("span")`
  ${ml("6")};
  ${mr(1)};
`;

export const List = styled("ul")`
  position: absolute;
  padding: 16px;
  width: 100%;
  top: calc(100% + 8px);
  right: 14px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: ${p => p.theme.radii.sm};

  background-color: ${p => p.theme.colors.dark};
`;

export const Item = styled("li")`
  margin-bottom: 6px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  column-gap: 2px;

  font-size: 12px;
  font-weight: ${p => p.theme.fontWeights.bold};
  line-height: ${p => p.theme.lineHeights.normal};
  letter-spacing: -0.02em;
  color: #ffffff;
  text-transform: uppercase;

  transition: ${p => p.theme.transitions.prop("color")};

  &:hover {
    color: rgba(255, 255, 255, 0.5);
  }
`;

export const IconWrapper = styled("span")`
  transform: ${p => (p.$open ? "rotate(-180deg)" : "rotate(0)")};
  ${flexCenter()};
`;
