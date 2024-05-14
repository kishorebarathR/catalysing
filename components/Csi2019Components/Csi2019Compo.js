"use client"
import React, { useEffect, useState } from "react"
import { initFlowbite } from "flowbite"
import Image from "next/image"

const Csi2019Compo = () => {
  const [isShow, setIsShow] = useState(false)

  const handleOnClickShow = () => {
    setIsShow(!isShow)
  }

  useEffect(() => {
    initFlowbite()
  })

  return (
    <>
      <div className=" lg:mx-5 relative mt-44">
        <video className="h-full w-full " autoPlay muted loop>
          <source src="/vedio/cphc-for-subtitle.mp4" type="video/mp4" />
        </video>

        <div class="  inset-0 flex items-end justify-start  lg:absolute ">
          <div class="bg-white text-black p-5 rounded-tr-3xl rounded-bs-3xl border border-r border-black lg:w-1/3 ">
            <p>
              Social impact catalysis is the catalyst for a ripple effect of
              positive change, transcending boundaries and leaving a legacy of
              hope.
            </p>
          </div>
        </div>

        <div class=" inset-0 lg:flex items-end justify-end lg:me-10  lg:absolute  ">
          <button
            data-modal-target="default-modal07"
            data-modal-toggle="default-modal07"
            type="button"
            onclick="window.location.href='signup'"
            className="focus:outline-none text-violet-600 bg-[#F3D479] hover:bg-[#7e3f98] hover:text-yellow-200 focus:ring-4 focus:ring-yellow-200 font-normal rounded-3xl text-sm px-14 py-4 me-2 mb-14 dark:focus:ring-yellow-900"
          >
            Play the Vedio
          </button>

          <div
            id="default-modal07"
            tabindex="-1"
            aria-hidden="true"
            className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
          >
            <div className="relative p-4 w-full max-w-2xl max-h-full">
              <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                  {/* <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                        Day1
                      </h3> */}
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
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                      />
                    </svg>
                    <span className="sr-only">Close modal</span>
                  </button>
                </div>

                <div className="flex justify-center items-center h-full mt-5 ">
                  <div className="flex flex-col lg:flex-row  ">
                    <div className="w-full ">
                      <video className="h-full w-full " autoPlay muted loop>
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

      <div class="lg:flex justify-center items-center h-full lg:mt-64 ">
        <div class="flex flex-col lg:flex-row lg:mt-14">
          <div class="lg:w-full h-full">
            <Image
              class="object-cover w-full h-full lg:-mt-44 "
              src="/images/landscape.png"
              alt="image description"
              height={200}
              width={200}
            />
          </div>

          <div className="text-white lg:w-1/2 lg:-mt-12 ">
            <div className="bg-[#7E3F98] rounded-xl p-9  m-4  relative lg:end-20 ">
              <div class="w-full ">
                <Image
                  className="lg:ms-64 px-2 w-40 lg:-mt-24"
                  src="/images/CSI_Changes.png"
                  alt="image description"
                  height={100}
                  width={100}
                />
              </div>
              <h1 className="text-4xl  text-white">Landscape</h1>
              <p className="mt-5">
                Landscape data storytelling intertwines diverse data sets to
                craft narratives that contextualise information for specific
                subgroups. It transforms raw data into compelling stories,
                bridging gaps between stakeholders by providing nuanced
                perspectives. By tailoring insights to different groups, it
                fosters a deeper understanding of complex landscapes, promoting
                informed decision-making
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="lg:flex justify-center items-center h-full ">
        <div class="flex flex-col lg:flex-row lg:mt-60">
          <div className="text-white lg:w-1/2 ">
            <div className="bg-[#7E3F98] rounded-xl p-9  m-4  relative lg:start-20 mt-20 ">
              <div class="w-full">
                <Image
                  className="w-40 lg:-ms-28 px-2 lg:-mt-14 "
                  src="/images/CSI_Collaborate.png"
                  alt="image description"
                  height={100}
                  width={100}
                />
              </div>
              <h1 className="text-4xl violet text-white ">Solution Circles</h1>
              <p className="mt-3">
                The Solution Circles approach, inspired by Socratic circles,
                facilitates collaborative problem-solving. Participants engage
                in dialogue, exploring diverse viewpoints to collectively devise
                solutions. This method encourages critical thinking, empathy,
                and shared responsibility, fostering a dynamic environment where
                ideas converge to address challenges through thoughtful and
                inclusive discourse.
              </p>
            </div>
          </div>

          <div class="w-full">
            <Image
              className=" lg:-mt-14 mb-14  object-cover w-full h-full"
              src="/images/solution-circles.png"
              alt="image description"
              height={200}
              width={200}
            />
          </div>
        </div>
      </div>

      <div class="lg:flex justify-center items-center h-full mt-60">
        <div class="flex flex-col lg:flex-row mt-14">
          <div class="w-full">
            <Image
              className="-mt-44  object-cover w-full h-full"
              src="/images/challengers.png"
              alt="image description"
              height={200}
              width={200}
            />
          </div>

          <div className="text-white lg:w-1/2 lg:-mt-36 ">
            <div className="bg-[#7E3F98] rounded-xl p-9  m-4  relative lg:end-20 ">
              <div class="w-full">
                <Image
                  className="lg:ms-64 px-2 w-40 lg:-mt-24 "
                  src="/images/CSI_Disability.png"
                  alt="image description"
                  height={200}
                  width={200}
                />
              </div>
              <h1 className="text-4xl  text-white">Challengers</h1>
              <p className="mt-5">
                Challengers, curates and hosts talks from visionaries propelling
                social change. Through compelling narratives, these speakers
                share innovative initiatives addressing pressing global issues.
                Challengers offers a stage for thought leaders, sparking ideas
                and fostering a global community committed to impactful change,
                creating an immersive and inspiring experience for its audience.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="lg:flex justify-center items-center h-full ">
        <div class="flex flex-col lg:flex-row lg:mt-44">
          <div className="text-white lg:w-1/2 ">
            <div className="bg-[#7E3F98] rounded-xl p-9  m-4  relative lg:start-20 mt-20 ">
              <div class="w-full">
                <Image
                  className="w-40 lg:-ms-32 px-2 -mt-14 "
                  src="/images/CSI_family.png"
                  alt="image description"
                  height={200}
                  width={200}
                />
              </div>
              <h1 className="text-4xl violet text-white ">Marketplace</h1>
              <p className="mt-3">
                The Ideas Marketplace, an offshoot of Solution Circles,
                cultivates collaborative innovation. Participants, inspired by
                diverse perspectives, exchange and refine ideas within this
                dynamic forum. By merging collective intellect, this marketplace
                transforms concepts into actionable solutions, fostering a
                community-driven approach to problem-solving and promoting
                positive change on a broader scale.
              </p>
            </div>
          </div>

          <div class="w-full">
            <Image
              className=" -mt-14 mb-10 object-cover w-full h-full"
              src="/images/marketplace.png"
              alt="image description"
              height={200}
              width={200}
            />
          </div>
        </div>
      </div>

      <div class="lg:flex justify-center items-center h-full mt-60 ">
        <div class="flex flex-col lg:flex-row mt-14">
          <div class="w-full">
            <Image
              className="-mt-44 object-cover w-full h-full"
              src="/images/legends.png"
              alt="image description"
              height={200}
              width={200}
            />
          </div>

          <div className="text-white lg:w-1/2 lg:-mt-24 ">
            <div className="bg-[#7E3F98] rounded-xl p-9  m-4  relative lg:end-20 ">
              <div class="w-full">
                <Image
                  className="lg:ms-64 px-2 w-40 lg:-mt-24"
                  src="/images/CSI_Government.png"
                  alt="image description"
                  height={100}
                  width={100}
                />
              </div>
              <h1 className="text-4xl  text-white">Legends</h1>
              <p className="mt-5">
                We closed the Catalysing Social Impact 2019 convening with the
                “Legends” segment - starting with a solemn memorial for the
                stalwarts who walked so we could run followed by recognising and
                listening to changemakers whom we are lucky to share our
                timeline with.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className=" lg:mx-10 mb-24">
        <p className="text-4xl mt-44 font-semibold ms-5">Gallery</p>
        <div className="lg:flex justify-center items-center h-full mt-5 ">
          <div className="flex flex-col lg:flex-row  lg:w-1/2">
            <div className="w-full ">
              <Image
                className="px-3 relative top-11 object-cover w-full h-full"
                src="/images/image004 (1).jpg"
                alt="image description"
                height={200}
                width={200}
              />

              <button
                data-modal-target="default-modal01"
                data-modal-toggle="default-modal01"
                type="button"
                className="text-white absolute ms-4 hover:text-black border border-gray-800 hover:bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
              >
                Day1
              </button>

              <div
                id="default-modal01"
                tabindex="-1"
                aria-hidden="true"
                className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
              >
                <div className="relative p-4 w-full max-w-2xl max-h-full">
                  <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                        Day1
                      </h3>
                      <button
                        type="button"
                        className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                        data-modal-hide="default-modal01"
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
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                          />
                        </svg>
                        <span className="sr-only">Close modal</span>
                      </button>
                    </div>

                    <div className="flex justify-center items-center h-full mt-5 ">
                      <div className="flex flex-col lg:flex-row  ">
                        <div className="w-full">
                          <Image
                            className="mt-5 px-3"
                            src="/images/image001.jpg"
                            alt="image description"
                            height={100}
                            width={100}
                          />
                        </div>
                        <div className="w-full">
                          <Image
                            className="mt-5 px-3"
                            src="/images/image002.jpg"
                            alt="image description"
                            height={100}
                            width={100}
                          />
                        </div>
                        <div className="w-full ">
                          <Image
                            className="mt-5 px-3 "
                            src="/images/image003.jpg"
                            alt="image description"
                            height={100}
                            width={100}
                          />
                        </div>
                        <div className="w-full ">
                          <Image
                            className="mt-5 px-3 "
                            src="/images/image004.jpg"
                            alt="image description"
                            height={100}
                            width={100}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-center items-center h-full mt-5 ">
                      <div className="flex flex-col lg:flex-row  ">
                        <div className="w-full">
                          <Image
                            className="mt-5 px-3"
                            src="/images/image005.jpg"
                            alt="image description"
                            height={100}
                            width={100}
                          />
                        </div>
                        <div className="w-full">
                          <Image
                            className="mt-5 px-3"
                            src="/images/image006.jpg"
                            alt="image description"
                            height={100}
                            width={100}
                          />
                        </div>
                        <div className="w-full ">
                          <Image
                            className="mt-5 px-3 "
                            src="/images/image007.jpg"
                            alt="image description"
                            height={100}
                            width={100}
                          />
                        </div>
                        <div className="w-full ">
                          <Image
                            className="mt-5 px-3 "
                            src="/images/image008.jpg"
                            alt="image description"
                            height={100}
                            width={100}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-center items-center h-full mt-5 ">
                      <div className="flex flex-col lg:flex-row  ">
                        <div className="w-full">
                          <Image
                            className="mt-5 px-3"
                            src="/images/image009.jpg"
                            alt="image description"
                            height={100}
                            width={100}
                          />
                        </div>
                        <div className="w-full">
                          <Image
                            className="mt-5 px-3"
                            src="/images/image010.jpg"
                            alt="image description"
                            height={100}
                            width={100}
                          />
                        </div>
                        <div class="w-full ">
                          <Image
                            className="mt-5 px-3 "
                            src="/images/image011.jpg"
                            alt="image description"
                            height={100}
                            width={100}
                          />
                        </div>
                        <div className="w-full ">
                          <Image
                            className="mt-5 px-3 "
                            src="/images/image012.jpg"
                            alt="image description"
                            height={100}
                            width={100}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-center items-center h-full mt-5 ">
                      <div className="flex flex-col lg:flex-row  ">
                        <div className="w-full">
                          <Image
                            className="mt-5 px-3"
                            src="/images/image013.jpg"
                            alt="image description"
                            height={100}
                            width={100}
                          />
                        </div>
                        <div className="w-full">
                          <Image
                            className="mt-5 px-3"
                            src="/images/image014.jpg"
                            alt="image description"
                            height={100}
                            width={100}
                          />
                        </div>
                        <div className="w-full ">
                          <Image
                            className="mt-5 px-3 "
                            src="/images/image015.jpg"
                            alt="image description"
                            height={100}
                            width={100}
                          />
                        </div>
                        <div className="w-full "></div>
                      </div>
                    </div>

                    <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                      <button
                        data-modal-hide="default-modal01"
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

          <div className="lg:w-1/2 ">
            <Image
              className="px-3 relative top-11 object-cover w-full h-full"
              src="/images/image004 (1)0.jpg"
              alt="image description"
              height={200}
              width={200}
            />

            <button
              data-modal-target="default-modal"
              data-modal-toggle="default-modal"
              type="button"
              className="text-white absolute ms-4 hover:text-black border border-gray-800 hover:bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
            >
              Day2
            </button>

            <div
              id="default-modal"
              tabindex="-1"
              aria-hidden="true"
              class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
            >
              <div className="relative p-4 w-full max-w-2xl max-h-full">
                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                  <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      Day2
                    </h3>
                    <button
                      type="button"
                      class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                      data-modal-hide="default-modal"
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
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                        />
                      </svg>
                      <span className="sr-only">Close modal</span>
                    </button>
                  </div>

                  <div class="flex justify-center items-center h-full mt-5 ">
                    <div class="flex flex-col lg:flex-row  ">
                      <div class="w-full">
                        <Image
                          className="mt-5 px-3"
                          src="/images/image0001 (1).jpg"
                          alt="image description"
                          height={100}
                          width={100}
                        />
                      </div>
                      <div class="w-full">
                        <Image
                          className="mt-5 px-3"
                          src="/images/image0002 (1).jpg"
                          alt="image description"
                          height={100}
                          width={100}
                        />
                      </div>
                      <div class="w-full ">
                        <Image
                          className="mt-5 px-3 "
                          src="/images/image0003 (1).jpg"
                          alt="image description"
                          height={100}
                          width={100}
                        />
                      </div>
                      <div class="w-full ">
                        <Image
                          className="mt-5 px-3 "
                          src="/images/image004 (1)0.jpg"
                          alt="image description"
                          height={100}
                          width={100}
                        />
                      </div>
                    </div>
                  </div>

                  <div class="flex justify-center items-center h-full mt-5 ">
                    <div class="flex flex-col lg:flex-row  ">
                      <div class="w-full">
                        <Image
                          className="mt-5 px-3"
                          src="/images/image005 (1).jpg"
                          alt="image description"
                          height={100}
                          width={100}
                        />
                      </div>
                      <div class="w-full">
                        <Image
                          className="mt-5 px-3"
                          src="/images/image006 (2).jpg"
                          alt="image description"
                          height={100}
                          width={100}
                        />
                      </div>
                      <div class="w-full ">
                        <Image
                          className="mt-5 px-3 "
                          src="/images/image0007 (1).jpg"
                          alt="image description"
                          height={100}
                          width={100}
                        />
                      </div>
                      <div class="w-full ">
                        <Image
                          className="mt-5 px-3 "
                          src="/images/image0008 (1).jpg"
                          alt="image description"
                          height={100}
                          width={100}
                        />
                      </div>
                    </div>
                  </div>

                  <div class="flex justify-center items-center h-full mt-5 ">
                    <div class="flex flex-col lg:flex-row  ">
                      <div class="w-full">
                        <Image
                          className="mt-5 px-3"
                          src="/images/image0009 (1).jpg"
                          alt="image description"
                          height={100}
                          width={100}
                        />
                      </div>
                      <div class="w-full">
                        <Image
                          className="mt-5 px-3"
                          src="/images/image0009 (1).jpg"
                          alt="image description"
                          height={100}
                          width={100}
                        />
                      </div>
                      <div className="w-full "></div>
                      <div className="w-full "></div>
                    </div>
                  </div>

                  <div class="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                    <button
                      data-modal-hide="default-modal"
                      type="button"
                      class="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
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

      <div class="lg:flex justify-center items-center h-full ">
        <div class="flex flex-col lg:flex-row px-10 ">
          <div className="lg:w-1/2   ">
            <Image
              className="px-3 object-cover w-full h-full "
              src="/images/video-cover2.png"
              alt="image description"
              height={200}
              width={200}
            />
            <Image
              data-modal-target="default-modal3"
              data-modal-toggle="default-modal3"
              className="text-white
              height={100}
              width={100} relative bottom-32 ms-32 w-14 "
              src="/images/play-circle-filled.svg"
              alt="image description"
              height={200}
              width={200}
            />

            <div
              id="default-modal3"
              tabindex="-1"
              aria-hidden="true"
              class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
            >
              <div className="relative p-4 w-full max-w-2xl max-h-full">
                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                  <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      vedio
                    </h3>
                    <button
                      type="button"
                      class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                      data-modal-hide="default-modal3"
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
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                        />
                      </svg>
                      <span className="sr-only">Close modal</span>
                    </button>
                  </div>

                  <div className="flex justify-center items-center h-full mt-5 ">
                    <div className="flex flex-col lg:flex-row  ">
                      <div className="w-full ">
                        <video className="h-full w-full " autoPlay muted loop>
                          <source
                            src="/vedio/cphc-for-subtitle.mp4"
                            type="video/mp4"
                          />
                        </video>
                      </div>
                    </div>
                  </div>

                  <div class="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                    <button
                      data-modal-hide="default-modal3"
                      type="button"
                      class="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2   ">
            <Image
              className="px-3 object-cover w-full h-full"
              src="/images/video-cover1.png"
              alt="image description"
              height={200}
              width={200}
            />
            <Image
              data-modal-target="default-modal4"
              data-modal-toggle="default-modal4"
              className="text-white
              height={100}
              width={100} relative bottom-32 ms-32 w-14 "
              src="/images/play-circle-filled.svg"
              alt="image description"
              height={200}
              width={200}
            />

            <div
              id="default-modal4"
              tabindex="-1"
              aria-hidden="true"
              class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
            >
              <div className="relative p-4 w-full max-w-2xl max-h-full">
                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                  <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      vedio
                    </h3>
                    <button
                      type="button"
                      class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                      data-modal-hide="default-modal4"
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
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                        />
                      </svg>
                      <span className="sr-only">Close modal</span>
                    </button>
                  </div>

                  <div className="flex justify-center items-center h-full mt-5 ">
                    <div className="flex flex-col lg:flex-row  ">
                      <div className="w-full ">
                        <video className="h-full w-full " autoPlay muted loop>
                          <source
                            src="/vedio/cphc-for-subtitle.mp4"
                            type="video/mp4"
                          />
                        </video>
                      </div>
                    </div>
                  </div>

                  <div class="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                    <button
                      data-modal-hide="default-modal4"
                      type="button"
                      class="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2   ">
            <Image
              className="px-3 object-cover w-full h-full "
              src="/images/video-cover3.png"
              alt="image description"
              height={200}
              width={200}
            />
            <Image
              data-modal-target="default-modal5"
              data-modal-toggle="default-modal5"
              className="text-white relative bottom-32 lg:ms-32 w-14 "
              src="/images/play-circle-filled.svg"
              alt="image description"
              height={200}
              width={200}
            />

            <div
              id="default-modal5"
              tabindex="-1"
              aria-hidden="true"
              class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
            >
              <div className="relative p-4 w-full max-w-2xl max-h-full">
                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                  <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      vedio
                    </h3>
                    <button
                      type="button"
                      class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                      data-modal-hide="default-modal5"
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
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                        />
                      </svg>
                      <span className="sr-only">Close modal</span>
                    </button>
                  </div>

                  <div className="flex justify-center items-center h-full mt-5 ">
                    <div className="flex flex-col lg:flex-row  ">
                      <div className="w-full ">
                        <video className="h-full w-full " autoPlay muted loop>
                          <source
                            src="/vedio/cphc-for-subtitle.mp4"
                            type="video/mp4"
                          />
                        </video>
                      </div>
                    </div>
                  </div>

                  <div class="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                    <button
                      data-modal-hide="default-modal5"
                      type="button"
                      class="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2  ">
            <Image
              className="px-3 object-cover w-full h-full "
              src="/images/video-cover4.png"
              alt="image description"
              height={200}
              width={200}
            />
            <Image
              data-modal-target="default-modal6"
              data-modal-toggle="default-modal6"
              className="text-white  ms-32 relative bottom-32 w-14   "
              src="/images/play-circle-filled.svg"
              alt="image description"
              height={200}
              width={200}
            />

            <div
              id="default-modal6"
              tabindex="-1"
              aria-hidden="true"
              className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
            >
              <div className="relative p-4 w-full max-w-2xl max-h-full">
                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                  <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      vedio
                    </h3>
                    <button
                      type="button"
                      class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                      data-modal-hide="default-modal6"
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
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                        />
                      </svg>
                      <span className="sr-only">Close modal</span>
                    </button>
                  </div>

                  <div className="flex justify-center items-center h-full mt-5 ">
                    <div className="flex flex-col lg:flex-row  ">
                      <div className="w-full ">
                        <video className="h-full w-full " autoPlay muted loop>
                          <source
                            src="/vedio/cphc-for-subtitle.mp4"
                            type="video/mp4"
                          />
                        </video>
                      </div>
                    </div>
                  </div>

                  <div class="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                    <button
                      data-modal-hide="default-modal6"
                      type="button"
                      class="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
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

      <div className="text-center mt-10 mb-10">
        <a
          href="CSI2024"
          class="focus:outline-none text-violet-600 bg-[#F3D479] hover:bg-[#7e3f98] hover:text-yellow-200 focus:ring-4 focus:ring-yellow-200 font-normal rounded-3xl text-sm px-14 py-4 me-2 mb-14 dark:focus:ring-yellow-900"
        >
          CSI 2019 Report
        </a>
      </div>
    </>
  )
}

export default Csi2019Compo
