import { AUTH_API } from "@config/api";
import { AUTH_VERIFY_ENDPOINT } from "@config/endpoints";
import { fetchWithCredentials } from "@services/fetchWithCredentials";

export const VALIDATION_QUERY = "VALIDATION_QUERY";

export const validationQuery = async (): Promise<boolean> => {
  const data = await fetchWithCredentials(
    `${AUTH_API}/${AUTH_VERIFY_ENDPOINT}`,
    {
      method: "POST",
    },
  );

  if (data.status === 200) {
    return true;
  } else {
    throw new Error("Login credentials missing or incorrect");
  }
};

export const validationQueryConfig = {
  retry: false,
  refetchOnWindowFocus: false,
};
