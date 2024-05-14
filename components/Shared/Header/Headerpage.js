"use client"
import Image from "next/image"
import React, { useState } from "react"

const Homepage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <>
      <div className="lg:grid grid-cols-2 py-5 ms-7  rounded-lg-1 bg-white  rounded-2xl fixed top-3 z-50 flex justify-center items-center">
        <div className="bg-white">
          <a href="/">
            <div class="w-10/12 h-full">
              <Image
                class="object-cover w-full h-full"
                src="/images/catalysing_logo.png"
                alt="image description"
                height={200}
                width={200}
              />
            </div>
          </a>
        </div>

        <div className="bg-white">
          <nav className="bg-white">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 bg-white">
              <div className="w-full md:w-auto" id="navbar-default">
                <ul className="font-medium hidden md:flex flex-col p-4 md:p-0 mt-4 bg-white md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                  <li className="bg-white">
                    <a
                      href="/"
                      className="block py-2 px-3 text-gray-900 rounded bg-white md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                      aria-current="page"
                    >
                      Home
                    </a>
                  </li>
                  <li className="bg-white relative group">
                    <a
                      href=""
                      className="block py-2 px-3 text-gray-900 rounded bg-white md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                    >
                      CSI 2024
                    </a>
                    <ul className="absolute left-0 mt-2 w-40 bg-white border rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <li>
                        <a
                          href="csi-2024"
                          className="block py-2 px-4 text-gray-800 hover:bg-gray-100"
                        >
                          CSI 2024
                        </a>
                      </li>
                      <li>
                        <a
                          href="SDG"
                          className="block py-2 px-4 text-gray-800 hover:bg-gray-100"
                        >
                          SDG
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="bg-white">
                    <a
                      href="csi-2019"
                      className="block py-2 px-3 text-gray-900 rounded bg-white md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                    >
                      CSI 2019
                    </a>
                  </li>
                  <li className="bg-white">
                    <a
                      href="contribute"
                      className="block py-2 px-3 text-gray-900 rounded bg-white md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                    >
                      How can you contribute?
                    </a>
                  </li>
                  <li className="bg-white">
                    <a
                      href="signup"
                      className="block py-2 px-3 text-gray-900 rounded bg-white md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                    >
                      Sign Up
                    </a>
                  </li>
                </ul>

                <button
                  className="block md:hidden"
                  onClick={toggleMenu}
                  aria-label="Toggle Menu"
                >
                  {isMenuOpen ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16m-7 6h7"
                      />
                    </svg>
                  )}
                </button>

                {isMenuOpen && (
                  <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 bg-white md:hidden">
                    <li className="bg-white">
                      <a
                        href="#"
                        className="block py-2 px-3 text-gray-900 rounded bg-white md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                        aria-current="page"
                      >
                        Home
                      </a>
                    </li>
                    <li className="bg-white relative group">
                      <a
                        href="#"
                        className="block py-2 px-3 text-gray-900 rounded bg-white md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                      >
                        CSI 2024
                      </a>
                      <ul className="absolute left-0 mt-2 w-40 bg-white border rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <li>
                          <a
                            href="#i"
                            className="block py-2 px-4 text-gray-800 hover:bg-gray-100"
                          >
                            CSI 2024
                          </a>
                        </li>
                        <li>
                          <a
                            href="#o"
                            className="block py-2 px-4 text-gray-800 hover:bg-gray-100"
                          >
                            SDG
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="bg-white">
                      <a
                        href="#"
                        className="block py-2 px-3 text-gray-900 rounded bg-white md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                      >
                        CSI 2019
                      </a>
                    </li>
                    <li className="bg-white">
                      <a
                        href="#"
                        className="block py-2 px-3 text-gray-900 rounded bg-white md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                      >
                        How can you contribute?
                      </a>
                    </li>
                    <li className="bg-white">
                      <a
                        href="#"
                        className="block py-2 px-3 text-gray-900 rounded bg-white md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                      >
                        Sign Up
                      </a>
                    </li>{" "}
                  </ul>
                )}
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  )
}

export default Homepage
