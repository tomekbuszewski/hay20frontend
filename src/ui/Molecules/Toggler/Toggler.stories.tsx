import * as React from "react";

import { boolean } from "@storybook/addon-knobs";

import { Toggler } from "./";

export const Normal = () => <Toggler isActive={boolean("Active", false)} />;

export default {
  component: Toggler,
  title: "Molecules/Toggler",
};
