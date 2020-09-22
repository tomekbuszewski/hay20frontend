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
  StyledFormButton,
} from "./AddAlbum.styles";
import { LargeText, SmallText, Button } from "@ui/Atoms";
import { Cover, Input } from "@ui/Molecules";
import { BaseProps as Props } from "./AddAlbum.types";

import { SearchIcon, ChevronIcon } from "@ui/Molecules";

const AddAlbum: React.FunctionComponent<Props> = (props) => {
  const {
    addAlbumHandler,
    isVisible,
    setFormVisible,
    searchResults,
    handleSubmit,
    handleChange,
    formValue,
  } = props;

  return (
    <StyledForm isVisible={isVisible} onSubmit={handleSubmit}>
      <StyledFormButton
        type="button"
        isActive={isVisible}
        onClick={setFormVisible}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="none"
          viewBox="0 0 20 20"
        >
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
            clipRule="evenodd"
          />
        </svg>
      </StyledFormButton>
      <Input
        name="query"
        icon={<SearchIcon />}
        noMargin
        onChange={handleChange}
        value={formValue}
      >
        <Button icon>
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
                <StyledResult key={`result-${i}`} onClick={addAlbumHandler}>
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
