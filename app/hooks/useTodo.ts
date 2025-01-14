import sampleData from '@/public/sampleData';
import useLocalStorage from 'use-local-storage';
import { v4 as uuidv4 } from 'uuid';
import { Todo } from '../types';

const handleInvalidIndex = (index: number, message = 'Todo ID not found') => {
  if (index < 0) {
    console.error(message);
    return true;
  }
  return false;
};

const useTodo = () => {
  const [todos, setTodos] = useLocalStorage<Todo[]>('todos', sampleData);

  const addTodo = (value: string) => {
    const id: string = uuidv4();
    const updatedTodo: Todo[] = [
      ...todos,
      { id: id, value: value, isDone: false },
    ];
    setTodos(updatedTodo);
  };

  const deleteTodo = (id: string) => {
    const index = todos.findIndex((item) => item.id === id);
    if (handleInvalidIndex(index)) return;

    const updatedTodos = todos.toSpliced(index, 1);
    setTodos(updatedTodos);
  };

  const updateTodo = (targetId: string, key: string, newValue?: string) => {
    const index = todos.findIndex((item) => item.id === targetId);
    if (handleInvalidIndex(index)) return;
    const todo = todos[index];
    const { id, value, isDone } = todo;
    console.log('updatedTodo todo', todo.isDone);

    switch (key) {
      case 'value': {
        const updatedValue = { id, value: newValue || '', isDone };
        const updatedTodos = todos.toSpliced(index, 1, updatedValue);
        setTodos(updatedTodos);
        break;
      }
      case 'isDone': {
        const toggleIsDone = { id, value, isDone: !isDone };
        const updatedTodos = todos.toSpliced(index, 1, toggleIsDone);
        setTodos(updatedTodos);
        break;
      }
    }
  };

  return { todos, setTodos, addTodo, deleteTodo, updateTodo };
};

export default useTodo;
