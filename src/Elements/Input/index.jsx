import React from 'react';
import { twMerge } from 'tailwind-merge';

export default function Input({
  className,
  variant = 'filled',
  utilities,
  placeholder = 'Enter text',
  righticon,
  leftIcon,
  ...rest
}) {
  const variants = {
    'snippet-input':
      'lg:bg-[#fbfafdff] lg:py-[0.5rem] lg:px-[0.75rem] lg:w-[100%]',
    btn: 'lg:text-[#737278ff] lg:py-[9px] lg:px-[12px] lg:w-[92%] lg:rounded-[0px]',
    'input-base-filled':
      'lg:text-secondary lg:py-[12px] lg:px-[0px] lg:tracking-[0.3px] lg:text-[14px] lg:font-[500] lg:whitespace-no-wrap lg:w-[100%] ',
    input:
      'lg:bg-[#fbfafdff] lg:text-[#737278ff] lg:block lg:w-[70%] lg:rounded-[5px] lg:py-[10px] lg:px-[7px]',
    'project-input':
      'lg:bg-[None] lg:text-[#737278ff] lg:pt-[8px] lg:pr-[0px] lg:pb-[8px] lg:pl-[5px] lg:w-[97%]',
    'outlined-input':
      'lg:bg-info lg:None-base-100 lg:text-secondary lg:py-[8px] lg:px-[12px] lg:w-[100%] ' ,
  };
  const buttonClass = variants[variant] || variants['variant0'];
  return (
    <div
      className={twMerge(
        'flex rounded w-64 focus:outline-none text-black bg-gray-200 hover:bg-gray-300 px-4 py-2 text-md',
        buttonClass,
        utilities,
        className
      )}
      {...rest}>
      {righticon}
      <input
        type="text"
        name="first-name"
        id="first-name"
        autoComplete="given-name"
        placeholder={placeholder}
        style={{ backgroundColor: 'inherit', color: 'inherit' }}
        className="focus:outline-none w-full"
      />
      {leftIcon}
    </div>
  );
}
