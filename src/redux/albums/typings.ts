import { IAlbum } from "@ui/Organisms/Album/Album.types";

export interface AlbumsReducer {
  collection: string[];
  db: Record<string, IAlbum>;
}
