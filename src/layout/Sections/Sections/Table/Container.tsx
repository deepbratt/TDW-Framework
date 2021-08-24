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
import Banner from './Banner';
import { useEffect } from 'react';
import { useState } from 'react';

interface IData {
  data: ICarCard[];
}

const Container = ({ data }: IData) => {
  const { black, blue } = Colors;
  const [features, setFeatures] = useState<any>([])
  useEffect(()=>{
    let temp1 = data[0].features
    let temp2 = data[1].features
    let oneArray = [...temp1, ...temp2]
    let uniqueArray = oneArray.filter(function(item, pos) {
          return oneArray.indexOf(item) === pos;
        })
    setFeatures(uniqueArray)
  },[])
  return (
    <Grid container>
      <Grid style={{ paddingTop: '30px' }} item xs={12}>
        <Grid style={{ borderBottom: `5px solid ${blue}` }} item xs={12}>
          <CustomTitle color={black} text={heading} />
        </Grid>
        <Grid item xs={12}>
          <Banner data={data} />
        </Grid>
        <Grid item xs={12}>
          <Table
            items={data}
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
