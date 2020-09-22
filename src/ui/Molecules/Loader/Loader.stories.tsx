import * as React from "react";

import { text } from "@storybook/addon-knobs";

import { Loader } from "./";

export const Normal = () => <Loader>{text("Example text", "Hello")}</Loader>;

export default {
  component: Loader,
  title: "Molecules/Loader",
};
