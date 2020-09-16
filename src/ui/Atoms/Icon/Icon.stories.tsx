import * as React from "react";

import { Icon } from "./";
import {
  Spotify as SpotifyIcon,
  Rym as RymIcon,
  Qobuz as QobuzIcon,
} from "./Icon.parts";

export const Blank = () => <Icon />;

export const Spotify = () => (
  <Icon>
    <SpotifyIcon />
  </Icon>
);

export const Rym = () => (
  <Icon>
    <RymIcon />
  </Icon>
);

export const Qobuz = () => (
  <Icon onClick={() => alert("Hello from qobuz")}>
    <QobuzIcon />
  </Icon>
);

export default {
  component: Icon,
  title: "Atoms/Icon",
};
