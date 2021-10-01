import createTheme from '@material-ui/core/styles/createTheme';
import { theme } from './globalFontSize';
import createPalette from '@material-ui/core/styles/createPalette';
import { Color } from './color';

const { berryRed, white, secondary } = Color;

const MUITheme = createTheme({
  overrides: {
    MuiContainer: {
      root: {
        marginTop: '50px',
        marginBottom: '50px',
        paddingLeft: 0,
        paddingRight: 0,
        [theme.breakpoints.down('xs')]: {
          marginTop: '20px',
          marginBottom: '20px'
        }
      }
    },
    MuiFormLabel: {
      asterisk: {
        color: '#db3131',
        '&$error': {
          color: '#db3131'
        }
      },
      root: {
        fontSize: '16px',
        color: Color.textPrimary
      }
    },
    MuiAccordion: {
      root: {
        '&$expanded': {
          margin: '0'
        }
      }
    },
    MuiAccordionSummary: {
      root: {
        margin: '0',
        '&$expanded': {
          minHeight: '48px'
        }
      },
      content: {
        margin: '0',
        '&$expanded': {
          margin: '0'
        }
      }
    },
    MuiTab: {
      root: {
        textAlign: 'left',
        textTransform: 'capitalize',
        fontSize: '18px',
        fontWeight: 400,
        '&$selected': {
          fontSize: '24px',
          fontWeight: 700
        }
      },
      wrapper: {
        display: 'flex',
        alignItems: 'flex-start'
      }
    },
    MuiTabs: {
      flexContainer: {
        marginLeft: '10px',
        borderBottom: '1px solid #bdbdbd'
      },
      indicator: {
        backgroundColor: '#2F80ED',
        height: '2px',
        borderRadius: '5px'
      }
    }
  },
  props: {
    MuiTextField: {
      variant: 'outlined',
      color:"secondary",
      InputLabelProps: {
        shrink: true
      }
    }
  },
  palette: createPalette({
    primary: {
      main: berryRed,
      contrastText: white
    },
    secondary: {
      main: secondary
    },
    text: { primary: '#484848', secondary: '#828282' },
    common: {
      black: '#484848'
    }
  }),
  typography: {
    fontFamily: "'Roboto', sans-serif",
    fontWeightLight: 400,
    fontWeightRegular: 400,
    fontWeightMedium: 700,
    fontWeightBold: 700,
    h1: theme.typography.h1,
    h2: theme.typography.h2,
    h3: theme.typography.h3,
    h4: theme.typography.h4,
    h5: theme.typography.h5,
    h6: theme.typography.h6,
    body1: theme.typography.body1,
    body2: theme.typography.body2,
    button: theme.typography.button,
    caption: theme.typography.caption,
    subtitle2: theme.typography.subtitle2,
    subtitle1: theme.typography.subtitle1
  }
});

export default MUITheme;
