import React from "react";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { HashRouter as Router } from "react-router-dom";
import { Helmet } from "react-helmet";
import { hot } from "react-hot-loader";

import { theme } from "@ui/theme";
import { GlobalStyle } from "@ui/GlobalStyle";
import store from "@redux/store";

import { ErrorBoundary } from "@containers/ErrorBoundary";

import { Routes } from "@containers/Routes";

const siteName = "Hundred a Year";

const BareApplication = () => (
  <ErrorBoundary>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Router>
          <React.Fragment>
            <Helmet
              titleTemplate={`%s — ${siteName}`}
              defaultTitle={siteName}
            />
            <GlobalStyle />
            <Routes />
          </React.Fragment>
        </Router>
      </ThemeProvider>
    </Provider>
  </ErrorBoundary>
);

export const Application = hot(module)(BareApplication);
