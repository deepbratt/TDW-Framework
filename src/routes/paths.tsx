import { lazy } from "react";
const Home = lazy(() => import("../pages/home"));
const Login = lazy(() => import("../pages/login"));
const usedCars = lazy(() => import("../pages/SearchUsedCars/index"));
const Profile = lazy(() => import("../pages/profile/index"));
const Verification = lazy(() => import("../pages/verificationPage"));
const CarDetail = lazy(() => import("../pages/carDetail"));
const CarComparison = lazy(() => import("../pages/carComparision/index"));
const CarListing = lazy(() => import("../pages/carListing"));
const CarsListing = lazy(() => import("../pages/carsListing"));
// const ForgetPassword = lazy(() => import("../pages/ForgetPassword"));
// const ResetPassword = lazy(() => import("../pages/ResetPassword"));
import AddEditCar from "../pages/AddEditCar";

export const paths = {
  home: "home",
  login: "login",
  usedCars: "usedCars",
  profile: "profile",
  verification: "verification",
  carDetail: "carDetail",
  carComparision: "carComparision",
  carListing: "carListing",
  signup: "signup",
  cars: "cars",
  forgotPassword: "forgot-password",
  resetPassword: "reset-password",
  addEditCar:"add-edit/car/"
};

export const routes = {
  home: "/",
  login: "/login",  
  usedCars: "/search-used-cars",
  carDetail: "/car-detail",
  carComparision: "/car-comparision",
  carListing: "/post-an-ad",
  profile: "/profile",
  signup: "/signup",
  verification: "/phone-number-verification",
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
  [paths.usedCars]: {
    path: routes.usedCars,
    component: usedCars,
  },
  [paths.profile]: {
    path: routes.profile,
    component: Profile,
  },
  [paths.verification]: {
    path: routes.verification,
    component: Verification
  },
  [paths.carDetail]: {
    path: routes.carDetail,
    component: CarDetail
  },
  [paths.carComparision]: {
    path: routes.carComparision,
    component: CarComparison
  },
  [paths.carListing]: {
    path: routes.carListing,
    component: CarListing
  }
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
