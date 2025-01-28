import React from 'react'
import food from '../assets/images/webp/dog-food.png'
import greenball from '../assets/images/webp/greenball.png'
import protien from '../assets/images/webp/protien.png'
import dogfood from '../assets/images/webp/dong-with.png'
import whitedog from '../assets/images/webp/whtie-dog.png'

const Categories = () => {
  return (
      <div className='mt-[100px]'>
          <div className='container'>
              <div cladassName='flex items-center mx-auto'>
                  <h2 className='font-semibold font-montserrat text-custom-lg leading-9 text-black'>Top Categories</h2>
              </div>
              <div className='flex items-center justify-between mt-[67px]'>
                  <div className='flex items-center  flex-col'>
                      <img src={food} alt="" className='max-w-[227px] min-h-[212px]' />
                      <h2 className='mt-[20px] font-montserrat font-medium text-custom-sm leading-6'>PET FOOD</h2>
                  </div>
                  <div className='flex items-center text-center flex-col'>
                      <img src={greenball} alt="" className='max-w-[227px] min-h-[212px]' />
                      <h2 className='mt-[20px] font-montserrat font-medium text-custom-sm leading-6'>PET ACCESSORIES</h2>
                  </div>
                  <div className='flex items-center text-center flex-col'>
                      <img src={protien} alt="" className='max-w-[227px] min-h-[212px]' />
                      <h2 className='mt-[20px] font-montserrat font-medium text-custom-sm leading-6'>PET SUPPLEMENTS</h2>
                  </div>
                  <div className='flex items-center text-center flex-col'>
                      <img src={dogfood} alt="" className='max-w-[227px] min-h-[212px]' />
                      <h2 className='mt-[20px] font-montserrat font-medium text-custom-sm leading-6'>PET GROOMING</h2>
                  </div>
                  <div className='flex items-center text-center flex-col'>
                      <img src={whitedog} alt="" className='max-w-[227px] min-h-[212px]' />
                      <h2 className='font-montserrat font-medium text-custom-sm leading-6'>PET TREATS</h2>
                  </div>
              </div>
              
          </div>
    </div>
  )
}

export default Categories