import clsx from 'clsx';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function Button({ children, className, ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      className={clsx(
        'flex h-10 items-center rounded-lg bg-blue-500 px-4 font-medium text-sm text-white transition-colors aria-disabled:cursor-not-allowed active:bg-blue-600 hover:bg-blue-400 aria-disabled:opacity-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-500 focus-visible:outline-offset-2',
        className,
      )}
    >
      {children}
    </button>
  );
}
