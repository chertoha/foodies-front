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
  ${py(7.5)}
  ${px(13.5)}
  ${mb(5)};

  border: 1px solid #05050533;
  border-radius: 30px;
  ${flexCenter()};
  flex-direction: column;

  ${theme.mq.mobileOnly} {
    // max-width: ${theme.breakpoints.mobile};
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
  color: #050505;

  font-family: Mulish;
  font-size: 18px;
  font-weight: 800;
  line-height: 24px;
  letter-spacing: -0.02em;
  text-align: left;
  ${my(4)}

  ${theme.mq.mobileOnly} {
    // max-width: ${theme.breakpoints.mobile};
  }

  ${theme.mq.tablet} {
    ${my(5)}
    font-size: 20px;
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
  font-weight: 700;

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
