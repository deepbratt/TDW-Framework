import { lazy } from "react";
import AddEditCar from "../Pages/AddEditCar";
const Home = lazy(() => import("../Pages/home"));
const Login = lazy(() => import("../Pages/login"));
const CarsListing = lazy(() => import("../Pages/carsListing"));
// const ForgetPassword = lazy(() => import("../Pages/ForgetPassword"));
// const ResetPassword = lazy(() => import("../Pages/ResetPassword"));

export const paths = {
  home: "home",
  login: "login",
  cars: "cars",
  forgotPassword: "forgot-password",
  resetPassword: "reset-password",
  addEditCar:"add-edit/car/"
};

export const routes = {
  home: "/",
  login: "/login",
  cars: "/cars",
  forgotPassword: "/forgot-password",
  resetPassword: "/reset-password/:token",
  addEditCar:"/add-edit/car/:id?"
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
  [paths.addEditCar]: {
    name: "Cars Add Edit",
    path: routes.addEditCar,
    component: AddEditCar,
  },
};
