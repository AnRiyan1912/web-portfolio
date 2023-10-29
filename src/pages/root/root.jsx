import { Outlet } from "react-router-dom";
import { FaRegMoon } from "react-icons/fa";
import { AiOutlineHome } from "react-icons/ai";
import { RiProfileLine } from "react-icons/ri";
import { MdWorkOutline } from "react-icons/md";
import { BiSolidContact } from "react-icons/bi";
import "../../css/root.css";
export const Root = () => {
  return (
    <>
      <div className="fixed top-0 flex justify-between items-center w-full 2xl:h-24 h-14">
        <div></div>

        <div className="flex gap-1 text-2xl 2xl:text-4xl">
          <span className="text-black">Andre</span>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-red-500 ">
            Riyanto
          </span>
        </div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div className="2xl:w-14 2xl:h-14 p-2 bg-slate-200 flex items-center justify-center rounded-full text-black hover:cursor-pointer">
          <FaRegMoon className="2xl:w-7 2xl:h-7 w-5 h-5" />
        </div>

        <div></div>
      </div>
      <div className="fixed flex w-full gap-80 justify-center 2xl:top-28 z-10 xl:top-16 max-2xl:right-40">
        <div className=""></div>
        <div className=""></div>
        <div className=""></div>
        <div className="flex gap-8 p-2 px-8 rounded-2xl bg-white">
          <div className="bg-slate-100  rounded-2xl 2xl:h-20  h-16 max-2xl:w-16 2xl:w-20 flex justify-center items-center xl:p-3 bg-a p-2 hover:bg-orange-400 hover:bg-orange-500 ">
            <a
              href="/"
              className="2xl:w-16  flex justify-center items-center hover:text-white text-black "
            >
              <div>
                <div className="flex items-center justify-center">
                  <AiOutlineHome className="2xl:w-7 2xl:h-7 w-5 h-5" />
                </div>
                <span className="2xl:text-base text-xs"> Home</span>
              </div>
            </a>
          </div>
          <div className="bg-slate-100  rounded-2xl 2xl:h-20  h-16 max-2xl:w-16 2xl:w-20 flex justify-center items-center xl:p-3 bg-a p-2 hover:bg-orange-400 hover:bg-orange-500 ">
            <a
              href="/resume"
              className="2xl:w-16  flex justify-center items-center hover:text-white text-black "
            >
              <div>
                <div className="flex items-center justify-center">
                  <RiProfileLine className="2xl:w-7 2xl:h-7 w-5 h-5" />
                </div>
                <span className="2xl:text-base text-xs">Resume</span>
              </div>
            </a>
          </div>
          <div className="bg-slate-100  rounded-2xl 2xl:h-20  h-16 max-2xl:w-16 2xl:w-20 flex justify-center items-center xl:p-3 bg-a p-2 hover:bg-orange-400 hover:bg-orange-500 ">
            <a
              href="/work"
              className="2xl:w-16  flex justify-center items-center hover:text-white text-black "
            >
              <div>
                <div className="flex items-center justify-center">
                  <MdWorkOutline className="2xl:w-7 2xl:h-7 w-5 h-5" />
                </div>
                <span className="2xl:text-base text-xs">Work</span>
              </div>
            </a>
          </div>
          <div className="bg-slate-100  rounded-2xl 2xl:h-20  h-16 max-2xl:w-16 2xl:w-20 flex justify-center items-center xl:p-3 bg-a p-2 hover:bg-orange-400 hover:bg-orange-500 ">
            <a
              href="/home"
              className="2xl:w-16  flex justify-center items-center hover:text-white text-black "
            >
              <div>
                <div className="flex items-center justify-center">
                  <BiSolidContact className="2xl:w-7 2xl:h-7 w-5 h-5" />
                </div>
                <span className="2xl:text-base text-xs">Contact</span>
              </div>
            </a>
          </div>
          {/*  */}
        </div>
      </div>
      <Outlet />
    </>
  );
};
