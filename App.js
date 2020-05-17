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
//   const styles = StyleSheet.create({
//   	container: {
//   		flex: 1,
//   		justifyContent: 'center',
//   		alignItems: 'center',
//   		backgroundColor: '#F5FCFF'
//   	},
//   	instructions: {
//   		textAlign: 'center',
//   		color: '#333333',
//   		marginBottom: 5
//   	}
//   	});

   state = {
      responseData: ''
   }
   componentDidMount = () => {
      fetch('https://api.github.com/users/deepika1217-web', {
         method: 'GET'
      })
      .then((response) => response.json()) .then((responseJson) => {
         this.setState({
            responseData: responseJson
         })
      }).catch((error) => {
         console.error(error);
      });
   }
   render() {
      return (
             <View>
               <Text>
                  {this.state.responseData.login}
                   {this.state.responseData.id}
            </Text>
         </View>
      )
   }
}
export default App;
