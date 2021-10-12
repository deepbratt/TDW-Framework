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
  carOkta: [
    { path: '/', name: 'About CarOkta.com' },
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
    Models: [
      { filterName: 'model', text: 'Honda City', value: 'City' },
      { filterName: 'model', text: 'Honda Civic', value: 'Civic' },
      { filterName: 'model', text: 'Toyota Corolla', value: 'Corolla' },
      { filterName: 'model', text: 'Suzuki Alto', value: 'Alto' },
      { filterName: 'model', text: 'Suzuki Cultus', value: 'Cultus' },
      { filterName: 'model', text: 'Suzuki Mehran', value: 'Mehran' },
      { filterName: 'model', text: 'Suzuki Swift', value: 'Swift' },
    ],
    Color: [
      { filterName: 'bodyColor', text: 'White Cars', value: 'White' },
      { filterName: 'bodyColor', text: 'Black Cars', value: 'Black' },
      { filterName: 'bodyColor', text: 'Red Cars', value: 'Red' },
      { filterName: 'bodyColor', text: 'Blue Cars', value: 'Blue' },
      { filterName: 'bodyColor', text: 'Silver Cars', value: 'Silver' },
      { filterName: 'bodyColor', text: 'Gold Cars', value: 'Gold' }
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
    { name: 'Privacy Policy', path: '/' },
    { name: 'Help', path: '/help' }
  ],
  copyrights: 'Copyright © 2021 CarOkta. - All Rights Reserved.',
  notice:
    'Reproduction of material from any CarOkta.com pages without permission is strictly prohibited.'
};
