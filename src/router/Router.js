import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  Home,
  Splash,
  ListJersey,
  Profile,
  JerseyDetail,
  Keranjang,
  Checkout,
  Login,
} from '../pages/pages';
import {BottomNavigator} from '../components';
import EditProfile from '../pages/EditProfile/EditProfile';
import ChangePassword from '../pages/ChangePassword/ChangePassword';
import History from '../pages/History/History';
import Register1 from '../pages/Register/Register1';
import Register2 from '../pages/Register/Register2';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator tabBar={props => <BottomNavigator {...props} />}>
      <Tab.Screen name="Home" component={Home} options={{headerShown: false}} />
      <Tab.Screen
        name="Jersey"
        component={ListJersey}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};
const Router = () => {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="JerseyDetail"
        component={JerseyDetail}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Keranjang" component={Keranjang} />
      <Stack.Screen name="Checkout" component={Checkout} />
      <Stack.Screen
        name="EditProfile"
        component={EditProfile}
        options={{title: 'Edit Profile'}}
      />
      <Stack.Screen
        name="ChangePassword"
        component={ChangePassword}
        options={{title: 'Change Password'}}
      />
      <Stack.Screen
        name="History"
        component={History}
        options={{title: 'History Pemesanan'}}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Register1"
        component={Register1}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Register2"
        component={Register2}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;
