import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Index from './Logbook/index'
import CreateHome from './Logbook/create'
import Notification from './Logbook/noti/noti'
import React from 'react'


const CT = createStackNavigator();

function CtNavigator() {
  return (
    <CT.Navigator>
      <CT.Screen
      options={{
        title: "Home page",
        }}
      name="Index" 
      component={Index} 
      />
      <CT.Screen  
      options={{
        title: "Notification logbook",
        }}
      name="Notification" 
      component={Notification} 
      />
      <CT.Screen 
      options={{
        title: "Create Infor",
        }}
      name="Create" 
      component={CreateHome} 
      />
    </CT.Navigator>
  );
  
}

export default function App() {
  return (
    <NavigationContainer>
      <CtNavigator/>
    </NavigationContainer>
  );
}