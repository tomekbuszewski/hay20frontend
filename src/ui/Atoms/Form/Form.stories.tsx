import * as React from "react";

import { text } from "@storybook/addon-knobs";

import { Form } from "./";

export const Normal = () => <Form>{text("Example text", "Hello")}</Form>;

export default {
  component: Form,
  title: "Atoms/Form",
};
