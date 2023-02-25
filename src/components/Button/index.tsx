import clsx from 'clsx';
import { FC, HTMLAttributes } from 'react';

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning';
  size?: 'roegadyn' | 'hyur' | 'lalafell';
}

const Button: FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'hyur',
  className,
  ...buttonProps
}) => {
  const styles = clsx(
    // Base
    'w-fit box-border mb-2 font-semibold rounded-lg leading-none border-2 active:translate-y-1 active:shadow-none',

    // Variants
    variant === 'primary' &&
      'text-white bg-indigo-500 border-indigo-800 shadow-toy-indigo-800 hover:bg-indigo-700',
    variant === 'secondary' &&
      'text-indigo-800 bg-white border-indigo-800 shadow-toy-indigo-800 hover:bg-indigo-100',
    variant === 'success' &&
      'text-white bg-green-500 border-green-800 shadow-toy-green-800 hover:bg-green-700 shadow-toy',
    variant === 'warning' &&
      'text-white bg-orange-500 border-orange-800 shadow-toy-orange-800 hover:bg-orange-700',
    variant === 'danger' &&
      'text-white bg-red-500 border-red-800 shadow-toy-red-800 hover:bg-red-700',
    // Size
    size === 'hyur' && 'min-w-[150px] p-4 h-[52px]',
    size === 'lalafell' && 'min-w-[120px] text-sm p-2 h-fit',
    size === 'roegadyn' && 'min-w-[180px] font-bold text-lg p-6 h-fit',

    className
  );

  return (
    <button className={styles} {...buttonProps}>
      {children}
    </button>
  );
};

export default Button;
