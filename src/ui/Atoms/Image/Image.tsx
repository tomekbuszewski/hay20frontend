/**
 * @author tomek
 * @since 2020-09-16 18:26:47
 */

import * as React from "react";

import { BaseProps as Props } from "./Image.types";

const Image: React.FunctionComponent<Props> = ({
  alt,
  title,
  src,
  ...rest
}) => {
  const imageTitle = title || alt || "";
  const imageAlt = alt || title || "";

  return <img src={src} title={imageTitle} alt={imageAlt} {...rest} />;
};

export { Image };
