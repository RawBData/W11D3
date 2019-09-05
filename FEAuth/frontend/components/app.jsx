import React from 'react';
import WelcomeBar from './nav_bar/welcome_bar_container';
import NavBarContainer from './nav_bar/nav_bar_container';
import ChirpIndexContainer from './chirps/chirp_index_container';
import LikedChirpIndexContainer from './liked_chirps/liked_chirp_index_container';
import SignupContainer from './session/signup_container';
import SignInContainer from './session/sign_in_container';
import Home from './home/home';
import { Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute} from '../utils/route_util';

export default () => (
  <div>
    <Route path="/" component={NavBarContainer} />
    <Route exact path="/" component={Home} />
    <ProtectedRoute path="/chirps" component={ChirpIndexContainer} />
    <ProtectedRoute path="/likedchirps" component={LikedChirpIndexContainer} />
    <AuthRoute path="/signup" component={SignupContainer} />
    <AuthRoute path="/signin" component={SignInContainer} />
  </div>
);
