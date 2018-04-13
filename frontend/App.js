import React from 'react'
import { Text } from 'react-native'
import { NativeRouter, Link } from 'react-router-native'
import { BottomNavigation, Tab } from 'react-router-navigation'

import Home from './view/containers/Home';
import Feed from './view/containers/Feed';

export default class App extends React.Component {
  render() {
    return (
      <NativeRouter>
        <BottomNavigation lazy={false} tabActiveTintColor="blue">
          <Tab label="Home" path="/" component={Home} />
          <Tab label="Feed" path="/feed" component={Feed} />
        </BottomNavigation>
      </NativeRouter>
    );
  }
}