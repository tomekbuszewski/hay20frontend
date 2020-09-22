import * as React from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import { pages } from "@config/routes";

import { ProtectedRoute } from "@containers/ProtectedRoute";

const Routes: React.FunctionComponent = () => {
  const location = useLocation();

  return (
    <TransitionGroup>
      <CSSTransition key={location.pathname} classNames="page" timeout={400}>
        <Switch location={location}>
          {pages.map(({ isProtected, ...page }) => {
            const routeData = {
              ...page,
              key: `${location.pathname}-route`,
            };

            if (isProtected) {
              return <ProtectedRoute {...routeData} />;
            }

            return <Route {...routeData} />;
          })}
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  );
};

export { Routes };
