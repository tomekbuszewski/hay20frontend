import * as React from "react";

import { Cover } from "./index";

const storyConfig = {
  artist: "Sonic Youth",
  album: "Rather Ripped",
};

export const WithCover = () => (
  <Cover
    {...storyConfig}
    cover="https://lh3.googleusercontent.com/proxy/dYv04tcTps4ByqMIYQf8-wSk-OGyVO6dr0mEJaofo5-aBhRf8hUWcEkx58fDbHf_PZFf0s18J3aj9coKhWc6Usk8rkxFZw"
  />
);

export const WithoutCover = () => <Cover {...storyConfig} />;

export default {
  component: Cover,
  title: "Molecules/Cover",
};
