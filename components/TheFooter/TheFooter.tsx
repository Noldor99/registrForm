import { contactColumns } from '@/assets/data/DataContacts'
import { footerColumns } from '@/assets/data/DataFooter'
import React from 'react'
import EmailForm from '../EmailForm/EmailForm'
import Popping from '../Popping/Popping'
import Logo from '../UI/Logo/Logo'
import css from './TheFooter.module.sass'

const TheFooter = () => {
  return (
    <footer className={css.container}>
      <div className={css.wrap}>
        <div className={css.logo}>
          <Logo color="white" />
        </div>
        <div className={css.line}></div>
        <div className={css.box}>
          <div className={css.wrapContacts}>
            <div className={css.wrapContactsLeft}>
              <p className={css.title}>Reach us</p>
              {contactColumns.map((item) => (
                <div className={css.boxContacts} key={item.id}>
                  <div className={css.icon}>{item.icons}</div>
                  <p>{item.headline}</p>
                </div>
              ))}
            </div>
            <div className={css.wrapColumns}>
              <div>
                <p className={css.titleolumn}>{footerColumns[0].headline}</p>
                <ul>
                  {footerColumns[0].links.map((link, index) => (
                    <li key={index + 1}>
                      <a href="/">
                        <p>{link}</p>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className={css.wrapColumns}>
            <div>
              <p className={css.titleolumn}>{footerColumns[1].headline}</p>
              <ul>
                {footerColumns[1].links.map((link, index) => (
                  <li key={index + 1}>
                    <a href="/">
                      <p>{link}</p>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className={css.titleolumn}>{footerColumns[2].headline}</p>
              <ul>
                {footerColumns[2].links.map((link, index) => (
                  <li key={index + 1}>
                    <a href="/">
                      <p>{link}</p>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className={css.popping}>
            <Popping />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default TheFooter