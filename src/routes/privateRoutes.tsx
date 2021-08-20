import { Route, Redirect, RouteProps } from 'react-router-dom';
import { connect } from 'react-redux';
import Layout from '../layout';

export type ProtectedRouteProps = {
  component: React.ComponentType;
  isLoggedIn: boolean;
} & RouteProps;

const PrivateRoutes = ({
  component: Component,
  isLoggedIn,
  ...routeProps
}: ProtectedRouteProps) => {
  return (
    <Route
      {...routeProps}
      render={(props) =>
        isLoggedIn ? (
          <Layout>
            <Component {...props} />
          </Layout>
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

const mapStateToProps = (state: any) => ({
  isLoggedIn: state.persistedReducer.auth.isLoggedIn
});

export default connect(mapStateToProps)(PrivateRoutes);
