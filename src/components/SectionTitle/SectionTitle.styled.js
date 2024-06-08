import styled from "styled-components";
import { heading3 } from "styles/atomic";
import theme from "styles/theme";

export const TitleSection = styled.h3`
  ${heading3()}
  text-transform: uppercase;
  color: ${theme.colors.accent};
`;
