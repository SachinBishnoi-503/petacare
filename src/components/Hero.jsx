import React from 'react'
import calling from '../assets/images/svg/calling.svg'
import dropdown from '../assets/images/svg/drop-down.svg'
const Hero = () => {
    return (
        <div className='bg-very-light py-[20px]'>
            <div className='container'>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-[16px]'>
                        <div className='flex items-center gap-1'>
                            <h2 className='text-black font-normal text-base font-montserrat'>Pet Food</h2>
                            <img src={dropdown} alt="" />
                        </div>
                        <div className='flex items-center gap-1'>
                            <h2 className='text-black font-normal text-base font-montserrat'>PET ACCESSORIES</h2>
                            <img src={dropdown} alt="" />
                        </div>
                        <div className='flex items-center gap-1'>
                            <h2 className='text-black font-normal text-base font-montserrat'>PET SUPPLEMENTS</h2>
                            <img src={dropdown} alt="" />
                        </div>
                        <div className='flex items-center gap-1'>
                            <h2 className='text-black font-normal text-base font-montserrat'>PET GROOMING</h2>
                            <img src={dropdown} alt="" />
                        </div>
                        <div className='flex items-center gap-1'>
                            <h2 className='text-black font-normal text-base font-montserrat'>PET APPARELS</h2>
                            <img src={dropdown} alt="" />
                        </div>
                        <h2 className='text-black font-normal text-base font-montserrat'>PET Combo</h2>
                        <h2 className='text-black font-normal text-base font-montserrat'>Order Tracking</h2>
                    </div>
                    <div className='flex items-center gap-[4px]'>
                        <img src={calling} alt="" />
                        <h2>123 456 7890</h2>
                    </div>
                </div>

            </div>
        </div >
    )
}

export default Hero