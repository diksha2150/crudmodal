import React, { Children } from 'react';
import { twMerge } from 'tailwind-merge';
export default function ColumnContainer({
  variant,
  utilities,
  children,
  className,
}) {
  const variants = {
    'pricing-plan-column-container': 'lg:p-[24px] lg:items-center',
    'accordian-column-container': 'lg:p-[10px] lg:text-secondary sm:flex-start justity-start',
  };
  const buttonClass = variants[variant] || variants['variant0'];
  return (
    <div
      className={twMerge('flex flex-col', buttonClass, utilities, className)}>
      {children}
    </div>
  );
}
