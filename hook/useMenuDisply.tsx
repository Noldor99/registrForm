'use client'

import React, { useEffect, useState } from 'react';

interface CheckProps {
  children: any;
}

export const ShowOnDesktop = ({ children }: CheckProps) => {
  const [isNonMobile, setIsNonMobile] = useState(false);

  useEffect(() => {
    const updateWindowDimensions = () => {
      setIsNonMobile(window.innerWidth >= 768);
    };

    updateWindowDimensions();

    window.addEventListener('resize', updateWindowDimensions);

    return () => {
      window.removeEventListener('resize', updateWindowDimensions);
    };
  }, []);

  if (isNonMobile) {
    return children;
  }
  return null;
};

export const ShowOnMobile = ({ children }: CheckProps) => {
  const [isNonMobile, setIsNonMobile] = useState(false);

  useEffect(() => {
    const updateWindowDimensions = () => {
      setIsNonMobile(window.innerWidth >= 768);
    };

    updateWindowDimensions();

    window.addEventListener('resize', updateWindowDimensions);

    return () => {
      window.removeEventListener('resize', updateWindowDimensions);
    };
  }, []);

  if (!isNonMobile) {
    return children;
  }
  return null;
};
