import * as React from "react";

import { text } from "@storybook/addon-knobs";

import { TransitionWrapper } from "./";

export const Normal = () => (
  <TransitionWrapper>{text("Example text", "Hello")}</TransitionWrapper>
);

export default {
  component: TransitionWrapper,
  title: "Atoms/TransitionWrapper",
};
