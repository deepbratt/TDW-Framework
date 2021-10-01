import * as React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { NavLink } from "react-router-dom";
import useStyles from "./useStyles";
import Section from "../../../../../components/index"
  
interface Data {
  image: string
  color: string
  bottomColor: string
  title: string
}

interface IData {
  data: Data[];
}



const CategorySection: React.FC<IData> = ({data}) => {
  const { main, box } = useStyles();
  return (
    <>
      <Grid justifyContent="center" id="category" container>
        <Section>
          <Grid className={main} item lg={12} md={12} xs={12}>
            {data.map((data, index) => {
              return (
                <Grid
                  style={{
                    background: `linear-gradient(-181.96deg , ${data.color}  -0%,  ${data.bottomColor}
                                85.96%)`,
                  }}
                  key={`category ${index}`}
                  className={box}
                  item
                  lg={12}
                  md={12}
                  xs={11}
                >
                  <NavLink
                    style={{
                      color: "white",
                      textAlign: "center",
                      textDecoration: "none",
                    }}
                    to="/category"
                  >
                    <Typography style={{ marginTop: "20px" }} variant="h5">
                      {data.title}
                    </Typography>
                    <img
                      style={{
                        height: "180px",
                        width: "100%",
                        marginTop: "20px",
                      }}
                      src={data.image}
                      alt=""
                    />
                  </NavLink>
                </Grid>
              );
            })}
          </Grid>
        </Section>
      </Grid>
    </>
  );
};

export default CategorySection;
