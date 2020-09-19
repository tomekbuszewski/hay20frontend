/**
 * @author tomek
 * @since 2020-09-19 17:42:52
 */

import { connect } from "react-redux";

import { View } from "./Login.view";

const Login = connect()(View);

export { Login };
