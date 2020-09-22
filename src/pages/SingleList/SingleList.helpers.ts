import { IAlbum } from "@ui/Organisms/Album/Album.types";
import { ReduxAction } from "@typings";
import { useQuery } from "react-query";

import {
  FETCH_ALBUMS_QUERY,
  fetchAlbumsQuery,
} from "@queries/fetchAlbumsQuery";

import {
  FETCH_LIST_DETAILS_QUERY,
  fetchListDetailsQuery,
} from "@queries/fetchListDetailsQuery";
import { IList } from "@redux/lists/typings";

import { FETCH_META_QUERY, fetchMetaQuery } from "@queries/fetchMetaQuery";

export const useFetchAlbumsQuery = (
  params: number[],
  success: (payload: IAlbum[]) => ReduxAction<IAlbum[]>,
  enabled?: boolean,
) => {
  return useQuery(FETCH_ALBUMS_QUERY, () => fetchAlbumsQuery(params), {
    enabled: enabled && params.length > 0,
    onSuccess: ({ payload }) => {
      success(payload);
    },
  });
};

export const useFetchDetailsQuery = (
  params: number,
  success: (payload: IList[]) => ReduxAction<IList[]>,
) => {
  return useQuery(
    FETCH_LIST_DETAILS_QUERY,
    () => fetchListDetailsQuery(params),
    {
      onSuccess: ({ payload }) => {
        success([payload]);
      },
    },
  );
};

export const useMetaQuery = (
  params: string,
  enabled?: boolean,
  success?: (input: IAlbum) => void,
) => {
  return useQuery(FETCH_META_QUERY, () => fetchMetaQuery(params), {
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    retry: 2,
    enabled,
    onSuccess: (result) => {
      success && success(result);
    },
  });
};
