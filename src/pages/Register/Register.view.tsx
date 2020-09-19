/**
 * @author tomek
 * @since 2020-09-19 16:21:53
 */

import * as React from "react";
import { Helmet } from "react-helmet";
import { useHistory } from "react-router-dom";

import { Form, PageTitle, Button, TransitionWrapper } from "@ui/Atoms";
import { Input } from "@ui/Molecules";
import { UserIcon, KeyIcon, AtIcon } from "@ui/Molecules";
import { ROUTES } from "@config/routes";

const View: React.FunctionComponent = () => {
  const { push } = useHistory();

  return (
    <TransitionWrapper>
      <Helmet>
        <title>Sign Up</title>
      </Helmet>
      <PageTitle>Sign Up</PageTitle>
      <Form>
        <Input icon={<UserIcon />} placeholder="Username" name="user" />
        <Input icon={<AtIcon />} placeholder="E-mail" name="email" />
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
            onClick={() => push(ROUTES.LOGIN)}
          >
            Log in with existing account
          </Button>
          <Button>Sign in</Button>
        </div>
      </Form>
    </TransitionWrapper>
  );
};

export { View };
