'use client'
import { DataMenu } from '@/assets/data/DataMenu'
import { NavContextType, useNavContext } from '@/context/NavContext'
import React from 'react'
import Logo from '../UI/Logo/Logo'
import MenuIcons from '../UI/MenuIcons/MenuIcons'
import css from './Drawer.module.sass'

const ClouseMenu = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 20L4 4M20 4L4 20" stroke="white" stroke-width="2" stroke-linecap="round" />
  </svg>

)

const Drawer = () => {

  const { nav, setNav } = useNavContext() as NavContextType

  const changeNav = () => {
    setNav(!nav);
  };
  return (
    <div className={
      nav ? [css.container, css.active].join(' ') : css.container
    }
    >
      <div className={css.wrap}>
        <div className={css.logo}>
          <Logo color='white' />
        </div>
        <div onClick={() => changeNav()}>
          <ClouseMenu />
        </div>
      </div>
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
      <div className={css.menuIcons}>
        <MenuIcons color={'white'} />
      </div>
    </div>
  )
}

export default Drawer