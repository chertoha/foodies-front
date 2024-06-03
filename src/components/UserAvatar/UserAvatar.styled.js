import styled from "styled-components";

export const Avatar = styled.img`
  border-radius: 50%;
  object-fit: cover;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
`;
