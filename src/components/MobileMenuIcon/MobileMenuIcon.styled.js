import styled from "styled-components";

export const MobileMenuIconWrapper = styled.div`
  display: none;
  font-size: 30px;
  cursor: pointer;
  padding: 15px;
  background-color: #333;
  color: white;

  @media (max-width: 768px) {
    display: block;
  }
`;
