import React from 'react';
import {
  Text,
  View,
  StyleSheet,
} from 'react-native';
import Routes from './src/components/routes';
import { Provider } from "react-redux";
import { createStore } from "redux";
import contactReducer from './src/reducers/contactReducer';
const contact = createStore(contactReducer);

type Props = {};
const App=(props:Props)=>{

    return (
      <Provider store={contact}>
      <View style={Style.container}>
        <Routes/>
      </View>
      </Provider>
    );
};

const Style = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'white'
  }
})
export default App;
