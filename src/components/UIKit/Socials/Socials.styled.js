import styled from "styled-components";
import theme from "styles/theme";
import { flexCenter } from "styles/atomic";

export const SocialLink = styled("a")`
  ${flexCenter()}
  border: 1px solid rgba(5, 5, 5, 0.15);
  border-radius: ${p => p.theme.radii.round};
  width: 36px;
  height: 36px;

  color: ${p => p.theme.colors.accent};

  transition: ${p => p.theme.transitions.prop("color")};

  &:hover {
    color: rgba(5, 5, 5, 0.5);
  }

  ${theme.mq.tablet} {
    width: 40px;
    height: 40px;
  }
`;

export const Icon = styled("svg")`
  display: block;
  width: 20px;
  height: 20px;
`;

export const List = styled("ul")`
  display: flex;
  align-items: center;
  column-gap: 16px;
`;
