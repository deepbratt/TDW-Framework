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
    [theme.breakpoints.down('sm')]: {
      marginTop: '10px'
    },
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
  listItem: {
    padding: "2px"
  },
  btn: {
    backgroundColor: Colors.darkBlue,
    border: `1px solid ${theme.palette.common.white}`,
    color: theme.palette.common.white,
    '&:hover': {
      backgroundColor: Colors.navyBlue
    }
  }
}));

interface IShopCarProps {
  featureImg: string;
}

const ShopCars: React.FC<IShopCarProps> = ({ featureImg }) => {
  const { root, cardContent, cardMedia, list, listItem, btn } =
    ShopCarsStyles();
  return (
    <Card className={root}>
      <Grid container>
        <Grid item xs={12} sm={7} md={8}>
          <img width="100%" className={cardMedia} src={featureImg} alt="Car" />
        </Grid>
        <Grid item xs={12} sm={5} md={4}>
          <CardContent className={cardContent}>
            <Typography align="center" variant="h2">
              {shopCarHeader}
            </Typography>
            <List className={list}>
              {shopCarData &&
                shopCarData.map((item, index) => (
                  <ListItem className={listItem} key={`${index}`}>
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
            <CustomButton className={btn}>{SHOP_ALL_CARS}</CustomButton>
          </CardContent>
        </Grid>
      </Grid>
    </Card>
  );
};

export default ShopCars;
