import Img1 from "../assets/image1.png"
import Img2 from "../assets/image2.png"
import Img3 from "../assets/image3.png"

import car from "../assets/Group 56.png";
import download from "../assets/dowloadApp.png";
import apple from "../assets/Apple logo.png";
import arrow from "../assets/Subtract.png";
import replaceImg from "../assets/image 5.png";

import phoneIcon from "../assets/phone.png";

import { Colors } from "./color.constants";

const {red,navyBlue} = Colors

export const Data = [
    {
    image: Img1,
    color: "#1A75FF",
    bottomColor: "#111B47",
    title: "Buy Or Sell Cars",
},
{
    image: Img2,
    color: "#C60101",
    bottomColor: "#A41011",
    title: "Buy Or Sell Electronics",

},
{
    image: Img3,
    color: "#76AF2B",
    bottomColor: "#497007",
    title: "Buy Or Sell Property",

},

]

export const carTitle = "Car Comparisons";
export const carFeatures = "Car Features";
export const carLink = "All Car Comparisons";
export const appTitle = "Download our App";
export const ios = "For iOS";
export const android = "For Android";
export const appleIcon = apple;
export const carImg = car;
export const downloadImg = download;
export const arrowIcon = arrow;
export const img = replaceImg



// Verification

export const title = "Verify Phone Number"
export const message = "Enter the 4 digit code we sent you to"
export const num = " ********* "
export const code = "Didn't get the code?"
export const buttonText = "Resend code"
export const mainBtn = "Continue"
export const regex = /^[ A-Za-z0-9_@./#&+-]*$/
export const icon = phoneIcon
export const heading = "Account Verified Successfully"



export const pin = {
    borderColor: navyBlue,
    fontSize: "30px",
    margin: "11px",
    padding: "5px",
    borderRadius: "5px",
  };
 export const err = {
    borderColor: red,
    fontSize: "30px",
    margin: "11px",
    padding: "5px",
    borderRadius: "5px",
  };