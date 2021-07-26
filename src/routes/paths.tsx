import { lazy } from "react";
const Home = lazy(() => import("../pages/home"));
const Login = lazy(() => import("../pages/login"));
const CarsListing = lazy(() => import("../pages/carsListing"));
// const ForgetPassword = lazy(() => import("../pages/ForgetPassword"));
// const ResetPassword = lazy(() => import("../pages/ResetPassword"));

export const paths = {
  home: "home",
  login: "login",
  cars: "cars",
  forgotPassword: "forgot-password",
  resetPassword: "reset-password",
};

export const routes = {
  home: "/",
  login: "/login",
  cars: "/cars",
  forgotPassword: "/forgot-password",
  resetPassword: "/reset-password/:token",
};

export const privateRoutes = {
  [paths.home]: {
    name: "Dashboard",
    path: routes.home,
    component: Home,
  },
};

export const publicRoutes = {
  [paths.login]: {
    name: "Login",
    path: routes.login,
    component: Login,
  },
  [paths.cars]: {
    name: "Cars Listing",
    path: routes.cars,
    component: CarsListing,
  },
};
