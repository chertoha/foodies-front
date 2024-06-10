import styled from "styled-components";
import theme from "../../styles/theme";
import { py, flexBetween } from "../../styles/atomic";

export const TopContainer = styled.div`
  width: 100%;
  ${py(2)}
  margin: 0 auto;

  ${theme.mq.mobile} {
    width: ${theme.breakpoints.mobile}px;
    ${py(2)}
  }

  ${theme.mq.tablet} {
    width: 672px;
    padding: 16px;
  }

  ${theme.mq.desktop} {
    width: 1280px;
    padding: 20px;
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
