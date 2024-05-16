"use client"
import Image from "next/image"
import React, { useState } from "react"
import Link from "next/link"

const Homepage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className="z-10">
      <div className="py-5 flex fixed inset-0 h-[6em] top-6 w-[98%] mx-auto rounded-lg bg-white justify-between">
        <Link href="/" className=" content-center bg-white rounded-lg">
          <Image
            className="w-full h-[58px] "
            src="/images/catalysing_logo.png"
            alt="image description"
            height={200}
            width={700}
          />
        </Link>

        <div className="bg-white content-center rounded-lg">
          <nav className="bg-white">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 bg-white">
              <div className="w-full md:w-auto" id="navbar-default">
                <ul className="font-medium hidden md:flex flex-col p-4 md:p-0 mt-4 bg-white md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                  <li className="bg-white">
                    <Link
                      href="/"
                      className="block py-2 px-3 text-gray-900 rounded bg-white md:border-0 md:hover:text-purple-700 md:p-0 dark:text-white md:dark:hover:text-pu dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                      aria-current="page"
                    >
                      Home
                    </Link>
                  </li>
                  <li className="bg-white relative group">
                    <p
                      href=""
                      className="block py-2 px-3 text-gray-900 rounded bg-white md:border-0 md:hover:text-purple-700 md:p-0 dark:text-white md:dark:hover:text-purple-700 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                    >
                      CSI 2024
                    </p>
                    <ul className="absolute left-0 mt-2 w-40 bg-white border rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <li>
                        <Link
                          href="csi-2024"
                          className="block py-2 px-4 text-gray-800 hover:bg-gray-100 md:hover:text-purple-700"
                        >
                          CSI 2024
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="sdg"
                          className="block py-2 px-4 text-gray-800 hover:bg-gray-100 md:hover:text-purple-700"
                        >
                          SDG
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="bg-white">
                    <Link
                      href="csi-2019"
                      className="block py-2 px-3 text-gray-900 rounded bg-white md:border-0 md:hover:text-purple-700 md:p-0 dark:text-white md:dark:hover:text-purple-700 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                    >
                      CSI 2019
                    </Link>
                  </li>
                  <li className="bg-white">
                    <Link
                      href="how-contribute"
                      className="block py-2 px-3 text-gray-900 rounded bg-white md:border-0 md:hover:text-purple-700 md:p-0 dark:text-white md:dark:hover:text-purple-700 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                    >
                      How can you contribute?
                    </Link>
                  </li>
                  <li className="bg-white">
                    <Link
                      href="interest-form"
                      className="block py-2 px-3 text-gray-900 rounded bg-white md:border-0 md:hover:text-purple-700 md:p-0 dark:text-white md:dark:hover:text-purple-700 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                    >
                      Sign Up
                    </Link>
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
                      <Link
                        href="/"
                        className="block py-2 px-3 text-gray-900 rounded bg-white md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                        aria-current="page"
                      >
                        Home
                      </Link>
                    </li>
                    <li className="bg-white relative group">
                      <p
                        href=""
                        className="block py-2 px-3 text-gray-900 rounded bg-white md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                      >
                        CSI 2024
                      </p>
                      <ul className="absolute left-0 mt-2 w-40 bg-white border rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <li>
                          <Link
                            href="csi-2024"
                            className="block py-2 px-4 text-gray-800 hover:bg-gray-100"
                          >
                            CSI 2024
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="sdg"
                            className="block py-2 px-4 text-gray-800 hover:bg-gray-100"
                          >
                            SDG
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="bg-white mt-24">
                      <Link
                        href="csi-2019"
                        className="block py-2 px-3 text-gray-900 rounded bg-white md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                      >
                        CSI 2019
                      </Link>
                    </li>
                    <li className="bg-white ">
                      <Link
                        href="how-contribute"
                        className="block py-2 px-3 text-gray-900 rounded bg-white md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                      >
                        How can you contribute?
                      </Link>
                    </li>
                    <li className="bg-white">
                      <Link
                        href="interest-form"
                        className="block py-2 px-3 text-gray-900 rounded bg-white md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                      >
                        Sign Up
                      </Link>
                    </li>
                  </ul>
                )}
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default Homepage
