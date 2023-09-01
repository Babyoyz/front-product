"use client";
import React from "react";

const Navbar = () => {

  const [openNav, setOpenNav] = React.useState(false);

  return (
    <>
      <nav className='bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700'>
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="#" className="flex items-center">
            <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="Flowbite Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
          </a>
          <div className='flex gap-5'>

            <a>Shop</a>

            <a className='hidden md:block lg:block xl:block'>Login</a>
              <div onClick={() => setOpenNav(!openNav)} className="hidden md:flex lg:flex xl:flex cursor-pointer gap-1">
              <a>
                menu 
              </a>
              {openNav ? (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mt-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                </svg>
              
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mt-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              )}
              </div>
            </div>
           
          </div>
           
      </nav>
      <div className={` ${openNav ? 'flex' : 'invisible'} justify-end max-w-screen-xl items-center  mx-auto p-4 `}>
      {openNav ? (
           <div className="absolute top-12 z-50 h-auto bg-slate-300 w-40 p-1 shadow-md">
               
                <div className="toggle-menu-body text-end text-sm">
                    <div className="flex justify-end gap-1 p-2 cursor-pointer ">
                      <p>profile</p>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div className="flex justify-end gap-1 p-2 cursor-pointer">
                      <p>logout</p>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
                    </svg>
                    </div>
                      
                </div>
            </div>
        ) : (
        <div></div>
        )}
      </div>
    </>
  )
}

export default Navbar