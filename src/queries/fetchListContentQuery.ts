import { fetchWithCredentials } from "@services/fetchWithCredentials";
import { ALBUMS_API } from "@config/api";
import { ALBUMS_COLLECTION_ENDPOINT } from "@config/endpoints";

export const FETCH_LIST_CONTENT_QUERY = "FETCH_LIST_CONTENT_QUERY";
export const fetchListContentQuery = async (
  ids: number[] | string[] | undefined,
) => {
  const result = await fetchWithCredentials(
    `${ALBUMS_API}/${ALBUMS_COLLECTION_ENDPOINT}`,
    {
      method: "POST",
      json: { ids },
    },
  );

  return await result.json();
};
