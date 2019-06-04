import React, { Component } from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import TeamsScreen from './screens/TeamsScreen';

export default class App extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <TeamsScreen />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF'
  }
});
