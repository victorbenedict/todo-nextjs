'use client';
import { ChangeEvent, useEffect, useState } from 'react';
import { useDebouncedCallback } from 'use-debounce';
import useTodoLocalStorage from '../hooks/useTodoLocalStorage';
import CheckButton from './CheckButton';
import DeleteButton from './DeleteButton';

interface TaskProp {
  id: string;
  value?: string;
  isDone?: boolean;
}

export function Task({ id, value, isDone }: TaskProp) {
  const [isClient, setIsClient] = useState(false);
  const [todoText, setTodoText] = useState<string>(value || '');
  const { deleteTodo, updateTodo } = useTodoLocalStorage();
  const debouncedUpdateTodo = useDebouncedCallback((todoText) => {
    updateTodo(id, 'value', todoText);
  }, 1000);

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setTodoText(e.target.value);
    debouncedUpdateTodo(e.target.value);
  };

  const handleToggleDone = () => {
    updateTodo(id, 'isDone');
  };

  const handleDelete = () => {
    deleteTodo(id);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      setTodoText('');
    }
  };

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <li className='flex items-center'>
      <CheckButton isDone={isDone} onClick={handleToggleDone} />
      <textarea
        className='block mx-4 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
        onChange={(e) => handleChange(e)}
        value={todoText}
        onKeyDown={handleKeyDown}
      />
      <DeleteButton onClick={handleDelete} />
    </li>
  );
}
