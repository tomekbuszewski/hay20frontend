import * as React from "react";
import { useHistory } from "react-router-dom";
import { useQuery } from "react-query";

import { ROUTES } from "@config/routes";
import {
  VALIDATION_QUERY,
  validationQuery,
  validationQueryConfig,
} from "@queries/validationQuery";

const Home: React.FunctionComponent = () => {
  const history = useHistory();
  const { isLoading } = useQuery(VALIDATION_QUERY, validationQuery, {
    ...validationQueryConfig,
    onSuccess: () => history.push(ROUTES.LIST_INDEX),
    onError: () => history.push(ROUTES.LOGIN),
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return null;
};

export { Home };
