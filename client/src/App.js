import React from 'react';
import {  BrowserRouter, Switch } from 'react-router-dom';

import logo from './logo.svg';
import GlobalStyles from './GlobalStyles';
import './App.css';
import HomeFeed from './components/HomeFeed';
import Notifications from './components/Notifications';
import Bookmarks from './components/Bookmarks';
import TweetDetails from './components/TweetDetails';
import Profile from './components/Profile';

function App() {
  return (
    <BrowserRouter>
    <GlobalStyles />
      <Switch>
        <HomeFeed exact path="/"/>
        <Notifications exact path="/notifications"/>
        <Bookmarks exact path="/bookmarks"/>
        <TweetDetails exact path="/tweet/:tweetId"/>
        {/* <Profile exact path="/:profileId"/> Uncomment and delete the line below when ID*/}
        <Profile path="/:profileId"/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
