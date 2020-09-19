import fetchWithCredentials from "@services/fetchWithCredentials";
import { ALBUMS_API } from "@config/api";
import { ALBUMS_CREATE_ENDPOINT } from "@config/endpoints";

export const addAlbumMutation = async (json: any) => {
  const result = await fetchWithCredentials(
    `${ALBUMS_API}/${ALBUMS_CREATE_ENDPOINT}`,
    {
      method: "POST",
      json,
    },
  );

  return await result.json();
};
