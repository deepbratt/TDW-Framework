import { createMuiTheme } from "@material-ui/core/styles";
import { theme } from "./globalFontSize";

const MUITheme = createMuiTheme({
  overrides: {},
  typography: {
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
  }
});

export default MUITheme;
