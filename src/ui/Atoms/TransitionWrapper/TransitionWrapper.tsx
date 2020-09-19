/**
 * @author tomek
 * @since 2020-09-19 19:26:36
 */

import styled, { keyframes } from "styled-components";
import { colorGetter, marginGetter, rem } from "@ui/helpers";

const slideInLeft = keyframes`
  from {
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(-50%, 0, 0);
  }
`;

const slideOutLeft = keyframes`
  from {
    transform: translate3d(-50%, 0, 0);
    opacity: 1;
  }

  to {
    visibility: hidden;
    transform: translate3d(-50%, ${rem(64)}, 0);
    opacity: 0;
  }
`;

const TransitionWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 50%;

  width: 100%;
  max-width: ${rem(400)};
  min-height: 100vh;

  padding-left: ${marginGetter("horizontal")};
  padding-right: ${marginGetter("horizontal")};

  background: ${colorGetter("background")};

  transform: translateX(-50%);

  &.page-enter {
    animation: ${slideInLeft} ${({ theme }) => theme.animations.durations.long}
      forwards;
  }

  &.page-exit {
    animation: ${slideOutLeft} ${({ theme }) => theme.animations.durations.long}
      forwards;
  }
`;

export { TransitionWrapper };
