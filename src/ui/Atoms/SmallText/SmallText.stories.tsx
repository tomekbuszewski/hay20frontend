import * as React from "react";

import { text } from "@storybook/addon-knobs";

import { SmallText } from "./";

export const Normal = () => (
  <SmallText>{text("Example text", "Sonic Youth")}</SmallText>
);

export default {
  component: SmallText,
  title: "Atoms/SmallText",
};
