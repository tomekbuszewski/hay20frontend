import * as React from "react";

import { text } from "@storybook/addon-knobs";

import { LargeText } from "./";

export const Normal = () => (
  <LargeText>{text("Example text", "Rather Ripped")}</LargeText>
);

export default {
  component: LargeText,
  title: "Atoms/LargeText",
};
