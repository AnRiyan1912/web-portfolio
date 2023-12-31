export const CardMenuMobile = () => {
  return (
    <>
      <div className="bg-black bg-opacity-25 w-full h-full fixed z-10">
        <div className="bg-white max-sm:grid max-sm:fixed max-sm:top-14 max-sm:w-2/3 max-sm:h-full max-sm:flex lg:hidden z-10 ">
          <ul className="max-sm:mt-16 w-10/12 ml-4">
            <li className=" shadow-md p-2 hover:bg-gradient-to-r hover:from-orange-400 hover:to-red-500 rounded-md">
              <a href="/home">
                <h5 className="text-black font-medium hover:text-white ">
                  Home
                </h5>
              </a>
            </li>
            <li className="shadow-md p-2 hover:bg-gradient-to-r hover:from-orange-400 hover:to-red-500 mt-4 rounded-md">
              <a href="/resume">
                <h5 className="text-black font-mediumh-full w-full hover:text-white">
                  Resume
                </h5>
              </a>
            </li>
            <li className="shadow-md p-2 hover:bg-gradient-to-r hover:from-orange-400 hover:to-red-500 mt-4 rounded-md">
              <a href="/work">
                <h5 className="text-black font-medium hover:text-white">
                  Work
                </h5>
              </a>
            </li>
            <li className="shadow-md p-2 hover:bg-gradient-to-r hover:from-orange-400 hover:to-red-500 mt-4 rounded-md">
              <a href="/contact">
                <h5 className="text-black font-medium hover:text-white">
                  Contact
                </h5>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
