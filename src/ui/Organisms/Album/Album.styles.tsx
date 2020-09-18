/**
 * @author tomek
 * @since 2020-09-16 19:48:30
 */

import styled, { css, keyframes } from "styled-components";
import {
  boxShadow,
  colorGetter,
  constGetter,
  marginGetter,
  rem,
  transition,
} from "@ui/helpers";
import { rgba } from "polished";
import { ViewProps } from "./Album.types";
import { Toggler } from "@ui/Molecules";
import { StyledCover as Cover } from "@ui/Molecules/Cover/Cover.styles";
import { StyledIcon as Icon } from "@ui/Atoms/Icon/Icon.styles";

const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-25%);
  }
  
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
    transform: translateY(0);
  }
  
  to {
    opacity: 0;
    transform: translateY(-25%);
  }
`;

const StyledToggler = styled(Toggler)<{ isVisible?: boolean }>`
  grid-column-start: 3;
  grid-row-start: 2;

  margin-left: auto;

  opacity: 0;
  transition: ${transition(["transform", "opacity"], "medium")};
  transition-delay: unset;

  transform: translateY(-25%);

  ${({ isVisible }) =>
    isVisible &&
    css`
      transition-delay: ${({ theme }) => theme.animations.durations.veryLong};
      opacity: 1;
      transform: translateY(0);
    `};
`;

const StyledAlbumInfoWrapper = styled.div<{ isActive?: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;

  margin-right: -${marginGetter("horizontal")};

  transition: ${transition(["transform"])};
  transition-delay: ${(props) => props.theme.animations.durations.short};

  transform: translateY(${({ isActive }) => (isActive ? rem(0) : rem(-19))});
`;

const StyleAlbumMetaWrapper = styled(StyledAlbumInfoWrapper)<{
  isActive?: boolean;
}>`
  position: relative;

  margin: 0;

  text-align: right;
`;

const StyledButtonWrapper = styled.ul<{ isVisible?: boolean }>`
  padding: 0;
  margin: 0;

  opacity: 0;

  display: flex;

  grid-column-start: 1;
  grid-column-end: span 2;
  grid-row-start: 2;

  ${({ theme }) => css`
    animation-duration: ${theme.animations.durations.veryLong};
    animation-timing-function: ${theme.animations.easings.easeInOut};
    animation-fill-mode: forwards;
  `};

  ${({ isVisible, theme }) =>
    isVisible
      ? css`
          opacity: 1;
          pointer-events: all;

          ${Icon} {
            opacity: 0;
            animation: ${css`
              ${theme.animations.durations.medium}
              ${theme.animations.easings.easeInOut}
              forwards
              ${fadeIn}
            `};

            ${Array.from(new Array(3))
              .fill(null)
              .map((_, i) => {
                const initDelay = parseFloat(theme.animations.durations.medium);
                const itemDelay = initDelay * (i / 2);

                return css`
                  &:nth-of-type(${i + 1}) {
                    animation-delay: ${`${itemDelay + initDelay}ms`};
                  }
                `;
              })};
          }
        `
      : css`
          animation-duration: ${theme.animations.durations.short};
          animation-name: ${fadeOut};

          pointer-events: none;
        `};
`;

const StyledAlbum = styled.li<ViewProps>`
  box-shadow: ${(props) => boxShadow(rgba(colorGetter("shadow")(props), 0.25))};
  border-radius: ${constGetter("borderRadius")};
  background: ${colorGetter("albumBackground")};

  display: grid;
  grid-template-columns: ${constGetter("cover")} auto ${rem(56)};
  grid-column-gap: ${marginGetter("horizontal")};
  grid-template-rows: ${constGetter("cover")} auto;
  grid-row-gap: ${marginGetter("horizontal")};

  border-right: ${rem(2)} solid;
  border-right-color: ${({ isListened }) =>
    isListened ? colorGetter("accentLight") : colorGetter("accentDark")};

  margin: ${({ isActive }) =>
    isActive
      ? css`
          ${marginGetter("vertical")} auto
        `
      : css`
          ${marginGetter("vertical")} auto ${marginGetter("spacious")}
        `};
  padding: ${rem(16)};
  max-width: calc(100vw - ${rem(48)});
  height: ${({ isActive }) => (isActive ? rem(152) : constGetter("cover"))};
  position: relative;

  transition: ${transition(
    ["box-shadow", "height", "border", "transform", "margin"],
    "long",
  )};

  ${({ isDragging }) =>
    isDragging &&
    css`
      transform: scale(1.05);
    `};

  ${({ isActive, isDragging }) =>
    (isActive || isDragging) &&
    css`
      box-shadow: ${(props) =>
        boxShadow(rgba(colorGetter("shadow")(props), 0.5), {
          y: rem(8),
          blur: rem(32),
        })};
    `};

  > ${Cover} {
    transition: ${transition(["transform"])};
    transition-delay: ${(props) => props.theme.animations.durations.short};

    ${({ isActive }) =>
      !isActive &&
      css`
        transform: translateY(-${rem(32)});
      `}
  }

  ${({ isToday, isListened, isActive }) => {
    const shadowColor = isListened ? "accentLight" : "accentDark";
    const shadowConfig = isActive ? { y: rem(8), blur: rem(32) } : {};

    if (isToday) {
      return css`
        box-shadow: ${(props) =>
          boxShadow(rgba(colorGetter(shadowColor)(props), 0.5), shadowConfig)};
      `;
    }
  }};

  &:hover {
    box-shadow: ${(props) =>
      boxShadow(rgba(colorGetter("shadow")(props), 0.5), {
        y: rem(8),
        blur: rem(32),
      })};
  }

  @media (min-width: ${rem(480)}) {
    max-width: ${rem(360)};
  }
`;

export {
  StyledAlbum,
  StyledAlbumInfoWrapper,
  StyleAlbumMetaWrapper,
  StyledButtonWrapper,
  StyledToggler,
};
