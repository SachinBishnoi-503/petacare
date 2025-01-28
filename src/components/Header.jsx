import React from 'react'
import search from '../assets/images/svg/search-icon.svg'
import mike from '../assets/images/svg/mike-search.svg'
import camera from '../assets/images/svg/camera.svg'
import usere from '../assets/images/svg/usere.svg'
import shopping from '../assets/images/svg/shopping-header.svg'
const Header = () => {
  return (
      <div className='py-[20px]'>
          <div className='container'>
              <div className='flex items-center justify-between'>
                  <div>
                      <h1 className='font-montserrat text-custom-sm text-black font-normal'>Pets<span className='text-gold'>Care</span></h1>
                  </div>
                  <div className='border rounded-full border-[#D6D6D6] py-[7px] px-[16px] w-[690px]'>
                      <div className='flex items-center justify-between'>
                          <div className='flex items-center gap-[6px]'>
                              <img src={search} alt="" />
                              <input type="search" placeholder='Search here...' />
                          </div>
                          <div className='flex items-center gap-[16px]'>
                              <img src={mike} alt="" />
                              <img src={camera} alt="" />
                         </div>
                      </div>
                  </div>
                  <div className='flex items-center gap-[14px]'>
                      <div className='flex items-center gap-[5px]'>
                          <img src={usere} alt="" />
                          <h2 className='text-stone-gray text-base font-normal font-montserrat'>Login / Register</h2>
                      </div>
                      <img src={shopping} alt="" />
                  </div>
              </div>
              
          </div>
    </div>
  )
}

export default Header