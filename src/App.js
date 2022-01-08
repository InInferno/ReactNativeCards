import React from 'react';
import Cards from './Cards/Cards'
import {
  StatusBar,
  StyleSheet,
  Text,
  ScrollView
} from 'react-native';
import { Provider } from "react-redux";
import store from './services/store';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    marginTop: 20,
    marginBottom: 20,
    fontSize: 30
  }
});

const App = () => {
  return (
    <Provider store={store}>
      <StatusBar backgroundColor={'#ccc'} barStyle={'dark-content'}/>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Cards List App</Text>
        <Cards />
      </ScrollView>
    </Provider>
  );
};

export default App;
