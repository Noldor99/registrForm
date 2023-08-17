import React from 'react'
import EmailForm from '../EmailForm/EmailForm'
import css from './Popping.module.sass'


const Popping = () => {
  return (
    <div className={css.container}>
      <p className={css.title}>Join Our Newsletter</p>
      <EmailForm />
      <p className={css.subTitle}>
        *  Will send you weekly updates for your better tool management.
      </p>
    </div>
  )
}

export default Popping