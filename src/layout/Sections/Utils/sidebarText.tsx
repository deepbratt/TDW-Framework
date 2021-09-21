import icon1 from '../assets/Profile/icon1.png';
import icon2 from '../assets/Profile/icon2.png';
import icon3 from '../assets/Profile/icon3.png';
import icon4 from '../assets/Profile/icon4.png';
import icon5 from '../assets/Profile/icon5.png';
import icon6 from '../assets/Profile/icon6.png';
import icon7 from '../assets/Profile/icon7.png';
import icon8 from '../assets/Profile/icon8.png';
import { Colors } from '../../../Utils/constants/colors/colors';
import profileIcon from '../assets/Profile/profile 1.png';
// import helpIcon from "../assets/Profile/customer-service.png"
import helpIcon from '../assets/Profile/customer-service.png';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { Commute, Compare, Favorite, Help } from '@material-ui/icons';

export const Title = 'DashBoard';
export const profileTitle = 'Personal Information';
export const buttonText = 'Save';
export const profile = profileIcon;
export const cancelButtonText = 'Cancel';

export const required = 'This field is required';
export const emailText = 'Invalid email';
export const userText =
  "'Name can only use letters,numbers, minimum length is 8 characters'";
export const newPass = 'Password must have at least 8 characters';
export const confirmPass = 'The passwords do not match';
export const email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/;
export const numberReg = /^[0-9\b]+$/;

export const paths = [
  {
    title: 'Profile',
    path: '/dashboard/profile',
    icon: <AccountCircle />
  },
  // {
  //     title: "Orders",
  //     path: "/dashboard/orders",
  //     icon: icon2
  // },
  {
    title: 'Comparison',
    path: '/cars-shortlist',
    icon: <Compare />
  },
  {
    title: 'Favorites',
    path: '/dashboard/favorites',
    icon: <Favorite />
  },
  {
    title: 'My Ads',
    path: '/dashboard/ads',
    icon: <Commute />
  },
  // {
  //     title: "Booked Items",
  //     path: "dashboard/bookings",
  //     icon: icon6
  // },
  // {
  //     title: "Buyer Request",
  //     path: "dashboard/buyRequests",
  //     icon: icon7
  // },
  {
    title: 'Help',
    path: '/dashboard/help',
    icon: <Help />
  }
];

export const currencies = [
  {
    value: 'USD',
    label: '$'
  },
  {
    value: 'EUR',
    label: '€'
  },
  {
    value: 'BTC',
    label: '฿'
  },
  {
    value: 'JPY',
    label: '¥'
  }
];

export const gender = [
  {
    value: 'Male',
    label: 'Male'
  },
  {
    value: 'Female',
    label: 'Female'
  }
];

export const city = [
  {
    value: 'Lahore',
    label: 'Lahore'
  },
  {
    value: 'Islamabad',
    label: 'Islamabad'
  }
];

export const country = [
  {
    value: 'Pakistan',
    label: 'Pakistan'
  },
  {
    value: 'Netherlands',
    label: 'Netherlands'
  }
];

// favs

export const fav = 'Your Favourites';
export const favTitle = 'Your Favorites';
export const createdAt = 'Created at:';

// favs

export const ads = 'Your Ads';
export const adsTitle = 'Your Ads';

// history

export const history = 'Orders';
export const purchaseTitle = 'Purchasing History';
export const purchasedOn = 'Purchased on:';
export const soldOn = 'Sold on:';
export const sellingTitle = 'Selling History';

// help

export const help = 'Help';
export const helpTitle = 'How can we help you?';
export const icon = helpIcon;
export const gmail = 'wwww.example@gmail.com';
export const number = '+92 335 1222515';
export const mailTo = 'mailTo:wwww.example@gmail.com';
export const dialTo = 'tel:+92-335-1222515';
export const emailUs = 'Email us at:';
export const callUs = 'Call us at:';
export const sendTicketMsg = 'Send direct message';
