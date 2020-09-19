/**
 * @author tomek
 * @since 2020-09-19 20:14:53
 */

import * as React from "react";
import { Helmet } from "react-helmet";

import { TransitionWrapper, CardList } from "@ui/Atoms";

const View: React.FunctionComponent = () => (
  <TransitionWrapper>
    <Helmet>
      <title>List index</title>
    </Helmet>
    <ul style={{ margin: "16rem 0 0 0", padding: 0 }}>
      <CardList>2020</CardList>
    </ul>
  </TransitionWrapper>
);

export { View };
