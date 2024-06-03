import styled from "styled-components";
import theme from "styles/theme";

export const Avatar = styled.img`
  border-radius: 50%;
  object-fit: cover;

  ${theme.mq.mobile} {
    width: ${props => {
      switch (props.size) {
        case 50:
          return 32;
        case 120:
          return 80;
        case 40:
          return 32;
        default:
          return props.size;
      }
    }}px;

    height: ${props => {
      switch (props.size) {
        case 50:
          return 32;
        case 120:
          return 80;
        case 40:
          return 32;
        default:
          return props.size;
      }
    }}px;
  }

  ${theme.mq.tablet} {
    width: ${props => props.size}px;
    height: ${props => props.size}px;
  }

  ${theme.mq.desktop} {
    width: ${props => props.size}px;
    height: ${props => props.size}px;
  }
`;
