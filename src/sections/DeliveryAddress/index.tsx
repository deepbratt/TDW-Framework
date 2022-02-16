import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import makeStyles from '@material-ui/core/styles/makeStyles';
import InputAdornment from '@material-ui/core/InputAdornment';
import InputField from '../../components/InputField';
import CustomButton from '../../components/CustomButton';
import { Colors } from '../../Utils/constants/colors/colors';
import { FIND_YOUR_CAR } from '../../Utils/constants/language/en/buttonLabels';
import { fieldNames } from '../../Utils/constants/formsConstants';

const DeliveryAddressStyles = makeStyles((theme) => ({
  content: {
    padding: '30px'
  },
  inputFieldRoot: {
    width: '100%'
  }
}));

interface IDeliveryAddressFormProps {
  values: any;
  errors: any;
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handlePhoneInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

const DeliveryAddress: React.FC<IDeliveryAddressFormProps> = ({
  values,
  errors,
  handleInputChange,
  handlePhoneInputChange,
  handleSubmit
}) => {
  const { content, inputFieldRoot } = DeliveryAddressStyles();

  return (
    <CardContent className={content}>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={6}>
            <InputField
              classes={{ root: inputFieldRoot }}
              name={fieldNames.firstName}
              value={values.firstName}
              error={errors.firstName}
              label="First Name"
              placeholder="e.g. John"
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <InputField
              classes={{ root: inputFieldRoot }}
              name={fieldNames.lastName}
              value={values.lastName}
              error={errors.lastName}
              label="Last Name"
              placeholder="e.g Doe"
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12}>
            <InputField
              multiline
              rows={3}
              maxRows={3}
              classes={{ root: inputFieldRoot }}
              name={fieldNames.address}
              value={values.address}
              label="Address"
              placeholder="e.g Abc/0, Abc street, Abc Locality"
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <InputField
              id="input-phone"
              type="tel"
              name={fieldNames.mobile}
              fullWidth
              placeholder="349xxxxxxx"
              variant="outlined"
              label="Phone"
              value={values.mobile}
              error={errors.mobile}
              onChange={handlePhoneInputChange}
              classes={{ root: inputFieldRoot }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">+92</InputAdornment>
                )
              }}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <InputField
              classes={{ root: inputFieldRoot }}
              name={fieldNames.city}
              value={values.city}
              label="City"
              placeholder="e.g Karachi"
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <InputField
              classes={{ root: inputFieldRoot }}
              name={fieldNames.province}
              value={values.province}
              label="Province"
              placeholder="e.g Sindh"
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <InputField
              classes={{ root: inputFieldRoot }}
              name={fieldNames.zipCode}
              value={values.zipCode}
              label="Zip Code"
              placeholder="e.g 11765"
              onChange={handleInputChange}
            />
          </Grid>
        </Grid>
      </form>
    </CardContent>
  );
};

export default DeliveryAddress;
