import * as React from "react";

import { text } from "@storybook/addon-knobs";

import { PageTitle } from "./";

export const Normal = () => (
  <PageTitle>{text("Example text", "Hello")}</PageTitle>
);

export default {
  component: PageTitle,
  title: "Atoms/PageTitle",
};
