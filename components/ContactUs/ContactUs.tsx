import React from 'react'
import ContactLeft from '../ContactLeft/ContactLeft'
import MyForm from '../Form/MyForm'
import css from './ContactUs.module.sass'


const ContactUs = () => {
  return (
    <div className={css.container}>
      <ContactLeft />
      <MyForm />
    </div>
  )
}

export default ContactUs