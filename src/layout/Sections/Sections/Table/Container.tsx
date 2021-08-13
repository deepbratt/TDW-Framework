import Table from "./Table";
import { Grid } from "@material-ui/core";
import {
  Title,
  moreBtn,
  lessBtn,
  subTitle,
  array,
  collapsedArray,
  heading
} from "../../Utils/carComparision";
import CustomTitle from "../../../../components/CustomTitle/CustomTitle";
import { Colors } from "../../Utils/color.constants";

const Container = ({data} : any) => {
  const {black,blue} = Colors

  return (
    <Grid container>
        <Grid style={{ paddingTop: "30px" }} item xs={12}>
          <Grid style={{borderBottom: `5px solid ${blue}`}} item xs={12}>
            <CustomTitle color={black} text={heading}/>
          </Grid>
          <Grid item xs={12}>
            <Table
              items={data}
              array={array}
              Title={Title}
              subTitle={subTitle}
              moreBtn={moreBtn}
              lessBtn={lessBtn}
              collapsedArray={collapsedArray}
            />
          </Grid>
        </Grid>
    </Grid>
  );
};

export default Container;
