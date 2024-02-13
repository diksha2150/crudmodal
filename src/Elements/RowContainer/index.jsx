import React, { Children } from 'react';
import { twMerge } from 'tailwind-merge';

export default function RowContainer({
  variant,
  utilities,
  children,
  className,
}) {
  const variants = {
    'sharing-link':
      'lg:flex lg:flex-row lg:items-center lg:gap-x-[5px] lg:w-[fit-content]',
  };
  const buttonClass = variants[variant] || variants['variant0'];
  return (
    <div className={twMerge('flex', buttonClass, utilities, className)}>
      {children}
    </div>
  );
}
