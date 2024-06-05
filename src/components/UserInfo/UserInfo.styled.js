import styled from "styled-components";
import { px, py, mb, mr, my, body1, body2, flexCenter } from "styles/atomic";
import theme from "styles/theme";

export const UserInfoWrapp = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  ${theme.mq.mobileOnly} {
  }

  ${theme.mq.tablet} {
  }

  ${theme.mq.desktop} {
    justify-content: flex-start;
  }
`;
export const UserCard = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 343px;
  height: 320px;
  ${py("30")}
  ${px("54")}
  ${mb(5)};

  border: 1px solid #05050533;
  border-radius: 30px;
  ${flexCenter()};
  flex-direction: column;

  ${theme.mq.mobileOnly} {
  }

  ${theme.mq.tablet} {
    width: 394px;
    height: 408px;
    ${py(10)};
    ${px(20)};
  }

  ${theme.mq.desktop} {
  }
`;

export const UserCardTitle = styled("h3")`
  color: ${theme.colors.accent}
  font-family: Mulish;
  font-size: ${theme.fontSizes.lg};
  font-weight: ${theme.fontWeights.extraBold};
  line-height: 24px;
  letter-spacing: -0.02em;
  text-align: left;
  ${my(4)}

  ${theme.mq.mobileOnly} {
  }

  ${theme.mq.tablet} {
    ${my(5)}
    font-size: ${theme.fontSizes.xl};
  }

  ${theme.mq.desktop} {
  }
`;

export const UserCardInfo = styled("div")`
  display: flex;
  gap: 6px;
  align-items: flex-start;
  flex-direction: column;

  ${theme.mq.mobileOnly} {
  }

  ${theme.mq.tablet} {
  }

  ${theme.mq.desktop} {
  }
`;

export const UserCardtext = styled("p")`
  color: #050505e5;
  ${body1()};
  font-weight: ${theme.fontWeights.bold};

  ${theme.mq.mobileOnly} {
  }

  ${theme.mq.tablet} {
  }

  ${theme.mq.desktop} {
  }
`;
export const UserCardspan = styled("span")`
  color: #05050599;
  ${body2()};
  ${mr(2)};
  ${theme.mq.mobileOnly} {
  }

  ${theme.mq.tablet} {
  }

  ${theme.mq.desktop} {
  }
`;