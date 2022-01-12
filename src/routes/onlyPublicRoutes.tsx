import { Route, Redirect, RouteProps, useHistory, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import Layout from "../layout";
import { RootState } from "../redux/store";

export type ProtectedRouteProps = {
  component: React.ComponentType<any>;
  // isLoggedIn: boolean;
} & RouteProps;

const OnlyPublicRoutes = ({
  component: Component,
  ...routeProps
}: ProtectedRouteProps) => {
  const {isLoggedIn} = useSelector((state:RootState)=>state.auth)

  return (
    <Route
      {...routeProps}
      render={(props) =>
        !isLoggedIn ? (
          <Layout>
            <Component {...props} />
          </Layout>
        ) : (
          <Redirect to="/dashboard/profile" />
        )
      }
    />
  );
};

// const mapStateToProps = (state: any) => ({
//   isLoggedIn: state.persistedReducer.auth.isLoggedIn,
// });

export default OnlyPublicRoutes;
