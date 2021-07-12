import { lazy } from "react";
const Home = lazy(() => import("../pages/home"));
const Login = lazy(() => import("../pages/login"));
// const ForgetPassword = lazy(() => import("../pages/ForgetPassword"));
// const ResetPassword = lazy(() => import("../pages/ResetPassword"));

export const paths = {
  home: "home",
  login: "login",
  about: "about",
  products: "products",
  contact: "contact",
  forgotPassword: "forgot-password",
  resetPassword: "reset-password",
};

export const routes = {
  home: "/",
  login: "/login",
  about: "/about",
  products: "/products",
  contact: "/contact",
  forgotPassword: "/forgot-password",
  resetPassword: "/reset-password/:token",
};

export const privateRoutes = {
  [paths.home]: {
    name: "Home",
    path: routes.home,
    component: Home,
  },
  [paths.about]: {
    name: "About",
    path: routes.about,
    component: Home,
  },
  [paths.products]: {
    name: "Products",
    path: routes.products,
    component: Home,
  },
  [paths.contact]: {
    name: "Contact",
    path: routes.contact,
    component: Home,
  },
};

export const publicRoutes = {
  [paths.login]: {
    name: "Login",
    path: routes.login,
    component: Login,
  },
};
