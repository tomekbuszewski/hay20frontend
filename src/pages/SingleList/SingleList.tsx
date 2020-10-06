/**
 * @author tomek
 * @since 2020-09-19 20:19:29
 */

import * as React from "react";
import { DropResult } from "react-beautiful-dnd";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { useMutation, useQueryCache } from "react-query";
import { animateScroll as scroll } from "react-scroll";

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
import { FETCH_META_QUERY } from "@queries/fetchMetaQuery";

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
  const queryCache = useQueryCache();

  const [activeAlbum, setActiveAlbum] = React.useState(null);
  const [formVisible, setFormVisible] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState("");
  const [canSearch, setCanSearch] = React.useState(false);

  const [toggleAlbumMutation] = useMutation(toggleListenedAlbumMutation);
  const [reorderMutation] = useMutation(reorderItemsMutation);
  const [addAlbumToDbMutation] = useMutation(addAlbumMutation);
  const [addAlbumToListDbMutation] = useMutation(addAlbumToListMutation);

  const {
    isFetching: isMetaFetching,
    data: metaResults,
    isError: isMetaError,
  } = useMetaQuery(
    searchQuery,
    canSearch,
    () => {
      setSearchQuery("");
      setCanSearch(false);
    },
    () => {
      setSearchQuery("");
      setCanSearch(false);
    },
  );

  const { listIndex } = useParams<{ listIndex: string }>();
  const {
    isLoading: isListDetailsLoading,
    isSuccess: isListDetailsSuccess,
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

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>,
  ): Promise<void> => {
    event.preventDefault();
    await queryCache.invalidateQueries(FETCH_META_QUERY);
    setCanSearch(true);
  };

  const isReady = !isListDetailsLoading && !isDetailsLoading;

  const pushAlbum = async () => {
    if (metaResults) {
      const { payload: album } = await addAlbumToDbMutation(metaResults);

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
      scroll.scrollToBottom();
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
        isLoading={!isMetaError && (!isReady || isMetaFetching)}
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
