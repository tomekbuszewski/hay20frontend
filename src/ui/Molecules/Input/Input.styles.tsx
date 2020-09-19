/**
 * @author tomek
 * @since 2020-09-19 09:06:17
 */
import styled, { css } from "styled-components";
import { rgba } from "polished";

import {
  boxShadow,
  colorGetter,
  fontFaceGetter,
  fontSizeGetter,
  marginGetter,
  rem,
  transition,
} from "@ui/helpers";

import { StyledIcon as Icon } from "@ui/Atoms/Icon/Icon.styles";

const svgStyles = css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  max-width: ${rem(12)};
  max-height: ${rem(12)};
`;

const StyledWrapper = styled.div<{ noMargin?: boolean }>`
  position: relative;

  margin-bottom: ${(props) => !props.noMargin && marginGetter("vertical")};

  button {
    position: absolute;
    right: ${rem(2)};
    top: ${rem(2)};
  }
`;

const StyledIcon = styled<any>(Icon).attrs({
  as: "label",
})`
  width: ${rem(40)};
  height: ${rem(40)};

  border-radius: 100%;

  position: absolute;
  top: 0;
  left: 0;

  color: ${colorGetter("counter")};

  svg {
    ${svgStyles};
  }
`;

const StyledInput = styled.input`
  width: 100%;
  height: ${rem(40)};

  transition: ${transition(["box-shadow"])};

  font-size: ${fontSizeGetter("small")};
  font-family: ${fontFaceGetter("secondary")};
  line-height: ${rem(40)};

  border: 0;
  border-radius: ${rem(20)};
  color: ${colorGetter("counter")};
  background-image: linear-gradient(
    to bottom,
    hsl(353.06, 58.45%, 40.59%) 0%,
    hsl(353.07, 58.4%, 40.88%) 5.72%,
    hsl(353.09, 58.35%, 41.21%) 12.1%,
    hsl(353.11, 58.29%, 41.57%) 19.02%,
    hsl(353.13, 58.24%, 41.94%) 26.38%,
    hsl(353.15, 58.18%, 42.32%) 34.07%,
    hsl(353.17, 58.12%, 42.72%) 41.98%,
    hsl(353.18, 58.07%, 43.11%) 50%,
    hsl(353.2, 58.01%, 43.5%) 58.02%,
    hsl(353.22, 57.96%, 43.88%) 65.93%,
    hsl(353.23, 57.91%, 44.25%) 73.62%,
    hsl(353.25, 57.87%, 44.6%) 80.98%,
    hsl(353.26, 57.83%, 44.93%) 87.9%,
    hsl(353.27, 57.79%, 45.22%) 94.28%,
    hsl(353.28, 57.76%, 45.49%) 100%
  );

  padding: ${rem(2)} ${rem(48)} ${rem(2)} ${rem(36)};

  &:active,
  &:focus {
    outline: 0;

    box-shadow: inset
      ${(props) =>
        boxShadow(rgba(colorGetter("shadow")(props), 0.25), {
          y: "0",
          blur: rem(4),
        })};
  }

  ::placeholder {
    color: ${(props) => rgba(colorGetter("counter")(props), 0.5)};
  }

  :-webkit-autofill,
  :-webkit-autofill:hover,
  :-webkit-autofill:focus,
  :-internal-autofill-selected {
    background: black !important;
  }
`;

export { StyledInput, StyledIcon, StyledWrapper, svgStyles };
