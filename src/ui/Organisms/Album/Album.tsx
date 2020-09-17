/**
 * @author tomek
 * @since 2020-09-16 19:48:30
 */

import * as React from "react";

import {
  StyledAlbum,
  StyledAlbumInfoWrapper,
  StyleAlbumMetaWrapper,
  StyledButtonWrapper,
  StyledToggler,
} from "./Album.styles";
import { BaseProps as Props, ViewProps } from "./Album.types";

import { Cover } from "@ui/Molecules";
import { LargeText, SmallText, Icon } from "@ui/Atoms";
import { Spotify, Rym, Qobuz } from "@ui/Atoms/Icon/Icon.parts";

const Album: React.FunctionComponent<Props & ViewProps> = (props) => {
  const {
    isActive,
    isListened,
    isDragging,
    album,
    listenOn,
    listPosition,
  } = props;
  const { artist, title, cover, qobuz, rym, spotify } = album;

  return (
    <StyledAlbum
      isActive={isActive}
      isListened={isListened}
      isDragging={isDragging}
    >
      <Cover cover={cover} artist={artist} title={title} />
      <StyledAlbumInfoWrapper isActive={isActive}>
        <LargeText withEllipsis>{title}</LargeText>
        <SmallText withPrefix>{artist}</SmallText>
      </StyledAlbumInfoWrapper>
      <StyleAlbumMetaWrapper isActive={isActive} as="aside">
        <LargeText>{listPosition}</LargeText>
        <SmallText>
          {listenOn.toLocaleDateString("en-US", {
            day: "2-digit",
            month: "2-digit",
          })}
        </SmallText>
      </StyleAlbumMetaWrapper>
      <StyledButtonWrapper isVisible={isActive}>
        {spotify && (
          <Icon onClick={() => window.open(spotify)} as="li">
            <Spotify />
          </Icon>
        )}
        {qobuz && (
          <Icon onClick={() => window.open(qobuz)} as="li">
            <Qobuz />
          </Icon>
        )}
        {rym && (
          <Icon onClick={() => window.open(rym)} as="li">
            <Rym />
          </Icon>
        )}
      </StyledButtonWrapper>
      <StyledToggler isActive={isListened} isVisible={isActive} />
    </StyledAlbum>
  );
};

export { Album };
