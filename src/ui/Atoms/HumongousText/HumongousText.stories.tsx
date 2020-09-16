import * as React from "react";

import { text } from "@storybook/addon-knobs";

import { HumongousText } from "./";

export const Normal = () => (
  <HumongousText>{text("Example text", "76")}</HumongousText>
);

export default {
  component: HumongousText,
  title: "Atoms/HumongousText",
};
