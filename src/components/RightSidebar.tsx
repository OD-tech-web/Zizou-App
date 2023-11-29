import { FaSearch } from "react-icons/fa";
import { FaCertificate } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import Image from "next/image";

export default function RightSidebar() {
    return (
        <div
            className="hidden lg:block lg:h-screen fixed top-0 right-0 lg:w-[25%] w-full pt-20 lg:px-4 xl:px-8 bg-white dark:bg-[#3B3B3B] overflow-y-auto">
            <div>
                <div className="searchbar">
                    <form>
                        <div className="relative flex items-center text-gray-400 focus-within:text-gray-700">
                            <FaSearch className="absolute ml-3 pointer-events-none" />
                            <input type="text" name="search" placeholder="Search..." autoComplete="off" aria-label="Search..."
                                className="w-full pr-3 pl-10 py-2 font-semibold text-black rounded-full outline-green-500 bg-slate-200 dark:bg-[#070707]" />
                        </div>
                    </form>
                </div>
            </div>

            <div className="message mt-2">
                <div className="flex justify-between items-center text-green-500 pr-2">
                    <div className="font-bold pl-2">Message</div>
                    <div className="text-xs">3 unread messages</div>
                </div>
                <div className="bg-slate-200 dark:bg-[#070707] rounded-2xl mt-1">
                    <div className="flex gap-2 items-center p-2">
                        <div>
                            <div className="w-10 h-10 rounded-full overflow-hidden">
                                <Image
                                    src="/img/ruger-profile.jpeg"
                                    alt="profile-pics"
                                    width={100}
                                    height={100}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                        <div className="flex justify-between w-full items-center pb-1 border-b border-gray-400 border-solid dark:border-gray-500">
                            <div>
                                <div className="flex gap-1 items-center">
                                    <div className="text-xs font-bold text-black dark:text-white">Ruger</div>
                                    <span className="relative w-fit"><FaCertificate className="fa fa-certificate text-green-500 text-sm" />
                                        <FaCheck className="fa fa-check absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[6px] font-extrabold text-white dark:text-[#070707]" />
                                    </span>
                                </div>
                                <div className="text-[10px] text-gray-500 dark:text-gray-400">Can we link up?</div>
                            </div>
                            <div className="text-xs text-black dark:text-white">52 mins</div>
                        </div>
                    </div>

                    <div className="flex gap-2 items-center px-2 pb-2">
                        <div className="relative">
                            <div className="w-10 h-10 rounded-full overflow-hidden">
                                <Image
                                    src="/img/fireboy-profile.jpeg"
                                    alt="profile-pics"
                                    width={100}
                                    height={100}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div
                                className="w-2 h-2 rounded-full absolute bottom-0 right-0 bg-blue-500 box-content border-2 border-solid border-gray-200 dark:border-[#070707]">
                            </div>
                        </div>
                        <div className="flex justify-between w-full items-center pb-1 border-b border-gray-400 border-solid dark:border-gray-500">
                            <div>
                                <div className="flex gap-1 items-center">
                                    <div className="text-xs font-bold text-black dark:text-white">Fireboy</div>
                                    <span className="relative w-fit"><FaCertificate className="fa fa-certificate text-green-500 text-sm" />
                                        <FaCheck className="fa fa-check absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[6px] font-extrabold text-white dark:text-[#070707]" />
                                    </span>
                                </div>
                                <div className="text-[10px] text-gray-500 dark:text-gray-400">See you at the party</div>
                            </div>
                            <div className="text-xs text-black dark:text-white">12:07pm</div>
                        </div>
                    </div>

                    <div className="flex gap-2 items-center px-2 pb-2">
                        <div className="relative">
                            <div className="w-10 h-10 rounded-full overflow-hidden">
                                <Image
                                    src="/img/mayorkun-profile.jpeg"
                                    alt="profile-pics"
                                    width={100}
                                    height={100}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div
                                className="w-2 h-2 rounded-full absolute bottom-0 right-0 bg-blue-500 box-content border-2 border-solid border-gray-200 dark:border-[#070707]">
                            </div>
                        </div>
                        <div className="flex justify-between w-full items-center pb-1 border-b border-gray-400 border-solid dark:border-gray-500">
                            <div>
                                <div className="flex gap-1 items-center">
                                    <div className="text-xs font-bold text-black dark:text-white">Mayorkun</div>
                                    <span className="relative w-fit"><FaCertificate className="fa fa-certificate text-green-500 text-sm" />
                                        <FaCheck className="fa fa-check absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[6px] font-extrabold text-white dark:text-[#070707]" />
                                    </span>
                                </div>
                                <div className="text-[10px] text-gray-500 dark:text-gray-400">Please follow me</div>
                            </div>
                            <div className="text-xs text-black dark:text-white">10:29am</div>
                        </div>
                    </div>

                    <div className="flex gap-2 items-center px-2 pb-2">
                        <div>
                            <div className="w-10 h-10 rounded-full overflow-hidden">
                                <Image
                                    src="/img/omahlay-profile.jpeg"
                                    alt="profile-pics"
                                    width={100}
                                    height={100}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                        <div className="flex justify-between w-full items-center pb-1 border-b border-gray-400 border-solid dark:border-gray-500">
                            <div>
                                <div className="flex gap-1 items-center">
                                    <div className="text-xs font-bold text-black dark:text-white">Omah_lay</div>
                                    <span className="relative w-fit"><FaCertificate className="fa fa-certificate text-green-500 text-sm" />
                                        <FaCheck className="fa fa-check absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[6px] font-extrabold text-white dark:text-[#070707]" />
                                    </span>
                                </div>
                                <div className="text-[10px] text-gray-500 dark:text-gray-400">How are you doing?</div>
                            </div>
                            <div className="text-xs text-black dark:text-white">8:41am</div>
                        </div>
                    </div>

                    <div className="flex gap-2 items-center px-2 pb-2">
                        <div className="relative">
                            <div className="w-10 h-10 rounded-full overflow-hidden">
                                <Image
                                    src="/img/joeboy-profile.jpeg"
                                    alt="profile-pics"
                                    width={100}
                                    height={100}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div
                                className="w-2 h-2 rounded-full absolute bottom-0 right-0 bg-blue-500 box-content border-2 border-solid border-gray-200 dark:border-[#070707]">
                            </div>
                        </div>
                        <div className="flex justify-between w-full items-center pb-1 border-b border-gray-400 border-solid dark:border-gray-500">
                            <div>
                                <div className="flex gap-1 items-center">
                                    <div className="text-xs font-bold text-black dark:text-white">Joeboy</div>
                                    <span className="relative w-fit"><FaCertificate className="fa fa-certificate text-green-500 text-sm" />
                                        <FaCheck className="fa fa-check absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[6px] font-extrabold text-white dark:text-[#070707]" />
                                    </span>
                                </div>
                                <div className="text-[10px] text-gray-500 dark:text-gray-400">Good morning</div>
                            </div>
                            <div className="text-xs text-black dark:text-white">7:34am</div>
                        </div>
                    </div>

                    <div className="flex gap-2 items-center px-2 pb-2">
                        <div>
                            <div className="w-10 h-10 rounded-full overflow-hidden">
                                <Image
                                    src="/img/lasmid-profile.jpeg"
                                    alt="profile-pics"
                                    width={100}
                                    height={100}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                        <div className="flex justify-between w-full items-center pb-1">
                            <div>
                                <div className="text-xs font-bold text-black dark:text-white">Lasmid</div>
                                <div className="text-[10px] text-gray-500 dark:text-gray-400">Please can you jump on the remix of my song &apos;Bad boy&apos;?</div>
                            </div>
                            <div className="text-xs text-black dark:text-white">Yesterday</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-4 pb-2">
                <div className="font-bold pl-2 text-green-500 pr-2">People</div>

                <div className="bg-slate-200 dark:bg-[#070707] rounded-2xl mt-2">
                    <div className="flex gap-2 items-center p-2">
                        <div className="flex items-center justify-center">
                            <div className="w-9 h-9 rounded-full overflow-hidden">
                                <Image
                                    src="/img/joeboy-profile.jpeg"
                                    alt="profile-pics"
                                    width={100}
                                    height={100}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                        <div className="flex justify-between w-full items-center pb-1 text-gray-700">
                            <div>
                                <div className="flex gap-1 items-center">
                                    <div className="text-xs font-bold text-black dark:text-white">Joeboy</div>
                                    <span className="relative w-fit"><FaCertificate className="fa fa-certificate text-green-500 text-sm" />
                                        <FaCheck className="fa fa-check absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[6px] font-extrabold text-white dark:text-[#070707]" />
                                    </span>
                                </div>
                            </div>
                            <div className="text-[11px] py-1 px-2 rounded-md bg-green-500 text-white dark:text-[#070707]">Follow</div>
                        </div>
                    </div>
                </div>
                <div className="bg-slate-200 dark:bg-[#070707] rounded-2xl mt-2">
                    <div className="flex gap-2 items-center p-2">
                        <div className="flex items-center justify-center">
                            <div className="w-9 h-9 rounded-full overflow-hidden">
                                <Image
                                    src="/img/runda-profile.jpeg"
                                    alt="profile-pics"
                                    width={100}
                                    height={100}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                        <div className="flex justify-between w-full items-center pb-1 text-gray-700">
                            <div>
                                <div className="text-xs font-bold text-black dark:text-white">Runda</div>
                            </div>
                            <div className="text-[11px] py-1 px-2 rounded-md bg-green-500 text-white dark:text-[#070707]">Follow</div>
                        </div>
                    </div>
                </div>
                <div className="bg-slate-200 dark:bg-[#070707] rounded-2xl mt-2">
                    <div className="flex gap-2 items-center p-2">
                        <div className="flex items-center justify-center">
                            <div className="w-9 h-9 rounded-full overflow-hidden">
                                <Image
                                    src="/img/mayorkun-profile.jpeg"
                                    alt="profile-pics"
                                    width={100}
                                    height={100}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                        <div className="flex justify-between w-full items-center pb-1 text-gray-700">
                            <div>
                                <div className="flex gap-1 items-center">
                                    <div className="text-xs font-bold text-black dark:text-white">Mayorkun</div>
                                    <span className="relative w-fit"><FaCertificate className="fa fa-certificate text-green-500 text-sm" />
                                        <FaCheck className="fa fa-check absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[6px] font-extrabold text-white dark:text-[#070707]" />
                                    </span>
                                </div>
                            </div>
                            <div className="text-[11px] py-1 px-2 rounded-md bg-green-500 text-white dark:text-[#070707]">Follow</div>
                        </div>
                    </div>
                </div>
                <div className="bg-slate-200 dark:bg-[#070707] rounded-2xl mt-2">
                    <div className="flex gap-2 items-center p-2">
                        <div className="flex items-center justify-center">
                            <div className="w-9 h-9 rounded-full overflow-hidden">
                                <Image
                                    src="/img/lasmid-profile.jpeg"
                                    alt="profile-pics"
                                    width={100}
                                    height={100}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                        <div className="flex justify-between w-full items-center pb-1 text-gray-700">
                            <div>
                                <div className="text-xs font-bold text-black dark:text-white">Lasmid</div>
                            </div>
                            <div className="text-[11px] py-1 px-2 rounded-md bg-green-500 text-white dark:text-[#070707]">Follow</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
