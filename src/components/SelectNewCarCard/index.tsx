import makeStyles from '@material-ui/core/styles/makeStyles';
import { useHistory } from 'react-router';
import Paper from '@material-ui/core/Paper';
import CustomButton from '../CustomButton';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import FavoriteBorderRoundedIcon from '@material-ui/icons/FavoriteBorderRounded';
import {
  SEARCH_NEW_CAR,
  ADD_FROM_FAV
} from '../../Utils/constants/language/en/buttonLabels';
import { paths } from '../../routes/paths';
import { IconButton } from '@material-ui/core';
import { INewCarCard } from '../../layout/Sections/Utils/types';

const SelectNewCarCardStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    height: '80%',
    width: '100%',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    margin: 'auto'
  },
  buttons: {
    margin: '20px 10px',
    textTransform: 'capitalize',
    fontSize: '12px',
    lineHeight: '14px'
  },
  iconButton: {
    margin: '20px',
    maxWidth: '50px',
    [theme.breakpoints.up('sm')]: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.common.white
    },
    [theme.breakpoints.down('xs')]: {
      margin: '0px',
      maxWidth: '20px'
    }
  }
}));
const SelectNewCarCard: React.FC<INewCarCard> = (value: INewCarCard) => {
  const { root, buttons, iconButton } = SelectNewCarCardStyles(); 
  const history = useHistory();
  return (
    <Paper className={root}>
      {window.screen.width > 600 && (
        <CustomButton
          className={buttons}
          onClick={() => history.push(paths.cars)}
          startIcon={<SearchRoundedIcon />}
          disabled={value.isDisabled ? true : false}
        >
          {SEARCH_NEW_CAR}
        </CustomButton> 
      )}
      {window.screen.width <= 600 && (
        <div className={root} style={{ boxShadow: 'none' }}>
          <IconButton
            onClick={() => history.push(paths.cars)}
            classes={{ root: iconButton }}
            aria-label="Search Cars"
          >
            <SearchRoundedIcon />
          </IconButton>
          <IconButton
            classes={{ root: iconButton }}
            aria-label="Add Cars From Favourites"
            onClick={() => history.push(paths.dashboard + paths.fav)}
          >
            <FavoriteBorderRoundedIcon />
           
          </IconButton>
        </div>
      )}
      {window.screen.width > 600 && (
        <CustomButton
          className={buttons}
          onClick={() => history.push(paths.dashboard + paths.fav)}
          disabled={value.isDisabled ? true : false}
          startIcon={<FavoriteBorderRoundedIcon />}
        >
          {ADD_FROM_FAV}
        </CustomButton>
      )}
    </Paper>
  );
};
export default SelectNewCarCard;
