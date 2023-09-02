'use client'
import React,{ useState, useEffect, useRef } from 'react'
import styles from './styles.module.css'

interface Props {
    openCart: boolean
    setOpenCart:void
}

const Cart: React.FC<Props> = ({ openCart,setOpenCart }) => {

    const sliderover_container = useRef<HTMLInputElement>(null);

    const sliderover_bg = useRef<HTMLInputElement>(null);
    const sliderover_slideover = useRef<HTMLInputElement>(null);

    const toggleSlideover = () => {

      sliderover_container.current.classList.toggle('invisible');
      sliderover_bg.current.classList.toggle('opacity-0');
      sliderover_bg.current.classList.toggle('opacity-50');
      sliderover_slideover.current.classList.toggle('translate-x-full');

  };
    useEffect(() => {
        if(openCart){
          toggleSlideover()
          setOpenCart(!openCart)
        }
    }, [openCart]);

    return (
        <>
         
              <div
              id="slideover-container"
              ref={sliderover_container}
              className="w-full h-full fixed inset-0 invisible z-50"
            >
              <div
                ref={sliderover_bg}
                id="slideover-bg"
                className="w-full h-full duration-500 ease-out transition-all inset-0 absolute bg-gray-900 opacity-0"
                onClick={toggleSlideover}
              />
              <div
                ref={sliderover_slideover}
                id="slideover"
                onClick={toggleSlideover}
                className="w-96 bg-white h-full  absolute right-0 duration-300 ease-out transition-all translate-x-full"
              >
                <div className="absolute cursor-pointer text-gray-600 top-0 w-8 h-8 flex items-center justify-center right-0 mt-5 mr-5" onClick={toggleSlideover}>
                  <svg
                    onClick={toggleSlideover}
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </div>
              </div>
            </div>
         
            
        </>
    )
}

export default Cart