import styled from "styled-components";
import theme from "../../styles/theme";
import { px, py } from "../../styles/atomic";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1200;
  background: rgba(18, 20, 23, 0.5);
  overflow-y: auto;
`;

export const ModalContainer = styled.div`
  ${px("30")};
  ${py(15)};
  width: 90%;
  max-width: 343px;

  position: absolute;
  top: 20%;
  left: 50%;
  transform: translateX(-50%);
  border-radius: ${theme.radii.md};
  background-color: #ffffff;

  ${theme.mq.tablet} {
    max-width: none;
    width: 561px;
  }
`;

export const BtnClose = styled("button")`
  position: absolute;
  top: 16px;
  right: 16px;

  display: flex;
  transition: ${theme.transitions.prop("transform")};
  color: ${theme.colors.dark};

  ${theme.mq.tablet} {
    top: 20px;
    right: 20px;

    &:hover {
      transform: scale(1.2);
    }
  }
`;
