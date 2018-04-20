import React from 'react'
import { Text } from 'react-native'
import { NativeRouter, Link } from 'react-router-native'
import { BottomNavigation, Tab } from 'react-router-navigation'

import Home from './view/containers/Home';
import Diario from './view/containers/Diario';
import Insumos from './view/containers/Insumos';
import Opcoes from './view/containers/Opcoes';

export default class App extends React.Component {
  render() {
    return (
      <NativeRouter>
        <BottomNavigation lazy={false} tabActiveTintColor="blue">
          <Tab label="Home" path="/" component={Home} />
          <Tab label="Diario" path="/diario" component={Diario} />
          <Tab label="Insumos" path="/insumos" component={Insumos} />
          <Tab label="Opções" path="/opcoes" component={Opcoes} />

        </BottomNavigation>
      </NativeRouter>
    );
  }
}