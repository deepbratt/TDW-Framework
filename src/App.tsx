import { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { ThemeProvider } from '@material-ui/core';
import {
  StylesProvider,
  createGenerateClassName
} from '@material-ui/core/styles';
import Routes from './routes/routes';
import MUITheme from './theme/theme';
import { API_ENDPOINTS } from './Utils/API/endpoints';
import { isLoggedIn } from './Utils/hooks/actions';
import Loader from './components/Loader';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from './redux/reducers/authSlice';
import { RootState } from './redux/store';
import ErrorBoundary from './components/ErrorBoundary';
import WithClearCache from './components/ClearCache';

const generateClassName = createGenerateClassName({
  disableGlobal: true // or seed: 'something_unique' ?
});
const App = () => {
  return <WithClearCache ChildComponent={MainApp} />;
};

function MainApp() {
  const { USERS, CURENT_USER } = API_ENDPOINTS;
  const [isLoading, setisLoading] = useState(false);
  const dispatch = useDispatch();
  const { user } = useSelector((state: RootState) => state.auth);
  const history = useHistory();
  // const location = useLocation();

  useEffect(() => {
    (async () => {
      await isLoggedIn(USERS + CURENT_USER)
        .then((response) => {
          if (response.user) {
            if (response.user === user) {
              history.goBack();
              setisLoading(false);
            }
          } else {
            dispatch(logout());
            setisLoading(false);
          }
        })
        .catch((error) => {
          setisLoading(false);
          console.error(error);
        });
    })();
    if (process.env.NODE_ENV === 'development') {
      console.log('environment dev', process.env.REACT_APP_BASE_URL);
      console.log('environment', process.env.NODE_ENV);
    }
  }, []);

  // useEffect(() => {
  //   window.scrollTo({ top: 0, behavior: 'smooth' });
  // }, [location]);

  return (
    <ErrorBoundary>
      <StylesProvider generateClassName={generateClassName}>
        <ThemeProvider theme={MUITheme}>
          {isLoading ? (
            <Loader open={isLoading} isBackdrop={true} />
          ) : (
            <Routes />
          )}
        </ThemeProvider>
      </StylesProvider>
    </ErrorBoundary>
  );
}

export default App;
