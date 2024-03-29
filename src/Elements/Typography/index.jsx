import React from 'react';
import PropTypes from 'prop-types';
import { twMerge } from 'tailwind-merge';
export default function Typography({
  variant,
  utilities,
  className,
  children,
}) {
  const element = {
    h1: 'text-8xl',
    h2: 'text-6xl',
    h3: 'text-5xl',
    h4: 'text-4xl',
    h5: 'text-3xl',
    h6: 'text-xl',
    caption: 'text-sm',
  };
  const variants = {
    text: 'lg:text-[#6a6b73] lg:text-[15px] lg:leading-[normal]',
    'primary-text': 'lg:text-[14px] lg:text-primary-text',
    'text-pc': 'lg:text-[14px] lg:text-[#748085]',
    'Breadcrumb-text': 'lg:font-[600] lg:text-[15px] lg:text-[#748085]',
    'sidebar-text': 'lg:text-primary-text lg:font-[600] lg:text-[15px]',
  };
  const buttonClass = variants[variant] || variants['variant0'];
  return (
    <h1 className={twMerge(buttonClass, utilities, className)}>{children}</h1>
  );
}

Typography.propTypes = {
  variant: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
};
