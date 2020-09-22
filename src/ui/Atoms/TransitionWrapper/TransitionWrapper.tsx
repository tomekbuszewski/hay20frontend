/**
 * @author tomek
 * @since 2020-09-19 19:26:36
 */

import * as React from "react";
import styled, { keyframes } from "styled-components";
import { colorGetter, marginGetter, rem } from "@ui/helpers";

const slideInLeft = keyframes`
  from {
    transform: translate3d(0, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;

const slideOutLeft = keyframes`
  from {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }

  to {
    visibility: hidden;
    transform: translate3d(0, ${rem(64)}, 0);
    opacity: 0;
  }
`;

const StyledTransitionWrapper = styled.main`
  position: absolute;
  top: 0;
  left: 0;

  width: 100vw;
  min-height: 100vh;

  &.page-enter {
    animation: ${slideInLeft} ${({ theme }) => theme.animations.durations.long}
      forwards;
  }

  &.page-exit {
    animation: ${slideOutLeft} ${({ theme }) => theme.animations.durations.long}
      forwards;
  }
`;

const StyledInner = styled.div`
  margin: auto;

  max-width: ${rem(400)};
  min-height: 100vh;

  padding-left: ${marginGetter("horizontal")};
  padding-right: ${marginGetter("horizontal")};

  background: ${colorGetter("background")};
`;

const TransitionWrapper = ({ className, ...props }: any) => (
  <StyledTransitionWrapper className={className}>
    <StyledInner {...props} />
  </StyledTransitionWrapper>
);

export { TransitionWrapper };
