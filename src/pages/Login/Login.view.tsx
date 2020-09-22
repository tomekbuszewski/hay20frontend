/**
 * @author tomek
 * @since 2020-09-19 17:42:52
 */

import * as React from "react";
import { Helmet } from "react-helmet";
import { useHistory } from "react-router-dom";

import { ROUTES } from "@config/routes";

import { Button, Form, PageTitle, TransitionWrapper } from "@ui/Atoms";
import { Input, KeyIcon, UserIcon } from "@ui/Molecules";

import { FORM_NAMES } from "./Login.typings";

interface Props {
  handleInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => Promise<void>;
}

const View: React.FunctionComponent<Props> = ({
  handleInput,
  handleSubmit,
}) => {
  const { push } = useHistory();

  return (
    <TransitionWrapper>
      <Helmet>
        <title>Sign In</title>
      </Helmet>
      <PageTitle>Sign In</PageTitle>
      <Form onSubmit={handleSubmit}>
        <Input
          icon={<UserIcon />}
          placeholder="Username"
          name={FORM_NAMES.USER}
          onChange={handleInput}
        />
        <Input
          icon={<KeyIcon />}
          autoComplete="new-password"
          placeholder="Password"
          type="password"
          name={FORM_NAMES.PASS}
          onChange={handleInput}
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
