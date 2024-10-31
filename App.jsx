/**
 * My To Do List App
 *
 * @format
 */

import React, {useState} from 'react';
import {SafeAreaView} from 'react-native';
import ToDoForm from './ToDoForm.jsx';
import ToDoList from './ToDoList.jsx';


function App() {
  const [tasks, setTasks] = useState([
    'Do laundry',
    'Go to gym',
    'Walk dog'
  ]);

  const addTask = (task) => {
      if (task) {
        setTasks((prevTasks) => [...prevTasks, task]);
      }
  };


  return (
    <SafeAreaView>
      <ToDoForm onAddTask={addTask} />
      <ToDoList tasks={tasks} />
    </SafeAreaView>
  );
}



export default App;
