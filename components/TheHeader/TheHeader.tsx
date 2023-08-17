'use client'
import { DataMenu } from '@/assets/data/DataMenu'
import React from 'react'
import Logo from '../UI/Logo/Logo'
import MenuIcons from '../UI/MenuIcons/MenuIcons'
import css from './TheHeader.module.sass'
import { ShowOnDesktop, ShowOnMobile } from '../../hook/useMenuDisply'
import { NavContextType, useNavContext } from '@/context/NavContext'

const MenuIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M21 18H13C12.4477 18 12 17.5523 12 17C12 16.4477 12.4477 16 13 16H21V18ZM21 13H4C3.44772 13 3 12.5523 3 12C3 11.4477 3.44772 11 4 11H21V13ZM21 8H4C3.44772 8 3 7.55228 3 7C3 6.44772 3.44772 6 4 6H21V8Z" fill="black" />
  </svg>
)


const TheHeader = () => {

  const { nav, setNav } = useNavContext() as NavContextType
  return (
    <header className={css.container}>
      <div className={css.wrap}>
        <div className={css.logo}>
          <Logo color={'black'} />
        </div>
        <ShowOnDesktop>
          <ul className={css.menu}>
            {DataMenu.map((item) => (
              <li key={item.id}>
                <a href="#"
                  style={{ fontWeight: item.bold ? 'bold' : 'normal' }}>
                  {item.title}
                  {item.icon}
                </a>
              </li>
            ))}
          </ul>
          <MenuIcons color={'black'} />
        </ShowOnDesktop>
        <ShowOnMobile>
          <div onClick={() => setNav(!nav)}>
            <MenuIcon />
          </div>
        </ShowOnMobile>
      </div>
    </header>
  )
}

export default TheHeader