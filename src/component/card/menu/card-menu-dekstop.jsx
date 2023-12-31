import { AiOutlineHome } from "react-icons/ai";
import { RiProfileLine } from "react-icons/ri";
import { MdWorkOutline } from "react-icons/md";
import { BiSolidContact } from "react-icons/bi";

export const CardMenuDekstop = () => {
  return (
    <>
      <div
        className={`fixed flex w-full gap-80 justify-center 2xl:top-20 z-10 xl:top-12 max-2xl:right-40 max-sm:top-14 max-sm:hidden`}
      >
        <div className=""></div>
        <div className=""></div>
        <div className=""></div>
        <div className="flex gap-8 p-2 px-8 rounded-2xl  bg-white max-sm:grid max-sm:fixed max-sm:left-0 max-sm:w-40 max-sm:flex max-sm:justify-end">
          <div className="bg-slate-100  rounded-2xl 2xl:h-20   h-14 max-2xl:w-14 2xl:w-20 flex justify-center items-center xl:p-3 bg-a p-2 hover:bg-orange-400 hover:bg-orange-500 ">
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
          <div className="bg-slate-100  rounded-2xl 2xl:h-20  h-14 max-2xl:w-14 2xl:w-20 flex justify-center items-center xl:p-3 bg-a p-2 hover:bg-orange-400 hover:bg-orange-500 ">
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
          <div className="bg-slate-100  rounded-2xl 2xl:h-20  h-14 max-2xl:w-14 2xl:w-20 flex justify-center items-center xl:p-3 bg-a p-2 hover:bg-orange-400 hover:bg-orange-500 ">
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
          <div className="bg-slate-100  rounded-2xl 2xl:h-20 h-14 max-2xl:w-14 2xl:w-20 flex justify-center items-center xl:p-3 bg-a p-2 hover:bg-orange-400 hover:bg-orange-500 ">
            <a
              href="/contact"
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
    </>
  );
};
