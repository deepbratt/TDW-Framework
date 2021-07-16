import { createTheme } from "@material-ui/core/styles";
import { theme } from "./globalFontSize";
import createPalette from "@material-ui/core/styles/createPalette";
import { Color } from "./color";

const { berryRed, white } = Color;

const MUITheme = createTheme({
  overrides: {
    MuiTab: {
      root: {
        textAlign: "left",
        textTransform: "capitalize",
        fontSize: "18px",
        fontWeight: 400,
        margin: "0 10px",
      },
      wrapper: {
        display: "flex",
        alignItems: "flex-start",
      },
    },
  },
  palette: createPalette({
    primary: {
      main: berryRed,
      contrastText: white,
    },
    text: { secondary: "#828282" },
  }),
  typography: {
    fontFamily: "IBM Plex Sans, sans-serif",
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
