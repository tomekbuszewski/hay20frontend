import * as React from "react";
import { useHistory } from "react-router-dom";
import { ROUTES } from "@config/routes";

const Home: React.FunctionComponent = () => {
  const { push } = useHistory();
  return <div onClick={() => push(ROUTES.LOGIN)}>login</div>;
};

export { Home };
