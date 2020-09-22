import loadable from "@loadable/component";

import { RouteProps as BaseRouteProps } from "react-router-dom";

const Home = loadable(() => import("@pages/Home"));
const Register = loadable(() => import("@pages/Register"));
const Login = loadable(() => import("@pages/Login"));
const ListIndex = loadable(() => import("@pages/ListIndex"));
const SingleList = loadable(() => import("@pages/SingleList"));

export enum ROUTES {
  HOME = "/",
  REGISTER = "/register",
  LOGIN = "/login",
  LIST_INDEX = "/lists",
  SINGLE_LIST = "/list/:listIndex",
}

interface RouteProps extends BaseRouteProps {
  isProtected?: boolean;
}

export const index: RouteProps = {
  exact: true,
  path: ROUTES.HOME,
  component: Home,
};

export const register: RouteProps = {
  path: ROUTES.REGISTER,
  exact: true,
  component: Register,
};

export const login: RouteProps = {
  path: ROUTES.LOGIN,
  exact: true,
  component: Login,
};

export const listIndex: RouteProps = {
  path: ROUTES.LIST_INDEX,
  exact: true,
  component: ListIndex,
  isProtected: true,
};

export const singleList: RouteProps = {
  path: ROUTES.SINGLE_LIST,
  component: SingleList,
  isProtected: true,
};

export const pages = [index, register, login, listIndex, singleList];
