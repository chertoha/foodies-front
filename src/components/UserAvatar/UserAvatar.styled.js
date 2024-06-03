import styled from "styled-components";
import theme from "styles/theme";

export const Avatar = styled.img`
  border-radius: 50%;
  object-fit: cover;
  background-color: ${theme.colors.light};

  width: ${props => props.size[0]}px;
  height: ${props => props.size[0]}px;

  ${theme.mq.tablet} {
    width: ${props => props.size[1]}px;
    height: ${props => props.size[1]}px;
  }

  ${theme.mq.desktop} {
    width: ${props => props.size[2]}px;
    height: ${props => props.size[2]}px;
  }
`;
