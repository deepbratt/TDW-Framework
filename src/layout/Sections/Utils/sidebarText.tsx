import icon1 from "../assets/Profile/icon1.png"
import icon2 from "../assets/Profile/icon2.png"
import icon3 from "../assets/Profile/icon3.png"
import icon4 from "../assets/Profile/icon4.png"
import icon5 from "../assets/Profile/icon5.png"
import icon6 from "../assets/Profile/icon6.png"
import icon7 from "../assets/Profile/icon7.png"
import icon8 from "../assets/Profile/icon8.png"
import profileIcon from "../assets/Profile/profile 1.png"

export const Title = "DashBoard"
export const profileTitle = "Profile"
export const buttonText = "Save Changes"
export const profile = profileIcon

export const required = "This field is required";
export const emailText = "Invalid email";
export const userText = "'Name can only use letters,numbers, minimum length is 8 characters'";
export const newPass = "Password must have at least 8 characters"
export const confirmPass = "The passwords do not match"

export const sidebar = [{
    title: "Profile",
    path: "/",
    icon: icon1
},
{
    title: "Orders",
    path: "/",
    icon: icon2
},
{
    title: "Comparison",
    path: "/",
    icon: icon3
},
{
    title: "Shortlist Items",
    path: "/",
    icon: icon4
},
{
    title: "Your Ads",
    path: "/",
    icon: icon5
},
{
    title: "Booked Items",
    path: "/",
    icon: icon6
},
{
    title: "Buyer Request",
    path: "/",
    icon: icon7
},
{
    title: "Help",
    path: "/",
    icon: icon8
}
]




export const currencies = [
    {
      value: 'USD',
      label: '$',
    },
    {
      value: 'EUR',
      label: '€',
    },
    {
      value: 'BTC',
      label: '฿',
    },
    {
      value: 'JPY',
      label: '¥',
    },
  ];



  export const gender = [
    {
      value: "male",
      label: 'male',
    },
    {
      value: 'female',
      label: 'female',
    },
    {
        value: 'other',
        label: 'other',
      },
  ];


  
  export const city = [
    {
      value: "Lahore",
      label: 'Lahore',
    },
    {
      value: 'Islamabad',
      label: 'Islamabad',
    },
  ];

    
  export const country = [
    {
      value: "Pakistan",
      label: 'Pakistan',
    },
    {
      value: 'Netherlands',
      label: 'Netherlands',
    },
  ];