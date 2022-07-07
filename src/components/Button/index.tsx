import React, { forwardRef } from 'react';

export interface IButtonProps {
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  buttonType?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'ml' | 'nav' | 'custom';
  value?: string | number | readonly string[];
  type?: 'button' | 'submit';
}

const ButtonType = {
  success: `
    bg-success border-success
    text-opOffWhite
  `,
  primary: `
    text-white bg-blue-400
    border-blue-300
    hover:bg-opacity-75
  `,
  primaryOrange: `
    text-white bg-orange-400
    border-orange-300
    hover:bg-opacity-75
  `,
  disabled: `
    text-opOffWhite bg-gray-600
    border-gray
    hover:bg-opacity-75
  `,
  custom: '',
};

const ButtonSize = {
  xs: 'w-16 py-1 text-xs rounded font-bold',
  sm: `
    w-16 md:w-18 lg:w-24
    py-1
    sm:text-xs md:text-sm lg:text-lg xl:text-xl
    rounded font-bold
  `,
  md: `
    w-32 md:w-40 lg:w-48
    py-2 md:py-3
    text-sm md:text-base lg:text-lg
    rounded-lg font-bold
  `,
  lg: 'w-72 py-3 text-2xl rounded-lg font-bold',
  ml: 'w-72 py-2 text rounded-lg font-bold',
  nav: `
    w-20 md:w-24 lg:w-32
    py-1
    sm:text-2xs md:text-xs lg:text-sm xl:text-base
    rounded font-bold
  `,
  custom: '',
};

const Button = forwardRef<HTMLButtonElement, IButtonProps>(({
  children,
  className,
  disabled,
  onClick,
  buttonType = 'light',
  size = 'md',
  value,
  type = 'submit',
},
ref) => (
  <button
    className={`
        ${className}
        ${ButtonType[buttonType]}
        ${ButtonSize[size]}
        my-2
        rounded-lg items-center
        transition duration-500 ease-in-out border
        hover:border-transparent focus:outline-none
      `}
    disabled={disabled}
    onClick={onClick}
    value={value}
    type={type}
    ref={ref}
  >
    {children}
  </button>
));

export default Button;
