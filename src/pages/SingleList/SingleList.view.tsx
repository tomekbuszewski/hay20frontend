/**
 * @author tomek
 * @since 2020-09-19 20:19:29
 */

import * as React from "react";
import { Helmet } from "react-helmet";

import { TransitionWrapper } from "@ui/Atoms";
import { Album } from "@ui/Organisms";

import { TEST_ALBUM_3 } from "@mocks/resources/albums";

const View: React.FunctionComponent = () => (
  <TransitionWrapper>
    <Helmet>
      <title>Single list</title>
    </Helmet>
    <ul style={{ margin: "4rem 0 0 0", padding: 0 }}>
      <Album
        album={TEST_ALBUM_3}
        list={{ listenOn: new Date(), listPosition: 1 }}
        view={{}}
      />
    </ul>
  </TransitionWrapper>
);

export { View };
