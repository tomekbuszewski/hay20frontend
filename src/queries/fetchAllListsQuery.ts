import { getCredentials } from "@services/getCredentials";
import { LISTS_API } from "@config/api";
import { LISTS_FETCH_ALL_ENDPOINT } from "@config/endpoints";
import { fetchWithCredentials } from "@services/fetchWithCredentials";

export const FETCH_ALL_LISTS_QUERY = "FETCH_ALL_LISTS_QUERY";

export const fetchAllListsQuery = async () => {
  const { id } = getCredentials();

  if (id) {
    const url = `${LISTS_API}/${LISTS_FETCH_ALL_ENDPOINT}`.replace(
      ":userId",
      id,
    );

    const data = await fetchWithCredentials(url);
    return await data.json();
  }

  throw new Error("User not logged in or credentials broken.");
};
