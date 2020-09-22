import fetchWithCredentials from "@services/fetchWithCredentials";
import { LISTS_CREATE_ENDPOINT } from "@config/endpoints";
import { LISTS_API } from "@config/api";
import { getCredentials } from "@services/getCredentials";

export const createNewListMutation = async () => {
  const result = await fetchWithCredentials(
    `${LISTS_API}/${LISTS_CREATE_ENDPOINT}`,
    {
      method: "POST",
      json: {
        user: getCredentials().id,
        year: new Date().getFullYear(),
      },
    },
  );

  return await result.json();
};
