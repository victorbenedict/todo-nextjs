'use client';
import cx from 'classnames';
import { FaCircleCheck } from 'react-icons/fa6';

interface CheckButtonProps {
  isDone?: boolean;
  onClick?: () => void;
}

export default function CheckButton({
  isDone = false,
  onClick,
}: CheckButtonProps) {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };
  const buttonCx = cx(
    'bg-transparent hover:bg-gray-50 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm p-2 text-center inline-flex items-center me-2 dark:hover:bg-gray-800 dark:focus:ring-gray-700',
    {
      'text-green-500 dark:text-green-400': isDone,
      'text-gray-500 dark:text-gray-400': !isDone,
    }
  );

  return (
    <button type='button' onClick={handleClick} className={buttonCx}>
      <FaCircleCheck className='h-4 w-4' />
    </button>
  );
}
