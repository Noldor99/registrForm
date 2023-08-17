'use client'
import React from 'react'
import css from './EmailForm.module.sass'

const EmailForm = () => {
  return (
    <form className={css.form}>
      <input
        type="text"
        className={css.input}
        placeholder="Your email address"
      />
      <button type="submit" className={css.button}>
        Subscribe
      </button>
    </form>
  );
}

export default EmailForm