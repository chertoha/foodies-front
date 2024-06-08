import styled from "styled-components";

export const Image = styled.img`
  width: 100%;
  display: block;
  height: auto;
  border-radius: ${({ theme }) => theme.radii.lg};
`;
