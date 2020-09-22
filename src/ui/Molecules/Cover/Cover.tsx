/**
 * @author tomek
 * @since 2020-09-16 18:05:46
 */

import * as React from "react";

import { StyledCover } from "./Cover.styles";
import { BaseProps as Props } from "./Cover.types";

import { Image } from "@ui/Atoms";
import { VinylIcon } from "@ui/Molecules";

const Cover: React.FunctionComponent<Props> = ({
  cover,
  artist,
  title,
  ...rest
}) => {
  const imgTitle = `${artist} – ${title}`;

  return (
    <StyledCover {...rest}>
      {cover && cover !== "[object Object]" && typeof cover === "string" ? (
        <Image src={cover} title={imgTitle} />
      ) : (
        <VinylIcon />
      )}
    </StyledCover>
  );
};

export { Cover };
