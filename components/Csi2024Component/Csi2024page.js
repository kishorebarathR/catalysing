import React from "react"
import Image from "next/image"

const Csi2024page = () => {
  return (
    <>
      <div className="lg:grid grid-cols-2 m-5 rounded-lg-5 lg:mt-64">
        <div className="rounded-lg-1">
          <Image
            className="w-full bg-white"
            src="/images/CSI_social_post.jpg"
            alt="image description"
            height={200}
            width={200}
          />
        </div>

        <div className="flex items-middle justify-center flex-col  bg-[#4B2361]">
          <p className=" p-5 text-5xl  text-white rounded-lg-5">
            1st - 2nd August, 2024,
          </p>
          <p className=" p-5 text-5xl text-end text-white me-10 mb-0 ">
            New Delhi
          </p>
        </div>
      </div>

      <div className="lg:flex justify-center items-center  h-full ">
        <div className="flex flex-col lg:flex-row mt-24">
          <div className="w-full h-full">
            <Image
              className="object-cover w-full h-full lg:mt-64"
              src="/images/placeholder.png"
              alt="image description"
              height={200}
              width={200}
            />
          </div>

          <div className="text-white lg:w-1/2 ">
            <div className="bg-[#7E3F98] rounded-xl p-9  m-4  relative lg:end-20 ">
              <div className="w-full">
                <Image
                  className="lg:ms-64 px-2 w-40 lg:-mt-24"
                  src="/images/CSI_growth.png"
                  alt="image description"
                  height={200}
                  width={200}
                />
              </div>
              <h2 className="text-4xl violet text-white">
                Unlock || The<p className=""></p> IDG Journey
              </h2>
              <h3 className="mt-3 text-md">
                Inner Development Goals (IDGs) are a framework for cultivating
                personal qualities that contribute to a better world. Unlike
                traditional goals focused on achievement, IDGs aim for inner
                growth that fuels positive social change. Here&rsquo;s the gist:{" "}
              </h3>
              <ul className="list-disc ps-4 ms-3 space-y-1 mt-3">
                <li className="violet">
                  Focus: Develop skills and qualities for purposeful,
                  sustainable living.
                </li>
                <li className="violet">
                  Benefits: Increased well-being, stronger relationships, and
                  effective action on global challenges.
                </li>
                <li className=" violet">
                  Structure: A framework with five dimensions (self, community,
                  etc.) and 23 sub-categories like self-awareness, empathy, and
                  collaboration.
                </li>
                <li className="violet">
                  Overall Goal: Bridge the gap between personal growth and
                  positive societal transformations.
                </li>
              </ul>
              <p className="mt-3">
                Think of IDGs as a roadmap for inner work that empowers you to
                become a positive force for change.
              </p>
              <p className="mb-6 mt-3 text-lg text-left text-dark-300 font-medium ">
                Ignite Your Inner Changemaker: Workshop@CSI2024 | Unleash your
                potential to create positive social impact.
              </p>
              <p>
                This interactive workshop explores the link between inner
                development and powerful social action. Through self-reflection
                and goal setting, you&rsquo;ll:
              </p>
              <ul className="list-disc ps-4 ms-3 space-y-1 mt-3">
                <li>Clarify your values and passions for social change.</li>
                <li>Identify personal strengths to fuel your impact.</li>
                <li>
                  Develop achievable goals to create real-world difference
                </li>
              </ul>
              <p className="mt-3">
                Leave empowered to translate your inner fire into lasting social
                good.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:flex justify-center items-center h-full  ">
        <div className="flex flex-col lg:flex-row mt-32">
          <div className="text-white lg:w-1/2 ">
            <div className="bg-[#7E3F98] rounded-xl p-9  m-4  relative lg:start-20  lg:mt-24">
              <div class="w-full">
                <Image
                  className="w-40 lg:-ms-28 px-2 lg:-mt-24"
                  src="/images/CSI_Togetherness.png"
                  alt="image description"
                  height={200}
                  width={200}
                />
              </div>
              <h1 className="text-4xl violet text-white ">
                #Unconference <p className=""></p> || The SDG<p></p>Conclave
              </h1>
              <p className="mt-3">
                India&rsquo;s SDG journey is a marathon, not a sprint. While
                strides in health and clean energy are commendable, gaps remain
                in poverty eradication, education, gender equality, and
                sustainable cities. The COVID-19 setback is real, but
                India&rsquo;s commitment to social and economic equity is
                unwavering. This is a race for a brighter future, and India is
                accelerating efforts to ensure no one is left behind by 2030. It
                is time to get our hands dirty; re-invigorate ourselves and
                bring all hands on deck. It is time to #Unconference.
              </p>
            </div>
          </div>

          <div className="w-full h-full">
            <Image
              className="object-cover w-full h-full"
              src="/images/placeholder.png"
              alt="image description"
              height={200}
              width={200}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Csi2024page
