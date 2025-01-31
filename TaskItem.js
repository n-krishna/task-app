import React from 'react';
import { StyleSheet, Switch, Text } from 'react-native';
import { Card, IconButton } from 'react-native-paper';

export default function TaskItem({ task, toggleStatus, deleteTask }) {
  return (
    <Card style={styles.taskCard}>
      <Card.Content style={styles.taskContent}>
        <Text style={[styles.taskText, task.status === 'done' && styles.doneText]}>
          {task.title} ({task.status})
        </Text>
        <Switch
          value={task.status === 'done'}
          onValueChange={() => toggleStatus(task.id)}
        />
        <IconButton icon="delete" onPress={() => deleteTask(task.id)} />
      </Card.Content>
    </Card>
  );
}

const styles = StyleSheet.create({
  taskCard: {
    marginVertical: 5,
  },
  taskContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  taskText: {
    fontSize: 16,
    flex: 1,
  },
  doneText: {
    textDecorationLine: 'line-through',
    color: 'gray',
  },
});
