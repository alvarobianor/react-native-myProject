import React from 'react';

import {Text, View} from 'react-native';

import styleApp from '../styles/styleApp';

export default props => (
  <View>
    {props.number % 2 == 0 ? (
      <Text style={styleApp.exec}>É par!</Text>
    ) : (
      <Text style={styleApp.exec}>É impar!</Text>
    )}
  </View>
);
