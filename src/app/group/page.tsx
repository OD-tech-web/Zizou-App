import { FaSearch } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Group',
    description: 'Generated by create next app',
}

export default function Group() {
  return (
    <div className="flex items-center">

      <div className="hidden md:block md:w-1/3 md:h-screen lg:w-[25%]"></div>

      <div className="mt-[58px] md:mt-[68px] py-2 w-full md:w-2/3 lg:w-[50%]">
        <div className="px-2">
          <div className="text-green-500 font-bold pl-2 w-fit mx-auto">Groups</div>

          <div className="searchbar mt-2 md:px-16">
            <form>
              <div className="relative flex items-center text-gray-400 focus-within:text-gray-700">
                <FaSearch className="absolute ml-3 pointer-events-none" />
                <input type="text" name="search" placeholder="Search..." autoComplete="off" aria-label="Search..."
                  className="w-full pr-3 pl-10 py-2 font-semibold text-black rounded-full outline-green-500" />
              </div>
            </form>
          </div>
        </div>

        <div className="pb-4 border-b border-gray-400 border-solid dark:border-gray-500">
          <div className="pl-3 md:pl-6">
            <div className="text-green-500 font-bold pl-2 py-2">For You</div>
            <div className="overflow-x-auto scrollbar">
              <div className="flex w-fit gap-3">
                <div className="w-36 h-28 rounded-lg bg-[url('/img/ManU.jpeg')] bg-cover pt-2 px-2">
                  <div className="text-sm font-bold text-white">Man Utd</div>
                </div>
                <div className="w-36 h-28 rounded-lg bg-[url('/img/Hackathon.jpeg')] bg-cover pt-2 px-2">
                  <div className="text-sm font-bold text-white">Hackathon</div>
                </div>
                <div className="w-36 h-28 rounded-lg bg-[url('/img/Afrobeat.jpeg')] bg-cover pt-2 px-2">
                  <div className="text-sm font-bold text-white">Afrobeat</div>
                </div>
                <div className="w-36 h-28 rounded-lg bg-[url('/img/Pl.png')] bg-cover pt-2 px-2">
                  <div className="text-sm font-bold text-white">EPL</div>
                </div>
                <div className="w-36 h-28 rounded-lg bg-[url('/img/Love.jpeg')] bg-cover pt-2 px-2">
                  <div className="text-sm font-bold text-white">love Quotes</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pb-4 border-b border-gray-400 border-solid dark:border-gray-500">
          <div className="pl-3 md:pl-6">
            <div className="text-green-500 font-bold pl-2 py-2">Entertainment</div>
            <div className="overflow-x-auto scrollbar">
              <div className="flex w-fit gap-3">
                <div className="w-36 h-28 rounded-lg bg-[url('/img/Bbnaija.jpeg')] bg-cover pt-2 px-2">
                  <div className="text-sm font-bold text-white">BBNaija</div>
                </div>
                <div className="w-36 h-28 rounded-lg bg-[url('/img/Headies.jpeg')] bg-cover pt-2 px-2">
                  <div className="text-sm font-bold text-white">The Headies</div>
                </div>
                <div className="w-36 h-28 rounded-lg bg-[url('/img/Soccer.jpeg')] bg-cover pt-2 px-2">
                  <div className="text-sm font-bold text-white">Soccer</div>
                </div>
                <div className="w-36 h-28 rounded-lg bg-[url('/img/Influencers.png')] bg-cover pt-2 px-2">
                  <div className="text-sm font-bold text-white">Influencers</div>
                </div>
                <div className="w-36 h-28 rounded-lg bg-[url('/img/Betting.jpeg')] bg-cover pt-2 px-2">
                  <div className="text-sm font-bold text-white">Betting</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pb-4 border-b border-gray-400 border-solid dark:border-gray-500">
          <div className="pl-3 md:pl-6">
            <div className="text-green-500 font-bold pl-2 py-2">Fashion</div>
            <div className="overflow-x-auto scrollbar">
              <div className="flex w-fit gap-3">
                <div className="w-36 h-28 rounded-lg bg-[url('/img/Nike.png')] bg-cover pt-2 px-2">
                  <div className="text-sm font-bold text-white">Nike</div>
                </div>
                <div className="w-36 h-28 rounded-lg bg-[url('/img/Lv.jpeg')] bg-cover pt-2 px-2">
                  <div className="text-sm font-bold text-white">LV</div>
                </div>
                <div className="w-36 h-28 rounded-lg bg-[url('/img/Hermes.jpeg')] bg-cover pt-2 px-2">
                  <div className="text-sm font-bold text-white">Hermes</div>
                </div>
                <div className="w-36 h-28 rounded-lg bg-[url('/img/Gucci.jpeg')] bg-cover pt-2 px-2">
                  <div className="text-sm font-bold text-white">Gucci</div>
                </div>
                <div className="w-36 h-28 rounded-lg bg-[url('/img/Addidas.jpeg')] bg-cover pt-2 px-2">
                  <div className="text-sm font-bold text-white">Addidas</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="h-11 w-11 bg-green-500 rounded-full grid place-content-center fixed md:hidden bottom-7 left-6 text-white dark:text-[#070707]"><FaPlus /></div>
        <div className="h-11 w-11 bg-green-500 rounded-full hidden md:block md:sticky md:bottom-10 md:ml-20 text-white dark:text-[#070707]"><div className="w-full h-full grid place-content-center"><FaPlus /></div></div>
      </div>

      <div className="hidden lg:block lg:w-[25%] lg:h-screen"></div>
    </div>
  )
}
