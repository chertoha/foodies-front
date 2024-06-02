import styled, { css } from "styled-components";

const sizes = {
  tiny: css`
    width: 101px;
    height: 44px;
    /* padding: 14px 28px; */
  `,
  small: css`
    width: 104px;
    height: 46px;
    /* padding: 14px 28px; */
  `,
  medium: css`
    width: 124px;
    height: 48px;
    /* padding: 14px 32px; */

    @media (min-width: 768px) {
      width: 146px;
      height: 56px;
      /* padding: 16px 39px; */
    }
  `,
  large: css`
    width: 131px;
    height: 44px;
    /* padding: 12px 24px; */

    @media (min-width: 768px) {
      width: 159px;
      height: 56px;
      /* padding: 16px 32px; */
    }
  `,
  big: css`
    width: 343px;
    height: 48px;
    /* padding: 14px 141px; */

    @media (min-width: 768px) {
      width: 394px;
      height: 56px;
      /* padding: 16px 171px; */
    }
  `,
  huge: css`
    width: 283px;
    height: 48px;
    /* padding: 14px 155px; */

    @media (min-width: 768px) {
      width: 400px;
      height: 56px;
      /* padding: 16px 171px; */
    }
  `,
};

const colors = {
  clear: css`
    border: none;
    background: none;
    color: #050505;
  `,
  clearRev: css`
    border: none;
    background: none;
    color: #fff;
  `,
  white: css`
    border: 1px solid #050505;
    background: none;
    color: #050505;
    &:hover {
      border: 1px solid #050505;
      background: #050505;
      color: #fff;
    }
  `,
  gray: css`
    border: 1px solid inherit;
    background: rgba(5, 5, 5, 0.2);
    color: rgba(255, 255, 255, 0.4);
    &:hover {
      border: 1px solid #050505;
      background: #050505;
      color: #fff;
    }
  `,
  black: css`
    border: 1px solid inherit;
    background: rgba(5, 5, 5, 0.85);
    color: #fff;
    &:hover {
      border: 1px solid #050505;
      background: #050505;
    }
  `,
  blackRev: css`
    border: 1px solid #fff;
    background: none;
    color: #fff;
  `,
};

export const Button = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  /* font-family: Mulish; */
  font-size: 14px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: -0.32px;
  text-transform: uppercase;

  cursor: pointer;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  @media (min-width: 768px) {
    font-size: 16px;
  }

  ${props => sizes[props.size]}
  ${props => colors[props.color]}
`;

Button.defaultProps = {
  size: "tiny",
  color: "white",
};
