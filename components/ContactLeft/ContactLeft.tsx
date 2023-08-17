import { contactColumns } from '@/assets/data/DataContacts'
import { IconElipse } from '@/assets/IconElipse'
import React from 'react'
import Social from '../Social/Social'
import css from './ContactLeft.module.sass'

function ContactLeft() {
  return (
    <div className={css.container}>
      <h6>Contact Information</h6>
      <p className={css.subtitle}>Say something to start a live chat!</p>
      <div className={css.wrapContacts}>
        {contactColumns.map((item) => (
          <div className={css.boxContacts} key={item.id}>
            <div className={css.icon}>{item.icons}</div>
            <p>{item.headline}</p>
          </div>
        ))}
      </div>
      <div className={css.wrapSocial}>
        <Social />
      </div>
      <div className={css.iconElipse}>
        <IconElipse />
      </div>
    </div>
  )
}

export default ContactLeft