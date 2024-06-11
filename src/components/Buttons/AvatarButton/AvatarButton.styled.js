import { Link } from "react-router-dom";
import styled from "styled-components";
import { body1 } from "styles/atomic";

export const ButtonAvatar = styled.div`
  display: flex;
  align-items: center;
  background: none;
  border: none;
  gap: 10px;
  ${body1()}
  color: ${({ theme }) => theme.colors.dark};
  cursor: pointer;
`;

export const ImgAvatar = styled(Link)`
  width: 32px;
  height: 32px;
  border-radius: ${({ theme }) => theme.radii.lg};
  object-fit: cover;
`;

export const InitialsAvatar = styled(Link)`
  width: 32px;
  height: 32px;
  border-radius: ${({ theme }) => theme.radii.lg};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  color: white;
  font-weight: bold;
  background-color: ${({ color }) => color || "#000"};
`;

export const InitialsSpan = styled.span`
  text-transform: uppercase;
`;
