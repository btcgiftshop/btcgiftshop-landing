"use client"
import React from 'react'
import {GivingSectionImage1, GivingSectionImage2, GivingSectionImage3} from '@/public/images/index'
import Image from 'next/image'

const GivingSectionData = [
  {
    id : "1",
    image : GivingSectionImage1,
    altText : "Giving Section Image 1",
    title : "Surprise gifts",
    // description : "Exclusive art and crafts from talented artists",
    description : "Explore our curated collection of beautiful and innovative gifts, both physical and digital.",
  },
  {
    id : "2",
    image : GivingSectionImage2,
    altText : "Giving Section Image 2",
    title : "Investment potential",
    // description : "Enhance your gift by attaching satoshis, making it an attractive and investment-worthy present.",
    description : "Ordinals, Runes, and Satoshis create an appealing environment for gifting and investment opportunities.",
  },
  {
    id : "3",
    image : GivingSectionImage3,
    altText : "Giving Section Image 3",
    title : "Lots of love",
    // description : "Give away feelings that last forever",
    description : "Choose the perfect gift and personalize it with a digital asset on Bitcoin, that last forever.",
  }
];


const GivingSection = () => {
  return (
    <div id='gifts' className='flex justify-center pt-24 flex-col items-center mb-5'>
        <div>
          {/* <p className='text-[24px] w-[300px] max-w-full font-semibold text-center text-title-color dark:text-text-color-dark pt-4'> */}
          <p className='text-[20px] xs:text-[24px] w-[300px] max-w-full font-semibold text-center text-title-color dark:text-title-color-dark'>
          Empower Your Gifting with BTCGiftShop
          </p>
        </div>
        <div className='grid lg:mt-8 mt-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
          {GivingSectionData.map((Giving_Section_Data) => (
            <div key={Giving_Section_Data.id} className='text-center items-center flex justify-center flex-col lg:mx-12 md:mx-8 mx-5 cursor-pointer'>
            <div>
              <Image src={Giving_Section_Data.image} alt={Giving_Section_Data.altText} className='xs:w-[120px] xs:h-[120px] w-[100px] h-[100px] m-5'/>
            </div>
            <div>
              {/* <p className='text-[16px] xs:text-[16px] font-semibold dark:text-title-color-dark text-title-color'> */}
              <p className='text-[20px] w-full font-semibold text-start'>
                {Giving_Section_Data.title}
              </p>
            </div>
            <div>
              {/* <p className='text-[13px] xs:text-[14px] w-[150px] font-normal text-text-color dark:text-text-color-dark mt-1'> */}
              <p className="text-md w-[240px] font-normal text-text-color mt-4 dark:text-text-color-dark">
                {Giving_Section_Data.description}
              </p>
            </div>
          </div>
          ))}
        </div>
    </div>
  )
}

export default GivingSection