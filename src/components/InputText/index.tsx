import clsx from 'clsx';
import { FC, FormEvent, HTMLAttributes } from 'react';

interface InputTextProps extends HTMLAttributes<HTMLInputElement> {
  status?: 'default' | 'valid' | 'warning' | 'error';
  label?: string;
  value?: string;
  type?: HTMLInputElement['type'];
  onChange?: (e: FormEvent<HTMLInputElement>) => void;
}

const InputText: FC<InputTextProps> = ({
  status = 'default',
  label,
  value,
  ...inputProps
}) => {
  const inputStyles = clsx(
    'min-w-[300px] h-[52px] box-border relative pointer-events-none rounded-lg px-4 mb-4 py-2 border-2 focus-within:outline-none focus-within:shadow-toy-slate-400 focus-within:border-slate-400',
    status === 'default' && 'border-gray-300 shadow-toy-gray-300',
    status === 'valid' && 'border-green-300 shadow-toy-green-300',
    status === 'warning' && 'border-orange-300 shadow-toy-orange-300',
    status === 'error' && 'border-red-300 shadow-toy-red-300'
  );

  return (
    <span className="w-full">
      {label && (
        <label className="rounded text-sm font-semibold text-slate-800 mb-1">
          {label}
        </label>
      )}
      <div className={inputStyles}>
        <input
          className="h-full w-full overflow-auto pointer-events-auto focus:outline-none"
          type="text"
          value={value}
          {...inputProps}
        />
      </div>
    </span>
  );
};

export default InputText;
