import Image from "next/image";
import React from "react";
import { FcMenu } from "react-icons/fc"
import { AiOutlineSearch } from "react-icons/ai"
import { MdRefresh } from "react-icons/md"
import { TfiViewList } from "react-icons/tfi"
import { LuSettings } from "react-icons/lu"
import { IoApps } from "react-icons/io5"

function Header() {
  return (
    <header className=" ">
      <div className=" py-2 border-b-[1px] border-slate flex flex-row  items-center ">
        
        {/* First Part of icon and Logo */}
        <div className="flex flex-row  items-center pr-8 w-64">
          <div className="px-4 ml-4 p-4 rounded-full  transition-all delay-150 hover:bg-menu_bg">
            <FcMenu size={18} className=" text-keeper "/>
          </div>
          <div className=" flex flex-row  items-center">
          <Image alt="Image" src={`https://www.gstatic.com/images/branding/product/2x/keep_2020q4_48dp.png`} width={40} height={40}/>
          <h1  className=" text-xl font-keeper text-keeper pl-1">Keep</h1>
          </div>
        </div>

        {/* Search bar and other buttons */}

        <div className="flex flex-row items-center">
          <div></div>
          <div className="py-3 md:bg-search_bar rounded-lg lg:w-[50vw]">
            <form action="get" method="get" className="flex flex-row ">
              {/* For search Icon */}
              <div className=" text-keeper px-3">
                <button className=" pointer-events-none">
                <AiOutlineSearch size={23} />
                </button>
              </div>
              <div className="hidden md:block w-full">
                <input type="text" placeholder="Search" width={20} className="bg-search_bar w-full border-0 active:border-0 focus:outline-none" />
              </div>
            </form>
              <div className="hidden md:w-[20px] h-full"></div>
          </div>

          {/* Other Buttons */}
          <div className="flex flex-row items-centerb pl-2">
            <div className="mx-1 w-12 h-12 flex flex-col justify-center items-center ml-3 transform rotate-12 rounded-full p-2 text-keeper hover:bg-menu_bg hover:text-black">
            <MdRefresh size={22} color="keeper" className=" "/>
            </div>
            <div className="mx-1 w-12 h-12 flex flex-col justify-center items-center rounded-full p-2 text-keeper hover:bg-menu_bg hover:text-black">
              <TfiViewList size={20} color="keeper" className=" " />
            </div>
            <div className="mx-1 w-12 h-12 flex flex-col justify-center items-center rounded-full p-2 text-keeper hover:bg-menu_bg hover:text-black">
              <LuSettings size={24} color="keeper" className=" " />
            </div>
          </div>
        </div>

        {/* The last part */}
        <div className="flex flex-row  items-center">
          <div className="mx-1 w-12 h-12 flex flex-col justify-center items-center rounded-full p-2 text-keeper hover:bg-menu_bg hover:text-black">
            <IoApps size={24} color="keeper" className=" " />
          </div>
          {/* for the profile picture */}
        </div>

      </div>
    </header>
  );
}

export default Header;
