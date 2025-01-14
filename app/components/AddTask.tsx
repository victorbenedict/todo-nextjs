'use client';
import React, { useState } from 'react';
import useTodo from '../hooks/useTodo';

export default function InputField() {
  const [value, setValue] = useState<string>('');
  const { addTodo } = useTodo();

  const handleOnChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };

  const handlOnSave = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addTodo(value);
  };

  return (
    <form
      className='flex w-full mx-auto gap-4 items-center justify-end p-2.5'
      onSubmit={handlOnSave}
    >
      <textarea
        className='flex-grow block p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
        placeholder='New task'
        onChange={(e) => handleOnChange(e)}
        required
      />
      <div>
        <button
          className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
          type='submit'
        >
          Add
        </button>
      </div>
    </form>
  );
}
