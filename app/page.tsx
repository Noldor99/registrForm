import ContactUs from '@/components/ContactUs/ContactUs'
import React from 'react'
import css from './page.module.sass'

const Home = () => {
  return (
    <div className={css.container}>
      <h2 className={css.title}>Contact Us</h2>
      <p className={css.subtitle}>Any question or remarks? Just write us a message!</p>
      <div className={css.contactBox}>
        <ContactUs />
      </div>

    </div>
  )
}

export default Home

