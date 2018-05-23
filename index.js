// Import library to help create a component
import React from "react";
import { AppRegistry, View } from "react-native";
import Header from "./src/components/Header";
import AlbumList from "./src/components/AlbumList";

// Create a Component
const App = () => (
  <View style={{flex:1}}>
    <Header headerText={"Albums"} />
    <AlbumList />
  </View>
);

AppRegistry.registerComponent("albums", () => App);
//Render to the device
