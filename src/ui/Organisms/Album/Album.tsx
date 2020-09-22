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
  const { toggle, view, album, list, ...rest } = props;
  const { isActive, isListened, isDragging, isToday } = view;
  const { artist, title, cover, qobuz, rym, spotify } = album;
  const { listenOn, listPosition } = list;

  return (
    <StyledAlbum
      isActive={isActive}
      isListened={isListened}
      isDragging={isDragging}
      isToday={isToday}
      {...rest}
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
          <Icon
            onClick={(e) => {
              e.stopPropagation();
              window.open(spotify);
            }}
            as="li"
          >
            <Spotify />
          </Icon>
        )}
        {qobuz && (
          <Icon
            onClick={(e) => {
              e.stopPropagation();
              window.open(qobuz);
            }}
            as="li"
          >
            <Qobuz />
          </Icon>
        )}
        {rym && (
          <Icon
            onClick={(e) => {
              e.stopPropagation();
              window.open(rym);
            }}
            as="li"
          >
            <Rym />
          </Icon>
        )}
      </StyledButtonWrapper>
      <StyledToggler
        isActive={isListened}
        isVisible={isActive}
        onClick={(e) => {
          e.stopPropagation();
          toggle(String(album.id));
        }}
      />
    </StyledAlbum>
  );
};

export { Album };
