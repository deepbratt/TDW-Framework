import { lazy } from "react";
const Home = lazy(() => import("../Pages/home"));
const Login = lazy(() => import("../Pages/login"));
const CarsListing = lazy(() => import("../Pages/carsListing"));
// const LoginWithMobile = lazy(() => import("../Pages/login/loginWithMobile"));
const ForgetPassword = lazy(() => import("../Pages/forgetPassword"));
const ResetPassword = lazy(() => import("../Pages/resetPassword"));
const Signup = lazy(() => import("../Pages/signup"));
// const SignupWithEmail = lazy(() => import("../Pages/signup/SignupWithEmail"));
// const SignupWithMobile = lazy(() => import("../Pages/signup/SignupWithMobile"));
const AddEditCar = lazy(() => import("../Pages/AddEditCar"));
const usedCars = lazy(() => import("../Pages/SearchUsedCars/index"));
const Verification = lazy(() => import("../Pages/verificationPage"));
const CarDetail = lazy(() => import("../Pages/carDetail"));
const CarComparison = lazy(() => import("../Pages/carComparision/index"));
const ShortlistItem = lazy(() => import("../Pages/shortlistItems"));
const Dashboard = lazy(() => import("../Pages/dashboard/index"));
const CarListing = lazy(() => import("../Pages/postAd"));

export const paths = {
  home: "home",
  login: "login",
  loginWithMobile: "login-with-mobile",
  about: "about",
  products: "products",
  contact: "contact",
  usedCars: "usedCars",
  profile: "profile",
  verification: "verification",
  carDetail: "carDetail",
  carComparision: "carComparision",
  carShortlist: "cars-shortlist",
  carListing: "carListing",
  signup: "signup",
  cars: "cars",
  forgotPassword: "forgot-password",
  resetPassword: "reset-password",
  signupWithEmail: "signup-with-email",
  signupWithMobile: "signup-with-mobile",
  addEditCar: "add-edit/car/",
  dashboard: "dashboard"
};

export const routes = {
  home: "/",
  login: "/login",
  loginWithMobile: "/login-with-mobile",
  about: "/about",
  products: "/products",
  contact: "/contact",
  usedCars: "/search-used-cars",
  carDetail: "/car-detail/:id",
  carShortlist: "/cars-shortlist",
  carComparision: "/car-comparision/:_fId/:_sId",
  carListing: "/post-an-ad",
  profile: "/dashboard/:id",
  signup: "/signup",
  verification: "/verification/:method",
  cars: "/cars",
  forgotPassword: "/forgot-password",
  resetPassword: "/reset-password/:token",
  signupWithEmail: "/signup-with-email",
  signupWithMobile: "/signup-with-mobile",
  addEditCar: "/add-edit/car/:id?",
  dashboard: "/dashboard/:id"
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
  [paths.usedCars]: {
    path: routes.usedCars,
    component: usedCars,
  },
  [paths.verification]: {
    path: routes.verification,
    component: Verification,
  },
  [paths.carDetail]: {
    path: routes.carDetail,
    component: CarDetail,
  },
  [paths.carShortlist]: {
    path: routes.carShortlist,
    component: ShortlistItem,
  },
  [paths.carListing]: {
    path: routes.carListing,
    component: CarsListing,
  },
  [paths.dashboard]: {
    path: routes.dashboard,
    component: Dashboard,
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
  // [paths.loginWithMobile]: {
  //   name: "Login With Mobile",
  //   path: routes.loginWithMobile,
  //   component: LoginWithMobile,
  // },
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
  // [paths.signupWithEmail]: {
  //   name: "Sign With Email",
  //   path: routes.signupWithEmail,
  //   component: SignupWithEmail,
  // },
  // [paths.signupWithMobile]: {
  //   name: "Sign With Mobile",
  //   path: routes.signupWithMobile,
  //   component: SignupWithMobile,
  // },
  [paths.addEditCar]: {
    name: "Cars Add Edit",
    path: routes.addEditCar,
    component: AddEditCar,
  },
  [paths.carDetail]: {
    path: routes.carDetail,
    component: CarDetail,
  },
  [paths.carComparision]: {
    path: routes.carComparision,
    component: CarComparison,
  },
  [paths.usedCars]: {
    path: routes.usedCars,
    component: usedCars,
  },
};
