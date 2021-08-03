import { lazy } from "react";
const Home = lazy(() => import("../pages/home"));
const Login = lazy(() => import("../pages/login"));
const CarsListing = lazy(() => import("../pages/carsListing"));
const ForgetPassword = lazy(() => import("../pages/forgetPassword"));
const ResetPassword = lazy(() => import("../pages/resetPassword"));
const Signup = lazy(() => import("../pages/signup"));
const SignupWithEmail = lazy(() => import("../pages/signup/SignupWithEmail"));
const SignupWithMobile = lazy(() => import("../pages/signup/SignupWithMobile"));

export const paths = {
  home: "home",
  cars: "cars",
  login: "login",
  signup: "signup",
  forgotPassword: "forgot-password",
  resetPassword: "reset-password",
  signupWithEmail: "signup-with-email",
  signupWithMobile: "signup-with-mobile",
};

export const routes = {
  home: "/",
  cars: "/cars",
  login: "/login",
  signup: "/signup",
  forgotPassword: "/forgot-password",
  resetPassword: "/reset-password/:token",
  signupWithEmail: "/signup-with-email",
  signupWithMobile: "/signup-with-mobile",
};

export const privateRoutes = {
  [paths.home]: {
    name: "Dashboard",
    path: routes.home,
    component: Home,
  },
};

export const publicRoutes = {
  [paths.cars]: {
    name: "Cars Listing",
    path: routes.cars,
    component: CarsListing,
  },
  [paths.login]: {
    name: "Login",
    path: routes.login,
    component: Login,
  },
  [paths.signup]: {
    name: "Signup",
    path: routes.signup,
    component: Signup,
  },
  [paths.forgotPassword]: {
    name: "Forgot Password",
    path: routes.forgotPassword,
    component: ForgetPassword,
  },
  [paths.resetPassword]: {
    name: "Reset Password",
    path: routes.resetPassword,
    component: ResetPassword,
  },
  [paths.signupWithEmail]: {
    name: "Sign With Email",
    path: routes.signupWithEmail,
    component: SignupWithEmail,
  },
  [paths.signupWithMobile]: {
    name: "Sign With Mobile",
    path: routes.signupWithMobile,
    component: SignupWithMobile,
  },
};
