import * as React from "react";

import { text } from "@storybook/addon-knobs";

import { Main } from "./";

export const Normal = () => <Main>{text("Example text", "Hello")}</Main>;

export default {
  component: Main,
  title: "Atoms/Main",
};
