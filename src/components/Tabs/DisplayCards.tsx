import { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import OptionsCard from "../OptionsCard";
import Slider from "../Slider";
import TabsStyles from "./styles";
import { Colors } from "../../Utils/constants/colors/colors";
import { IOptions } from "../../Utils/interfaces/tabs.interface";

export interface DisplayCardsProps {
  values: any;
  isDesktop: boolean;
  keys: any;
  handleClick: Function;
}

const DisplayCards: React.FC<DisplayCardsProps> = ({
  values,
  isDesktop,
  keys,
  handleClick,
}) => {
  const [results, setResults] = useState<any>();
  const { optionsWrapper } = TabsStyles();

  const { primary, greySix } = Colors;

  useEffect(() => {
    let result = [];
    for (let i = values.length / (isDesktop ? 12 : 6); i > 0; i--) {
      result.push(values.splice(0, Math.ceil(values.length / i)));
    }
    console.log("results", result)
    setResults(result);
  }, [isDesktop, values]);

  return (
    <Slider>
      {results &&
        results.map((arr: any, index: any) => (
          <Grid
            className={optionsWrapper}
            key={index}
            container
            xs={12}
            md={10}
            justifyContent="center"
            spacing={1}
          >
            {arr &&
              arr.map((value: IOptions, index: any) => (
                <Grid key={index} item xs={4} sm={3} lg={2}>
                  <OptionsCard
                    handleClick={() => handleClick(keys, value.text)}
                    data={value}
                    key={keys}
                    backgroundColor={greySix}
                    backgroundColorSelected={primary}
                  />
                </Grid>
              ))}
          </Grid>
        ))}
    </Slider>
  );
};

export default DisplayCards;
