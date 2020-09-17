import * as React from "react";

import { boolean, text } from "@storybook/addon-knobs";

import { Album } from "./";

const album = {
  title: "Goo",
  artist: "Sonic Youth",
  qobuz: "qobuzapp://album/0072064242972",
  cover: "https://i.scdn.co/image/ab67616d00001e02b690940b6544fb39bf3653d2",
  rym: "https://rateyourmusic.com/release/album/sonic-youth/goo/",
  spotify: "spotify:album:5iYYQwB0oH9FVyVlaOXZdr",
};

export const Normal = () => (
  <Album
    album={album}
    isActive={boolean("Active", false)}
    isListened={boolean("Listened", false)}
    isDragging={boolean("Dragging", false)}
    listPosition={76}
    listenOn={new Date()}
  >
    {text("Example text", "Hello")}
  </Album>
);

export default {
  component: Album,
  title: "Organisms/Album",
};
