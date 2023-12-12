import Link from 'next/link'
import React from 'react'
import ThemeComponent from '../ThemeComponent/Theme'
import { Hamburger } from '../svgs/Svg'

const Navbar = () => {
  return (
    <>
      <header className="flex sticky top-0 flex-wrap sm:justify-start sm:flex-nowrap z-50 shadow w-full bg-white text-sm dark:bg-neutral-950">
        <nav className="container w-11/12 mx-auto flex items-center justify-between py-5" aria-label="navbar">
          <div className="lg:hidden md:hidden sm:flex flex">
            <button>
              <Hamburger />
            </button>
          </div>

          <Link href="/" className="flex-none font-bold text-xl dark:text-white">
            EasyShopBuddy
          </Link>

          <div className="lg:flex md:flex sm:hidden hidden flex-row items-center gap-5 mt-5 sm:justify-end sm:mt-0 sm:ps-5">
            <Link href="/" className="font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500 dark:focus:outline-none dark:focus:ring-1 px-2 py-1 rounded-2xl dark:focus:ring-gray-600">
              Home
            </Link>
            <Link href="#!" className="font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500 dark:focus:outline-none dark:focus:ring-1 px-2 py-1 rounded-2xl dark:focus:ring-gray-600">
              Category
            </Link>
            <Link href="#!" className="font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500 dark:focus:outline-none dark:focus:ring-1 px-2 py-1 rounded-2xl dark:focus:ring-gray-600">
              About
            </Link>
            <Link href="#!" className="font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500 dark:focus:outline-none dark:focus:ring-1 px-2 py-1 rounded-2xl dark:focus:ring-gray-600">
              Contact
            </Link>
          </div>

          <div className="flex flex-row items-center">


            <ThemeComponent />

            <div className="lg:flex md:flex sm:hidden hidden flex-row gap-2">
              <Link href="/signin" className="font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500 dark:focus:outline-none dark:focus:ring-1 px-2 py-1 rounded-2xl dark:focus:ring-gray-600">
                Signin
              </Link>

              <Link href="/signup" className="font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500 dark:focus:outline-none ring-2 px-2 py-1 rounded-2xl dark:ring-gray-600">
                Signup
              </Link>
            </div>

          </div>
        </nav>
      </header>

    </>
  )
}

export default Navbar