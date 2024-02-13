import { twMerge } from 'tailwind-merge';
import React from 'react';

export default function Link({
  variant,
  utilities,
  children,
  className,
  href,
}) {
  return (
    <a
      href={href || '#'}
      className={twMerge(
        'text-blue-500 underline hover:text-purple-900 focus:text-purple-900 active:text-purple-700 text-purple-400 hover:text-purple-500 focus:text-purple-500 active:text-purple-600',
        variant,
        utilities,
        className
      )}>
      {children}
    </a>
  );
}
