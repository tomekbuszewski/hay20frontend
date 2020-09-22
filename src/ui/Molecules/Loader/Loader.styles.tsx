/**
 * @author tomek
 * @since 2020-09-20 14:09:56
 */

import styled, { css, keyframes } from "styled-components";
import { boxShadow, colorGetter, rem } from "@ui/helpers";

const showDisc = keyframes`
  from {
    transform: translate(-50%, -50%);
  }
  
  to {
    transform: translate(-50%, 0%);
  }
`;

const spinDisc = keyframes`
  from {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  
  to {
    transform: translate(-50%, -50%) rotate(360deg);
  }
`;

const StyledLoaderWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;

  z-index: 99;

  background: ${colorGetter("background")};

  svg {
    position: absolute;
    top: 50%;
    left: 50%;
    width: ${rem(128)};
    height: ${rem(128)};

    transform: translate(-50%, -50%);
    z-index: 1;

    animation: 2s linear ${spinDisc} infinite;
  }

  &:before {
    content: "";

    position: absolute;
    top: 50%;
    left: 50%;
    width: ${rem(64)};
    height: ${rem(64)};
    transform: translate(-50%, 0%);
    z-index: 2;

    background: red;

    border-radius: 100%;

    box-shadow: ${(props) =>
      boxShadow(colorGetter("shadow")(props), {
        y: "0",
        blur: rem(32),
        spread: rem(8),
      })};
  }

  &:after {
    content: "";

    position: absolute;
    top: 50%;
    left: 50%;
    width: ${rem(256)};
    height: ${rem(256)};

    transform: translate(-50%, 0%);
    animation: ${({ theme }) => css`
      ${theme.animations.durations.long}
      ${theme.animations.easings.easeInOut}
      ${showDisc}
      forwards
    `};
    z-index: 3;

    display: block;

    background: ${colorGetter("background")};
  }
`;

export { StyledLoaderWrapper };
