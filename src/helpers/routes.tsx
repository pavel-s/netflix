import { FC } from 'react';
import { Redirect, Route, RouteProps } from 'react-router';
import * as ROUTES from '../constants/routes';
import { TFirebaseUser } from '../lib/firebase.prod';

export const IsUserRedirect: FC<
  RouteProps & {
    user: TFirebaseUser | null;
    loggedInPath: typeof ROUTES[keyof typeof ROUTES];
  }
> = ({ user, loggedInPath, children, ...rest }) => {
  return (
    <Route
      {...rest}
      render={() => {
        if (user) {
          return <Redirect to={{ pathname: ROUTES.BROWSE }} />;
        } else {
          return children;
        }
      }}
    />
  );
};

export const ProtectedRoute: FC<RouteProps & { user: TFirebaseUser | null }> =
  ({ user, children, ...rest }) => {
    return (
      <Route
        {...rest}
        render={() => {
          if (user) {
            return children;
          } else {
            return <Redirect to={{ pathname: ROUTES.LOGIN }} />;
          }
        }}
      />
    );
  };
