"use client";

import { useTheme } from 'next-themes';

const ThemeComponent = () => {

  const { theme, setTheme } = useTheme("light");
  const handleThemeChange = (selectedTheme) => { setTheme(selectedTheme) };

  return (
    <div className="rounded-full w-fit flex p-1">
      {/* <button
        onClick={() => handleThemeChange('system')}
        type="button"
        className={`p-2 rounded-full focus:outline-none w-full flex justify-center ${theme === 'system' ? "bg-slate-900 text-white" : "text-gray-500"} `}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.1 }}
        title='system'
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-device-desktop" width="16" height="16" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M3 5a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1v-10z"></path>
          <path d="M7 20h10"></path>
          <path d="M9 16v4"></path>
          <path d="M15 16v4"></path>
        </svg>
      </button>
      <button
        onClick={() => handleThemeChange('dark')}
        type="button"
        className={`p-2 rounded-full focus:outline-none w-full flex justify-center ${theme === 'dark' ? "bg-slate-900 text-white" : "text-gray-500"} `}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.1 }}
        title='dark'
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-moon-stars" width="16" height="16" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z"></path>
          <path d="M17 4a2 2 0 0 0 2 2a2 2 0 0 0 -2 2a2 2 0 0 0 -2 -2a2 2 0 0 0 2 -2"></path>
          <path d="M19 11h2m-1 -1v2"></path>
        </svg>
      </button>
      <button
        onClick={() => handleThemeChange('light')}
        type="button"
        className={`p-2 rounded-full focus:outline-none w-full flex justify-center ${theme === 'light' ? "bg-neutral-200 text-gray-700" : "text-gray-500"} `}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.1 }}
        title='light'
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-sun-high" width="16" height="16" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M14.828 14.828a4 4 0 1 0 -5.656 -5.656a4 4 0 0 0 5.656 5.656z"></path>
          <path d="M6.343 17.657l-1.414 1.414"></path>
          <path d="M6.343 6.343l-1.414 -1.414"></path>
          <path d="M17.657 6.343l1.414 -1.414"></path>
          <path d="M17.657 17.657l1.414 1.414"></path>
          <path d="M4 12h-2"></path>
          <path d="M12 4v-2"></path>
          <path d="M20 12h2"></path>
          <path d="M12 20v2"></path>
        </svg>
      </button> */}

      <button
        type="button"
        className="hs-dark-mode-active:hidden block hs-dark-mode group flex items-center text-gray-600 hover:text-blue-600 font-medium dark:text-gray-400 dark:hover:text-gray-500"
        onClick={() => handleThemeChange('dark')}
      >
        <svg
          className="flex-shrink-0 w-4 h-4"
          xmlns="http://www.w3.org/2000/svg"
          width={24}
          height={24}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
        </svg>
      </button>
      <button
        type="button"
        className="hs-dark-mode-active:block hidden hs-dark-mode group flex items-center text-gray-600 hover:text-blue-600 font-medium dark:text-gray-400 dark:hover:text-gray-500"
        onClick={() => handleThemeChange('light')}
      >
        <svg
          className="flex-shrink-0 w-4 h-4"
          xmlns="http://www.w3.org/2000/svg"
          width={24}
          height={24}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx={12} cy={12} r={4} />
          <path d="M12 8a2 2 0 1 0 4 4" />
          <path d="M12 2v2" />
          <path d="M12 20v2" />
          <path d="m4.93 4.93 1.41 1.41" />
          <path d="m17.66 17.66 1.41 1.41" />
          <path d="M2 12h2" />
          <path d="M20 12h2" />
          <path d="m6.34 17.66-1.41 1.41" />
          <path d="m19.07 4.93-1.41 1.41" />
        </svg>
      </button>
    </div >
  );
};

export default ThemeComponent;
