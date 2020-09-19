import loadable from "@loadable/component";

import { RouteProps } from "react-router-dom";

const Home = loadable(() => import("@pages/Home"));
const About = loadable(() => import("@pages/About"));
const Users = loadable(() => import("@pages/Users"));
const Register = loadable(() => import("@pages/Register"));
const Login = loadable(() => import("@pages/Login"));
const ListIndex = loadable(() => import("@pages/ListIndex"));
const SingleList = loadable(() => import("@pages/SingleList"));

export enum ROUTES {
  HOME = "/",
  ABOUT = "/about",
  USERS = "/users",
  REGISTER = "/register",
  LOGIN = "/login",
  LIST_INDEX = "/lists",
  SINGLE_LIST = "/list/:id",
}

export const index: RouteProps = {
  exact: true,
  path: ROUTES.HOME,
  component: Home,
};

export const about: RouteProps = {
  path: ROUTES.ABOUT,
  component: About,
};

export const users: RouteProps = {
  path: ROUTES.USERS,
  exact: true,
  component: Users,
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
};

export const singleList: RouteProps = {
  path: ROUTES.SINGLE_LIST,
  component: SingleList,
};

export const pages = [
  index,
  about,
  users,
  register,
  login,
  listIndex,
  singleList,
];
