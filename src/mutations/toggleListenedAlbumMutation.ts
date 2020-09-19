import { fetchWithCredentials } from "@services/fetchWithCredentials";
import { LISTS_API } from "@config/api";
import { LISTS_TOGGLE_ENDPOINT } from "@config/endpoints";

export const toggleListenedAlbumMutation = async (json: {
  index: string;
  album: string;
}) => {
  const result = await fetchWithCredentials(
    `${LISTS_API}/${LISTS_TOGGLE_ENDPOINT}`,
    {
      method: "POST",
      json,
    },
  );

  return await result.json();
};
