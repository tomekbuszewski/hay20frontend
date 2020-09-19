/**
 * @author tomek
 * @since 2020-09-18 11:17:04
 */

import * as React from "react";

import {
  StyledForm,
  StyledResult,
  StyledResultHolder,
  StyledResultsHeader,
  StyledResultsWrapper,
} from "./AddAlbum.styles";
import { LargeText, SmallText, Button } from "@ui/Atoms";
import { Cover, Input } from "@ui/Molecules";
import { BaseProps as Props } from "./AddAlbum.types";

import { SearchIcon, ChevronIcon } from "@ui/Molecules";

const AddAlbum: React.FunctionComponent<Props> = (props) => {
  const { isVisible, searchResults } = props;

  return (
    <StyledForm isVisible={isVisible}>
      <Input name="query" icon={<SearchIcon />} noMargin>
        <Button icon onClick={() => alert("HI")}>
          <ChevronIcon />
        </Button>
      </Input>
      {searchResults && (
        <StyledResultsWrapper>
          <StyledResultsHeader>
            Result found <span>(tap to add)</span>:
          </StyledResultsHeader>
          <StyledResultHolder>
            {searchResults.map((album, i) => {
              const { title, artist, cover } = album;

              return (
                <StyledResult key={`result-${i}`}>
                  <Cover title={title} artist={artist} cover={cover} />
                  <LargeText>{title}</LargeText>
                  <SmallText>{artist}</SmallText>
                </StyledResult>
              );
            })}
          </StyledResultHolder>
        </StyledResultsWrapper>
      )}
    </StyledForm>
  );
};

export { AddAlbum };
