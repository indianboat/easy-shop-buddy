"use client";

import { useTheme } from 'next-themes';
import { Sun, Moon } from '../svgs/Svg';
import { useEffect, useState } from 'react';

const Theme = () => {

  const { theme, setTheme } = useTheme("light");
  const handleThemeChange = (selectedTheme) => { setTheme(selectedTheme) };
  const [mounted, setMounted] = useState(false);
  useEffect(()=>{
    setMounted(true)
  },[])

  return (
    <div className="rounded-full w-fit flex p-1">
      {
        !mounted ? null :
          theme === "dark"
            ?
            <button
              onClick={() => handleThemeChange('light')}
              type="button"
              className="group flex items-center text-gray-600 hover:text-blue-600 font-medium dark:text-gray-400 dark:hover:text-gray-500"
            >
              <Sun />
            </button>
            :
            <button
              type="button"
              onClick={() => handleThemeChange('dark')}
              className="group flex items-center text-gray-600 hover:text-blue-600 font-medium dark:text-gray-400 dark:hover:text-gray-500"
            >
              <Moon />
            </button>
      }
    </div>
  );
};

export default Theme;
