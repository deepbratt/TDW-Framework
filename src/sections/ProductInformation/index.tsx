import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Grid from '@material-ui/core/Grid';
import InputField from '../../components/InputField';
import { IProductInfo } from '../../pages/AddEditProduct/useForm';
import { fieldNames } from '../../Utils/constants/formsConstants';

const ProductInformationStyles = makeStyles((theme) => ({
  root: {
    padding: '30px 20px'
  }
}));

interface IProductInfoProps {
  values: IProductInfo;
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const ProductInformation: React.FC<IProductInfoProps> = ({
  values,
  handleInputChange
}) => {
  const { root } = ProductInformationStyles();
  return (
    <Grid className={root} container spacing={2}>
      <Grid item xs={12} sm={6}>
        <InputField
          name={fieldNames.title}
          value={values.title}
          onChange={handleInputChange}
          label="Product Title"
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <InputField
          name={fieldNames.city}
          value={values.city}
          onChange={handleInputChange}
          label="City"
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <InputField
          name={fieldNames.category}
          value={values.category}
          onChange={handleInputChange}
          label="Product Category"
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <InputField
          name={fieldNames.subCategory}
          value={values.subCategory}
          onChange={handleInputChange}
          label="Product Sub-Category"
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <InputField
          name={fieldNames.listingPrice}
          value={values.listingPrice}
          onChange={handleInputChange}
          label="Product Listing Price(MRP)"
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <InputField
          name={fieldNames.sellingPrice}
          value={values.sellingPrice}
          onChange={handleInputChange}
          label="Product Selling Price(Expected Selling Price)"
        />
      </Grid>
      <Grid item xs={12}>
        <InputField
          multiline
          rows={4}
          name={fieldNames.description}
          value={values.description}
          onChange={handleInputChange}
          label="Product Description(Describe Your Accessory)"
        />
      </Grid>
    </Grid>
  );
};

export default ProductInformation;