"use client"
import React , {useState , useEffect} from 'react'
import { BiMoon } from 'react-icons/bi';
import { FiSun } from 'react-icons/fi'
import { useTheme } from 'next-themes'
import { BsGrid } from 'react-icons/bs'
import { IoClose } from 'react-icons/io5'
import {LogoPng,Bulb} from '@/public/images/index'
import Image from 'next/image';
import {  Link as Scroll } from 'react-scroll';
import Link from "next/link";

const Navbar = () => {

  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const [open , setOpen] = useState(false)

  const Links = [
    // {name : 'Home' , to : 'home'},
    // {name : 'About' , to : 'celebrate'},
    // {name : 'Gifting' , to : 'gifts'},
    // {name : 'New' , to : 'new'},
  ]

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className='md:fixed w-full top-0 left-0 dark:bg-body-color-dark bg-body-color'>
      <div className='h-[30px] my-5'>
        <div className={`flex justify-between lg:mx-24 ${open ? 'mx-0' : 'mx-8'}`}>
          <Link href="/" className='flex'>
            <Image src={LogoPng} alt='Logo' className='w-[34px] h-[34px] rounded-sm me-2'/>
            <p className='md:text-[20px] text-[20px] font-normal text-title-color dark:text-title-color-dark mt-1'>BTCGiftShop</p>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar