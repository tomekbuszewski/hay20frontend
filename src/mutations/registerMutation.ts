import ky from "ky";

import { AUTH_API } from "@config/api";
import { AUTH_CREATE_ENDPOINT } from "@config/endpoints";

export const registerMutation = async (
  json: Record<string, string>,
): Promise<any> => {
  return await ky(`${AUTH_API}/${AUTH_CREATE_ENDPOINT}`, {
    method: "POST",
    json,
  }).json();
};
