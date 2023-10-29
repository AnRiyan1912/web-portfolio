import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { BiLogoInstagramAlt, BiCodeAlt } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import { HiOutlineMailOpen } from "react-icons/hi";
import { RiProfileLine } from "react-icons/ri";
import Profile from "../../assets/profile.jpg";

export const ContactPage = () => {
  return (
    <div className="col-auto ">
      <div className="fixed flex justify-center w-full h-full top-40">
        <div className="flex justify-center w-10/12 gap-7">
          <div className="w-2/5 col-auto">
            <div className="flex justify-center">
              <div className="w-32 h-32 flex items-center justify-center absolute">
                <img
                  className="w-32 h-32 object-fill rounded-lg "
                  src={Profile}
                  alt=""
                />
              </div>
            </div>
            <div className="w-full h-3/4 mt-16 rounded-2xl font-semibold bg-white col-auto">
              <div className="flex justify-center ">
                <div className="mt-24 col-auto w-full">
                  <div className="flex justify-center items-center">
                    <span className="text-black text-2xl">Andre Riyanto</span>
                  </div>
                  <div className="flex justify-center items-center mt-2">
                    <span className="text-gray-500 text-base">
                      FullStack Web
                    </span>
                  </div>
                  <div className="flex justify-center w-full mt-4 gap-8 ">
                    <div className="w-16 h-16 rounded-lg text-blue-600 flex justify-center items-center bg-slate-100">
                      <FaFacebookF size={26} />
                    </div>
                    <div className="w-16 h-16 rounded-lg text-blue-500 flex justify-center items-center bg-slate-100">
                      <FaLinkedinIn size={26} />
                    </div>
                    <div className="w-16 h-16 rounded-lg flex justify-center items-center bg-slate-100 ">
                      <BiLogoInstagramAlt
                        size={26}
                        className=" bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500  bg-clip-content rounded-md"
                      />
                    </div>
                    <div className="w-16 h-16 rounded-lg text-black flex justify-center items-center bg-slate-100">
                      <BsGithub size={26} />
                    </div>
                  </div>
                  <div className="flex justify-center ">
                    <div className="w-4/5 mt-12 col-auto bg-slate-100 p-10 rounded-2xl">
                      <div className="flex gap-5 p-4  border-b-2">
                        <div className="w-16 h-16 flex justify-center items-center ">
                          <BsWhatsapp
                            size={40}
                            className="bg-green-400 rounded-md p-1"
                          />
                        </div>
                        <div className="flex items-center">
                          <div className="col-auto">
                            <div className="text-black font-medium text-lg">
                              <span>Whatshapp</span>
                            </div>
                            <div className="text-black font-normal text-md">
                              <span>+62 813-6994- 6933</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-5 p-4  border-b-2">
                        <div className="w-16 h-16 flex justify-center items-center ">
                          <HiOutlineMailOpen
                            size={40}
                            className="bg-gradient-to-r from-red-500 to-red-600 rounded-md p-1"
                          />
                        </div>
                        <div className="flex items-center">
                          <div className="col-auto">
                            <div className="text-black font-medium text-lg">
                              <span>Gmail</span>
                            </div>
                            <div className="text-black font-normal text-md">
                              <span>andreriyantoo19@gmail.com</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-5 p-4  border-b-2">
                        <div className="w-16 h-16 flex justify-center items-center ">
                          <RiProfileLine
                            size={40}
                            className="bg-black text-white rounded-md p-1"
                          />
                        </div>
                        <div className="flex items-center">
                          <div className="col-auto">
                            <div className="text-black font-medium text-lg">
                              <span>Resume</span>
                            </div>
                            <div className="text-black font-normal text-xs">
                              <a
                                href="https://www.cakeresume.com/riyann-cd8330"
                                target="blank"
                              >
                                https://www.cakeresume.com/riyann-cd8330
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-5 p-4  border-b-2">
                        <div className="w-16 h-16 flex justify-center items-center ">
                          <BsWhatsapp
                            size={40}
                            className="bg-green-400 rounded-md p-1"
                          />
                        </div>
                        <div className="flex items-center">
                          <div className="col-auto">
                            <div className="text-black font-medium text-lg">
                              <span>Whatshapp</span>
                            </div>
                            <div className="text-black font-normal text-md">
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

          <div className="w-3/6">
            <div className="col-auto text-black mt-16 h-3/4 rounded-2xl bg-white">
              <div className="flex justify-center">
                <div className="w-11/12">
                  <div className="p-4 ">
                    <span className="text-4xl font-semibold">ABOUT ME</span>
                    <div className="h-1 w-60 bg-gradient-to-r from-orange-400 to-red-500"></div>
                  </div>
                  <div className="p-4">
                    <span>
                      Hello there! im thrilled to welcome you to my portfolio. I
                      am a passionate and versatile full-stack developer with a
                      keen interest in exploring the latest cutting-edge
                      technologies. My journey in the world of web development
                      has been nothing short of exhilarating, and I constantly
                      strive to enhance my skills and embrace emerging trends in
                      the industry.
                    </span>
                  </div>
                  <div className="p-4 ">
                    <span className="text-3xl font-semibold">What i do!</span>
                    <div className="h-1 w-44 bg-gradient-to-r from-orange-400 to-red-500"></div>
                  </div>
                  <div className="col-auto p-4">
                    <div className="flex justify-between">
                      <div className="w-80 p-4 rounded-2xl bg-orange-200">
                        <span className="flex text-2xl items-center gap-2 font-bold">
                          <BiCodeAlt size={25} className="text-red-500 " /> Web
                          Development
                        </span>
                        <span>
                          As a developer, I find myself most captivated by the
                          power and flexibility of NEXT.js. im always eager to
                          dive into new projects that leverage NEXT.js and
                          discover innovative ways to create fast, scalable, and
                          user-friendly applications.
                        </span>
                      </div>
                      <div className="w-80 p-4  rounded-2xl bg-slate-100">
                        <span>
                          As a developer, I find myself most captivated by the
                          power and flexibility of NEXT.js. im always eager to
                          dive into new projects that leverage NEXT.js and
                          discover innovative ways to create fast, scalable, and
                          user-friendly applications.
                        </span>
                      </div>
                    </div>
                    <div className="flex justify-between mt-4">
                      <div className="w-80 p-4  rounded-2xl bg-slate-100">
                        <span>
                          As a developer, I find myself most captivated by the
                          power and flexibility of NEXT.js. im always eager to
                          dive into new projects that leverage NEXT.js and
                          discover innovative ways to create fast, scalable, and
                          user-friendly applications.
                        </span>
                      </div>
                      <div className="w-80 p-4 rounded-2xl bg-orange-200">
                        <span className="flex text-2xl items-center gap-2 font-bold">
                          <BiCodeAlt size={25} className="text-red-500 " /> Web
                          Development
                        </span>
                        <span>
                          As a developer, I find myself most captivated by the
                          power and flexibility of NEXT.js. im always eager to
                          dive into new projects that leverage NEXT.js and
                          discover innovative ways to create fast, scalable, and
                          user-friendly applications.
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
