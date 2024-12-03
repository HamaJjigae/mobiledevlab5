/**
 * My To Do List App
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native-stack';
import {createStackNavigator } from '@react-navigation/native-stack';
import React, {useState} from 'react';
import HomeScreen from './screens/HomeScreen.jsx';
import AboutScreen from './screens/AboutScreen.jsx';


const Stack = createStackNavigator();



function App() {

  return (
    <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="About" component={AboutScreen} />
        <ToDoForm onAddTask={addTask} />
        <ToDoList tasks={tasks} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}



export default App;
