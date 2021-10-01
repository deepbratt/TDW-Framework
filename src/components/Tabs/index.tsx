import { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Slider from "../Slider";
import TabsPanels from "./tabsPanel";
import OptionsCard from "../OptionsCard";
import TabsStyles from "./styles";
import { Colors } from "../../Utils/constants/colors/colors";
import { IOptions, TabsProps } from "../../Utils/interfaces/tabs.interface";
import Section from "..";
import { routes } from "../../routes/paths";
import { useHistory } from "react-router";

const TabComponent: React.FC<TabsProps> = ({ data }) => {
  const { root, tabsStyle, optionsWrapper } = TabsStyles();
  const history = useHistory();
  const [currentTab, setCurrentTab] = useState(0);
  const { primary, greySix } = Colors;

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setCurrentTab(newValue);
  };

  const handleClick = (filter: string, values: any) => {
    history.push(routes.cars + `/${filter}=${values}`);
  };

  return (
    <Section>
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
          {values.length > 12 ? (
            <Slider>
              <Grid className={optionsWrapper} container xs={10} spacing={2}>
                {values.slice(0, 12).map((value: IOptions, index: any) => (
                  <Grid key={index} item xs={4} md={3} lg={2}>
                    <OptionsCard
                      handleClick={() => handleClick("filter", value.text)}
                      data={value}
                      backgroundColor={greySix}
                      backgroundColorSelected={primary}
                    />
                  </Grid>
                ))}
              </Grid>
              <Grid className={optionsWrapper} container xs={10} spacing={2}>
                {values.slice(13, 24).map((value: IOptions, index: any) => (
                  <Grid key={index} item xs={4} md={3} lg={2}>
                    <OptionsCard
                      handleClick={() => handleClick("filter", value.text)}
                      data={value}
                      backgroundColor={greySix}
                      backgroundColorSelected={primary}
                    />
                  </Grid>
                ))}
              </Grid>
            </Slider>
          ) : (
            <Grid className={optionsWrapper} container xs={10} spacing={2}>
              {values.map((value: IOptions, index: any) => (
                <Grid key={index} item xs={4} md={3} lg={2}>
                  <OptionsCard
                    handleClick={() => handleClick("filter", value.text)}
                    data={value}
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
