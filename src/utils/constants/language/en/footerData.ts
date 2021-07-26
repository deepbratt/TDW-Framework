import LOGO from "../../../../assets/tezDealz-logo-blue.png";
import FB from "../../../../assets/icons/fb.png";
import TWITTER from "../../../../assets/icons/twitter.png";
import INSTAGRAM from "../../../../assets/icons/instagram.png";

export const FooterData = {
  logo: LOGO,
  headers: {
    MostSearched: "Most Searched On TezDealz",
    leadingCategories: "Leading Categories",
  },
  socialMedia: [
    { path: "www.facebook.com/tezDealz", icon: FB, name: "Facebook" },
    { path: "www.twitter.com/tezDealz", icon: TWITTER, name: "Twitter" },
    {
      path: "www.instagram.com/tezDealz",
      icon: INSTAGRAM,
      name: "Instagram",
    },
  ],
  address: {},
  contacts: [
    { location: "USA/Canada", phone: "713-489-0845" },
    { location: "Australia", phone: "(02)-9191-2621" },
    { location: "UK", phone: "(0)-203-514-2412" },
  ],
  services: [
    { path: "/", name: "Services" },
    { path: "/", name: "Email Marketing" },
    { path: "/", name: "Campaigns" },
    { path: "/", name: "Branding" },
    { path: "/", name: "Offline" },
  ],
  about: [
    { path: "/", name: "About" },
    { path: "/", name: "Our Story" },
    { path: "/", name: "Benifts" },
    { path: "/", name: "Team" },
    { path: "/", name: "Careers" },
  ],
  help: [
    { path: "/", name: "Help" },
    { path: "/", name: "FAQs" },
    { path: "/", name: "Contact Us" },
  ],
  categories: {
    popularMakeAndModels: [
      { name: "Yamaha Bikes", path: "/" },
      { name: "TVS Bikes", path: "/" },
      { name: "Hyundai Cars", path: "/" },
    ],
    bikesAndMotorcycles: [
      { name: "Yamaha", path: "/" },
      { name: "Kavasaki", path: "/" },
      { name: "Honda", path: "/" },
      { name: "Suzuki", path: "/" },
    ],
    cars: [
      { name: "Toyota", path: "/" },
      { name: "KIA", path: "/" },
      { name: "Hyundai", path: "/" },
      { name: "Honda", path: "/" },
    ],
  },
  mostSearched: [
    { name: "Used Cars", path: "/" },
    { name: "Used Bikes", path: "/" },
    { name: "Used Scooters", path: "/" },
    { name: "Used Vintage Cars", path: "/" },
    { name: "Used Bicycles", path: "/" },
    { name: "Used Honda City", path: "/" },
    { name: "Used Honda Civic", path: "/" },
    { name: "Used Suzuki Swift", path: "/" },
  ],
  termsAndConditions: [
    { name: "Terms & Conditions", path: "/" },
    { name: "Privacy Policy", path: "/" },
  ],
};
