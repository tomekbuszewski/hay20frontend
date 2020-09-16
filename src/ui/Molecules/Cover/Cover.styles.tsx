/**
 * @author tomek
 * @since 2020-09-16 18:05:46
 */

import styled from "styled-components";
import { colorGetter, constsGetter } from "@ui/helpers";

const StyledCover = styled.figure`
  border-radius: ${constsGetter("borderRadius")};
  background: ${colorGetter("background")};

  margin: 0;
  padding: 0;
  width: ${constsGetter("cover")};
  height: ${constsGetter("cover")};

  overflow: hidden;
  position: relative;

  > img {
    top: 50%;
    left: 50%;
    position: absolute;

    transform: translate(-50%, -50%);

    width: ${constsGetter("cover")};
    height: ${constsGetter("cover")};
  }
`;

export { StyledCover };
