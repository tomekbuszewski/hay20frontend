import React from "react";
import { Route, Redirect, RouteProps } from "react-router-dom";
import { useQuery } from "react-query";

import {
  VALIDATION_QUERY,
  validationQuery,
  validationQueryConfig,
} from "@queries/validationQuery";
import { ROUTES } from "@config/routes";

const ProtectedRoute: React.FunctionComponent<RouteProps> = (props) => {
  const { isError } = useQuery(
    VALIDATION_QUERY,
    validationQuery,
    validationQueryConfig,
  );

  if (isError) {
    return <Redirect to={ROUTES.LOGIN} />;
  }

  return <Route {...props} />;
};

export { ProtectedRoute };
