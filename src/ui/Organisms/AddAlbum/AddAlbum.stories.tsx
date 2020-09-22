import * as React from "react";
import { boolean } from "@storybook/addon-knobs";

import { TEST_ALBUM_3 } from "@mocks/resources/albums";

import { AddAlbum } from "./index";

export const Normal = () => (
  <AddAlbum
    isVisible={boolean("Visible", true)}
    addAlbumHandler={() => false}
    formValue=""
    handleChange={() => false}
    handleSubmit={() => false}
  />
);
export const WithResults = () => (
  <AddAlbum
    isVisible
    searchResults={[TEST_ALBUM_3]}
    addAlbumHandler={() => false}
    formValue=""
    handleChange={() => false}
    handleSubmit={() => false}
  />
);

export default {
  component: AddAlbum,
  title: "Organisms/AddAlbum",
};
