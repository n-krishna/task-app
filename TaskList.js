import React from 'react';
import { FlatList } from 'react-native';
import TaskItem from './TaskItem';

export default function TaskList({ tasks, toggleStatus, deleteTask }) {
  return (
    <FlatList
      data={tasks}
      keyExtractor={item => item.id}
      renderItem={({ item }) => (
        <TaskItem task={item} toggleStatus={toggleStatus} deleteTask={deleteTask} />
      )}
    />
  );
}
