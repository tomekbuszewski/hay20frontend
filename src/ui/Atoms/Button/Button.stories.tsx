import * as React from "react";

import { text } from "@storybook/addon-knobs";

import { Button } from "./";
import { SearchIcon } from "@ui/Molecules";

export const Normal = () => <Button>{text("Example text", "Hello")}</Button>;
export const Minor = () => (
  <Button minor>{text("Example text", "Hello")}</Button>
);
export const Icon = () => (
  <Button icon>
    <SearchIcon />
  </Button>
);

export default {
  component: Button,
  title: "Atoms/Button",
};
