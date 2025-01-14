import React from 'react';
import cx from 'classnames';
import { TiDelete } from 'react-icons/ti';

interface DeleteButtonProps {
  onClick?: () => void;
}

export default function DeleteButton({ onClick }: DeleteButtonProps) {
  const handleOnClick = () => {
    if (onClick) {
      onClick();
    }
  };
  const buttonCx = cx(
    'text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm p-2 text-center inline-flex items-center me-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800'
  );
  return (
    <button type='button' onClick={handleOnClick} className={buttonCx}>
      <TiDelete className='h-4 w-4' />
    </button>
  );
}
