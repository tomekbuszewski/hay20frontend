/**
 * @author tomek
 * @since 2020-09-19 20:19:29
 */

import * as React from "react";
import { DropResult } from "react-beautiful-dnd";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { useMutation } from "react-query";
import { Reducers } from "@redux/typings";

import {
  toggleListenState,
  reorder,
  addList,
  addItemToList,
} from "@redux/lists/actions";
import { getAlbumsFromList, getListStart } from "@redux/lists/selectors";
import { getAlbumsOnList } from "@redux/albums/selectors";
import { addAlbums } from "@redux/albums/actions";

import { View } from "./SingleList.view";
import { ContainerProps as Props } from "@pages/SingleList/SingleList.typings";

import {
  useFetchAlbumsQuery,
  useFetchDetailsQuery,
  useMetaQuery,
} from "@pages/SingleList/SingleList.helpers";
import { toggleListenedAlbumMutation } from "@mutations/toggleListenedAlbumMutation";
import { reorderItemsMutation } from "@mutations/reorderItemsMutation";
import { addAlbumMutation } from "@mutations/addAlbumMutation";
import { addAlbumToListMutation } from "@mutations/addAlbumToListMutation";
import { Loader } from "@ui/Molecules";

const SingleList: React.FunctionComponent<Props> = ({
  addAlbums,
  addItemToList,
  addList,
  albums,
  albumsToFetch,
  listStart,
  reorder,
  toggleListened,
}) => {
  const [activeAlbum, setActiveAlbum] = React.useState(null);
  const [formVisible, setFormVisible] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState("");
  const [canSearch, setCanSearch] = React.useState(false);

  const [toggleAlbumMutation] = useMutation(toggleListenedAlbumMutation);
  const [reorderMutation] = useMutation(reorderItemsMutation);
  const [addAlbumToDbMutation] = useMutation(addAlbumMutation);
  const [addAlbumToListDbMutation] = useMutation(addAlbumToListMutation);

  const { isLoading: isMetaLoading, data: metaResults } = useMetaQuery(
    searchQuery,
    canSearch,
    () => {
      setSearchQuery("");
      setCanSearch(false);
    },
  );

  const { listIndex } = useParams<{ listIndex: string }>();
  const {
    isLoading: isListDetailsLoading,
    isStale: isListDetailsSuccess,
  } = useFetchDetailsQuery(Number(listIndex.split("__")[0]), addList);
  const { isLoading: isDetailsLoading } = useFetchAlbumsQuery(
    albumsToFetch(listIndex),
    addAlbums,
    isListDetailsSuccess,
  );

  const toggleForm = () => setFormVisible((state) => !state);

  const toggleListenedAlbum = async (id: string) => {
    toggleListened({
      album: id,
      listIndex,
    });

    await toggleAlbumMutation({
      album: id,
      index: listIndex,
    });
  };

  const reorderAlbums = async ({ destination, source }: DropResult) => {
    if (
      String(destination?.index) &&
      typeof destination?.index !== "undefined"
    ) {
      reorder({
        listIndex,
        itemFrom: source?.index,
        itemTo: destination.index,
      });

      await reorderMutation({
        index: listIndex,
        from: source?.index,
        to: destination.index,
      });
    }
  };

  const handleInput = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    setCanSearch(true);
  };

  const isReady = !isListDetailsLoading && !isDetailsLoading;

  const pushAlbum = async () => {
    if (metaResults) {
      const { payload: album } = await addAlbumToDbMutation(metaResults);

      console.log(album);

      addAlbums([album]);
      const { payload: list } = await addAlbumToListDbMutation({
        index: listIndex,
        album: album.id,
      });

      addItemToList({
        ...list,
        listIndex,
      });

      toggleForm();
    }
  };

  if (isReady) {
    return (
      <View
        addAlbumHandler={pushAlbum}
        searchResults={metaResults ? [metaResults] : undefined}
        formValue={searchQuery}
        handleSubmit={handleSubmit}
        handleChange={handleInput}
        listVisible={formVisible}
        setListVisible={toggleForm}
        isLoading={!isReady || isMetaLoading}
        albums={albums(listIndex)}
        listStart={listStart(listIndex)}
        activeAlbum={activeAlbum}
        setActiveAlbum={setActiveAlbum}
        toggleAlbum={toggleListenedAlbum}
        reorder={reorderAlbums}
      />
    );
  }

  return <Loader />;
};

const mapState = (state: Reducers) => ({
  albums: (listIndex: string) => getAlbumsOnList(listIndex, state),
  albumsToFetch: (listIndex: string) => getAlbumsFromList(listIndex, state),
  listStart: (listIndex: string) => getListStart(listIndex, state),
});

const mapDispatch = {
  addAlbums,
  addItemToList,
  addList,
  reorder,
  toggleListened: toggleListenState,
};

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const ConnectedSingleList = connect(mapState, mapDispatch)(SingleList);

export { ConnectedSingleList as SingleList };
