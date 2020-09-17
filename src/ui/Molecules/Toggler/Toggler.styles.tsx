/**
 * @author tomek
 * @since 2020-09-17 19:46:12
 */

import styled from "styled-components";
import { BaseProps as Props } from "./Toggler.types";
import { colorGetter, rem, transition } from "@ui/helpers";

const StyledButton = styled.span<{ isActive?: boolean }>`
  width: ${rem(20)};
  height: ${rem(20)};
  margin: ${rem(2)};

  border-radius: 100%;
  border: 0;
  box-shadow: 0 ${rem(2)} ${rem(2)} 0 rgba(0, 0, 0, 0.5);
  background: ${({ isActive }) =>
    isActive ? colorGetter("accentLight") : colorGetter("accentDark")};

  transition: ${transition(["background", "transform"], "long", "bezier")};

  display: block;
  position: relative;
  z-index: 1;

  transform: ${({ isActive }) => isActive && `translateX(${rem(24)})`};
`;

const StyledIconHolder = styled.div`
  position: absolute;
  top: 0;
  
  height: ${rem(24)};
  width: ${rem(24)};
  
  z-index: 3;
  
  pointer-events: none;
  
  color: ${colorGetter("toggler")};
  
  svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    
    width: ${rem(16)};
    height: auto;
`;

const StyledLeftIcon = styled(StyledIconHolder)`
  left: 0;
`;

const StyledRightIcon = styled(StyledIconHolder)`
  right: 0;
`;

const StyledToggler = styled.button<Props>`
  position: relative;
  display: block;

  cursor: pointer;

  padding: 0;
  margin: 0;

  width: ${rem(48)};
  height: ${rem(24)};

  &:focus,
  &:active {
    outline: 0;
  }

  border-radius: ${rem(12)};
  border: 0;
  background-image: linear-gradient(
    to bottom,
    hsl(240, 4.11%, 14.31%) 0%,
    hsl(237.47, 4.09%, 14.38%) 5.72%,
    hsl(234.68, 4.07%, 14.46%) 12.1%,
    hsl(231.71, 4.04%, 14.54%) 19.02%,
    hsl(228.59, 4.02%, 14.63%) 26.38%,
    hsl(225.39, 3.99%, 14.73%) 34.07%,
    hsl(222.16, 3.97%, 14.82%) 41.98%,
    hsl(218.93, 3.94%, 14.91%) 50%,
    hsl(215.77, 3.92%, 15.01%) 58.02%,
    hsl(212.69, 3.89%, 15.1%) 65.93%,
    hsl(209.75, 3.87%, 15.19%) 73.62%,
    hsl(206.98, 3.85%, 15.27%) 80.98%,
    hsl(204.41, 3.83%, 15.35%) 87.9%,
    hsl(202.07, 3.81%, 15.43%) 94.28%,
    hsl(200, 3.8%, 15.49%) 100%
  );
`;

export { StyledToggler, StyledButton, StyledLeftIcon, StyledRightIcon };
