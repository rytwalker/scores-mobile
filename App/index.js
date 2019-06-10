import React, { Component } from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import TeamsScreen from './screens/TeamsScreen';
import Navigation from './navigation/index';
import { colors } from './utils';

export default class App extends Component {
  render() {
    return (
      <Navigation>
        <SafeAreaView style={styles.container}>
          <TeamsScreen />
        </SafeAreaView>
      </Navigation>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: `${colors.white}`
  }
});
