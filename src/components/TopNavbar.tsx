"use client"

import React, { useRef } from 'react';
import Link from 'next/link';
import { MdOutlineNotificationsActive } from 'react-icons/md'
import { TbMessage2Heart } from 'react-icons/tb'
import { FaChevronRight } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { FaSearch } from "react-icons/fa";
import { BiHomeHeart } from 'react-icons/bi'
import { MdOutlineExplore } from 'react-icons/md'
import { LuUsers } from "react-icons/lu";
import { FaRegBookmark } from "react-icons/fa";
import { LuSettings } from "react-icons/lu";
import { FaRegMoon } from "react-icons/fa";
import { FaCertificate } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import { FaEllipsisH } from "react-icons/fa";
import { LuSun } from "react-icons/lu";
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { usePathname } from "next/navigation";


const Home: React.FC = () => {
  const pathname = usePathname()
  const toggleRef = useRef<HTMLDivElement>(null);
  const { resolvedTheme, theme, setTheme } = useTheme();
  const [mounted, SetMounted] = useState(false)

  useEffect(() => {
    SetMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const handleParentHideClick = () => {
    if (toggleRef.current) {
      toggleRef.current.style.left = '-767px';
    }
  };

  const handleChildHideClick = () => {
    if (toggleRef.current) {
      toggleRef.current.style.left = '-767px';
    }
  };

  const handleShowClick = () => {
    if (toggleRef.current) {
      toggleRef.current.style.left = '0';
    }
  };

  return (
    <div>
      <nav
        className="bg-white dark:bg-[#070707] py-3 px-4 flex justify-between lg:px-8 fixed top-0 w-full z-40 border-b border-gray-400 border-solid dark:border-gray-500">
        <div className="nav-left flex items-center">
          <div className="flex text-2xl font-agbalumo">
            <div className="text-green-500">Zi</div>
            <div className="text-black dark:text-white">zou</div>
          </div>
          <div className="md:hidden">
            <FaChevronRight className="text-black ml-1 text-[10px] mt-2 cursor-pointer dark:text-white" onClick={handleShowClick} />
          </div>
        </div>
        <div className="nav-center hidden md:block">
          <div className="searchbar">
            <form className="w-80">
              <div className="relative flex items-center text-gray-400 focus-within:text-gray-700">
                <FaSearch className="absolute ml-3 pointer-events-none" />
                <input type="text" name="search" placeholder="Search..." autoComplete="off" aria-label="Search..."
                  className="w-full pr-3 pl-10 py-2 font-semibold text-black rounded-full dark:bg-[#3B3B3B] outline-green-500 bg-slate-200" />
              </div>
            </form>
          </div>
        </div>
        <div className="nav-right">
          <div className="flex items-center">
            <div className="hidden lg:block text-black dark:text-white">
              <div className="flex gap-3 items-center">
                <Link href='/notification' className={`${pathname === '/notification' ? 'text-green-500' : ''}`}><MdOutlineNotificationsActive /></Link>
                <Link href='/message' className={`${pathname === '/message' ? 'text-green-500' : ''}`}><TbMessage2Heart /></Link>
              </div>
            </div>
            <Link href='/dashboard'>
              <div
                className="flex items-center md:pl-2 ml-2 cursor-pointer w-fit hover:bg-gray-400 dark:hover:bg-[#3B3B3B] hover:bg-opacity-20 hover:rounded-full md:active:bg-gray-400 md:active:bg-opacity-20 md:active:rounded-full">
                <h1 className="text-gray-400 font-semibold hidden md:block dark:text-white">OD-tech</h1>
                <div className="flex items-center justify-center md:ml-1">
                  <div className="w-8 h-8 rounded-full overflow-hidden">
                    <Image
                      src="/img/star-profile.jpeg"
                      alt="profile-pics"
                      width={100}
                      height={100}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </Link>
            <div className="ml-2 lg:ml-3 cursor-pointer w-fit hidden md:block">
              <div className="w-7 h-7 rounded-full bg-red-500 text-white grid place-content-center">
                <FiLogOut />
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div ref={toggleRef} id="cheese" className='w-screen h-screen fixed top-0 md:hidden left-[-767px] z-[80] transition-all duration-300 ease-in-out'>
        <aside className="w-screen h-screen bg-black bg-opacity-90 dark:bg-opacity-80 transition-all duration-300 ease-in-out" id="sidebar" onClick={handleParentHideClick}>
          <div className="h-screen w-[80%] px-8 pt-4 bg-white dark:bg-[#070707] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className='w-full h-full relative'>
              <div className="w-full overflow-y-auto">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full overflow-hidden">
                      <Image
                        src="/img/star-profile.jpeg"
                        alt="profile-pics"
                        width={100}
                        height={100}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div><FaEllipsisH className="text-black dark:text-white" /></div>
                </div>

                <div className="flex gap-1 items-center">
                  <div className="text-sm text-green-500 font-bold mb-1">Ayra Star</div>
                  <span className="relative w-fit"><FaCertificate className="fa fa-certificate text-green-500 text-sm" />
                    <FaCheck className="fa fa-check absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[6px] font-extrabold text-white dark:text-[#070707]" />
                  </span>
                </div>

                <div className="flex items-center gap-3 text-[10px] text-gray-400 dark:text-gray-300 pb-3 border-b border-gray-400 dark:border-gray-500 border-solid">
                  <div><span className="font-bold text-black dark:text-white">1,212</span> Following</div>
                  <div><span className="font-bold text-black dark:text-white">4.1M</span> Followers</div>
                </div>

                <div className="mt-5 text-black dark:text-white text-xl pl-3">
                  <div>
                    <div>
                      <Link href="/" onClick={handleChildHideClick}>
                        <div className={`${pathname === '/' ? 'bg-green-500 text-white rounded-full pl-2 dark:text-[#070707]' : ''} flex gap-2 items-center w-fit pr-3`}>
                          <div className="w-9 h-9 flex items-center">
                            <BiHomeHeart className="mr-2" />
                          </div>
                          <div>
                            <span className="font-bold">Home</span>
                          </div>
                        </div>
                      </Link>
                    </div>


                    <div className="mt-2">
                      <Link href="/explore" onClick={handleChildHideClick}>
                        <div className={`${pathname === '/explore' ? 'bg-green-500 text-white rounded-full pl-2 dark:text-[#070707]' : ''} flex gap-2 items-center w-fit pr-3`}>
                          <div className="w-9 h-9 flex items-center">
                            <MdOutlineExplore className="mr-2" />
                          </div>
                          <div>
                            <span className="font-bold">Explore</span>
                          </div>
                        </div>
                      </Link>
                    </div>

                    <div className="mt-2">
                      <Link href="/group" onClick={handleChildHideClick}>
                        <div className={`${pathname === '/group' ? 'bg-green-500 text-white rounded-full pl-2 dark:text-[#070707]' : ''} flex gap-2 items-center w-fit pr-3`}>
                          <div className="w-9 h-9 flex items-center">
                            <LuUsers className="mr-2" />
                          </div>
                          <div>
                            <span className="font-bold">Groups</span>
                          </div>
                        </div>
                      </Link>
                    </div>

                    <div className="mt-2">
                      <Link href="/notification" onClick={handleChildHideClick}>
                        <div className={`${pathname === '/notification' ? 'bg-green-500 text-white rounded-full pl-2 dark:text-[#070707]' : ''} flex gap-2 items-center w-fit pr-3`}>
                          <div className="w-9 h-9 flex items-center">
                            <MdOutlineNotificationsActive className="mr-2" />
                          </div>
                          <div>
                            <span className="font-bold">Notification</span>
                          </div>
                        </div>
                      </Link>
                    </div>

                    <div className="mt-2">
                      <Link href="/message" onClick={handleChildHideClick}>
                        <div className={`${pathname === '/message' ? 'bg-green-500 text-white rounded-full pl-2 dark:text-[#070707]' : ''} flex gap-2 items-center w-fit pr-3`}>
                          <div className="w-9 h-9 flex items-center">
                            <TbMessage2Heart className="mr-2" />
                          </div>
                          <div>
                            <span className="font-bold">Message</span>
                          </div>
                        </div>
                      </Link>
                    </div>

                    <div className="mt-2">
                      <Link href="/bookmark" onClick={handleChildHideClick}>
                        <div className={`${pathname === '/bookmark' ? 'bg-green-500 text-white rounded-full pl-2 dark:text-[#070707]' : ''} flex gap-2 items-center w-fit pr-3`}>
                          <div className="w-9 h-9 flex items-center">
                            <FaRegBookmark className="mr-2" />
                          </div>
                          <div>
                            <span className="font-bold">Bookmark</span>
                          </div>
                        </div>
                      </Link>
                    </div>

                    <div className="mt-2">
                      <Link href="/setting" onClick={handleChildHideClick}>
                        <div className={`${pathname === '/setting' ? 'bg-green-500 text-white rounded-full pl-2 dark:text-[#070707]' : ''} flex gap-2 items-center w-fit pr-3`}>
                          <div className="w-9 h-9 flex items-center">
                            <LuSettings className="mr-2" />
                          </div>
                          <div>
                            <span className="font-bold">Setting</span>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="theme-toggle bg-white dark:bg-[#070707]">
                <div className="h-full flex items-end">
                  <div className="py-2 w-full">
                    <div className='flex items-center text-black dark:text-white'>
                      <button onClick={() => { setTheme(resolvedTheme === 'light' ? 'dark' : 'light') }} type="button" className="rounded-md p-2 hover:bg-slate-200 dark:hover:bg-[#3B3B3B]">
                        {theme === 'light' ? <FaRegMoon /> : <LuSun />}
                      </button>
                      <span className="text-xs ml-4">Designed by OD-tech &copy;</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Home;