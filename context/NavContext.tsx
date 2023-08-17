'use client'
import React, { createContext, useContext, useState } from 'react';

// Створюємо контекст

export interface NavContextType {
  nav: boolean;
  setNav: React.Dispatch<React.SetStateAction<boolean>>;
}

export const NavContext = createContext<NavContextType | undefined>(undefined);



// Створюємо компонент-постачальник контексту
export const NavProvider = ({ children }: any) => {
  const [nav, setNav] = useState(false)

  return (
    <NavContext.Provider value={{ nav, setNav }}>
      {children}
    </NavContext.Provider>
  );
};

// Створюємо власний хук для зручного використання контексту
export const useNavContext = () => useContext(NavContext);
