import React from 'react'
import left from '../assets/images/svg/arrow-left.svg'
import right from '../assets/images/svg/arrow-right.svg'
import product from '../assets/images/webp/seller-product.png'
import star from '../assets/images/svg/star.svg'
import shopping from '../assets/images/svg/yellow-shopping.svg'
import atfood from '../assets/images/webp/cat-food.png'


const Seller = () => {
  return (
      <div className='mt-[102px]'>
          <div className='container'>
              <div className='flex items-center justify-between'>
                  <h2 className='font-montserrat font-semibold text-custom-lg leading-9'>Best Seller Products</h2>
                  <div className='flex items-center gap-[10px]'>
                      <img src={left } alt="" />
                      <img src={right} alt="" />
                  </div>
              </div>
              <div className='flex flex-row flex-wrap -mx-3 mt-[40px]'>
                  <div className='w-1/4 px-3'>
                      <div className='mx-auto flex flex-col p-[3px_16px_20px_16px] border rounded-[8px] border-[#D6D6D6]'>
                          <img src={product} alt="" className='' />
                          <div className='flex flex-col items-start'>
                              <h2 className='text-stay-grey'>Cat food</h2>
                              <p className='max-w-[272px] font-montserrat font-medium text-[20px] leading-6 mt-[6px]'>Lechat Excellence Adult Chicken</p>
                              <img src={star} alt=""  className='mt-3'/>
                              <div className='flex items-center mt-[20px] justify-between gap-[150px]'>
                                  <h2 className='text-blue font-semibold font-montserrat text-custom-sm leading-10'>$23.48</h2>
                                  <img src={shopping} alt="" />
                              </div>
                          </div>
                      </div>
                      
                  </div>
                  <div className='w-1/4 px-3'>
                      <div className='mx-auto flex flex-col p-[3px_16px_20px_16px] border rounded-[8px] border-[#D6D6D6]'>
                          <img src={product} alt="" className='' />
                          <div className='flex flex-col items-start'>
                              <h2 className='text-stay-grey'>Cat food</h2>
                              <p className='max-w-[272px] font-montserrat font-medium text-[20px] leading-6 mt-[6px]'>Lechat Excellence Adult Chicken</p>
                              <img src={star} alt="" className='mt-3' />
                              <div className='flex items-center mt-[20px] justify-between gap-[150px]'>
                                  <h2 className='text-blue font-semibold font-montserrat text-custom-sm leading-10'>$23.48</h2>
                                  <img src={shopping} alt="" />
                              </div>
                          </div>
                      </div>

                  </div>
                  <div className='w-1/4 px-3'>
                      <div className='mx-auto flex flex-col p-[3px_16px_20px_16px] border rounded-[8px] border-[#D6D6D6]'>
                          <img src={product} alt="" className='' />
                          <div className='flex flex-col items-start'>
                              <h2 className='text-stay-grey'>Cat food</h2>
                              <p className='max-w-[272px] font-montserrat font-medium text-[20px] leading-6 mt-[6px]'>Lechat Excellence Adult Chicken</p>
                              <img src={star} alt="" className='mt-3' />
                              <div className='flex items-center mt-[20px] justify-between gap-[150px]'>
                                  <h2 className='text-blue font-semibold font-montserrat text-custom-sm leading-10'>$23.48</h2>
                                  <img src={shopping} alt="" />
                              </div>
                          </div>
                      </div>

                  </div>
                  <div className='w-1/4 px-3'>
                      <div className='mx-auto flex flex-col p-[3px_16px_20px_16px] border rounded-[8px] border-[#D6D6D6]'>
                          <img src={product} alt="" className='' />
                          <div className='flex flex-col items-start'>
                              <h2 className='text-stay-grey'>Cat food</h2>
                              <p className='max-w-[272px] font-montserrat font-medium text-[20px] leading-6 mt-[6px]'>Lechat Excellence Adult Chicken</p>
                              <img src={star} alt="" className='mt-3' />
                              <div className='flex items-center mt-[20px] justify-between gap-[150px]'>
                                  <h2 className='text-blue font-semibold font-montserrat text-custom-sm leading-10'>$23.48</h2>
                                  <img src={shopping} alt="" />
                              </div>
                          </div>
                      </div>
                  </div>
                  
              </div>
              <div className='flex flex-row flex-wrap -mx-3 mt-[40px]'>
                  <div className='w-1/4 px-3'>
                      <div className='mx-auto flex flex-col p-[3px_16px_20px_16px] border rounded-[8px] border-[#D6D6D6]'>
                          <img src={atfood} alt="" className='' />
                          <div className='flex flex-col items-start'>
                              <h2 className='text-stay-grey'>Cat food</h2>
                              <p className='max-w-[272px] font-montserrat font-medium text-[20px] leading-6 mt-[6px]'>Lechat Excellence Adult Chicken</p>
                              <img src={star} alt="" className='mt-3' />
                              <div className='flex items-center mt-[20px] justify-between gap-[150px]'>
                                  <h2 className='text-blue font-semibold font-montserrat text-custom-sm leading-10'>$23.48</h2>
                                  <img src={shopping} alt="" />
                              </div>
                          </div>
                      </div>

                  </div>
                  <div className='w-1/4 px-3'>
                      <div className='mx-auto flex flex-col p-[3px_16px_20px_16px] border rounded-[8px] border-[#D6D6D6]'>
                          <img src={atfood} alt="" className='' />
                          <div className='flex flex-col items-start'>
                              <h2 className='text-stay-grey'>Cat food</h2>
                              <p className='max-w-[272px] font-montserrat font-medium text-[20px] leading-6 mt-[6px]'>Lechat Excellence Adult Chicken</p>
                              <img src={star} alt="" className='mt-3' />
                              <div className='flex items-center mt-[20px] justify-between gap-[150px]'>
                                  <h2 className='text-blue font-semibold font-montserrat text-custom-sm leading-10'>$23.48</h2>
                                  <img src={shopping} alt="" />
                              </div>
                          </div>
                      </div>

                  </div>
                  <div className='w-1/4 px-3'>
                      <div className='mx-auto flex flex-col p-[3px_16px_20px_16px] border rounded-[8px] border-[#D6D6D6]'>
                          <img src={atfood} alt="" className='' />
                          <div className='flex flex-col items-start'>
                              <h2 className='text-stay-grey'>Cat food</h2>
                              <p className='max-w-[272px] font-montserrat font-medium text-[20px] leading-6 mt-[6px]'>Lechat Excellence Adult Chicken</p>
                              <img src={star} alt="" className='mt-3' />
                              <div className='flex items-center mt-[20px] justify-between gap-[150px]'>
                                  <h2 className='text-blue font-semibold font-montserrat text-custom-sm leading-10'>$23.48</h2>
                                  <img src={shopping} alt="" />
                              </div>
                          </div>
                      </div>

                  </div>
                  <div className='w-1/4 px-3'>
                      <div className='mx-auto flex flex-col p-[3px_16px_20px_16px] border rounded-[8px] border-[#D6D6D6]'>
                          <img src={atfood} alt="" className='' />
                          <div className='flex flex-col items-start'>
                              <h2 className='text-stay-grey'>Cat food</h2>
                              <p className='max-w-[272px] font-montserrat font-medium text-[20px] leading-6 mt-[6px]'>Lechat Excellence Adult Chicken</p>
                              <img src={star} alt="" className='mt-3' />
                              <div className='flex items-center mt-[20px] justify-between gap-[150px]'>
                                  <h2 className='text-blue font-semibold font-montserrat text-custom-sm leading-10'>$23.48</h2>
                                  <img src={shopping} alt="" />
                              </div>
                          </div>
                      </div>
                  </div>

              </div>
              
          </div>
    </div>
  )
}

export default Seller