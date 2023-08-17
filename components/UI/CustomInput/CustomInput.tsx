"use client"
import React, { useState } from 'react';
import css from './CustomInput.module.scss'

interface CustomInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const CustomInput: React.FC<CustomInputProps> = ({ value, label, ...props }) => {

  return (
    <div className={value ? [css.customInput, css.hasValue].join(' ') : css.customInput}>
      <label className={css.inputLabel}>{label}</label>
      <input type="text"
        className={css.inputField}
        value={value}
        {...props}
      />
      <div className={css.inputLine}></div>
    </div>
  );
};

export default CustomInput;
