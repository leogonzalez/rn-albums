// Import library to help create a component
import React from "react";
import { AppRegistry } from "react-native";
import Header from "./src/components/Header";

// Create a Component
const App = () => (
    <Header headerText={'Albums'} />
);


AppRegistry.registerComponent("albums", () => App);
//Render to the device
