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
export const InitialsAvatar = styled.div`
  border-radius: 50%;
  object-fit: cover;

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
  border-radius: ${({ theme }) => theme.radii.round};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  color: white;
  font-weight: bold;
  background-color: ${({ color }) => color || "#000"};
`;

export const InitialsSpan = styled.span`
  text-transform: uppercase;
`;
