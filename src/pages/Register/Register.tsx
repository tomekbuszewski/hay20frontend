/**
 * @author tomek
 * @since 2020-09-19 16:21:53
 */

import * as React from "react";
import { useMutation } from "react-query";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

import { registerMutation } from "@mutations/registerMutation";

import { View } from "./Register.view";
import { ROUTES } from "@config/routes";

const Register: React.FunctionComponent = () => {
  const { push } = useHistory();
  const [sendRegisterData] = useMutation(registerMutation);
  const [formData, setFormData] = React.useState<Record<string, string>>();

  const tryToRegister = async () => {
    try {
      await sendRegisterData(formData);
      push(ROUTES.LOGIN);
    } catch (e) {
      console.log(e);
    }
  };

  const handleInput = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>,
  ): Promise<void> => {
    event.preventDefault();
    await tryToRegister();
  };

  return <View handleInput={handleInput} handleSubmit={handleSubmit} />;
};

const ConnectedRegister = connect()(Register);

export { ConnectedRegister as Register };
