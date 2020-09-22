import ky from "ky";
import { getCredentials } from "@services/getCredentials";

export async function fetchWithCredentials(url: string, config: any = {}) {
  const { username, token } = getCredentials();

  return await ky(url, {
    method: "get",
    headers: new Headers({
      "x-username": String(username),
      "x-token": String(token),
    }),
    ...config,
  });
}

export default fetchWithCredentials;
