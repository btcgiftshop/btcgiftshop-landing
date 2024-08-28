"use client"
import React from 'react'
import Image from 'next/image'
import {Logo , FooterGreenBulb ,FooterRedBulb,GooglePlay,AppleApp, LogoPng } from '@/public/images/index'
import { Icons } from "@/components/Icons";

const Footer = () => {
  return (
    <footer>
      <div className='flex justify-center mx-auto mb-4 pt-10 xs:w-[450px] lg:w-[auto] w-[312px]'>
        {/* <div className='grid lg:grid-cols-4 lg:gap-32 gap-10 grid-flow-row xs:ml-5 lg:ml-0'> */}
        <div className='grid lg:gap-32 grid-flow-row xs:ml-5 lg:ml-0'>

          <div>
            <div className='flex w-full justify-center text-center mb-2'>
            <Image src={LogoPng} alt='logo' className='w-[24px] h-[24px] me-2'/>
            <p className='xs:text-[16px] text-[15px] font-normal text-title-color dark:text-title-color-dark'>BTCGiftShop</p>
            </div>
            <div>
              <p className='text-text-color text-center text-[13px] xs:text-[14px] dark:text-text-color-dark'>Empower Your Gifting with Bitcoin and AI.</p>
            </div>
          </div>

          {/* <div className='dark:text-title-color-dark text-title-color'>
            <div className='mb-6'>
            <p className='xs:text-[20px] text-[16px] font-semibold'>Our Services</p>
            </div>
            <div>
            <p className='text-[15px] xs:text-[16px] font-normal mb-2 dark:text-text-color-dark text-text-color'>Pricing</p>
            </div>
            <div>
              <p className='text-[15px] xs:text-[16px] font-normal mb-2 dark:text-text-color-dark text-text-color'>Discounts</p>
            </div>
            <div>
            <p className='text-[15px] xs:text-[16px] font-normal mb-2 dark:text-text-color-dark text-text-color'>Shipping mode</p>
            </div>
          </div> */}

          {/* <div className='dark:text-title-color-dark text-title-color' >
            <div className='mb-6'>
            <p className='xs:text-[20px] text-[16px] font-semibold dark:text-title-color-dark text-title-color'>Support</p>
            </div>
            <div>
            <p className='text-[15px] xs:text-[16px] font-normal mb-2 dark:text-text-color-dark text-text-color'>FAQs</p>
            </div>
            <div>
            <p className='text-[15px] xs:text-[16px] font-normal mb-2 dark:text-text-color-dark text-text-color'>Support center</p>
            </div>
            <div>
            <p className='text-[15px] xs:text-[16px] font-normal mb-2 dark:text-text-color-dark text-text-color'>Contact Us</p>
            </div>
          </div> */}
          
          {/* <div>
            <div className='mb-6'>
              <p className='xs:text-[20px] text-[16px] font-semibold dark:text-title-color-dark text-title-color'>Available On</p>
            </div>
            <div>
              <Image src={GooglePlay} alt='GooglePlay' className='w-[100px] h-[30px] mb-2'/>
            </div>
            <div>
            <Image src={AppleApp} alt='AppleApp' className='w-[100px] h-[35px]' />
            </div>
          </div> */}
        </div>

        <div className='flex lg:flex-row justify-center xs:flex-col lg:invisible visible'>
          <div className='absolute xs:ml-[90px] xs:mt-[-80px] ml-[180px] mt-[150px]'>
            <Image src={FooterGreenBulb} alt='GreenBulb' className='w-[120px] h-[132px]'/>
          </div>
          <div className='absolute xs:ml-[165px] xs:mt-[500px] ml-[400px] mt-[450px]'>
            <Image src={FooterRedBulb} alt='RedBulb' className='min-w-[120px] h-[142px]'/>
          </div>
        </div>

      </div>
      
      <div className='flex flex-col justify-center items-center'>
        <div className="mb-4 flex space-x-2">
          <a target="_blank" rel="noreferrer" href="https://x.com/btcgiftshop_xyz">
            <span className="sr-only">Twitter</span>
            <Icons.twitter />
          </a>
          {/* <a target="_blank" rel="noreferrer" href="https://t.me/bigiverse">
            <span className="sr-only">Telegram</span>
            <Icons.telegram />
          </a> */}
          {/* <a target="_blank" rel="noreferrer" href="https://www.github.com/btcgiftshop">
            <span className="sr-only">GitHub</span>
            <Icons.gitHub className="h-5 w-5" />
          </a> */}
        </div>
        <div className="flex space-x-2 text-sm md:text-md text-gray-500 dark:text-gray-400">
            <div>{`btcgiftshop.xyz • `}</div>
            <div>{`© ${new Date().getFullYear()}`}</div>
          </div>
          {/* <p className='text-text-color text-center text-[13px] xs:text-[14px] xs:w-[145px] w-[135px] dark:text-text-color-dark'>Unique Gifts on Bitcoin Universe</p> */}
        </div>

        <div className='flex lg:flex-row justify-center mb-6 xs:flex-col lg:visible invisible'>
          <div className='absolute lg:mr-[820px] lg:mt-[-100px]'>
            <Image src={FooterGreenBulb} alt='GreenBulb' className='w-[120px] h-[132px]'/>
          </div>
          <div className='absolute lg:ml-[1050px] lg:mt-[-150px]'>
            <Image src={FooterRedBulb} alt='RedBulb' className='min-w-[120px] h-[142px]'/>
          </div>
      </div>

      
    </footer>
  )
}

export default Footer