import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import About from './scenes/About';
import Signin from 'scenes/Account/components/Signin';
import Signup from 'scenes/Account/components/Signup';
import ProfileUpdate from 'scenes/Profile/components/ProfileUpdate';
import PublishForm from './scenes/Publish/components/PublishForm';
import Ideas from 'scenes/Ideas';
import Post from 'scenes/Post/Post';
import ResetPassword from 'scenes/Account/containers/ResetPassword';
import ProfileView from 'scenes/Profile/components/ProfileView';

const AppRoutes = [
  <Route key="about" path="/" component={About} exact />,
  <UnauthenticatedRoute key="login" path="/signin" component={Signin} exact />,
  <UnauthenticatedRoute key="signup" path="/signup" component={Signup} exact />,
  <AuthenticatedRoute key="ideas" path="/ideas" component={Ideas} exact />,
  <AuthenticatedRoute key="idea" path="/ideas/:ideaID" component={Post} />,
  <AuthenticatedRoute key="post" path="/post" component={PublishForm} exact />,
  <AuthenticatedRoute
    key="profile"
    path="/profile"
    component={ProfileView}
    exact
  />,
  <AuthenticatedRoute
    key="user-update"
    path="/profile/edit"
    component={ProfileUpdate}
    exact
  />,
  <Route key="reset-link" path="/reset-password" component={ResetPassword} exact />,
  <Route
    key="reset-password"
    path="/reset-password/:token"
    component={ResetPassword}
    exact
  />,
];

function AuthenticatedRoute({ component: Component, ...rest }) {
  const currentUser = localStorage.getItem('ideaUser');
  return (
    <Route
      {...rest}
      render={(props) => {
        if (!currentUser) {
          return (
            <Redirect
              to={{ pathname: '/signin', state: { from: props.location } }}
            />
          );
        }
        return <Component {...props} />;
      }}
    />
  );
}

function UnauthenticatedRoute({ component: Component, ...rest }) {
  const currentUser = localStorage.getItem('ideaUser');
  return (
    <Route
      {...rest}
      render={(props) => {
        if (currentUser) {
          return (
            <Redirect
              to={{
                pathname:
                  props.location && props.location.state
                    ? props.location.state.from.pathname
                    : '/ideas',
              }}
            />
          );
        }
        return <Component {...props} />;
      }}
    />
  );
}

export default AppRoutes;
