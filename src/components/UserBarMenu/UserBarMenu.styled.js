import styled from "styled-components";
import theme from "../../styles/theme";
import { Link } from "react-router-dom";

export const UserBarMenuWrapper = styled.div`
  position: absolute;
  top: 90px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 6px;
  width: 122px;
  height: 72px;
  background-color: ${theme.colors.accent};
  border-radius: ${theme.radii.sm};
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 16px;

  ${theme.mq.tablet} {
    width: 148px;
    height: 74px;
  }
`;

export const UserBarMenuLink = styled(Link)`
  color: ${theme.colors.light};
  font-size: ${theme.fontSizes.xs};
  font-weight: ${theme.fontWeights.bold};
  line-height: ${theme.lineHeights.normal};
  letter-spacing: -0.02em;
  text-transform: uppercase;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const BtnClose = styled.button`
  color: ${theme.colors.light};
`;
