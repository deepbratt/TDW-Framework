import { Suspense } from 'react';
import { Router, Switch } from 'react-router-dom';
import PrivateRoutes from './privateRoutes';
import PublicRoutes from './publicRoutes';
import { privateRoutes, publicRoutes } from './paths';
import history from './history';
import Loader from '../components/Loader';

const Routes = () => {
  const _privateRoutes = Object.values(privateRoutes);
  const _publicRoutes = Object.values(publicRoutes);

  return (
    <Suspense fallback={<Loader open={true} isBackdrop={true} />}>
      <Router history={history}>
        <Switch>
          {_privateRoutes.map((route, index) => (
            <PrivateRoutes
              path={route.path}
              component={route.component}
              key={`route-${route.name}`}
              exact
            />
          ))}
          {_publicRoutes.map((route, index) => (
            <PublicRoutes
              path={route.path}
              component={route.component}
              key={`route-${route.name}`}
              exact
            />
          ))}
        </Switch>
      </Router>
    </Suspense>
  );
};

export default Routes;
