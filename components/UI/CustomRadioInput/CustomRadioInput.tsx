'use client'
import React, { useState } from 'react';
import css from './CustomRadioInput.module.scss'


const IsChecled = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="13" height="14" viewBox="0 0 13 14" fill="none">
    <g clip-path="url(#clip0_1_771)">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M0 7.32408C0 5.56824 0.684819 3.88433 1.90381 2.64277C3.12279 1.40121 4.77609 0.703705 6.5 0.703705C8.22391 0.703705 9.87721 1.40121 11.0962 2.64277C12.3152 3.88433 13 5.56824 13 7.32408C13 9.07991 12.3152 10.7638 11.0962 12.0054C9.87721 13.2469 8.22391 13.9444 6.5 13.9444C4.77609 13.9444 3.12279 13.2469 1.90381 12.0054C0.684819 10.7638 0 9.07991 0 7.32408H0ZM6.12907 10.1576L9.87133 5.39269L9.19533 4.84188L6.00427 8.90325L3.744 6.98511L3.18933 7.66304L6.12907 10.1585V10.1576Z" fill="black" />
    </g>
    <defs>
      <clipPath id="clip0_1_771">
        <rect width="13" height="13.2407" fill="white" transform="translate(0 0.703705)" />
      </clipPath>
    </defs>
  </svg>
)
const NonIsChecled = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="13" height="14" viewBox="0 0 13 14" fill="none">
    <g clip-path="url(#clip0_1_775)">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M0 7.32408C0 5.56824 0.684819 3.88433 1.90381 2.64277C3.12279 1.40121 4.77609 0.703705 6.5 0.703705C8.22391 0.703705 9.87721 1.40121 11.0962 2.64277C12.3152 3.88433 13 5.56824 13 7.32408C13 9.07991 12.3152 10.7638 11.0962 12.0054C9.87721 13.2469 8.22391 13.9444 6.5 13.9444C4.77609 13.9444 3.12279 13.2469 1.90381 12.0054C0.684819 10.7638 0 9.07991 0 7.32408Z" fill="#E0E0E0" />
    </g>
    <defs>
      <clipPath id="clip0_1_775">
        <rect width="13" height="13.2407" fill="white" transform="translate(0 0.703705)" />
      </clipPath>
    </defs>
  </svg>
)

interface CustomRadioInputProps extends
  React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  selected: boolean
  onSelect: (label: any) => void
}


const CustomRadioInput: React.FC<CustomRadioInputProps> = (
  { label, selected, onSelect, ...props }: CustomRadioInputProps
) => {
  const handleClick = () => {
    if (!selected) {
      onSelect(label);
    }
  };

  return (
    <label
      className={selected ? [css.customRadioInput, css.checked].join(' ') : css.customRadioInput}
      onClick={handleClick}>
      <input
        type="radio"
        className={css.radioInput}
        value={label}
        checked={selected}
        onChange={() => onSelect(label)}
        {...props}
      />
      <div className={css.radioIcon}>
        {selected ? <IsChecled /> : <NonIsChecled />}
      </div>
      <span className={css.radioLabel}>{label}</span>
    </label>
  );
};

export default CustomRadioInput;

