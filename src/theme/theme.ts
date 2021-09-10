import { createTheme } from "@material-ui/core/styles";
import { theme } from "./globalFontSize";
import createPalette from "@material-ui/core/styles/createPalette";
import { Color } from "./color";


const { berryRed, white, secondary } = Color;

const MUITheme = createTheme({
  overrides: {
    MuiFormLabel: {
      asterisk: {
        color: '#db3131',
        '&$error': {
          color: '#db3131'
        },
      },
      root:{
        fontSize: "16px",
        color: Color.textPrimary,
      }
    },
    MuiTab: {
      root: {
        textAlign: "left",
        textTransform: "capitalize",
        fontSize: "18px",
        fontWeight: 400,
        "&$selected": {
          fontSize: "24px",
          fontWeight: 700,
        },
      },
      wrapper: {
        display: "flex",
        alignItems: "flex-start",
      },
    },
    MuiTabs: {
      flexContainer: {
        marginLeft: "10px",
        borderBottom: "1px solid #bdbdbd",
      },
      indicator: {
        backgroundColor: "#2F80ED",
        height: "2px",
        borderRadius: "5px",
      },
    },
  },
  props:{
    MuiTextField:{
      variant:"outlined",
      InputLabelProps:{
        shrink:true
      }
    },
  },
  palette: createPalette({
    primary: {
      main: berryRed,
      contrastText: white,
    },
    secondary: {
      main: secondary,
    },
    text: { secondary: "#828282" },
    common: {
      black: "#484848"
    }
  }),
  typography: {
    fontFamily: "'IBM Plex Sans', sans-serif",
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
    subtitle1: theme.typography.subtitle1,
  },
});

export default MUITheme;
