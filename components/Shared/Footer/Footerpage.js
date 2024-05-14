import Image from "next/image"
import React from "react"

const Footerpage = () => {
  return (
    <>
      <div className="bg-[#7E3F98] grid grid-cols-1 md:grid-cols-2 border-b border-white-500 p-3 ">
        <div className="p-5 ">
          <Image
            className="w-10/12  h-full"
            src="/images/logo-light-footer.png"
            alt="image description"
            height={200}
            width={200}
          />
        </div>
        <div className="text-white text-center md:text-right p-5 mt-11 md:mt-0">
          <a
            href="mailto:csi@catalysts.org"
            className="hover:text-green-600 violet"
          >
            csi@catalysts.org
          </a>
        </div>
      </div>

      <div className="bg-[#7E3F98] px-10 ">
        <nav className="violet">
          <div className="max-w-screen-xl mx-auto p-4 violet">
            <div className="flex flex-wrap items-center justify-between">
              <div className="w-full md:w-auto" id="navbar-default">
                <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                  <li className="violet">
                    <a
                      href="/"
                      className="block py-2 px-3 text-white bg-violet-700 rounded md:bg-transparent md:text-violet-700 md:p-0 md:dark:text-violet-500 hover:text-green-600"
                      aria-current="page"
                    >
                      Home
                    </a>
                  </li>
                </ul>
              </div>
              <div className="w-full md:w-auto" id="navbar-default">
                <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                  <li className="violet">
                    <a
                      href="CSI2019"
                      className="block py-2 px-3 text-white bg-violet-700 rounded md:bg-transparent md:text-violet-700 md:p-0 md:dark:text-violet-500 hover:text-green-600"
                      aria-current="page"
                    >
                      CSI 2019
                    </a>
                  </li>
                </ul>
              </div>
              <div className="w-full md:w-auto" id="navbar-default">
                <ul className="font-medium flex flex-col  p-3 md:p-0 mt-4 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                  <li className="mt-11 md:mt-0">
                    <a
                      href=""
                      className="block py-2 px-3 text-xl text-white bg-violet-700 rounded md:bg-transparent md:text-violet-700 md:p-0 md:dark:text-violet-500 hover:text-green-600"
                      aria-current="page"
                    >
                      CSI 2024
                    </a>
                    <a
                      href="CSI2024"
                      className="block py-2 px-3 text-white bg-violet-700 rounded md:bg-transparent md:text-violet-700 md:p-0 md:dark:text-violet-500 hover:text-green-600"
                      aria-current="page"
                    >
                      CSI 2024
                    </a>
                    <a
                      href="SDG"
                      className="block py-2 px-3 text-white bg-violet-700 rounded md:bg-transparent md:text-violet-700 md:p-0 md:dark:text-violet-500 hover:text-green-600"
                      aria-current="page"
                    >
                      SDG
                    </a>
                  </li>
                </ul>
              </div>
              <div className="w-full md:w-auto" id="navbar-default">
                <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                  <li className="violet">
                    <a
                      href="signup"
                      className="block py-2 px-3 text-white bg-violet-700 rounded md:bg-transparent md:text-violet-700 md:p-0 md:dark:text-violet-500 hover:text-green-600"
                      aria-current="page"
                    >
                      Signup
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  )
}

export default Footerpage
