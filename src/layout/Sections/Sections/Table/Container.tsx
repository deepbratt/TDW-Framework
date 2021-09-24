import Table from './Table';
import { Grid, Typography } from '@material-ui/core';
import {
  Title,
  moreBtn,
  lessBtn,
  subTitle,
  array,
  heading
} from '../../Utils/carComparision';
import { Colors } from '../../Utils/color.constants';
import { ICarCard } from '../../../../Utils/interfaces/products.interface';
import InputField from '../../../../components/InputField';
import Banner from './Banner';
import { useEffect } from 'react';
import { useState } from 'react';
import { Autocomplete } from '@material-ui/lab';

interface IData {
  data?: ICarCard[];
  shortListCars: ICarCard[];
}

const Container = ({  shortListCars }: IData) => {
  const {  blue } = Colors;
  const [features, setFeatures] = useState<any>([]);
  const [firstCar, setFirstCar] = useState<any>({});
  const [secondCar, setSecondCar] = useState<any>({});

  useEffect(() => {
    // setSelectedCars([shortListCars[0], shortListCars[1]]);
    setSecondCar(shortListCars[1]);
    setFirstCar(shortListCars[0]);
    let temp1 = shortListCars[0].features;
    let temp2 = shortListCars[1].features;
    handleFeatures(temp1, temp2);
  }, []);

  const handleFeatures = (temp1: string[], temp2: string[]) => {
    let oneArray = [...temp1, ...temp2];
    let uniqueArray = oneArray.filter(function (item, pos) {
      return oneArray.indexOf(item) === pos;
    });
    setFeatures(uniqueArray);
  };

  const handleFirstCar = (car: ICarCard) => {
    setFirstCar(car);
    handleFeatures(car.features, secondCar.features);
  };

  const handleSecondCar = (car: ICarCard) => {
    setSecondCar(car);
    handleFeatures(firstCar.features, car.features);
  };

  return (
    <Grid container>
      <Grid style={{ paddingTop: '30px' }} item xs={12}>
        <Grid style={{ borderBottom: `5px solid ${blue}` }} item xs={12}>
          <Typography style={{ marginLeft: '15px' }} variant="h2" gutterBottom>
            {heading}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Banner data={[firstCar, secondCar]} />
        </Grid>
        <Grid style={{ marginTop: '20px' }} item container spacing={1}>
          <Grid item container xs={6} justifyContent="center">
            <Autocomplete
              id="select-car-one"
              options={shortListCars}
              getOptionLabel={(option) => option.model}
              style={{ width: 300 }}
              renderInput={(params) => (
                <InputField {...params} label="First Car" variant="outlined" />
              )}
              renderOption={(option) => (
                <>
                  <img
                    style={{
                      maxWidth: '50px',
                      maxHeight: '60px',
                      margin: '7px'
                    }}
                    src={option.image[0]}
                    alt={option.model}
                  />
                  <span
                    style={{
                      margin: '7px'
                    }}
                  >
                    {option.model}
                  </span>
                  {option.modelYear}
                </>
              )}
              onChange={(event: object, value: any) => {
                if (value !== null) {
                  let temp = shortListCars.filter(
                    (item: ICarCard) => item.id === value.id
                  );
                  handleFirstCar(temp[0]);
                }
              }}
            />
          </Grid>
          <Grid item container xs={6} justifyContent="center">
            <Autocomplete
              id="select-car-two"
              options={shortListCars}
              getOptionLabel={(option) => option.model}
              style={{ width: 300 }}
              renderInput={(params) => (
                <InputField {...params} label="Second Car" variant="outlined" />
              )}
              renderOption={(option) => (
                <>
                  <img
                    style={{
                      maxWidth: '50px',
                      maxHeight: '60px',
                      margin: '7px'
                    }}
                    src={option.image[0]}
                    alt={option.model}
                  />
                  <span
                    style={{
                      margin: '7px'
                    }}
                  >
                    {option.model}
                  </span>

                  {option.modelYear}
                </>
              )}
              onChange={(event: object, value: any) => {
                if (value !== null) {
                  let temp = shortListCars.filter(
                    (item: ICarCard) => item.id === value.id
                  );
                  handleSecondCar(temp[0]);
                }
              }}
            />
          </Grid>
        </Grid>

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
