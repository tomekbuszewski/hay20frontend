/**
 * @author tomek
 * @since 2020-09-19 20:14:53
 */

import * as React from "react";
import { connect } from "react-redux";
import { useQuery, useMutation, useQueryCache } from "react-query";

import { getAllLists } from "@redux/lists/selectors";
import { addList } from "@redux/lists/actions";

import {
  fetchAllListsQuery,
  FETCH_ALL_LISTS_QUERY,
} from "@queries/fetchAllListsQuery";
import { createNewListMutation } from "@mutations/createNewListMutation";

import { View } from "./ListIndex.view";
import { Reducers } from "@redux/typings";
import { IList } from "@redux/lists/typings";
import { ReduxAction } from "@typings";

interface Props {
  add: (payload: IList[]) => ReduxAction<IList[]>;
  lists: IList[];
}

const useFetchList = (
  success: (payload: IList[]) => ReduxAction<IList[]>,
  creator: () => Promise<void>,
) => {
  return useQuery(FETCH_ALL_LISTS_QUERY, fetchAllListsQuery, {
    retry: false,
    onSuccess: async ({ payload }) => {
      if (payload.length > 0) {
        success(payload);
      } else {
        await creator();
      }
    },
  });
};

const ListIndex: React.FunctionComponent<Props> = ({ add, lists }) => {
  const queryCache = useQueryCache();
  const [createNewList] = useMutation(createNewListMutation, {
    onSuccess: async () => {
      await queryCache.invalidateQueries(FETCH_ALL_LISTS_QUERY);
    },
  });
  const { isLoading } = useFetchList(add, createNewList);

  return <View isLoading={isLoading} lists={lists} />;
};

const mapState = (state: Reducers) => ({
  lists: getAllLists(state),
});

const mapDispatch = {
  add: addList,
};

const ConnectedListIndex = connect(mapState, mapDispatch)(ListIndex);

export { ConnectedListIndex as ListIndex };
