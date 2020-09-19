import * as React from "react";

import { Input } from "./";
import { UserIcon } from "./Input.icons";
import { Button } from "@ui/Atoms";

export const Normal = () => <Input placeholder="Placeholder" />;
export const WithIcon = () => (
  <Input placeholder="Placeholder" icon={<UserIcon />} name="form" />
);
export const WithIconAndButton = () => (
  <Input placeholder="Placeholder" icon={<UserIcon />} name="form">
    <Button onClick={() => alert("Hello")}>Click</Button>
  </Input>
);

export default {
  component: Input,
  title: "Molecules/Input",
};
