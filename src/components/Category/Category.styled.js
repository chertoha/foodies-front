import styled from "styled-components";
import theme from "styles/theme";

export const MainTitleWrapper = styled("div")`
  margin-bottom: 16px;

  ${theme.mq.tablet} {
    margin-bottom: 20px;
  }
`;

export const SubTitleWrapper = styled("div")`
  margin-bottom: 32px;

  ${theme.mq.tablet} {
    margin-bottom: 40px;
    width: 531px;
  }
`;
