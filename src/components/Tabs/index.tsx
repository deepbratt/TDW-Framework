import { useState } from "react";
import { Grid, Tabs, Tab, Typography } from "@material-ui/core";
import Slider from "../Slider";
import TabsPanels from "./tabsPanel";
import OptionsCard from "../OptionsCard";
import TabsStyles from "./styles";
import { Colors } from "../../Utils/constants/colors/colors";
import { IOptions, TabsProps } from "../../Utils/interfaces/tabs.interface";
import Section from "..";
import { useHistory } from "react-router";
import { useEffect } from "react";
import DisplayCards from "./DisplayCards"
import { useDispatch } from "react-redux";
import {setQueryParams} from "../../redux/reducers/queryParamsSlice"

const TabComponent: React.FC<TabsProps> = ({ data }) => {
  const dispatch = useDispatch();
  const { root, tabsStyle, optionsWrapper } = TabsStyles();
  const history = useHistory();
  const [currentTab, setCurrentTab] = useState(0);
  const [maxItems, setMaxItems] = useState(12);
  const { primary, greySix } = Colors;

  const [isDesktop, setDesktop] = useState(window.innerWidth > 1450);

  const updateMedia = () => {
    setDesktop(window.innerWidth > 600);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setCurrentTab(newValue);
  };

  const handleClick = (filter: string, values: any) => {
    let queryParam =  {
      [filter]: values
    }
    dispatch(setQueryParams(queryParam));
    history.push(`cars/`);
  };

  return (
    <Section>
      <Tabs
        className={tabsStyle}
        value={currentTab}
        indicatorColor="primary"
        textColor="primary"
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="on"
      >
        {Object.entries(data).map(([keys, values]) => (
          <Tab
            className={root}
            key={`browse-used-cars-by-${keys}`}
            aria-label={`browse-used-cars-by-${keys}`}
            label={keys}
          />
        ))}
      </Tabs>
      {Object.entries(data).map(([keys, values], index) => (
        <TabsPanels key={index} value={currentTab} index={index}>
          {values.length > (isDesktop ? 12 : 6) ? (
            <DisplayCards values={values} isDesktop={isDesktop} handleClick={handleClick} keys={keys} />
          ) : (
            <Grid className={optionsWrapper} container xs={10} spacing={2}>
              {values.map((value: IOptions, index: any) => (
                <Grid key={index} item xs={4} sm={3} lg={2}>
                  <OptionsCard
                     handleClick={() => handleClick(value.filterName, value.value)}
                    data={value}
                    key={keys}
                    backgroundColor={greySix}
                    backgroundColorSelected={primary}
                  />
                </Grid>
              ))}
            </Grid>
          )}
        </TabsPanels>
      ))}
    </Section>
  );
};

export default TabComponent;
