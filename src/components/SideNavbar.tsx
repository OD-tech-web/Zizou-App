'use client'

import Link from "next/link"
import React from "react";
import { BiHomeHeart } from 'react-icons/bi'
import { MdOutlineExplore } from 'react-icons/md'
import { LuUsers } from "react-icons/lu";
import { MdOutlineNotificationsActive } from 'react-icons/md'
import { TbMessage2Heart } from 'react-icons/tb'
import { usePathname } from "next/navigation";

export default function SideNavbar() {
  const pathname = usePathname()

  return (
    <nav className="bg-green-500 text-white text-xl fixed right-0 top-20 z-30 flex flex-col rounded-l-lg md:hidden">
      <Link href='/' className={`${pathname === '/' ? 'bg-green-400 text-white border-l-4 border-white border-solid dark:border-[#070707] dark:text-[#070707]' : ''} dark:text-[#070707] py-4 pr-4 pl-7 rounded-tl-lg`}><BiHomeHeart /></Link>
      <Link href='/explore' className={`${pathname === '/explore' ? 'bg-green-400 text-white border-l-4 border-white border-solid dark:border-[#070707] dark:text-[#070707]' : ''} dark:text-[#070707] py-4 pr-4 pl-7`}><MdOutlineExplore /></Link>
      <Link href='/group' className={`${pathname === '/group' ? 'bg-green-400 text-white border-l-4 border-white border-solid dark:border-[#070707] dark:text-[#070707]' : ''} dark:text-[#070707] py-4 pr-4 pl-7`}><LuUsers /></Link>
      <Link href='/notification' className={`${pathname === '/notification' ? 'bg-green-400 text-white border-l-4 border-white border-solid dark:border-[#070707] dark:text-[#070707]' : ''} dark:text-[#070707] py-4 pr-4 pl-7`}><MdOutlineNotificationsActive /></Link>
      <Link href='/message' className={`${pathname === '/message' ? 'bg-green-400 text-white border-l-4 border-white border-solid dark:border-[#070707] dark:text-[#070707]' : ''} dark:text-[#070707] py-4 pr-4 pl-7 rounded-bl-lg`}><TbMessage2Heart /></Link>
    </nav>
  )
}