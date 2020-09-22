import fetchWithCredentials from "@services/fetchWithCredentials";
import { LISTS_REORDER_ENDPOINT } from "@config/endpoints";
import { LISTS_API } from "@config/api";

export const reorderItemsMutation = async (json: {
  from: number;
  to: number;
  index: string;
}) => {
  const result = await fetchWithCredentials(
    `${LISTS_API}/${LISTS_REORDER_ENDPOINT}`,
    {
      method: "POST",
      json,
    },
  );

  return await result.json();
};
