import React, {Component} from 'react';
import {View, Text, StyleSheet, Button, Alert} from 'react-native';
import Simple from './components/simples';
import ElementTT from './components/parOuImpar';

export default function() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Olá Álvaro</Text>
      <Simple texto="Eita pleura" />
      <ElementTT number={0} />
      <Button title="Botão" onPress={() => Alert.alert('Botão Pressionado!')} />
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 60,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
