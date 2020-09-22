/**
 * @author tomek
 * @since 2020-09-19 20:14:53
 */

import * as React from "react";
import { Helmet } from "react-helmet";
import { useHistory } from "react-router-dom";

import { TransitionWrapper, CardList, PageTitle } from "@ui/Atoms";
import { Loader } from "@ui/Molecules";
import { IList } from "@redux/lists/typings";
import { ROUTES } from "@config/routes";

interface Props {
  lists: IList[];
  isLoading?: boolean;
}

const View: React.FunctionComponent<Props> = ({ lists, isLoading }) => {
  const { push } = useHistory();

  if (isLoading) {
    return <Loader />;
  }

  return (
    <TransitionWrapper>
      <Helmet>
        <title>List index</title>
      </Helmet>
      <PageTitle>Available lists</PageTitle>
      <ul style={{ padding: 0 }}>
        {lists.map((list) => (
          <CardList
            key={list.index}
            onClick={() => {
              const url = ROUTES.SINGLE_LIST.replace(
                ":listIndex",
                String(list.index),
              );

              push(url);
            }}
          >
            {list.year}
          </CardList>
        ))}
      </ul>
    </TransitionWrapper>
  );
};

export { View };
