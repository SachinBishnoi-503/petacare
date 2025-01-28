import React from 'react'
import discount from '../assets/images/webp/fivetey-discount.png'
import discounttwo from '../assets/images/webp/discount-two.png'

const Shop = () => {
    return (
        <div className='mt-[115px] mb-[100px]'>
          <div className='container'>
              <div className='flex items-center justify-between'>
                  <img src={discount} alt="" className='max-w-[608px] min-h-[388px]' />
                  <img src={discounttwo} alt="" className='max-w-[608px] min-h-[388px]' />
              </div>
              
          </div>
    </div>
  )
}

export default Shop