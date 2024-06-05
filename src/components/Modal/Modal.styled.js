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
  ${py(15)}
  ${px(7.5)}
  ${theme.mq.tablet} {
    ${px(20)}
    ${py(20)}
  }
`;

export const BtnClose = styled(Close)`
  display: flex;
  transition: ${theme.transitions.default};
  stroke: ${theme.colors.dark};
  margin-left: auto;
  margin-bottom: 10px;
`;
