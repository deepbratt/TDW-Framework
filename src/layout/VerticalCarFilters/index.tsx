import { Grid, Slider } from "@material-ui/core";
import FilterAccordion from "../accordion";
// import { FilterAccordion } from "tdw-components-npm";
import { CarFiltersData } from "../../utils/constants/language/en/filtersData";
import InputFieldWithButton from "../InputField/InputFieldWithButton";
import InputField from "../InputField";
import { fieldNames } from "../../utils/constants/formsConstants";
import { useForm } from "../../pages/carsListing/useForm";

export interface CarFiltersProps {}

const CarFilters: React.FC<CarFiltersProps> = () => {
  const { CATEGORIES, PRICE_RANGE, YEAR, MAKE } = CarFiltersData;
  const {
    values,
    setValues,
    // priceRange,
    // setPriceRange,
    errors,
    handleInputChange,
    handleSubmit,
  } = useForm(true);
  return (
    <div>
      <FilterAccordion title={CATEGORIES}>
        <InputFieldWithButton
          name={fieldNames.categories}
          placeholder="Eg. Honda In Lahore"
          value={values.categories}
          error={errors.categories}
          onChange={handleInputChange}
          handleClick={handleSubmit}
        />
      </FilterAccordion>
      <FilterAccordion title={PRICE_RANGE}>
        <Grid container direction="column">
          <Grid item>
            <InputField
              name={fieldNames.priceFrom}
              value={values.priceRange[0]}
              error={errors.priceFrom}
              onChange={(e: any) => {
                setValues((previousState: any) => {
                  previousState.priceRange[0] = e.target.value;
                  return { ...previousState };
                });
              }}
            />
            <InputFieldWithButton
              name={fieldNames.priceTo}
              value={values.priceRange[1]}
              error={errors.priceTo}
              onChange={(e: any) => {
                setValues((previousState: any) => {
                  previousState.priceRange[1] = e.target.value;
                  return { ...previousState };
                });
              }}
              handleClick={handleSubmit}
            />
          </Grid>
          <Grid item>
            <Slider
              value={[values.priceRange[0], values.priceRange[1]]}
              min={50000}
              max={5000000}
              onChange={(event: any, newValue: number | number[]) => {
                setValues((previousState: any) => {
                  console.log(newValue);
                  previousState.priceRange = newValue as number[];
                  return { ...previousState };
                });
              }}
            />
          </Grid>
        </Grid>
      </FilterAccordion>
      <FilterAccordion title={YEAR}>
        <InputField placeholder="Eg. Honda In Lahore" />
      </FilterAccordion>
      <FilterAccordion title={MAKE}>
        <InputField placeholder="Eg. Honda In Lahore" />
      </FilterAccordion>
    </div>
  );
};

export default CarFilters;
