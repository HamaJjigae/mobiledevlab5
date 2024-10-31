import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  Pressable,
  StyleSheet,
} from 'react-native';

function ToDoList({tasks}) {

  const [completed, setCompleted] = useState(Array(tasks.length).fill(false));

  const toggleComplete = (index) => {
    const updatedComplete = [...completed];
    updatedComplete[index] = !updatedComplete[index];
    setCompleted(updatedComplete);
  };
  return (
      <ScrollView>
        {tasks.map((task, index) => (
          <Pressable key={index} onPress={() => toggleComplete(index)}>
            <View style={[styles.task, completed[index] && styles.completed]}>
              <Text style={styles.taskText}>{task}</Text>
            </View>
          </Pressable>
        ))}
      </ScrollView>
    );
}

const styles = StyleSheet.create({
  task: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  completed: {
    backgroundColor: '#e0e0e0',
  },
  taskText: {
    fontSize: 16,
  },
});

export default ToDoList;

