import { ThemeProvider } from "@material-ui/core";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";
import Routes from "./routes/routes";
import MUITheme from "./theme/theme";
// import { TezDealzTheme } from "./@TDW-Components/build/TDW-Components.min.js";

const generateClassName = createGenerateClassName({
  disableGlobal: true, // or seed: 'something_unique' ?
});

function App() {
  return (
    <StylesProvider generateClassName={generateClassName}>
      <ThemeProvider theme={MUITheme}>
        <Routes />
      </ThemeProvider>
    </StylesProvider>
  );
}

export default App;
