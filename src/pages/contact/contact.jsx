import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import { HiOutlineMailOpen } from "react-icons/hi";
import { RiProfileLine } from "react-icons/ri";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import Profile from "../../assets/profile/profile.jpg";

export const ContactPage = () => {
  return (
    <div className="col-auto ">
      <div className="fixed flex justify-center w-full h-full top-40 max-sm:relative ">
        <div className="flex justify-center w-10/12 gap-7 max-sm:grid max-sm:grid-cols-1 max-sm:h-full">
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

          <div className="2xl:w-3/6 w-5/6 max-sm:w-full max-sm:h-full">
            <div className="col-auto text-black 2xl:mt-16 h-3/4 rounded-2xl bg-white max-sm:p-2 max-sm:h-full max-sm:w-full">
              <div className="flex justify-center">
                <div className="w-11/12">
                  <div className="2xl:p-4 p-2 flex gap-8 items-center">
                    <span className="2xl:text-4xl text-2xl font-semibold">
                      Contact
                    </span>
                    <div className="h-0.5 w-60 bg-gradient-to-r from-orange-400 to-red-500"></div>
                  </div>
                </div>
              </div>
              {/* phone and email */}
              <div className="col-auto mt-8">
                <div className="flex justify-between max-sm:grid-cols-1 max-sm:grid">
                  <div></div>
                  <div className="col-auto w-2/5 h-36 rounded-xl bg-orange-100 p-5 max-sm:w-full max-sm:h-full">
                    <div className="flex items-center gap-3">
                      <span>
                        <FiPhoneCall className="2xl:w-7 2xl:h-7 h-6 w-6 rounded-md text-white bg-gradient-to-r from-orange-400 to-red-500 p-1" />
                      </span>
                      <span className="font-semibold">Phone</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div></div>
                      <span>+62 81369946933</span>
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                  </div>
                  <div className="col-auto w-2/5 h-36 rounded-xl bg-slate-100 p-5 max-sm:w-full max-sm:h-full max-sm:mt-3">
                    <div className="flex items-center gap-3">
                      <span>
                        <MdOutlineEmail className="2xl:w-7 2xl:h-7 h-6 w-6 rounded-md text-white bg-gradient-to-r from-orange-400 to-red-500 p-1" />
                      </span>
                      <span className="font-semibold">Email</span>
                    </div>
                    <div className="flex items-center justify-between ">
                      <div></div>
                      <div></div>
                      <div></div>
                      <span className="text-sm 2xl:text-base">
                        andreriyantoo19@gmail.com
                      </span>
                      <div></div>
                      <div></div>
                    </div>
                  </div>
                  <div></div>
                </div>
              </div>
              {/* form */}
              <form
                action="https://formspree.io/f/mjvqzgkd"
                className="p-7 flex items-center justify-center max-sm:p-3 max-sm:mt-4"
                method="POST"
              >
                <div className=" bg-slate-100 flex justify-center items-center w-11/12 rounded-xl  h-96 max-sm:w-full max-sm:h-full max-sm:p-2">
                  <div className="col-auto w-11/12 ">
                    <div>
                      <span>
                        I am always open to disscussion new projects,
                        opportunities in tech world, partnerships and more so
                        mentorship
                      </span>
                    </div>

                    <div className="border-b-2 border-slate-300 mt-4 flex">
                      <div className="flex items-center">
                        <span>Name:</span>
                      </div>
                      <input
                        required
                        type="text"
                        id="name"
                        name="subject"
                        className="w-full bg-slate-100 p-4 outline-none"
                      />
                    </div>
                    <div className="border-b-2 border-slate-300 mt-4 flex">
                      <div className="flex items-center">
                        <span>Email:</span>
                      </div>
                      <input
                        required
                        id="email"
                        type="email"
                        name="email"
                        className="w-full bg-slate-100 p-4 outline-none"
                      />
                    </div>
                    <div className="border-b-2 border-slate-300 mt-4 flex">
                      <div className="flex items-center">
                        <span>Message:</span>
                      </div>
                      <input
                        required
                        type="text"
                        id="message"
                        name="message"
                        className="w-full bg-slate-100 p-4 outline-none"
                      />
                    </div>
                    <div className="flex items-center justify-center mt-4">
                      <button
                        type="submit"
                        className=" bg-gradient-to-r text-white from-orange-400 to-red-500 hover:bg-gradient-to-r hover:from-orange-600 hover:to-red-700"
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
