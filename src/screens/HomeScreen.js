import {SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';
import {WebView} from 'react-native-webview';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <WebView source={{uri: 'https://accounts.google.com/signin'}} />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
