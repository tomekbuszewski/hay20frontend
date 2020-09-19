import * as React from "react";
import { boolean } from "@storybook/addon-knobs";

import { TEST_ALBUM_3 } from "@mocks/resources/albums";

import { AddAlbum } from "./index";

export const Normal = () => <AddAlbum isVisible={boolean("Visible", true)} />;
export const WithResults = () => (
  <AddAlbum isVisible searchResults={[TEST_ALBUM_3]} />
);

export default {
  component: AddAlbum,
  title: "Organisms/AddAlbum",
};
