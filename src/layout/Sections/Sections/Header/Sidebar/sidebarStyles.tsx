import makeStyles from '@material-ui/core/styles/makeStyles';
const drawerWidth = 260;

export const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: 'white',
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
    flexShrink: 0
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start'
  },
  closeIcon: {
    '&:hover': {
      cursor: 'pointer'
    }
  },
  menuIcon: {
    paddingRight: '24px',
    closeIcon: {
      '&:hover': {
        cursor: 'pointer'
      }
    }
  },
  link: {
    marginTop: '5px',
    textDecoration: 'none',
    color: 'black'
  },
  nested: {
    paddingLeft: theme.spacing(4)
  },
  logo: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
  }
}));
