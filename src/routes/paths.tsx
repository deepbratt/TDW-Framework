import { lazy } from 'react';
// import Retry from '../components/Retry';
// ===========================================================================================
//                                      component imports without lazy loading
// =========================================================================================
// import CarsListing from '../pages/carsListing'
// import AddEditCar from '../pages/AddEditCar'
// import CarDetail from '../pages/carDetail/index'
// import CarComparison from '../pages/carComparision/index'
// import ShortlistItem from '../pages/shortlistItems'
// import Dashboard from '../pages/dashboard'
// import PostAd from '../pages/postAd'
// import HelpPage from '../pages/Help'
// import Home from'../pages/home';
// import Login from '../pages/login';
// import ForgetPassword from '../pages/forgetPassword';
// import ResetPassword from '../pages/resetPassword';
// import Signup from '../pages/signup'
// import usedCars from '../pages/SearchUsedCars/index';
// import Verification from '../pages/verificationPage'
// ===========================================================================================
//                                      lazy loading
// =========================================================================================
const Home = lazy(() => import('../pages/home'));
const Login = lazy(() => import('../pages/login'));
const CarsListing = lazy(() => import('../pages/carsListing'));
const ProductListing = lazy(() => import('../pages/productListing'));
const FindParts = lazy(() => import('../pages/findParts'));
const Cart = lazy(() => import('../pages/cart'));
const ForgetPassword = lazy(() => import('../pages/forgetPassword'));
const ResetPassword = lazy(() => import('../pages/resetPassword'));
const Signup = lazy(() => import('../pages/signup'));
const AddEditCar = lazy(() => import('../pages/AddEditCar'));
const Verification = lazy(() => import('../pages/verificationPage'));
const CarDetail = lazy(() => import('../pages/carDetail/index'));
const CarComparison = lazy(() => import('../pages/carComparision/index'));
const ShortlistItem = lazy(() => import('../pages/shortlistItems'));
const Dashboard = lazy(() => import('../pages/dashboard'));
const PostAd = lazy(() => import('../pages/postAd'));
const HelpPage = lazy(() => import('../pages/help'));
const ErrorPage = lazy(() => import('../pages/Error404'));
// ===========================================================================================
//            lazy loading with retry if chunk fails to load
// =========================================================================================
// const Home = lazy(()  => Retry(()=> import('../pages/home')));
// const Login = lazy(() => Retry(()=>import('../pages/login')));
// const CarsListing = lazy(() => Retry(()=> import('../pages/carsListing')));
// const ForgetPassword = lazy(() => Retry(()=> import('../pages/forgetPassword')));
// const ResetPassword = lazy(() => Retry(()=> import('../pages/resetPassword')));
// const Signup = lazy(() => Retry(()=> import('../pages/signup')));
// const AddEditCar = lazy(() => Retry(()=> import('../pages/AddEditCar')));
// const usedCars = lazy(() => Retry(()=> import('../pages/SearchUsedCars/index')));
// const Verification = lazy(() =>Retry(()=> import('../pages/verificationPage')));
// const CarDetail = lazy(() => Retry(()=> import('../pages/carDetail/index')));
// const CarComparison = lazy(() => Retry(()=> import('../pages/carComparision/index')));
// const ShortlistItem = lazy(() => Retry(()=> import('../pages/shortlistItems')));
// const Dashboard = lazy(() => Retry(()=> import('../pages/dashboard')));
// const PostAd = lazy(() => Retry(()=> import('../pages/postAd')));
// const HelpPage = lazy(() => Retry(()=> import('../pages/Help')));

export const paths = {
  home: '/',
  dashboard: '/dashboard',
  fav: '/favorites',
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
  cars: '/cars',
  cart: '/cart',
  findParts: '/find-spare-parts',
  spareParts: '/spare-parts',
  forgotPassword: '/forgot-password',
  resetPassword: 'reset-password',
  addEditCar: '/add-edit/car/',
  help: 'help',
  error: '*'
};

export const routes = {
  home: '/',
  dashboard: '/dashboard/:id?',
  login: '/login',
  signup: '/signup',
  loginWithMobile: '/login-with-mobile',
  about: '/about',
  products: '/products',
  contact: '/contact',
  usedCars: '/search-used-cars',
  carDetail: '/car-detail/:id',
  carShortlist: '/cars-shortlist',
  carComparision: '/car-comparision',
  postAd: '/post-an-ad',
  verification: '/verification/:method?',
  cars: '/cars/:city?',
  cart: '/cart/:_id?',
  findParts: '/find-spare-parts',
  spareParts: '/spare-parts',
  forgotPassword: '/forgot-password/:token?',
  resetPassword: '/reset-password/:token',
  addEditCar: '/add-edit/car/:id?',
  help: '/help',
  error: '*'
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
  },
  [paths.cart]: {
    name: 'Cart',
    path: routes.cart,
    component: Cart
  }
};

export const publicRoutes = {
  [paths.home]: {
    name: 'Home',
    path: routes.home,
    // component: Home, =====> uncomment this and remove below line to see landing/home page
    component: Home
  },
  [paths.cars]: {
    name: 'Cars Listing',
    path: routes.cars,
    component: CarsListing
  },
  [paths.spareParts]: {
    name: 'Product Listing',
    path: routes.spareParts,
    component: ProductListing
  },
  [paths.findParts]: {
    name: 'Find Spare Parts',
    path: routes.findParts,
    component: FindParts
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
  [paths.help]: {
    name: 'Help',
    path: routes.help,
    component: HelpPage
  },
  [paths.error]: {
    name: 'Error 404',
    path: routes.error,
    component: ErrorPage
  }
};

export const onlyPublicRoutes = {
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
  }
};
