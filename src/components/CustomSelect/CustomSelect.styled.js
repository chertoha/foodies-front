import styled from "styled-components";
import { px, py, pr, pl, body1 } from "styles/atomic";
import theme from "styles/theme";

import ReactSelect from "react-select";

export const StyledSelect = styled(ReactSelect)`
  & .Select__control {
    width: 100%;
    background-color: transparent;
    border: 1px solid #0505051f;
    border-radius: ${theme.radii.lg};
    box-shadow: none;
    cursor: pointer;

    svg {
      transform: rotate(0deg);
      transition: transform ${theme.transitions.default};
    }

    &.Select__control--menu-is-open {
      svg {
        transform: rotate(-180deg);
      }
    }
  }

  & .Select__value-container {
    ${py("14")};
    ${px("14")};
    ${pr(0)};

    ${theme.mq.mobileOnly} {
    }

    ${theme.mq.tablet} {
        ${py(4)};
        ${px("18")};
        ${pr(0)};
    }

    ${theme.mq.desktop} {
    }
  }

  & .Select__indicator-separator {
    display: none;
  }

  & .Select__clear-indicator {
    display: none;
  }

  & .Select__indicator {
    color: ${theme.colors.accent};
    ${py("14")};
    ${px("14")};
    ${pl(2)};
    cursor: pointer;

    &:hover {
    color: ${theme.colors.accent};
    }

    ${theme.mq.mobileOnly} {
    }

    ${theme.mq.tablet} {
        ${py(4)};
        ${px("18")};
        ${pl(2)};
    }

    ${theme.mq.desktop} {
    }
  }

  & .Select__input-container {
    color: ${theme.colors.accent};
    margin: 0;
    padding: 0;

    &:hover {
      color: ${theme.colors.accent};
    }

    ${theme.mq.mobileOnly} {
    }

    ${theme.mq.tablet} {
    font-size: ${theme.fontSizes.base};
    }

    ${theme.mq.desktop} {
    }
  }

  & .Select__input {
    ${theme.mq.mobileOnly} {
    }

    ${theme.mq.tablet} {

    }

    ${theme.mq.desktop} {
    }
  }

  & .Select__placeholder,
  & .Select__single-value {
    color: #05050599;
    margin: 0;

    ${body1()};

    ${theme.mq.mobileOnly} {
    }

    ${theme.mq.tablet} {
    }

    ${theme.mq.desktop} {
    }
  }

  & .Select__menu {
    margin: 0;
    margin-top: 4px;
    border-radius: ${theme.radii.sm};
    background-color: ${theme.colors.light};
    overflow: hidden;
    scrollbar-width: 1px;
    scrollbar-height: 5px;
  }

  & .Select__menu-list {
    ${py(4)};
    ${px("18")};
    border-radius: ${theme.radii.sm};
    background-color: ${theme.colors.light};
    display: flex;
    flex-direction: column;
    row-gap: 6px;
    max-height: 326px;
    scrollbar-width: 1px;
    scrollbar-height: 5px;
  }

  & .Select__option {
    ${py(1)};
    ${px("14")};
    border-radius: ${theme.radii.md};
    color: ${theme.colors.accent};
    background-color: transparent;
    transition:
      color ${theme.transitions.default};,
      background-color ${theme.transitions.default};;

    cursor: pointer;
    ${body1()};

    &:hover,
    &:focus {
      color: ${theme.colors.accent};
      background-color: #0505051f;
    }

    &:active {
      color: ${theme.colors.accent};
      background-color: #0505051f;
    }

    ${theme.mq.mobileOnly} {
    }

    ${theme.mq.tablet} {
    }

    ${theme.mq.desktop} {
    }
  }
`;
