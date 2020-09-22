/**
 * @author tomek
 * @since 2020-09-19 17:42:52
 */

import * as React from "react";
import { connect } from "react-redux";
import { useMutation } from "react-query";
import { useHistory } from "react-router-dom";

import { setCredentials } from "@redux/user/actions";

import { loginMutation } from "@mutations/loginMutation";

import { View } from "./Login.view";
import { FORM_NAMES } from "@pages/Login/Login.typings";
import { ReduxAction } from "@typings";
import { IUserLoginPayload } from "@redux/user/typings";
import { ROUTES } from "@config/routes";

interface Props {
  set: (payload: IUserLoginPayload) => ReduxAction<IUserLoginPayload>;
}

const Login: React.FunctionComponent<Props> = ({ set }) => {
  const { push } = useHistory();
  const [sendLoginCredentials] = useMutation(loginMutation);
  const [formData, setFormData] = React.useState<Record<string, string>>();

  const tryToLogIn = async () => {
    try {
      const { payload } = await sendLoginCredentials(formData);
      set(payload);
      push(ROUTES.LIST_INDEX);
    } catch {
      push(ROUTES.REGISTER);
    }
  };

  const handleInput = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;

    setFormData((current) => ({
      ...current,
      [name]: name === FORM_NAMES.PASS ? window.btoa(value) : value,
    }));
  };

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>,
  ): Promise<void> => {
    event.preventDefault();
    await tryToLogIn();
  };

  return <View handleInput={handleInput} handleSubmit={handleSubmit} />;
};

const ConnectedLogin = connect(null, { set: setCredentials })(Login);
export { ConnectedLogin as Login };
