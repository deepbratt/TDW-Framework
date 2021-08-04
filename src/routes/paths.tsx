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
  about: "about",
  products: "products",
  contact: "contact",
  cars: "cars",
  forgotPassword: "forgot-password",
  resetPassword: "reset-password",
  addEditCar:"add-edit/car/"
};

export const routes = {
  home: "/",
  login: "/login",
  about: "/about",
  products: "/products",
  contact: "/contact",
  cars: "/cars",
  forgotPassword: "/forgot-password",
  resetPassword: "/reset-password/:token",
  addEditCar:"/add-edit/car/:id?"
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
