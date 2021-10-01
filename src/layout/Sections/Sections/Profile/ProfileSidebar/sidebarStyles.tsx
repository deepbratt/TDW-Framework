import makeStyles from '@material-ui/core/styles/makeStyles';
import { Colors } from '../../../Utils/color.constants';
import { Colors as ColorContants } from '../../../../../Utils/constants/colors/colors';

const drawerWidth = 200;
const { navyBlue, white, black, blue } = Colors;

export const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: white,
    width: drawerWidth
  },
  menuButton: {
    padding: theme.spacing(2)
  },
  hide: {
    display: 'none'
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    minHeight: '0px'
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    minHeight: '0px'
  },
  closeIcon: {
    '&:hover': {
      cursor: 'pointer'
    }
  },
  link: {
    // marginTop: "5px",
    textDecoration: 'none',
    color: ColorContants.greyTwo,
    padding: '0'
  },
  heading: {
    background: navyBlue,
    color: white,
    padding: '20px 10px 20px 10px',
    display: 'flex',
    justifyContent: 'space-between'
  },
  container: {
    background: white,
    color: black,
    // padding: "20px 5px 20px 5px",
    padding: '0',
    height: '100%'
  },
  content: {
    display: 'flex',
    borderBottom: '1px solid lightGrey',
    paddingBottom: '15px',
    paddingTop: '15px',
    // padding:0,
    paddingleft: '5px'
  },

  selectedContent: {
    display: 'flex',
    borderBottom: '1px solid lightGrey',
    paddingBottom: '15px',
    paddingTop: '15px',
    // padding: "0px",
    paddingleft: '5px',
    color: ColorContants.navyBlue,
    background: ColorContants.lightBlue
  },

  pathIcon: {
    color: ColorContants.blue
  },
  selectedIcon: {
    color: ColorContants.navyBlue
  },
  icon: {
    padding: '10px',
    background: blue,
    marginRight: '10px',
    color: blue,
    borderRadius: '4px',
    '&:hover': {
      background: navyBlue,
      transition: 'all .3s linear',
      cursor: 'pointer'
    },
    width: '45px',
    height: '25px',
    display: 'flex',
    justifyContent: 'center'
  },
  userContainer: {
    display: 'flex',
    padding: '10px',
    alignItems: 'center'
  },

  userInfo: {
    display: 'block',
    marginLeft: '10px'
  },
  userImage: {},
  userName: {
    marginTop: '10px',
    color: Colors.navyBlue,
    cursor:"pointer"
  }
}));
