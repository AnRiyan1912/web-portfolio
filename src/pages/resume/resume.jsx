import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import { HiOutlineMailOpen } from "react-icons/hi";
import { RiProfileLine } from "react-icons/ri";
import { GiGraduateCap } from "react-icons/gi";
import { PiHandbagFill } from "react-icons/pi";
import Profile from "../../assets/profile/profile.jpg";
import logopurwadhika from "../../assets/logo/logo-purwadhika.png";

export const ResumePage = () => {
  return (
    <div className="col-auto ">
      <div className="fixed flex justify-center w-full h-full top-32 max-sm:relative ">
        <div className="flex justify-center w-10/12 gap-7 max-sm:grid max-sm:grid-cols-1">
          <div className="2xl:w-2/5  col-auto">
            <div className="flex justify-center">
              <div className="flex items-center justify-center absolute 2xl:-top-2 -top-10">
                <img
                  className="2xl:w-32 2xl:h-32 w-20 h-20 object-fill rounded-lg "
                  src={Profile}
                  alt=""
                />
              </div>
            </div>
            <div className="w-full h-3/4 2xl:mt-16 rounded-2xl font-semibold bg-white col-auto max-2xl:p-4 max-sm:h-full  ">
              <div className="flex justify-center ">
                <div className="2xl:mt-24 mt-8 col-auto w-full max-sm:p-3">
                  <div className="flex justify-center items-center">
                    <span className="text-black 2xl:text-2xl text-lg">
                      Andre Riyanto
                    </span>
                  </div>
                  <div className="flex justify-center items-center 2xl:mt-2 ">
                    <span className="text-gray-500 2xl:text-base text-xs">
                      FullStack Web
                    </span>
                  </div>
                  <div className="flex justify-center w-full mt-4 gap-8 ">
                    <div className="2xl:w-16 2xl:h-16 w-10 h-10 rounded-lg text-blue-600 flex justify-center items-center bg-slate-100 cursor-pointer">
                      <a
                        href="https://www.facebook.com/andrekaste/"
                        target="blank"
                      >
                        <FaFacebookF className="2xl:w-7 2xl:h-7 " />
                      </a>
                    </div>
                    <div className="2xl:w-16 2xl:h-16 w-10 h-10 rounded-lg text-blue-500 flex justify-center items-center bg-slate-100 cursor-pointer">
                      <a
                        href="https://www.linkedin.com/in/andre-riyanto-809274294/"
                        target="blank"
                      >
                        <FaLinkedinIn className="2xl:w-7 2xl:h-7 " />
                      </a>
                    </div>
                    <div className="2xl:w-16 2xl:h-16 w-10 h-10 rounded-lg flex justify-center items-center bg-slate-100 cursor-pointer">
                      <a
                        href="https://www.instagram.com/andreriyannt19/?hl=id"
                        target="blank"
                        className="text-white hover:text-white"
                      >
                        <BiLogoInstagramAlt className="2xl:w-7 2xl:h-7  bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500  bg-clip-content rounded-md" />
                      </a>
                    </div>
                    <div className="2xl:w-16 2xl:h-16 w-10 h-10 rounded-lg text-black flex justify-center items-center bg-slate-100 cursor-pointer">
                      <a href="https://github.com/AnRiyan1912" target="blank">
                        <BsGithub className="2xl:w-7 2xl:h-7" />
                      </a>
                    </div>
                  </div>
                  <div className="flex justify-center ">
                    <div className="2xl:w-4/5  2xl:mt-12 mt-6 col-auto bg-slate-100 2xl:p-10 p-6 rounded-2xl">
                      <div className="flex gap-5 2xl:p-4 p-3  border-b-2">
                        <div className="2xl:w-16 2xl:h-16 flex justify-center items-center ">
                          <BsWhatsapp className="2xl:w-10 2xl:h-10 w-7 h-7  bg-green-400 rounded-md p-1 " />
                        </div>
                        <div className="flex items-center">
                          <div className="col-auto">
                            <div className="text-black font-medium 2xl:text-lg text-sm">
                              <span>Whatshapp</span>
                            </div>
                            <div className="text-black font-normal 2xl:text-base text-xs">
                              <span>+62 813-6994- 6933</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-5 2xl:p-4 p-3   border-b-2">
                        <div className="2xl:w-16 2xl:h-16 flex justify-center items-center ">
                          <HiOutlineMailOpen className="2xl:w-10 2xl:h-10 w-7 h-7 bg-gradient-to-r from-red-500 to-red-600 rounded-md p-1" />
                        </div>
                        <div className="flex items-center">
                          <div className="col-auto">
                            <div className="text-black font-medium 2xl:text-lg text-sm">
                              <span>Gmail</span>
                            </div>
                            <div className="text-black font-normal 2xl:text-base text-xs">
                              <span>andreriyantoo19@gmail.com</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-5 2xl:p-4 p-3  border-b-2">
                        <div className="2xl:w-16 2xl:h-16 flex justify-center items-center ">
                          <RiProfileLine className="2xl:w-10 2xl:h-10 w-7 h-7 bg-black text-white rounded-md p-1" />
                        </div>
                        <div className="flex items-center">
                          <div className="col-auto">
                            <div className="text-black font-medium 2xl:text-lg text-sm">
                              <span>CV</span>
                            </div>
                            <div className="text-black font-normal 2xl:text-base text-xs ">
                              <a
                                href="https://www.cakeresume.com/riyann-cd8330"
                                target="blank"
                                className="text-justify "
                              >
                                https://www.cakeresume.com/riyann-cd8330
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-5 2xl:p-4  p-3 border-b-2">
                        <div className="2xl:w-16 2xl:h-16 flex justify-center items-center ">
                          <BsWhatsapp className="2xl:w-10 2xl:h-10 w-7 h-7 bg-green-400 rounded-md p-1" />
                        </div>
                        <div className="flex items-center">
                          <div className="col-auto">
                            <div className="text-black font-medium 2xl:text-lg text-sm">
                              <span>Whatshapp</span>
                            </div>
                            <div className="text-black font-normal 2xl:text-base text-xs">
                              <span>+62 813-6994- 6933</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="2xl:w-3/6 w-5/6  max-sm:w-full">
            <div className="col-auto text-black 2xl:mt-16 h-3/4 rounded-2xl bg-white max-sm:h-full ">
              <div className="flex justify-center">
                <div className="w-11/12">
                  <div className="2xl:p-4 p-2 flex gap-8 items-center">
                    <span className="2xl:text-4xl text-2xl font-semibold">
                      Resume
                    </span>
                    <div className="h-0.5 w-60 bg-gradient-to-r from-orange-400 to-red-500"></div>
                  </div>
                </div>
              </div>
              <div className="flex justify-between m-2">
                <div></div>
                <div className="flex justify-center items-center gap-3">
                  <div>
                    <GiGraduateCap className="2xl:w-9 2xl:h-9 h-6 w-6 rounded-md text-white bg-gradient-to-r from-orange-400 to-red-500" />
                  </div>
                  <span className="text-xl font-semibold">Education</span>
                </div>
                <div></div>
                <div className="flex gap-3 justify-center items-center">
                  <div>
                    <PiHandbagFill className="2xl:w-9 2xl:h-9 h-6 w-6 rounded-md text-white bg-gradient-to-r from-orange-400 to-red-500" />
                  </div>
                  <span className="text-xl font-semibold">Experience</span>
                </div>
                <div></div>
              </div>

              {/* one row */}
              {/* Education */}
              <div className="flex justify-between mt-4">
                <div></div>
                <div className="col-auto w-2/5 bg-orange-200 2xl:p-5 p-2.5 rounded-2xl">
                  <div className="p-1">
                    <span className="text-xs max-sm:text-xs">
                      28 juni 2023 - 22 september 2023
                    </span>
                  </div>
                  <div className="flex items-center gap-2 p-1">
                    <img
                      src={logopurwadhika}
                      alt=""
                      className="object-fill 2xl:w-14 2xl:h-14 w-7 h-7"
                    />
                    <span className="text-base font-semibold max-sm:text-sm">
                      Purwadhika Digital School
                    </span>
                  </div>
                  <div className="p-1 max-sm:text-xs font-medium">
                    <span>FullStack Web</span>
                  </div>
                </div>

                {/* experience */}
                <div className="col-auto w-2/5 bg-orange-200 p-5 rounded-2xl">
                  <div className="p-1">
                    <span className="text-sm"></span>
                  </div>
                  <div className="flex items-center gap-4 p-1">
                    <img src="" alt="" className=" w-20 h-4" />
                    <span className="text-base"></span>
                  </div>
                  <div className="p-1">
                    <span></span>
                  </div>
                </div>
                <div></div>
              </div>
              {/* one row */}
              {/* Education */}
              <div className="flex justify-between mt-4">
                <div></div>
                <div className="col-auto w-2/5 bg-orange-200 p-5 rounded-2xl">
                  <div className="p-1">
                    <span className="text-xs"></span>
                  </div>
                  <div className="flex items-center gap-2 p-1">
                    <img src="" alt="" className="object-fill w-20 h-4" />
                    <span className="text-base font-semibold"></span>
                  </div>
                  <div className="p-1">
                    <span className="text-sm"></span>
                  </div>
                </div>

                {/* experience */}
                <div className="col-auto w-2/5 bg-orange-200 p-5 rounded-2xl">
                  <div className="p-1">
                    <span className="text-sm"></span>
                  </div>
                  <div className="flex items-center gap-4 p-1">
                    <img src="" alt="" className=" w-20 h-4" />
                    <span className="text-base"></span>
                  </div>
                  <div className="p-1">
                    <span></span>
                  </div>
                </div>
                <div></div>
              </div>
              {/*work skill & soft skill  */}
              <div className="flex justify-between 2xl:mt-10 mt-5">
                <div></div>
                <div className="flex items-center justify-center">
                  <span className="2xl:text-2xl text-xl font-semibold">
                    Work Skill
                  </span>
                </div>
                <div></div>
                <div className="flex items-center justify-center">
                  <span className="2xl:text-2xl text-xl font-semibold">
                    Tools
                  </span>
                </div>
                <div></div>
              </div>

              {/* all */}

              <div className="flex justify-between gap-10 mt-3 2xl:mt-6 max-sm:gap-2 ">
                <div></div>
                <div className="col-auto w-2/5 max-sm:w-full">
                  <div className="flex justify-between max-sm:grid max-sm:grid-cols-2 gap-2">
                    <div className="bg-slate-100 p-2 rounded-xl flex items-center">
                      <span className="max-2xl:text-xs max-sm:text-xs">
                        HTML
                      </span>
                    </div>
                    <div className="bg-slate-100 p-2 rounded-xl">
                      <span className="max-2xl:text-sm max-sm:text-xs">
                        CSS
                      </span>
                    </div>
                    <div className="bg-slate-100 p-2 rounded-xl flex items-center">
                      <span className="max-2xl:text-sm max-sm:text-xs">
                        JavaScript ES6
                      </span>
                    </div>
                  </div>
                  <div className="flex justify-between mt-2 2xl:mt-4 max-sm:grid max-sm:grid-cols-2 gap-2">
                    <div className="bg-slate-100 p-2 rounded-xl">
                      <span className="max-2xl:text-sm max-sm:text-xs">
                        React.Js
                      </span>
                    </div>
                    <div className="bg-slate-100 p-2 rounded-xl">
                      <span className="max-2xl:text-sm max-sm:text-xs">
                        Vite.Js
                      </span>
                    </div>
                    <div className="bg-slate-100 p-2 rounded-xl">
                      <span className="max-2xl:text-sm max-sm:text-xs">
                        Express.Js
                      </span>
                    </div>
                  </div>
                  <div className="flex justify-between mt-2 2xl:mt-4 max-sm:grid max-sm:grid-cols-2 gap-2">
                    <div className="bg-slate-100 p-2 rounded-xl">
                      <span className="max-2xl:text-sm max-sm:text-xs">
                        Sequelize
                      </span>
                    </div>
                    <div className="bg-slate-100 p-2 rounded-xl">
                      <span className="max-2xl:text-sm max-sm:text-xs">
                        MYSQL
                      </span>
                    </div>
                    <div className="bg-slate-100 p-2 rounded-xl">
                      <span className="max-2xl:text-sm max-sm:text-xs">
                        REST API
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-auto  w-2/5 max-sm:w-full">
                  <div className="flex justify-between max-sm:grid max-sm:grid-cols-2 gap-2">
                    <div className="bg-slate-100 p-2 rounded-xl">
                      <span className="max-2xl:text-xs max-sm:text-xs">
                        VS code
                      </span>
                    </div>
                    <div className="bg-slate-100 p-2 rounded-xl">
                      <span className="max-2xl:text-sm max-sm:text-xs">
                        Postman
                      </span>
                    </div>
                    <div className="bg-slate-100 p-2 rounded-xl">
                      <span className="max-2xl:text-sm max-sm:text-xs">
                        Github
                      </span>
                    </div>
                  </div>
                </div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
