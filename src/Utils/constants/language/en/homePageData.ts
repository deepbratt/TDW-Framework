import InstallmentIcon from '../../../../assets/icons/installmentsOption.svg';
import PostAdCoverImg from '../../../../assets/Cars/forSale.png';
import Car1 from '../../../../assets/Cars/Car1.png';
import Car2 from '../../../../assets/Cars/Car2.png';
import Car3 from '../../../../assets/Cars/Car3.png';
import WheelWhite from '../../../../assets/icons/wheel_white 1.png';
import { Carfilters } from './filtersData';

export const BannerData = {
  CARD_HEADER: 'Love Your Car Guarantee',
  CARD_SUBTITLES: {
    TEST_DRIVE: '24-hr test drives',
    RETURN: '30-day returns'
  }
};

export const shopCarHeader = 'The Way It Should Be';
export const shopCarData = [
  {
    heading: 'Do more from home',
    subTitle: 'The Way It Should Be',
    icon: WheelWhite
  },
  {
    heading: 'Do more from home',
    subTitle: 'The Way It Should Be',
    icon: WheelWhite
  },
  {
    heading: 'Do more from home',
    subTitle: 'The Way It Should Be',
    icon: WheelWhite
  },
  {
    heading: 'Do more from home',
    subTitle: 'The Way It Should Be',
    icon: WheelWhite
  }
];

export const findCarsData = {
  heading: "See cars your budget will love"
}

export const PointsSectionData = [
  {
    heading: 'Choose From Closed To Million Used Cars',
    subTitle:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, ",
    image: Car1
  },
  {
    heading: 'Know a Great Price When you See It',
    subTitle:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, ",
    image: Car2
  },
  {
    heading: 'Know a Great Price When you See It',
    subTitle:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, ",
    image: Car3
  }
];

export const PostAdData = {
  heading: 'Sell Your Car Now and Get the Best Price',
  coverImg: PostAdCoverImg,
  listItems: [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit,',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit,',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit,',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit,'
  ],
  buttonLink: '/'
};

export const browseUsedCards = {
  Category: [
    { icon: InstallmentIcon, text: 'Cars On Installments' },
    { icon: InstallmentIcon, text: 'Cars On Installments' },
    { icon: InstallmentIcon, text: 'Cars On Installments' },
    { icon: InstallmentIcon, text: 'Cars On Installments' },
    { icon: InstallmentIcon, text: 'Cars On Installments' },
    { icon: InstallmentIcon, text: 'Cars On Installments' },
    { icon: InstallmentIcon, text: 'Cars On Installments' },
    { icon: InstallmentIcon, text: 'Cars On Installments' },
    { icon: InstallmentIcon, text: 'Cars On Installments' },
    { icon: InstallmentIcon, text: 'Cars On Installments' },
    { icon: InstallmentIcon, text: 'Cars On Installments' },
    { icon: InstallmentIcon, text: 'Cars On Installments' },
    { icon: InstallmentIcon, text: 'Cars On Installments' },
    { icon: InstallmentIcon, text: 'Cars On Installments' },
    { icon: InstallmentIcon, text: 'Cars On Installments' },
    { icon: InstallmentIcon, text: 'Cars On Installments' },
    { icon: InstallmentIcon, text: 'Cars On Installments' }
  ],
  Budget: [
    { icon: InstallmentIcon, text: 'Cars Below 5 lacs' },
    { icon: InstallmentIcon, text: 'Cars Between 5 to 10 lacs' },
    { icon: InstallmentIcon, text: 'Cars Between 10 to 20 lacs' },
    { icon: InstallmentIcon, text: 'Cars Between 20 to 30 lacs' },
    { icon: InstallmentIcon, text: 'Cars Between 30 to 40 lacs' },
    { icon: InstallmentIcon, text: 'Cars Between 40 to 50 lacs' },
    { icon: InstallmentIcon, text: 'Cars Between 60 to 70 lacs' },
    { icon: InstallmentIcon, text: 'Cars Between 70 to 80 lacs' },
    { icon: InstallmentIcon, text: 'Cars Between 80 to 90 lacs' },
    { icon: InstallmentIcon, text: 'Cars Between 90 to 90 lacs' },
    { icon: InstallmentIcon, text: 'Cars Between 1 to 5 Crore' },
    { icon: InstallmentIcon, text: 'Cars Above 5 Crore' }
  ],
  Make: [
    { icon: InstallmentIcon, text: 'Cars On Installments' },
    { icon: InstallmentIcon, text: 'Cars On Installments' },
    { icon: InstallmentIcon, text: 'Cars On Installments' }
  ],
  Model: [
    { icon: InstallmentIcon, text: 'Cars On Installments' },
    { icon: InstallmentIcon, text: 'Cars On Installments' },
    { icon: InstallmentIcon, text: 'Cars On Installments' }
  ],
  BodyType: Carfilters.BODY_TYPE,
  City: [
    { icon: InstallmentIcon, text: 'Cars On Installments' },
    { icon: InstallmentIcon, text: 'Cars On Installments' },
    { icon: InstallmentIcon, text: 'Cars On Installments' }
  ]
};
