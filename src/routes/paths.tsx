import { lazy } from "react";
const Home = lazy(() => import("../pages/home"));
const Login = lazy(() => import("../pages/login"));
const CarsListing = lazy(() => import("../pages/carsListing"));
const ForgetPassword = lazy(() => import("../pages/forgetPassword"));
const ResetPassword = lazy(() => import("../pages/resetPassword"));
const Signup = lazy(() => import("../pages/signup"));
const SignupWithEmail = lazy(() => import("../pages/signup/SignupWithEmail"));
const SignupWithMobile = lazy(() => import("../pages/signup/SignupWithMobile"));
const AddEditCar = lazy(() => import("../pages/AddEditCar"));
const usedCars = lazy(() => import("../pages/SearchUsedCars/index"));
const Verification = lazy(() => import("../pages/verificationPage"));
const CarDetail = lazy(() => import("../pages/carDetail"));
const CarComparison = lazy(() => import("../pages/carComparision/index"));
const ShortlistItem = lazy(() => import("../pages/shortlistItems"));

export const paths = {
  home: "home",
  login: "login",
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
};

export const routes = {
  home: "/",
  login: "/login",
  about: "/about",
  products: "/products",
  contact: "/contact",
  usedCars: "/search-used-cars",
  carDetail: "/car-detail/:id",
  carComparision: "/car-comparision",
  carShortlist: "/cars-shortlist",
  carListing: "/post-an-ad",
  profile: "/dashboard/:id",
  signup: "/signup",
  verification: "/verification",
  cars: "/cars",
  forgotPassword: "/forgot-password",
  resetPassword: "/reset-password/:token",
  signupWithEmail: "/signup-with-email",
  signupWithMobile: "/signup-with-mobile",
  addEditCar: "/add-edit/car/:id?",
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
