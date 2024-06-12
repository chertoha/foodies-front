import styled from "styled-components";
// import { Title } from "components/MainTitle/MainTitle.styled";
// import { Text } from "components/SubTitle/SubTitle.styled";
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
  }
`;
