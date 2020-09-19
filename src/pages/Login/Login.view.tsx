/**
 * @author tomek
 * @since 2020-09-19 17:42:52
 */

import * as React from "react";
import { Helmet } from "react-helmet";
import { useHistory } from "react-router-dom";

import { Button, Form, PageTitle, TransitionWrapper } from "@ui/Atoms";
import { Input, KeyIcon, UserIcon } from "@ui/Molecules";
import { ROUTES } from "@config/routes";

const View: React.FunctionComponent = () => {
  const { push } = useHistory();

  return (
    <TransitionWrapper>
      <Helmet>
        <title>Sign In</title>
      </Helmet>
      <PageTitle>Sign In</PageTitle>
      <Form>
        <Input icon={<UserIcon />} placeholder="Username" name="user" />
        <Input
          icon={<KeyIcon />}
          autoComplete="new-password"
          placeholder="Password"
          type="password"
          name="password"
        />
        <div style={{ display: "flex" }}>
          <Button
            type="button"
            toRight
            minor
            onClick={() => push(ROUTES.REGISTER)}
          >
            Create an account
          </Button>
          <Button>Sign in</Button>
        </div>
      </Form>
    </TransitionWrapper>
  );
};

export { View };
