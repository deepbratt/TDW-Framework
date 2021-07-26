import { Route, RouteProps } from "react-router";
import Layout from "../layout";

export type ProtectedRouteProps = {
  component: React.ComponentType;
} & RouteProps;

export default function PublicRoutes({
  component: Component,
  ...routeProps
}: ProtectedRouteProps) {
  return (
    <Route
      render={(props) => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  );
}
