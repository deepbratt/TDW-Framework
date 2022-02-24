import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Grid from '@material-ui/core/Grid';
import InputField from '../../components/InputField';
import { IProductInfo } from '../../pages/AddEditProduct/useForm';
import { fieldNames } from '../../Utils/constants/formsConstants';

const ProductFeaturesStyles = makeStyles((theme) => ({
  root: {
    padding: '30px 20px'
  }
}));  

interface IProductfeatureProps {
  values: IProductInfo;
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}


const ProductFeatures: React.FC<IProductfeatureProps> = ({
  values,
  handleInputChange
}) => {
  const { root } = ProductFeaturesStyles();
  return (
    <Grid className={root} container spacing={2}>
      <Grid item xs={12} sm={6}>
        <InputField
          name={fieldNames.brand}
          value={values.brand}
          onChange={handleInputChange}
          label="Product Brand"
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <InputField
          name={fieldNames.modelNo}
          value={values.modelNo}
          onChange={handleInputChange}
          label="Product Model No"
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <InputField
          name={fieldNames.make}
          value={values.make}
          onChange={handleInputChange}
          label="Vehicle Brand(Make)"
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <InputField
          name={fieldNames.model}
          value={values.model}
          onChange={handleInputChange}
          label="Vehicle Model"
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <InputField
          name={fieldNames.modelYear}
          value={values.modelYear}
          onChange={handleInputChange}
          label="Vehicle Model Year"
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <InputField
          name={fieldNames.color}
          value={values.color}
          onChange={handleInputChange}
          label="Product Color"
        />
      </Grid>
      <Grid item xs={12}>
        <InputField
          multiline
          rows={4}
          name={fieldNames.additionalDescription}
          value={values.additionalDescription}
          onChange={handleInputChange}
          label="Additional Description"
        />
      </Grid>
    </Grid>
  );
};

export default ProductFeatures;