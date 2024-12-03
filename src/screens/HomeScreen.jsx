import React, { useState } from 'react';
import { SafeAreaView, Button } from 'react-native';
import ToDoForm from '../components/ToDoForm.jsx';
import ToDoList from '../components/ToDoList.jsx';
import MainLayout from '../layouts/MainLayout';

const HomeScreen = ({ navigation }) => {
  const [tasks, setTasks] = useState(['Do laundry', 'Go to gym', 'Walk dog']);

  const addTask = (task) => {
    if (task) {
      setTasks((prevTasks) => [...prevTasks, task]);
    }
  };

  return (
    <MainLayout>
      <SafeAreaView>
        <ToDoForm onAddTask={addTask} />
        <ToDoList tasks={tasks} />
        <Button
          title="Go to About"
          onPress={() => navigation.navigate('About')}
        />
      </SafeAreaView>
    </MainLayout>
  );
};

export default HomeScreen;
