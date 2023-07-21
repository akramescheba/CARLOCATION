
import React from 'react';
import { StyleSheet } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import {  Ionicons, FontAwesome5 } from "@expo/vector-icons";


const TopTab = createMaterialTopTabNavigator();

const SearchBar = () => {
  return (
    <TopTab.Navigator>
      <TopTab.Screen name="Search" component={SearchBar} 
       options={{
        title: 'SCANNE QR', tabBarIcon: ({ }) => (
<Ionicons name="md-qr-code-sharp" size={24} color="black" />
        
        ),
      }} />


    </TopTab.Navigator>
  );
};
const styles = StyleSheet.create({
  container: {
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default SearchBar;
