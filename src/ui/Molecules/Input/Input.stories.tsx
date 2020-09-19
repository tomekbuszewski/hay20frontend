import * as React from "react";

import { Input } from "./";
import { UserIcon } from "./Input.icons";

export const Normal = () => <Input placeholder="Placeholder" />;
export const WithIcon = () => (
  <Input placeholder="Placeholder" icon={<UserIcon />} name="form" />
);

export default {
  component: Input,
  title: "Molecules/Input",
};
