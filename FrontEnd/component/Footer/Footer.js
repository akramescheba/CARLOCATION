
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Ionicons, FontAwesome5 ,FontAwesome} from "@expo/vector-icons";
import Camera from '../Camera'
import Agenda from '../Agenda'
import Home from '../Home'
import { StyleSheet, } from 'react-native';
import CarList from '../CarList';
import Connexion from '../Connexion'
// import { SearchBar } from '@rneui/themed';
import SearchBar from '../SearchBar'




const BottomTab = createBottomTabNavigator();
const Footer = () => {
  return (
    <BottomTab.Navigator style={styles.navigator}>
    <BottomTab.Screen name="Accueil" component={CarList}
      options={{
        title: 'HOME',
        tabBarIcon: ({ }) => (

          <FontAwesome5 name="home" size={24} color="black" />
        ),
      }} />

    <BottomTab.Screen name="qr-code" component={Camera}
      options={{
        title: 'SCANNE QR', tabBarIcon: ({ }) => (
<Ionicons name="md-qr-code-sharp" size={24} color="black" />
        
        ),
      }} />


<BottomTab.Screen name="agenda" component={Agenda}
      options={{
        title: 'AGENDA', tabBarIcon: ({ }) => (
          <FontAwesome5 name="calendar-alt" size={24} color="black" />

),
      }} />


<BottomTab.Screen name="camera" component={SearchBar}
      options={{
        title: 'SEARCH',
        tabBarIcon: ({ }) => (
<FontAwesome name="search" size={24} color="black" />
        ),
      }} />

<BottomTab.Screen name="admin" component={Connexion}
      options={{
        title: 'ADMIN',
        tabBarIcon: ({ }) => (
          <Ionicons name="person-circle-outline" size={24} color="black" />
        ),
      }} />



  </BottomTab.Navigator>

  );
};

const styles = StyleSheet.create({
  navigator: {
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


export default Footer;
