'use client'

import Link from "next/link"
import { BiHomeHeart } from 'react-icons/bi'
import { MdOutlineExplore } from 'react-icons/md'
import { LuUsers } from "react-icons/lu";
import { MdOutlineNotificationsActive } from 'react-icons/md'
import { TbMessage2Heart } from 'react-icons/tb'
import { FaRegBookmark } from "react-icons/fa";
import { LuSettings } from "react-icons/lu";
import { FaRegMoon } from "react-icons/fa";
import { FaCertificate } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import { FaEllipsisH } from "react-icons/fa";
import { LuSun } from "react-icons/lu";
import Image from "next/image";
import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';
import { usePathname } from "next/navigation";

export default function LeftSidebar() {
    const pathname = usePathname()
    const { resolvedTheme, theme, setTheme } = useTheme();
    const [mounted, SetMounted] = useState(false)

    useEffect(() => {
        SetMounted(true)
    }, [])

    if (!mounted) {
        return null
    }

    return (
        <div className="hidden md:block md:h-screen md:w-1/3 lg:w-[25%] px-8 bg-white dark:bg-[#3B3B3B] fixed z-30 overflow-y-auto">
            <div className="relative h-full">
                <div className="w-full pt-20 overflow-y-auto">
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
                            <FaCheck className="fa fa-check absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[6px] font-extrabold text-white dark:text-[#3B3B3B]" />
                        </span>
                    </div>

                    <div className="flex items-center gap-3 text-[10px] text-gray-400 dark:text-gray-300 pb-3 border-b border-gray-400 border-solid dark:border-gray-500">
                        <div><span className="font-bold text-black dark:text-white">1,212</span> Following</div>
                        <div><span className="font-bold text-black dark:text-white">4.1M</span> Followers</div>
                    </div>

                    <div className="mt-5 text-black dark:text-white text-xl pl-3">
                        <div>
                            <div>
                                <Link href="/">
                                    <div className={`${pathname === '/' ? 'bg-green-500 text-white rounded-full pl-2 dark:text-[#3B3B3B]' : ''} flex gap-2 items-center hover:bg-gray-200 dark:hover:bg-gray-500 hover:rounded-full hover:pl-2 w-fit pr-3`}>
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
                                <Link href="/explore">
                                    <div className={`${pathname === '/explore' ? 'bg-green-500 text-white rounded-full pl-2 dark:text-[#3B3B3B]' : ''} flex gap-2 items-center hover:bg-gray-200 dark:hover:bg-gray-500 hover:rounded-full hover:pl-2 w-fit pr-3`}>
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
                                <Link href="/group">
                                    <div className={`${pathname === '/group' ? 'bg-green-500 text-white rounded-full pl-2 dark:text-[#3B3B3B]' : ''} flex gap-2 items-center hover:bg-gray-200 dark:hover:bg-gray-500 hover:rounded-full hover:pl-2 w-fit pr-3`}>
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
                                <Link href="/notification">
                                    <div className={`${pathname === '/notification' ? 'bg-green-500 text-white rounded-full pl-2 dark:text-[#3B3B3B]' : ''} flex gap-2 items-center hover:bg-gray-200 dark:hover:bg-gray-500 hover:rounded-full hover:pl-2 w-fit pr-3`}>
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
                                <Link href="/message">
                                    <div className={`${pathname === '/message' ? 'bg-green-500 text-white rounded-full pl-2 dark:text-[#3B3B3B]' : ''} flex gap-2 items-center hover:bg-gray-200 dark:hover:bg-gray-500 hover:rounded-full hover:pl-2 w-fit pr-3`}>
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
                                <Link href="/bookmark">
                                    <div className={`${pathname === '/bookmark' ? 'bg-green-500 text-white rounded-full pl-2 dark:text-[#3B3B3B]' : ''} flex gap-2 items-center hover:bg-gray-200 dark:hover:bg-gray-500 hover:rounded-full hover:pl-2 w-fit pr-3`}>
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
                                <Link href="/setting">
                                    <div className={`${pathname === '/setting' ? 'bg-green-500 text-white rounded-full pl-2 dark:text-[#3B3B3B]' : ''} flex gap-2 items-center hover:bg-gray-200 dark:hover:bg-gray-500 hover:rounded-full hover:pl-2 w-fit pr-3`}>
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
                <div className="w-full sticky bottom-0 bg-white dark:bg-[#3B3B3B] lg:fixed lg:w-fit">
                    <div className="h-full flex items-end">
                        <div className="py-2">
                            <div className='flex items-center text-black dark:text-white'>
                                <button onClick={() => { setTheme(resolvedTheme === 'light' ? 'dark' : 'light') }} type="button" className="rounded-md p-2 hover:bg-slate-200 dark:hover:bg-[#070707]">
                                    {theme === 'light' ? <FaRegMoon /> : <LuSun />}
                                </button>
                                <span className="text-xs ml-4">Designed by OD-tech &copy;</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}