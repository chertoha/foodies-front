import styled from "styled-components";
import theme from "styles/theme";

export const UserBarWrapper = styled.div`
  display: flex;
  align-items: center;

  gap: 6px;
`;

export const UserWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  width: 122px;
  height: 32px;
  border-radius: ${theme.radii.lg};
  background-color: ${theme.colors.accent};

  ${theme.mq.tablet} {
    width: 148px;
    height: 50px;
  }
`;

export const Wrapper = styled.div`
  width: 122px;
  display: flex;
  gap: 6px;
  height: 100%;

  ${theme.mq.tablet} {
    width: 148px;
  }
`;

export const UserName = styled.p`
  color: ${theme.colors.light};
  font-size: ${theme.fontSizes.xs};
  font-weight: ${theme.fontWeights.bold};
  line-height: 18px;
  letter-spacing: -0.02em;
  text-transform: uppercase;
  margin: 0;
`;

export const WrappersIcons = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;
