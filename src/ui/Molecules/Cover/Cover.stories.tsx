import * as React from "react";

import { Cover } from "./index";

const storyConfig = {
  artist: "Sonic Youth",
  album: "Rather Ripped",
};

export const WithCover = () => (
  <Cover
    {...storyConfig}
    cover="https://upload.wikimedia.org/wikipedia/en/6/6a/Ratherripped.jpg"
  />
);

export const WithoutCover = () => <Cover {...storyConfig} />;

export default {
  component: Cover,
  title: "Molecules/Cover",
};
