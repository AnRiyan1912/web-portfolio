import { CgDetailsMore } from "react-icons/cg";
import { FaRegMoon } from "react-icons/fa";
import { CardMenuDekstop } from "./card-menu-dekstop";
import { useState } from "react";
import { CardMenuMobile } from "./card-menu-mobile";
import { RxCross2 } from "react-icons/rx";
import profile from "../../../assets/profile/profile.jpg";

export const CardMenu = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <>
      <div className="fixed top-0 flex justify-between items-center w-full 2xl:h-24 h-14 z-20 max-sm:bg-slate-100">
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
        <div className=" 2xl:w-14 2xl:h-14 p-2 bg-slate-200 flex items-center justify-center rounded-full text-black hover:cursor-pointer">
          <FaRegMoon className="2xl:w-7 2xl:h-7 w-5 h-5" />
        </div>

        <div></div>
      </div>

      <div className="md:hidden fixed top-14 z-30 ">
        <div className="flex items-center">
          <button
            className={`p-1 ${
              openMenu ? "bg-white hidden" : "bg-slate-100"
            } text-black mt-2`}
            onClick={() => (openMenu ? setOpenMenu(false) : setOpenMenu(true))}
          >
            <CgDetailsMore className="w-8 h-8" />
          </button>
          {openMenu ? (
            <div>
              <div className="flex items-center justify-center mt-2 gap-3 ml-4">
                <div>
                  <img
                    src={profile}
                    alt="profile-image"
                    className="w-10 rounded-full bg-cover"
                  />
                </div>
                <div>
                  <h5 className="text-black font-medium">Andre Riyanto</h5>
                </div>
              </div>
              <div className="fixed right-32 top-16">
                <RxCross2
                  className="text-black w-8 h-8"
                  onClick={() => setOpenMenu(false)}
                />
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
      {openMenu ? <CardMenuMobile /> : ""}

      <CardMenuDekstop />
    </>
  );
};
