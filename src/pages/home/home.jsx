import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { BiLogoInstagramAlt, BiCodeAlt } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import { HiOutlineMailOpen } from "react-icons/hi";
import { RiProfileLine } from "react-icons/ri";
import Profile from "../../assets/profile.jpg";

export const HomePage = () => {
  return (
    <div className="col-auto ">
      <div className="fixed flex justify-center w-full h-full top-40">
        <div className="flex justify-center w-10/12 gap-7">
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
            <div className="w-full h-3/4 2xl:mt-16 rounded-2xl font-semibold bg-white col-auto max-2xl:p-4">
              <div className="flex justify-center ">
                <div className="2xl:mt-24 mt-8 col-auto w-full">
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

          <div className="2xl:w-3/6">
            <div className="col-auto text-black 2xl:mt-16 h-3/4 rounded-2xl bg-white">
              <div className="flex justify-center">
                <div className="w-11/12">
                  <div className="2xl:p-4 p-2 flex gap-8 items-center">
                    <span className="2xl:text-4xl text-2xl font-semibold">
                      About Me
                    </span>
                    <div className="h-0.5 w-60 bg-gradient-to-r from-orange-400 to-red-500"></div>
                  </div>
                  <div className="2xl:p-4 p-1">
                    <span className="max-2xl:text-sm">
                      Hello there! im thrilled to welcome you to my portfolio. I
                      am a passionate and versatile full-stack developer with a
                      keen interest in exploring the latest cutting-edge
                      technologies. My journey in the world of web development
                      has been nothing short of exhilarating, and I constantly
                      strive to enhance my skills and embrace emerging trends in
                      the industry.
                    </span>
                  </div>
                  <div className="2xl:p-4 p-2">
                    <span className="2xl:text-3xl text-xl font-semibold">
                      What i do!
                    </span>
                  </div>
                  <div className="col-auto p-1 2xl:mt-2">
                    <div className="flex justify-between gap-2 max-2xl:items-center">
                      <div className="w-2/4 2xl:p-4 p-2 rounded-2xl bg-orange-200 ">
                        <span className="flex 2xl:text-2xl text-sm items-center gap-2 font-bold">
                          <BiCodeAlt size={25} className="text-red-500 " /> Web
                          Development
                        </span>
                        <span className="max-2xl:text-sm leading-normal">
                          <h6>
                            As a developer, I find myself most captivated by the
                            power and flexibility of NEXT.js. im always eager to
                            dive into new projects that leverage NEXT.js and
                            discover innovative ways to create fast, scalable,
                            and user-friendly applications.
                          </h6>
                        </span>
                      </div>
                      <div className="w-2/4 2xl:p-4 p-2 rounded-2xl bg-orange-200 ">
                        <span className="flex 2xl:text-2xl text-sm items-center gap-2 font-bold">
                          <BiCodeAlt size={25} className="text-red-500 " /> Web
                          Development
                        </span>
                        <span className="max-2xl:text-sm  leading-normal">
                          <h6>
                            As a developer, I find myself most captivated by the
                            power and flexibility of NEXT.js. im always eager to
                            dive into new projects that leverage NEXT.js and
                            discover innovative ways to create fast, scalable,
                            and user-friendly applications.
                          </h6>
                        </span>
                      </div>
                    </div>
                    <div className="flex justify-between gap-2 max-2xl:items-center max-2xl:mt-2 mt-4">
                      <div className="w-2/4 2xl:p-4 p-2 rounded-2xl bg-orange-200 ">
                        <span className="flex 2xl:text-2xl text-sm items-center gap-2 font-bold">
                          <BiCodeAlt size={25} className="text-red-500 " /> Web
                          Development
                        </span>
                        <span className="max-2xl:text-sm  leading-normal">
                          <h6>
                            As a developer, I find myself most captivated by the
                            power and flexibility of NEXT.js. im always eager to
                            dive into new projects that leverage NEXT.js and
                            discover innovative ways to create fast, scalable,
                            and user-friendly applications.
                          </h6>
                        </span>
                      </div>
                      <div className="w-2/4 2xl:p-4 p-2 rounded-2xl bg-orange-200 ">
                        <span className="flex 2xl:text-2xl text-sm items-center gap-2 font-bold">
                          <BiCodeAlt size={25} className="text-red-500 " /> Web
                          Development
                        </span>
                        <span className="max-2xl:text-sm  leading-normal">
                          <h6>
                            As a developer, I find myself most captivated by the
                            power and flexibility of NEXT.js. im always eager to
                            dive into new projects that leverage NEXT.js and
                            discover innovative ways to create fast, scalable,
                            and user-friendly applications.
                          </h6>
                        </span>
                      </div>
                    </div>
                    <div className="flex">
                      <div></div>
                      <div></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
