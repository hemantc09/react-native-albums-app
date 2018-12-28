//Import a library to help create a component
import React from 'react';
import { View, AppRegistry } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

//create a component
const App = () => (
  /* view have scroll-view thats why we are using the flex: 1 style.
    It will fix the scrolling effect nicely with without bounce back
    and smooth scrolling*/
  <View style={{ flex: 1}} >
    <Header headerText={'Albums'}/>
    <AlbumList />
  </View>
);

// render it to the device
AppRegistry.registerComponent('albums', () => App);
