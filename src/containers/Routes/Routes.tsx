import * as React from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import { pages } from "@config/routes";
import { Main } from "@ui/Atoms";

const Routes: React.FunctionComponent = () => {
  const location = useLocation();

  return (
    <Main>
      <TransitionGroup>
        <CSSTransition key={location.pathname} classNames="page" timeout={400}>
          <Switch location={location}>
            {pages.map((page) => (
              <Route {...page} key={`${location.pathname}-route`} />
            ))}
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    </Main>
  );
};

export { Routes };
