import theme from "./theme";

const { css } = require("styled-components");

const SPACING_RATIO = 4;

const createSpacingAtomic = (props, spacing) => css`
  ${props.map(prop => `${prop}: ${spacing * SPACING_RATIO}px;`).join("")}
`;

/* paddings */
export const px = spacing => createSpacingAtomic(["padding-right", "padding-left"], spacing);
export const py = spacing => createSpacingAtomic(["padding-top", "padding-bottom"], spacing);
export const pt = spacing => createSpacingAtomic(["padding-top"], spacing);
export const pr = spacing => createSpacingAtomic(["padding-right"], spacing);
export const pl = spacing => createSpacingAtomic(["padding-left"], spacing);
export const pb = spacing => createSpacingAtomic(["padding-bottom"], spacing);

/* margins */
export const mx = spacing => createSpacingAtomic(["margin-right", "margin-left"], spacing);
export const my = spacing => createSpacingAtomic(["margin-top", "margin-bottom"], spacing);
export const mt = spacing => createSpacingAtomic(["margin-top"], spacing);
export const mr = spacing => createSpacingAtomic(["margin-right"], spacing);
export const ml = spacing => createSpacingAtomic(["margin-left"], spacing);
export const mb = spacing => createSpacingAtomic(["margin-bottom"], spacing);

/* flexes */
export const flexCenter = () => css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const flexBetween = () => css`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

/* typography */
export const heading2 = () => css`
  font-size: 28px;
  font-weight: ${theme.fontWeights.extraBold};
  line-height: 1.14;
  letter-spacing: -0.02em;

  ${theme.mq.tablet} {
    font-size: 40px;
    line-height: 1.1;
  }
`;

export const heading3 = () => css`
  font-size: ${theme.fontSizes["lg"]}; /* 18px */
  font-weight: ${theme.fontWeights.extraBold}; /* 800 */
  line-height: 1.33;
  letter-spacing: -0.02em;

  ${theme.mq.tablet} {
    font-size: ${theme.fontSizes["2xl"]}; /* 24px */
    line-height: 1.16;
  }
`;

export const heading4 = () => css`
  font-size: ${theme.fontSizes["lg"]}; /* 18px */
  font-weight: ${theme.fontWeights.extraBold}; /* 800 */
  line-height: 1.33;
  letter-spacing: -0.02em;

  ${theme.mq.tablet} {
    font-size: ${theme.fontSizes.xl}; /* 20px */
    line-height: 1.2;
  }
`;

export const heading5 = () => css`
  font-size: ${theme.fontSizes.base}; /* 16px */
  font-weight: ${theme.fontWeights.extraBold}; /* 800 */
  line-height: ${theme.lineHeights.normal};
  letter-spacing: -0.02em;

  ${theme.mq.tablet} {
    font-size: ${theme.fontSizes.xl}; /* 20px */
    line-height: 1.2;
  }
`;

export const body1 = () => css`
  font-size: ${theme.fontSizes.sm}; /* 14px */
  font-weight: ${theme.fontWeights.medium}; /* 500 */
  line-height: 1.42;
  letter-spacing: -0.02em;

  ${theme.mq.tablet} {
    font-size: ${theme.fontSizes.base}; /* 16px */
    line-height: ${theme.lineHeights.normal};
  }
`;

export const body2 = () => css`
  font-size: ${theme.fontSizes.xs}; /* 12px */
  font-weight: ${theme.fontWeights.medium}; /* 500 */
  line-height: ${theme.lineHeights.normal};
  letter-spacing: -0.02em;

  ${theme.mq.tablet} {
    font-size: ${theme.fontSizes.sm}; /* 14px */
    line-height: 1.42;
  }
`;

/* text trim */
export const numberTextRows = n => {
  if (n === 1) {
    return css`
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    `;
  }

  return css`
    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: ${n};
    -webkit-box-orient: vertical;
  `;
};
