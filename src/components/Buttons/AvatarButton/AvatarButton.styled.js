import styled from "styled-components";
import { body1 } from "styles/atomic";

export const ButtonAvatar = styled.button`
  display: flex;
  align-items: center;
  background: none;
  border: none;
  gap: 10px;
  ${body1()}
  color: ${({ theme }) => theme.colors.dark};
  cursor: pointer;
`;

export const ImgAvatar = styled.img`
  width: 32px;
  height: 32px;
  border-radius: ${({ theme }) => theme.radii.lg};
`;
