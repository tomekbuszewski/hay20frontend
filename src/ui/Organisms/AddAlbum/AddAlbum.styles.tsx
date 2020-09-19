/**
 * @author tomek
 * @since 2020-09-18 11:17:04
 */

import styled, { css, keyframes } from "styled-components";

import { Form } from "@ui/Atoms";
import { StyledCover as Cover } from "@ui/Molecules/Cover/Cover.styles";
import {
  colorGetter,
  constGetter,
  fontFaceGetter,
  fontSizeGetter,
  marginGetter,
  rem,
  transition,
} from "@ui/helpers";

const showResults = keyframes`
  from {
    height: 0;
    opacity: 0;
  }
  
  to {
    height: ${rem(96)};
    opacity: 1;
  }
`;

const StyledResultsWrapper = styled.div`
  overflow: hidden;
  height: 0;

  opacity: 0;
  animation: ${({ theme }) =>
    css`
      ${showResults}
      ${theme.animations.durations.long}
      ${theme.animations.easings.easeInOut}
      forwards
    `};
`;

const StyledResultsHeader = styled.h4`
  font-size: ${fontSizeGetter("small")};
  font-family: ${fontFaceGetter("primary")};

  color: ${colorGetter("counter")};
  text-transform: uppercase;

  margin: ${marginGetter("horizontal")} 0 0;

  span {
    opacity: 0.7;
  }
`;

const StyledResultHolder = styled.ul`
  list-style: none;

  margin: 0;
  padding: 0;
`;

const StyledResult = styled.li`
  margin: ${marginGetter("vertical")} 0;
  padding: ${marginGetter("small")};

  background: rgba(0, 0, 0, 0.1);
  border-radius: ${constGetter("borderRadius")};

  display: grid;
  grid-column-gap: ${marginGetter("horizontal")};
  grid-template-columns: ${rem(40)} auto;
  grid-template-rows: 1fr 1fr;

  > * {
    line-height: ${rem(20)};
    color: ${colorGetter("counter")};
  }

  ${Cover} {
    width: ${rem(40)};
    height: ${rem(40)};

    grid-row-start: 1;
    grid-row-end: span 2;

    img {
      width: ${rem(40)};
      height: ${rem(40)};
    }
  }
`;

const StyledForm = styled(Form)<{ isVisible?: boolean }>`
  position: fixed;
  bottom: 0;
  left: 5vw;
  z-index: 99;

  transition: ${transition(["box-shadow", "transform"])};

  transform: ${({ isVisible }) => (isVisible ? "none" : "translateY(100%)")};

  border-radius: ${constGetter("borderRadius")} ${constGetter("borderRadius")} 0
    0;

  width: 90vw;
`;

export {
  StyledForm,
  StyledResultHolder,
  StyledResult,
  StyledResultsHeader,
  StyledResultsWrapper,
};
