/* eslint-disable react-native/no-inline-styles */
import {SafeAreaView, Image, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScreen from './src/screens/HomeScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={Main}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          // options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const Main = ({navigation}) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
      }}>
      <View style={{marginTop: 20}}>
        <Text
          style={{
            fontSize: 30,
            fontWeight: 'bold',
            color: '#20315F',
          }}>
          Google
        </Text>
      </View>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Image source={require('./src/assets/google.png')} />
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate('Home')}
        style={{
          backgroundColor: '#4c8bf5',
          padding: 20,
          width: '90%',
          borderRadius: 5,
        }}>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 18,
            color: '#ffffff',
            alignSelf: 'center',
          }}>
          Go to Login
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
