/**
 * @author tomek
 * @since 2020-09-16 18:05:46
 */

import * as React from "react";

import { StyledCover } from "./Cover.styles";
import { BaseProps as Props } from "./Cover.types";

import { Image } from "@ui/Atoms";

const Cover: React.FunctionComponent<Props> = ({
  cover,
  artist,
  album,
  ...rest
}) => {
  const title = `${artist} – ${album}`;

  return (
    <StyledCover {...rest}>
      {cover && <Image src={cover} title={title} />}
    </StyledCover>
  );
};

export { Cover };
