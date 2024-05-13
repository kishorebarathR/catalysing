"use client"
import React from "react"
import Image from "next/image"
const Homepage = () => {
  return (
    <>
      <div
        id="animation-carousel"
        className="relative w-full h-screen mt-44 lg:px-5 mb-10"
        data-carousel="slide" // Changed data-carousel to "slide"
      >
        <div className="relative h-screen overflow-hidden rounded-lg ">
          {/* Item 1 */}
          <div className="hidden duration-1000  ease-linear" data-carousel-item>
            <div className="lg:grid grid-cols-2  h-full w-full rounded-lg-5">
              <div className="rounded-lg-1">
                <Image
                  className="w-full h-full bg-white"
                  src="/images/CSI_social_post.jpg"
                  alt="image description"
                  height={200}
                  width={200}
                />
              </div>

              <div className="lg:flex items-middle justify-center flex-col  bg-[#4B2361]">
                <h1 className="p-5 text-5xl  text-white rounded-lg-5">
                  1st - 2nd August, 2024,
                </h1>
                <p className="p-5 text-5xl text-end text-white me-10 mb-0 ">
                  New Delhi
                </p>
                <div className="lg:text-end me-10 mt-5">
                  <a
                    href="csi-2024"
                    className="focus:outline-none text-violet-600 bg-[#F3D479] hover:bg-[#7e3f98] hover:text-yellow-200 focus:ring-4 focus:ring-yellow-200 font-normal rounded-3xl text-sm px-14 py-4 me-2 mb-14 dark:focus:ring-yellow-900"
                  >
                    View Details
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Item 2 */}
          <div
            className="hidden h-full duration-1000 ease-linear"
            data-carousel-item
          >
            <div className="   ">
              <video className="h-full w-full " autoPlay muted loop>
                <source src="/vedio/cphc-for-subtitle.mp4" type="video/mp4" />
              </video>

              <div className="inset-0 flex items-end justify-start  lg:absolute ">
                <div className="bg-white text-black p-5 rounded-tr-3xl rounded-bs-3xl border border-r border-black lg:w-1/3 ">
                  <p>
                    Social impact catalysis is the catalyst for a ripple effect
                    of positive change, transcending boundaries and leaving a
                    legacy of hope.
                  </p>
                </div>
              </div>

              <div className="inset-0 lg:flex items-end justify-end lg:me-10  lg:absolute  ">
                <button
                  data-modal-target="default-modal07"
                  data-modal-toggle="default-modal07"
                  type="button"
                  onClick={() => (window.location.href = "signup")}
                  className="focus:outline-none text-violet-600 bg-[#F3D479] hover:bg-[#7e3f98] hover:text-yellow-200 focus:ring-4 focus:ring-yellow-200 font-normal rounded-3xl text-sm px-14 py-4 me-2 mb-14 dark:focus:ring-yellow-900"
                >
                  Play the Video
                </button>

                <div
                  id="default-modal07"
                  tabIndex="-1"
                  aria-hidden="true"
                  className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
                >
                  <div className="relative p-4 w-full max-w-2xl max-h-full">
                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                      <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                        <button
                          type="button"
                          className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                          data-modal-hide="default-modal07"
                        >
                          <svg
                            className="w-3 h-3"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 14 14"
                          >
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                            />
                          </svg>
                          <span className="sr-only">Close modal</span>
                        </button>
                      </div>

                      <div className="flex justify-center items-center h-full mt-5">
                        <div className="flex flex-col lg:flex-row  ">
                          <div className="w-full ">
                            <video
                              className="h-full w-full "
                              autoPlay
                              muted
                              loop
                            >
                              <source
                                src="/vedio/cphc-for-subtitle.mp4"
                                type="video/mp4"
                              />
                            </video>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                        <button
                          data-modal-hide="default-modal07"
                          type="button"
                          className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Homepage
