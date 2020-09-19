import { fetchWithCredentials } from "@services/fetchWithCredentials";
import { LISTS_API } from "@config/api";
import { LISTS_FETCH_ENDPOINT } from "@config/endpoints";

export const FETCH_LIST_DETAILS_QUERY = "FETCH_LIST_DETAILS_QUERY";
export const fetchListDetailsQuery = async (
  listId: number | string,
): Promise<any> => {
  const result = await fetchWithCredentials(
    `${LISTS_API}/${LISTS_FETCH_ENDPOINT}`.replace(":listId", String(listId)),
  );

  return await result.json();
};
