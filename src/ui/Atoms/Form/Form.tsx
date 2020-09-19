/**
 * @author tomek
 * @since 2020-09-19 14:53:47
 */

import styled from "styled-components";
import {
  boxShadow,
  colorGetter,
  constGetter,
  marginGetter,
  rem,
  transition,
} from "@ui/helpers";
import { rgba } from "polished";

const Form = styled.form`
  padding: ${marginGetter("horizontal")};

  background: ${colorGetter("accentDark")};
  border-radius: ${constGetter("borderRadius")};

  transition: ${transition(["box-shadow", "transform"], "long")};
  box-shadow: ${(props) =>
    boxShadow(rgba(colorGetter("shadow")(props), 0.5), {
      y: "0",
      blur: rem(32),
    })};
`;

export { Form };
