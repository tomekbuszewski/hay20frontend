import ky from "ky";

import { AUTH_API } from "@config/api";
import { AUTH_LOGIN_ENDPOINT } from "@config/endpoints";

export const loginMutation = async (
  json: Record<string, string>,
): Promise<any> => {
  return await ky(`${AUTH_API}/${AUTH_LOGIN_ENDPOINT}`, {
    method: "POST",
    json,
  }).json();
};
