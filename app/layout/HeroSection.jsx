"use client"
import React from 'react'
import {HeroImage} from '@/public/images/index'
import Image from 'next/image'
import Link from 'next/link'

const HeroSection = () => {
  return (
    <div id='home' className='flex justify-center lg:flex-row flex-col items-center text-center lg:text-start pt-8 sm:pt-16 md:pt-32'>
      <div>
        <Image src={HeroImage} alt='heroImage' className='xs:w-[500px] xs:h-[442px] w-[320px] h-[282px]'/>
      </div>
      <div className='my-auto'>
        <div className='justify-center flex lg:justify-start'>
          <p className='text-[24px] xs:text-[42px] font-semibold xs:w-[500px] w-[300px] leading-tight'>Empower Your Gifting with <span className='text-orange-600'>Bitcoin</span> and <span className='text-orange-600'>AI</span></p>
        </div>
        <div className='justify-center flex lg:justify-start'>
          <p className='text-md sm:text-lg w-[280px] sm:w-[380px] md:w-[500px] font-normal text-text-color mt-5 dark:text-text-color-dark'>
            Harness the power of Bitcoin and AI to buy innovative, memorable, and investment-worthy gifts for your loved ones.
          </p>
        {/* <p className='text-md sm:text-lg w-[280px] sm:w-[380px] md:w-[500px] font-normal text-text-color mt-5 dark:text-text-color-dark'>Innovative, memorable, and investment-worthy gifts  at <span className='text-orange-600'>BTCGiftShop</span></p> */}
        </div>
        <div className='flex justify-center items-center lg:justify-start'>
          <Link href='prepare_for_launch' className='rounded-[64px] w-fit h-auto bg-first-color px-12 py-5 text-[15px] xs:text-[16px] font-medium text-white mt-10 cursor-pointer'>Explore Gifts</Link>
        </div>
      </div>
    </div>
  )
}

export default HeroSection