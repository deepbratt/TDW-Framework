import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Card,
  Grid,
  CardContent,
  Typography
} from '@material-ui/core';
import CustomButton from '../../components/CustomButton';
import { Colors } from '../../Utils/constants/colors/colors';
import { SHOP_ALL_CARS } from '../../Utils/constants/language/en/buttonLabels';
import {
  shopCarHeader,
  shopCarData
} from '../../Utils/constants/language/en/homePageData';

const ShopCarsStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    borderRadius: 0,
    boxShadow: 'none',
    backgroundColor: Colors.darkBlue
  },
  cardContent: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '110px',
    minHeight: '100%',
    '& > h2': {
      color: theme.palette.common.white
    }
  },
  cardMedia: {
    minHeight: '100%'
  },
  list: {
    color: theme.palette.common.white
  },
  btn: {
    backgroundColor: Colors.darkBlue,
    border: `1px solid ${theme.palette.common.white}`,
    color: theme.palette.common.white,
    '&:hover': {
      color: Colors.darkBlue
    }
  }
}));

interface IShopCarProps {
  featureImg: string;
}

const ShopCars: React.FC<IShopCarProps> = ({ featureImg }) => {
  const { root, cardContent, cardMedia, list, btn } = ShopCarsStyles();
  return (
    <Card className={root}>
      <Grid container>
        <Grid item xs={9}>
          <img width="100%" className={cardMedia} src={featureImg} alt="Car" />
        </Grid>
        <Grid item xs={3}>
          <CardContent className={cardContent}>
            <Typography align="center" variant="h2">
              {shopCarHeader}
            </Typography>
            <List className={list}>
              {shopCarData &&
                shopCarData.map((item) => (
                  <ListItem>
                    <ListItemIcon>
                      <img height="26px" src={item.icon} alt="" />
                    </ListItemIcon>
                    <ListItemText
                      primary={item.heading}
                      secondary={item.subTitle}
                      primaryTypographyProps={{
                        variant: 'h3',
                        color: 'inherit'
                      }}
                      secondaryTypographyProps={{
                        variant: 'body1',
                        color: 'inherit'
                      }}
                    />
                  </ListItem>
                ))}
            </List>
            <CustomButton className={btn} color="undefined">
              {SHOP_ALL_CARS}
            </CustomButton>
          </CardContent>
        </Grid>
      </Grid>
    </Card>
  );
};

export default ShopCars;
