import * as React from "react";

import { boolean } from "@storybook/addon-knobs";

import { Album } from "./";
import * as albums from "@mocks/resources/albums";
import { IAlbum } from "@ui/Organisms/Album/Album.types";

export const Normal = () => (
  <Album
    toggle={() => false}
    album={albums.TEST_ALBUM_1}
    view={{
      isListened: boolean("Listened", false),
      isDragging: boolean("Dragging", false),
      isToday: boolean("Today", false),
      isActive: boolean("Active", false),
    }}
    list={{
      listenOn: new Date(),
      listPosition: 76,
    }}
  />
);

export const List = () => (
  <React.Fragment>
    {Object.keys(albums).map((item: any, i) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      const album = albums[item] as IAlbum;
      return (
        <Album
          toggle={() => false}
          key={i}
          album={album}
          list={{ listPosition: i + 1, listenOn: new Date() }}
          view={{
            isListened: boolean("Listened", false),
            isDragging: boolean("Dragging", false),
            isToday: boolean("Today", false),
            isActive: boolean("Active", false),
          }}
        />
      );
    })}
  </React.Fragment>
);

export default {
  component: Album,
  title: "Organisms/Album",
};
