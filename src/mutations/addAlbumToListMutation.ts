import fetchWithCredentials from "@services/fetchWithCredentials";
import { LISTS_API } from "@config/api";
import { LISTS_ADD_ENDPOINT } from "@config/endpoints";

export const addAlbumToListMutation = async (json: {
  index: string;
  album: number;
}) => {
  const result = await fetchWithCredentials(
    `${LISTS_API}/${LISTS_ADD_ENDPOINT}`,
    {
      method: "POST",
      json,
    },
  );

  return await result.json();
};
