import styled from "styled-components";
import theme from "../../styles/theme";
import { px, py, flexCenter } from "../../styles/atomic";
import { ReactComponent as Close } from "../../assets/images/icons/close.svg";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  ${flexCenter()}
  z-index: 1200;
  background: rgba(18, 20, 23, 0.5);
`;

export const ModalContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  overflow: hidden;
  transform: translate(-50%, -50%);
  border-radius: ${theme.radii.md};
  padding: 15px;
  ${theme.mq.tablet} {
    ${px(20)}
    ${py(20)}
  }
`;

export const BtnClose = styled(Close)`
  position: absolute;
  top: 7%;
  left: 85%;

  display: flex;
  transition: ${theme.transitions.default};
  stroke: ${theme.colors.dark};

  ${theme.mq.tablet} {
    top: 16%;
    left: 81%;

    &:focus,
    &:hover {
      cursor: pointer;
    }
  }
`;
