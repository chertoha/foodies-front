import styled from "styled-components";
import theme from "../../styles/theme";
import { flexBetween } from "../../styles/atomic";

export const HeaderContainer = styled.div`
  height: 100%;

  margin: 0 8px;
  padding: 0 16px;
  border-radius: 20px 20px 0 0;
  background-color: ${theme.colors.accent};

  ${theme.mq.tablet} {
    margin: 0 16px;
    border-radius: 30px 30px 0 0;
  }
  ${theme.mq.desktop} {
    margin: 0 20px;
  }
`;

export const ContainerBackground = styled.div`
  border-radius: ${theme.radii.lg};
  background-color: #050505;
  /* background-color: #fff; */
`;

export const HeaderWrapper = styled.div`
  ${flexBetween()}

  padding: 16px;

  ${theme.mq.tablet} {
    padding: 20px 32px;
  }

  ${theme.mq.desktop} {
    padding: 20px 60px;
  }
`;
