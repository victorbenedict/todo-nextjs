'use client';
import AddTask from './components/AddTask';
import { Task } from './components/Task';
import useTodoLocalStorage from './hooks/useTodoLocalStorage';
import { Todo } from './types';

export default function Home() {
  const { todos } = useTodoLocalStorage();

  return (
    <>
      <header>
        <h1 className='mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white'>
          Todo
        </h1>
      </header>
      <main className='flex flex-col gap-4'>
        <AddTask />
        <ul className='max-w-md space-y-2.5 text-gray-500 list-disc list-inside dark:text-gray-400'>
          {todos.map((task: Todo) => {
            const { id, value, isDone } = task;
            return <Task key={id} id={id} value={value} isDone={isDone} />;
          })}
        </ul>
      </main>
    </>
  );
}
