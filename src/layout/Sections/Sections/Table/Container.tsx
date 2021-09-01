import Table from './Table';
import { Grid } from '@material-ui/core';
import {
  Title,
  moreBtn,
  lessBtn,
  subTitle,
  array,
  collapsedArray,
  heading
} from '../../Utils/carComparision';
import CustomTitle from '../../../../components/CustomTitle/CustomTitle';
import { Colors } from '../../Utils/color.constants';
import { ICarCard } from '../../../../Utils/interfaces/products.interface';
import { fieldNames } from '../../../../Utils/constants/formsConstants';
import Dropdown from '../../../../components/Dropdown';
import Banner from './Banner';
import { useEffect } from 'react';
import { useState } from 'react';

interface IData {
  data?: ICarCard[];
  shortListCars: ICarCard[];
}

const Container = ({ data, shortListCars }: IData) => {
  const { black, blue } = Colors;
  const [features, setFeatures] = useState<any>([]);
  const [firstCar, setFirstCar] = useState<any>({});
  const [secondCar, setSecondCar] = useState<any>({});

  useEffect(() => {
    setFirstCar(shortListCars[0]);
    setSecondCar(shortListCars[1]);
    let temp1 = shortListCars[0].features;
    let temp2 = shortListCars[1].features;
    let oneArray = [...temp1, ...temp2];
    let uniqueArray = oneArray.filter(function (item, pos) {
      return oneArray.indexOf(item) === pos;
    });
    setFeatures(uniqueArray);
  }, []);

  // useEffect(() => {
  //   let temp1 = firstCar.features;
  //   let temp2 = secondCar.features;
  //   let oneArray = [...temp1, ...temp2];
  //   let uniqueArray = oneArray.filter(function (item, pos) {
  //     return oneArray.indexOf(item) === pos;
  //   });
  //   setFeatures(uniqueArray);
  // }, [setFirstCar, setSecondCar]);

  return (
    <Grid container>
      <Grid style={{ paddingTop: '30px' }} item xs={12}>
        <Grid style={{ borderBottom: `5px solid ${blue}` }} item xs={12}>
          <CustomTitle color={black} text={heading} />
        </Grid>
        <Grid item xs={12}>
          <Banner data={[firstCar, secondCar]} />
        </Grid>
        {/* <Grid item xs={6}>
          <Dropdown name={fieldNames.cars} options={} />
        </Grid>
        <Grid item xs={6}>
          <Dropdown name={fieldNames.cars} options={} />
        </Grid> */}
        <Grid item xs={12}>
          <Table
            items={[firstCar, secondCar]}
            array={array}
            Title={Title}
            subTitle={subTitle}
            moreBtn={moreBtn}
            lessBtn={lessBtn}
            collapsedArray={features}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Container;
