"use client"
import React from 'react'
import {CelebrateSectionImage} from '@/public/images/index'
import Image from 'next/image'
import Link from 'next/link'

const CelebrateSection = () => {
  return (
    <div id='celebrate' className='flex justify-center lg:flex-row flex-col-reverse items-center text-center lg:text-start pt-28 pb-20'>
      <div className='my-auto sm:w-[400px]'>
        <div className='justify-center lg:justify-start flex'>
          <p className='text-[20px] xs:text-[24px] font-semibold xs:w-[220px] w-[200px] leading-tight text-title-color dark:text-title-color-dark pt-10'>
            Celebrate With BTCGiftShop
          </p>
        </div>
        <div className='flex justify-center lg:justify-start'>
          <p className='text-md sm:text-lg w-[280px] sm:w-[380px] md:w-[500px] font-normal text-text-color mt-10 dark:text-text-color-dark'>
            {/* In this holidays, celebrate with much love and peace, offering many blessings to our loved ones, friends and neighbors, wishing them a good Christmas message. */}
            BTCGiftShop is your destination for unique and innovative gifts that combine the beauty of art with the power of blockchain technology. Use Bitcoin and our advanced AI to purchase and personalize gifts that are both memorable and valuable.
          </p>
        </div>
      </div>
      <div>
        <Image src={CelebrateSectionImage} alt='CelebrateSection Image' className='xs:w-[450px] xs:h-[450px] w-[280px] h-[280px]' />
      </div>
    </div>
  )
}

export default CelebrateSection