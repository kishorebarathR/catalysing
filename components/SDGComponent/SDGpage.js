import React from "react"
import Image from "next/image"

const SDGpage = () => {
  return (
    <>
      <div className="lg:flex justify-center items-center mt-52 ">
        <div className="flex flex-col lg:flex-row  justify-center items-center  ">
          <div className="text-white ">
            <h1 className="text-5xl  text-black ">
              <b>Welcome</b> to the
            </h1>
            <h1 className="l-title text-5xl text-black relative">
              <b>SDG Action Labs</b>
            </h1>
          </div>
          <div>
            <Image
              className=""
              src="/images/sdg-placeholder.png"
              alt="image description"
              width={200} height={200}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row  justify-center items-center  ">
      <div className="lg:flex justify-center items-center lg:mt-10 mb-5 ">
        <div>
          <Image
            className="w-30 mx-3"
            src="/images/sdg-3.svg"
              alt="image description"
              width={200} height={200}
          />
        </div>
        <div>
          <Image
            className="w-36 mx-3"
            src="/images/sdg-1.svg"
              alt="image description"
              width={200} height={200}
          />
        </div>
        <div>
          <Image
            className="w-36 mx-3"
            src="/images/sdg-2.svg"
              alt="image description"
              width={200} height={200}
          />
        </div>
      </div>
      </div>

      <div className="flex flex-col lg:flex-row  justify-center items-center  mt-20">
        <div className="text-white text-center  ">
          <h1 className="text-5xl  text-black ">About the</h1>
          <h1 className="l-title text-5xl lg:mx-96 text-black relative">
            <b>SDG Action Labs</b>
          </h1>
        </div>
      </div>
      <div class="container mx-auto lg:p-5 mt-6">
        <div class="text-black text-center lg:text-left">
          <p class="p-5 lg:mx-32">
            As we approach 2030, the urgency to foster an environment conducive
            to transformative social enterprises, equitable resource
            mobilisation, and locally-led development has never been more
            evident. The Sustainable Development Goals (SDGs) demand our
            collective action for lasting impact. Enter the SDG Action Labs, a
            visionary platform that shapes the narratives for change.
          </p>
        </div>
      </div>

      <div class="flex justify-center items-center h-full ">
        <div class="flex flex-col lg:flex-row lg:mt-10">
          <div class="w-full">
            <Image
              className=" "
              src="/images/plc-2.png"
              alt="image description"
              width={200} height={200}
            />
          </div>
          <div className="text-white lg:w-1/2 lg:mt-36 ">
            <div className="bg-[#7E3F98] rounded-xl p-9  m-4  relative lg:end-20  ">
              <h1 className="text-4xl violet text-white ">
                The <br></br>
                <b>Journey</b>
                <br></br>
                <b>Ahead</b>
              </h1>
              <p className="mt-3">
                The event—a collaborative convergence of dynamic minds—is set to
                unfold in Bengaluru, Karnataka. A multi-stakeholder symposium
                that marries experiential learning with forward-looking
                discussions, the SDG Action Labs seeks to redefine the
                trajectory of sustainable development.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row  justify-center items-center  lg:mt-10">
        <div className="text-white text-center  ">
          <h1 className="l-title text-5xl lg:mx-96 text-black relative">
            <b>Beyond Knowledge</b>
          </h1>
          <h1 className="text-5xl lg:mx-96 text-black">to Action</h1>
        </div>
      </div>

      <div className="flex justify-center items-center h-full ">
        <div className="flex flex-col lg:flex-row mt-10">
          <div className="w-full lg:w-1/2">
            <Image
              className=" "
              src="/images/pcl-3.png"
              alt="image description"
              width={200} height={200}
            />
          </div>
          <div className="   ">
            <h1 className="text-black text-4xl ">
              <b>Objectives</b>
            </h1>
            <div className="mt-5 ">
              <Image
                className=" "
                src="/images/icon-1.png"
                alt="image description"
                width={200} height={200}
              />
              <p>
                Take stock of India’s progress<p></p> towards the SDGs
              </p>
            </div>

            <div>
              <Image
                className="mt-8 "
                src="/images/icon-2.png"
                alt="image description"
                width={200} height={200}
              />
              <p>
                Look for positive action and work<p></p>
                collectively to deliver India’s SDG goals
              </p>
            </div>

            <div>
              <Image
                className="mt-8 "
                src="/images/icon-3.png"
                alt="image description"
                width={200} height={200}
              />
              <p>
                Create a roadmap for accelerating<p></p>
                progress towards the SDGs
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:flex justify-center items-center h-full mt-14">
        <div className="flex flex-col lg:flex-row mt-10">
          <div className="  lg:w-1/2 mt-20 lg:ms-24">
            <h1 className="text-black text-4xl ">
              <b>Outcomes</b>
            </h1>
            <div className="mt-5 ">
              <Image
                className=" "
                src="/images/icon-1 (1).png"
                alt="image description"
                width={200} height={200}
              />
              <p>
                Arrive at stakeholder consensus on how to achieve SDG 2030
                targets through emulating good practices
              </p>
            </div>

            <div>
              <Image
                className="mt-8 "
                src="/images/icon-2.png"
                alt="image description"
                width={200} height={200}
              />
              <p>
                Elevate Catalyst 2030’s brand and positioning as a Social
                Entrepreneur network with significant reach and impact and the
                capability to accelerate SDGs through social enterprises
              </p>
            </div>
          </div>
          <div className="w-full ">
            <Image
              className=" px-14"
              src="/images/plc-3.png"
              alt="image description"
              width={200} height={200}
            />
          </div>
        </div>
      </div>

      <div class="lg:flex flex-col justify-center items-center lg:mt-24">
        <div class="text-black text-center">
          <h1 class="l-title text-5xl mx-4 lg:mx-96 text-black relative">
            <b>Reinventing</b>
          </h1>
          <h1 class="text-5xl mx-4 lg:mx-96 text-black">the Conference</h1>
          <p class="text-xl mt-5 mx-4">
            Progress on SDG Indicators in 707 districts of India (Midline
            Assessment using NFHS 2016 and 2021)
          </p>
          <p class="mt-2 mx-4">
            India is trailing behind in achieving more than 50% of indicators
            under the (SDGs) India has fallen behind on 19 of 33 indicators
          </p>
          <p class="text-xl font-semibold mt-3 mx-4">
            75% of Indian districts are Off-Target on the following Indicators:
          </p>
        </div>
      </div>

      <div class="lg:flex flex-row justify-center mt-14 ">
        <div class="flex flex-col items-center justify-start lg:w-1/3  mt-10 ">
          <Image class="" src="/images/icon-4.png" alt="image description"
          width={200} height={200}
          />
          <h1 class="text-xl text-black">
            <b>Access To Basic Services</b>
          </h1>
        </div>

        <div class="flex flex-col items-center justify-start lg:w-1/3  mt-10">
          <Image class="" src="/images/icon-5.png" alt="image description" width={200} height={200}/>
          <h1 class="text-xl text-black">
            <b>Wasting And Overweight Children</b>
          </h1>
        </div>

        <div class="flex flex-col items-center justify-start lg:w-1/3  mt-10">
          <Image class="" src="/images/icon-6.png" alt="image description"
          width={200} height={200}
          />
          <h1 class="text-xl text-black">
            <b>Anaemia</b>
          </h1>
        </div>
      </div>

      <div class="lg:flex flex-row justify-center mt-14 ">
        <div class="flex flex-col items-center justify-start lg:w-1/3  mt-10">
          <Image class="" src="/images/icon-7.png" alt="image description"
          width={200} height={200}
          />
          <h1 class="text-xl text-black">
            <b>Child Marriage</b>
          </h1>
        </div>

        <div class="flex flex-col items-center justify-start lg:w-1/3  mt-10">
          <Image class="" src="/images/icon-8.png" alt="image description"
          width={200} height={200}
          />
          <h1 class="text-xl text-black">
            <b>Partner Violence</b>
          </h1>
        </div>

        <div class="flex flex-col items-center justify-start lg:w-1/3 mt-10">
          <Image class="" src="/images/icon-9.png" alt="image description"
          width={200} height={200}
          />
          <h1 class="text-xl text-black">
            <b>Tobacco Use</b>
          </h1>
        </div>
      </div>

      <div class="flex flex-row justify-center mt-14 ">
        <div class="flex flex-col items-center justify-start w-1/3  mt-10">
          <Image class="" src="/images/icon-10.png" alt="image description"
          width={200} height={200}
          />
          <h1 class="text-xl text-black">
            <b>Modern Contraceptive Use</b>
          </h1>
        </div>
      </div>


      
    </>
  )
}

export default SDGpage
