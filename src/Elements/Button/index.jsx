import React from 'react';
import PropTypes from 'prop-types';
import { twMerge } from 'tailwind-merge';

const Button = ({
  children,
  utilities,
  variant = 'filled',
  leftIcon,
  rightIcon,
  className,
  ...rest
}) => {
  const variants = {
    'snippet-btn':
      'lg:bg-[#fbfafdff] lg:text-[#737278ff] lg:py-[0.5rem] lg:px-[0.75rem] lg:whitespace-nowrap lg:w-[auto] lg:rounded-[4px] lg:text-[15px]',
    'emoji-btn':
      'lg:bg-[None] lg:py-[8px] lg:px-[11px] lg:whitespace-no-wrap lg:rounded-[0]',
    'status-btn':
      'lg:bg-[#1f75cbff] lg:text-[#ffffffff] lg:whitespace-no-wrap lg:py-[5px] lg:px-[12px] lg:text-[14px] lg:rounded-[4px]',
    'filled-btn':
      'lg:bg-accent lg:text-primary lg:py-[8px] lg:px-[12px] lg:leading-[normal] lg:justify-center',
    'outlined-btn':
      'bg-primary None-base-100 text-secondary py-[7px] px-[12px] whitespace-nowrap items-center justify-center w-[fit-content] rounded-lg border border-base-100',
  };
  const buttonClass = variants[variant] || variants['variant0'];
  return (
    <button
      type="button"
      className={twMerge(
        ' px-4 py-2',
        buttonClass,
        utilities,
        className
      )}
      {...rest}>
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
};

export default Button;
