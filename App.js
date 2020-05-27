/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import axios from 'axios';

class App extends React.Component {

   state = {
      responseData: ''
   }


//   https://api.github.com/repos/deepika1217-web/MobileApp/commits?per_page=100&sha=ae202b3bf655fd7fc666a654c19af5d1b1cb4aa5
   componentDidMount = () => {
      //  fetch(`https://api.github.com/users/deepika1217-web`, {
      fetch('https://api.github.com/repos/deepika1217-web/MobileApp/commits?per_page=100&sha=ae202b3bf655fd7fc666a654c19af5d1b1cb4aa5', {
         method: 'GET'
      }).then(response => response.json()) 
      .then((responseJson) => {
         const resArray = [];
         for (const key in responseJson) {
            resArray.push({
             //  responseJson[key]
               login: responseJson[key].committer.login,
               url: responseJson[key].committer.url
            });
         }
         this.setState({
            responseData: resArray
         })
      }).catch((error) => {
         console.error(error);
      });
   }
   render() {
   const res = this.state.responseData;
      return (
             <View style={styles.container}>
                <Text style={styles.instructions}>
                  {JSON.stringify(res)}
                </Text>
         </View>
      )
   }
}
   const styles = StyleSheet.create({
       container: {
         flex: 1,
         justifyContent: 'center',
         alignItems: 'center',
         backgroundColor: '#F5FCFF'
       },
         instructions: {
         textAlign: 'center',
         color: '#333333',
         marginBottom: 5
       },
       TextStyle: {
          fontSize : 25,
           textAlign: 'center'
        }
   });
export default App;
