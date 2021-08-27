import { lazy } from 'react';
import Retry from '../components/Retry';
const Home = lazy(()  => Retry(()=> import('../pages/home')));
const Login = lazy(() => Retry(()=>import('../pages/login')));
const CarsListing = lazy(() => Retry(()=> import('../pages/carsListing')));
const ForgetPassword = lazy(() => Retry(()=> import('../pages/forgetPassword')));
const ResetPassword = lazy(() => Retry(()=> import('../pages/resetPassword')));
const Signup = lazy(() => Retry(()=> import('../pages/signup')));
const AddEditCar = lazy(() => Retry(()=> import('../pages/AddEditCar')));
const usedCars = lazy(() => Retry(()=> import('../pages/SearchUsedCars/index')));
const Verification = lazy(() =>Retry(()=> import('../pages/verificationPage')));
const CarDetail = lazy(() => Retry(()=> import('../pages/carDetail/index')));
const CarComparison = lazy(() => Retry(()=> import('../pages/carComparision/index')));
const ShortlistItem = lazy(() => Retry(()=> import('../pages/shortlistItems')));
const Dashboard = lazy(() => Retry(()=> import('../pages/dashboard')));
const PostAd = lazy(() => Retry(()=> import('../pages/postAd')));

export const paths = {
  home: 'home',
  dashboard: '/dashboard',
  postAd: '/post-an-ad',
  login: '/login',
  about: 'about',
  products: 'products',
  contact: 'contact',
  usedCars: 'usedCars',
  profile: 'profile',
  verification: '/verification',
  carDetail: '/car-detail/',
  carComparision: '/car-comparision',
  carShortlist: 'cars-shortlist',
  signup: '/signup',
  cars: 'cars',
  forgotPassword: '/forgot-password',
  resetPassword: 'reset-password',
  addEditCar: 'add-edit/car/'
};

export const routes = {
  home: '/',
  dashboard: '/dashboard/:id',
  login: '/login',
  signup: '/signup',
  loginWithMobile: '/login-with-mobile',
  about: '/about',
  products: '/products',
  contact: '/contact',
  usedCars: '/search-used-cars',
  carDetail: '/car-detail/:id',
  carShortlist: '/cars-shortlist',
  carComparision: '/car-comparision/:_fId/:_sId',
  postAd: '/post-an-ad',
  verification: '/verification/:method?',
  cars: '/cars/:city?',
  forgotPassword: '/forgot-password/:token?',
  resetPassword: '/reset-password/:token',
  addEditCar: '/add-edit/car/:id?'
};

export const privateRoutes = {
  // [paths.about]: {
  //   name: "About",
  //   path: routes.about,
  //   component: Home,
  // },
  // [paths.products]: {
  //   name: "Products",
  //   path: routes.products,
  //   component: Home,
  // },
  // [paths.contact]: {
  //   name: "Contact",
  //   path: routes.contact,
  //   component: Home,
  // },
  [paths.verification]: {
    path: routes.verification,
    component: Verification
  },
  [paths.addEditCar]: {
    name: 'Cars Add Edit',
    path: routes.addEditCar,
    component: AddEditCar
  },
  [paths.dashboard]: {
    name: 'Dashboard',
    path: routes.dashboard,
    component: Dashboard
  },
  [paths.postAd]: {
    name: 'Post An Ad',
    path: routes.postAd,
    component: PostAd
  }
};

export const publicRoutes = {
  [paths.home]: {
    name: 'Home',
    path: routes.home,
    // component: Home, =====> uncomment this and remove below line to see landing/home page
    component: CarsListing
  },
  [paths.cars]: {
    name: 'Cars Listing',
    path: routes.cars,
    component: CarsListing
  },
  [paths.login]: {
    name: 'Login',
    path: routes.login,
    component: Login
  },
  [paths.signup]: {
    name: 'Signup',
    path: routes.signup,
    component: Signup
  },
  [paths.forgotPassword]: {
    name: 'Forgot Password',
    path: routes.forgotPassword,
    component: ForgetPassword
  },

  [paths.resetPassword]: {
    name: 'Reset Password',
    path: routes.resetPassword,
    component: ResetPassword
  },
  [paths.carDetail]: {
    path: routes.carDetail,
    component: CarDetail
  },
  [paths.carComparision]: {
    path: routes.carComparision,
    component: CarComparison
  },
  // [paths.usedCars]: {
  //   path: routes.usedCars,
  //   component: usedCars
  // },
  [paths.carShortlist]: {
    path: routes.carShortlist,
    component: ShortlistItem
  },
};
