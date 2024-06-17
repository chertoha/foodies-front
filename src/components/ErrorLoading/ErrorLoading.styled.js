import styled from "styled-components";
import theme from "styles/theme";
import { Link } from "react-router-dom";
import { body1, mt, px, py } from "styles/atomic";

export const TitleWrapper = styled("div")`
  text-align: center;

  ${theme.mq.tablet} {
    ${mt(5)};
  }
`;

export const LinkWrapper = styled("div")`
  ${mt(6)}
  text-align: center;

  ${theme.mq.tablet} {
    ${mt(10)};
  }
`;

export const GoHomeLink = styled(Link)`
  display: inline-block;
  ${px(5)};
  ${py(3)};

  ${body1()};
  border: 1px solid ${p => p.theme.colors.dark};
  border-radius: ${p => p.theme.radii.lg};
  color: ${p => p.theme.colors.dark};
  text-transform: uppercase;

  transition: ${p => p.theme.transitions.default};
  &:hover {
    background-color: ${p => p.theme.colors.dark};
    color: ${p => p.theme.colors.white};
  }

  ${theme.mq.tablet} {
    ${px(8)};
    ${py(4)};
  }
`;
