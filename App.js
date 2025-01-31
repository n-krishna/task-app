import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { Button, Divider } from 'react-native-paper';
import TaskList from './TaskList';

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [taskTitle, setTaskTitle] = useState('');

  const addTask = () => {
    if (taskTitle.trim() === '') return;
    setTasks([...tasks, { id: Date.now().toString(), title: taskTitle, status: 'due' }]);
    setTaskTitle('');
  };

  const toggleStatus = (id) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, status: task.status === 'due' ? 'done' : 'due' } : task));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.container}>
      <Text style={styles.header}>✅ To-Do List</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter a new task..."
          placeholderTextColor="#aaa"
          value={taskTitle}
          onChangeText={setTaskTitle}
        />
        <Button
          mode="contained"
          onPress={addTask}
          disabled={!taskTitle.trim()}
          style={styles.addButton}
          labelStyle={{ fontSize: 16, fontWeight: 'bold' }}
        >
          Add
        </Button>
      </View>

      <Divider style={styles.divider} />

      <ScrollView style={styles.taskListContainer}>
        <TaskList tasks={tasks} toggleStatus={toggleStatus} deleteTask={deleteTask} />
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#121212',
    paddingTop: 50,
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff',
    marginBottom: 15,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1E1E1E',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  input: {
    flex: 1,
    color: '#fff',
    fontSize: 16,
    padding: 10,
  },
  addButton: {
    marginLeft: 10,
    backgroundColor: '#4CAF50',
    borderRadius: 8,
  },
  divider: {
    height: 1,
    backgroundColor: '#444',
    marginBottom: 10,
  },
  taskListContainer: {
    flex: 1,
  },
});
