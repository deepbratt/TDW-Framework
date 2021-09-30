import LOGO from '../../../../assets/tezDealz-logo-blue.png';
import FB from '../../../../assets/icons/fb.png';
import TWITTER from '../../../../assets/icons/twitter.png';
import INSTAGRAM from '../../../../assets/icons/instagram.png';
import PINTEREST from '../../../../assets/icons/pinterest.png';
import PLAY_STORE from '../../../../assets/icons/google-play-badge.svg';
import APPLE_STORE from '../../../../assets/icons/app-store-badge.svg';

export const FooterData = {
  logo: LOGO,

  socialMedia: [
    {
      path: 'https://www.facebook.com/Tez-Dealz-101549355474751/',
      icon: FB,
      name: 'Facebook'
    },
    { path: 'www.twitter.com/tezDealz', icon: TWITTER, name: 'Twitter' },
    {
      path: 'www.instagram.com/tezDealz',
      icon: INSTAGRAM,
      name: 'Instagram'
    },
    {
      path: 'www.pinterest.com/tezDealz',
      icon: PINTEREST,
      name: 'Pinterest'
    }
  ],
  appLinks: [PLAY_STORE, APPLE_STORE],

  sell: [
    { path: '/', name: 'Sell Car' },
    { path: '/', name: 'Sell Bike' },
    { path: '/', name: 'Sell Accessory' }
  ],
  explore: [
    { path: '/', name: 'Used Cars' },
    { path: '/', name: 'Used Bikes' },
    { path: '/', name: 'New Cars' },
    { path: '/', name: 'Auto Parts & Accessories' },
    { path: '/', name: 'Cool Rides' },
    { path: '/', name: 'Forums' },
    { path: '/', name: 'Autoshow' },
    { path: '/', name: 'Sitemap' }
  ],
  tezDealz: [
    { path: '/', name: 'About TezDeals.com' },
    { path: '/', name: 'Our Products' },
    { path: '/', name: 'Advertise With Us' },
    { path: '/', name: 'How To Pay' },
    { path: '/', name: 'FAQs' },
    { path: '/', name: 'Refunds & Returns' },
    { path: '/', name: 'Careers' },
    { path: '/', name: 'Contact Us' }
  ],

  mostSearched: [
    { name: 'Used Cars', path: '/' },
    { name: 'Used Bikes', path: '/' },
    { name: 'Used Scooters', path: '/' },
    { name: 'Used Vintage Cars', path: '/' },
    { name: 'Used Bicycles', path: '/' },
    { name: 'Used Honda City', path: '/' },
    { name: 'Used Honda Civic', path: '/' },
    { name: 'Used Suzuki Swift', path: '/' }
  ],
  filters: {
    City: [
      { filterName: 'city', text: 'Cars in Karachi', value: 'Karachi' },
      { filterName: 'city', text: 'Cars in Lahore', value: 'Lahore' },
      { filterName: 'city', text: 'Cars in Islamabad', value: 'Islamabad' },
      { filterName: 'city', text: 'Cars in Quetta', value: 'Quetta' },
      { filterName: 'city', text: 'Cars in Rawalpindi', value: 'Rawalpindi' },
      { filterName: 'city', text: 'Cars in Peshawar', value: 'Peshawar' },
      { filterName: 'city', text: 'Cars in Sialkot', value: 'Sialkot' }
    ],
    Province: [
      { filterName: 'province', text: 'Cars in Punjab', value: 'Punjab' },
      { filterName: 'province', text: 'Cars in Sindh', value: 'Sindh' },
      { filterName: 'province', text: 'Cars in KPK', value: 'KPK' },
      {
        filterName: 'province',
        text: 'Cars in Baloachistan',
        value: 'Baloachistan'
      },
      {
        filterName: 'province',
        text: 'Cars in Azad Kashmir',
        value: 'Azad Kashmir'
      },
      {
        filterName: 'province',
        text: 'Cars in Gilgit Baltistan',
        value: 'Gilgit Baltistan'
      }
    ],
    Make: [
      { filterName: 'make', text: 'Toyota Cars for Sale', value: 'Toyota' },
      { filterName: 'make', text: 'Honda Cars for Sale', value: 'Honda' },
      { filterName: 'make', text: 'KIA Cars for Sale', value: 'KIA' },
      { filterName: 'make', text: 'Suzuki Cars for Sale', value: 'Suzuki' },
      { filterName: 'make', text: 'Hyundai Cars for Sale', value: 'Hyundai' },
      { filterName: 'make', text: 'Daihatsu Cars for Sale', value: 'Daihatsu' }
    ],
    Categories: [
      { filterName: 'categories', text: 'Jeep', value: 'Jeep' },
      { filterName: 'categories', text: 'Japanese Cars', value: 'Japanese' },
      { filterName: 'categories', text: 'Imported Cars', value: 'Imported' },
      { filterName: 'categories', text: 'Automatic Cars', value: 'Automatic' },
      { filterName: 'categories', text: 'Low Priced Cars', value: 'Low Price' },
      { filterName: 'categories', text: '4x4 Cars', value: '4x4' },
      { filterName: 'categories', text: '660cc Cars', value: '660cc' },
      { filterName: 'categories', text: '1000cc Cars', value: '1000cc' }
    ],
    Color: [
      { filterName: 'color', text: 'White Cars', value: 'White' },
      { filterName: 'color', text: 'Black Cars', value: 'Black' },
      { filterName: 'color', text: 'Red Cars', value: 'Red' },
      { filterName: 'color', text: 'Blue Cars', value: 'Blue' },
      { filterName: 'color', text: 'Silver Cars', value: 'Silver' },
      { filterName: 'color', text: 'Gold Cars', value: 'Gold' }
    ],
    BodyType: [
      { filterName: 'bodyType', text: 'Sedans for Sale', value: 'Sedan' },
      {
        filterName: 'bodyType',
        text: 'Hatchbacks for Sale',
        value: 'Hatchback'
      },
      { filterName: 'bodyType', text: 'SUVs for Sale', value: 'SUV' },
      { filterName: 'bodyType', text: 'Mini Vans for Sale', value: 'Mini Van' },
      {
        filterName: 'bodyType',
        text: 'Crossovers for Sale',
        value: 'Crossover'
      },
      { filterName: 'bodyType', text: 'Vans for Sale', value: 'Van' },
      {
        filterName: 'bodyType',
        text: 'Double Cabins for Sale',
        value: 'Double Cabin'
      }
    ]
  },
  termsAndConditions: [
    { name: 'Terms & Conditions', path: '/' },
    { name: 'Privacy Policy', path: '/' }
  ],
  copyrights: 'Copyright © 2021 TezDeals. - All Rights Reserved.',
  notice:
    'Reproduction of material from any TezDeals.com pages without permission is strictly prohibited.'
};
