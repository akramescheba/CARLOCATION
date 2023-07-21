import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
// import Header from './component/Header/Header';
import Footer from './FrontEnd/component/Footer/Footer'
// import Agenda from './component/Agenda';
// import CarList from './component/CarList';






export default function MyTabs() {

  return (
    <NavigationContainer>

      <StatusBar style='dark' />
      {/* <Header/> */}
      <Footer />

      {/* <Cartes/> */}

    </NavigationContainer>

  )
}











