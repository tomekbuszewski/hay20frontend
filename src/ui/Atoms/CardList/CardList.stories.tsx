import * as React from "react";

import { text } from "@storybook/addon-knobs";

import { CardList } from "./";

export const Normal = () => (
  <CardList>{text("Example text", "Hello")}</CardList>
);

export default {
  component: CardList,
  title: "Atoms/CardList",
};
