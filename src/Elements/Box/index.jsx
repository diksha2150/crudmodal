import { twMerge } from 'tailwind-merge';
import React from 'react';

export default function Box({
  variant,
  utilities,
  children,
  className,
  ...rest
}) {
  const variants = {
    'outline-button':
      'lg:pt-[20px] lg:flex lg:flex-col lg:gap-[15px] lg:text-[#0b2330]',
    card: 'lg:grid lg:grid-cols-1 lg:grid-rows-1 lg:gap-[10px] lg:w-[100%]',
    'template-card':
      'lg:bg-[#fbfbf9] lg:p-[20px] lg:None-primary-border lg:flex lg:items-center lg:justify-center lg:max-h-[200px] lg:h-[100%] lg:max-w-[300px] lg:w-[100%]',
    'sharing-link':
      'lg:flex lg:flex-row lg:items-center lg:gap-x-[5px] lg:w-[fit-content]',
  };
  const buttonClass = variants[variant] || variants['variant0'];
  return (
    <div
      className={twMerge(
        'w-screen  p-2',
        buttonClass,
        utilities,
        className
      )}>
      {children}
    </div>
  );
}
