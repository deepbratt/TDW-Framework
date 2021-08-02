import { lazy } from "react";
const Home = lazy(() => import("../pages/home"));
const Login = lazy(() => import("../pages/login"));
const usedCars = lazy(() => import("../pages/SearchUsedCars/index"));
const Profile = lazy(() => import("../pages/profile/index"));
const Verification = lazy(() => import("../pages/verificationPage"));
const CarDetail = lazy(() => import("../pages/carDetail"));
const CarComparison = lazy(() => import("../pages/carComparision/index"));
const CarListing = lazy(() => import("../pages/carListing"));
// const ForgetPassword = lazy(() => import("../pages/ForgetPassword"));
// const ResetPassword = lazy(() => import("../pages/ResetPassword"));

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
  forgotPassword: "forgot-password",
  resetPassword: "reset-password",
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
  forgotPassword: "/forgot-password",
  resetPassword: "/reset-password/:token",
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
};
