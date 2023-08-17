'use client'
import React from 'react';
import css from './CustomButton.module.scss'

interface CustomButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const CustomButton: React.FC<CustomButtonProps> = ({ children, ...props }) => {
  return (
    <button {...props} className={css.customButton}>
      {children}
    </button>
  );
};

export default CustomButton;
