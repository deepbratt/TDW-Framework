import { useState } from "react";
import { Grid, Tabs, Tab } from "@material-ui/core";
import TabsStyles from "./styles";
import { IOptions, TabsProps } from "../../Utils/interfaces/tabs.interface";
import TabsPanels from "./tabsPanel";
import Slider from "../slider";
import OptionsCard from "../optionsCard";
import { Colors } from "../../Utils/constants/colors/colors";

const TabComponent: React.FC<TabsProps> = ({ data }) => {
  const { root, tabsStyle, optionsWrapper } = TabsStyles();
  const [currentTab, setCurrentTab] = useState(0);
  const { primary, greySix } = Colors;

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setCurrentTab(newValue);
  };

  return (
    <>
      <Tabs
        className={tabsStyle}
        value={currentTab}
        indicatorColor="primary"
        textColor="primary"
        onChange={handleChange}
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
      {Object.values(data).map((values, index) => (
        <TabsPanels value={currentTab} index={index}>
          <Slider>
            <Grid className={optionsWrapper} container xs={10} spacing={2}>
              {values.map((value: IOptions, index: any) => (
                <Grid key={index} item xs={4} md={3} lg={2}>
                  <OptionsCard
                    data={value}
                    backgroundColor={greySix}
                    backgroundColorSelected={primary}
                  />
                </Grid>
              ))}
            </Grid>
            <Grid className={optionsWrapper} container xs={10} spacing={2}>
              {values.map((value: IOptions, index: any) => (
                <Grid key={index} item xs={4} md={3} lg={2}>
                  <OptionsCard
                    data={value}
                    backgroundColor={greySix}
                    backgroundColorSelected={primary}
                  />
                </Grid>
              ))}
            </Grid>
          </Slider>
        </TabsPanels>
      ))}
    </>
  );
};

export default TabComponent;
