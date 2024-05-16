import React from "react"
import Image from "next/image"

const SDGpage = () => {
  return (
    <>
      <div className="bg-[#D3BDDC]">
        <div className="lg:flex justify-center items-center custom-container ">
          <div className="flex flex-col lg:flex-row  justify-center items-center  ">
            <div className="text-white ">
              <h1 className="text-5xl  text-black ">
                <b>Welcome</b> to the
              </h1>
              <h3 className="l-title z-10 text-5xl text-black relative">
                <b>SDG Action Labs</b>
              </h3>
            </div>
            <div>
              <Image
                className="w-full lg:h-[700px] "
                src="/images/sdg-placeholder.png"
                alt="image description"
                width={200}
                height={200}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row  justify-center items-center  ">
          <div className="flex justify-center items-center lg:mt-10 mb-5 ">
            <div>
              <Image
                className="w-28 lg:mx-3"
                src="/images/sdg-3.svg"
                alt="image description"
                width={200}
                height={200}
              />
            </div>
            <div>
              <Image
                className="w-36 lg:mx-3"
                src="/images/sdg-1.svg"
                alt="image description"
                width={200}
                height={200}
              />
            </div>
            <div>
              <Image
                className="w-36 lg:mx-3"
                src="/images/sdg-2.svg"
                alt="image description"
                width={200}
                height={200}
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row  justify-center items-center  mt-20">
          <div className="text-white text-center  ">
            <h3 className="text-5xl  text-black ">About the</h3>
            <h3 className="l-title z-10 text-5xl lg:mx-96 text-black relative">
              <b>SDG Action Labs</b>
            </h3>
          </div>
        </div>
        <div className="container mx-auto lg:p-5 mt-6">
          <div className="text-black text-center lg:text-left">
            <p className="p-5 lg:mx-32">
              As we approach 2030, the urgency to foster an environment
              conducive to transformative social enterprises, equitable resource
              mobilisation, and locally-led development has never been more
              evident. The Sustainable Development Goals (SDGs) demand our
              collective action for lasting impact. Enter the SDG Action Labs, a
              visionary platform that shapes the narratives for change.
            </p>
          </div>
        </div>
      </div>

      <div class="flex justify-center items-center h-full ">
        <div class="flex flex-col lg:flex-row lg:mt-10">
          <div class="w-full">
            <Image
              className="w-full lg:h-[700px] "
              src="/images/plc-2.png"
              alt="image description"
              width={200}
              height={200}
            />
          </div>
          <div className="text-white lg:w-1/2 lg:mt-36 ">
            <div className="bg-[#7E3F98] rounded-xl p-9  m-4  relative lg:end-20  ">
              <h3 className="text-4xl violet text-white ">
                The <br></br>
                <b>Journey</b>
                <br></br>
                <b>Ahead</b>{" "}
              </h3>
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
          <h3 className="l-title text-5xl lg:mx-96 text-black relative">
            <b>Beyond Knowledge</b>
          </h3>
          <h3 className="text-5xl lg:mx-96 text-black">to Action</h3>
        </div>
      </div>

      <div className="flex justify-center items-center h-full ">
        <div className="flex flex-col lg:flex-row mt-10">
          <div className="w-full lg:w-1/2">
            <Image
              className="w-[1000px] lg:h-[620px] "
              src="/images/pcl-3.png"
              alt="image description"
              width={200}
              height={200}
            />
          </div>
          <div className="">
            <h3 className="text-black text-4xl ">
              <b>Objectives</b>
            </h3>
            <div className="mt-5 ">
              <Image
                className=" w-32"
                src="/images/icon-1.png"
                alt="image description"
                width={200}
                height={200}
              />
              <p>
                Take stock of India’s progress<p></p> towards the SDGs
              </p>
            </div>

            <div>
              <Image
                className="mt-8 w-32 "
                src="/images/icon-2.png"
                alt="image description"
                width={200}
                height={200}
              />
              <p>
                Look for positive action and work<p></p>
                collectively to deliver India’s SDG goals
              </p>
            </div>

            <div>
              <Image
                className="mt-8 w-32 "
                src="/images/icon-3.png"
                alt="image description"
                width={200}
                height={200}
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
        <div className="flex flex-col-reverse lg:flex-row mt-10">
          <div className="  lg:w-1/2 mt-20 lg:ms-24">
            <h3 className="text-black text-4xl ">
              <b>Outcomes</b>
            </h3>
            <div className="mt-5 ">
              <Image
                className="w-32 "
                src="/images/icon-1 (1).png"
                alt="image description"
                width={200}
                height={200}
              />
              <p>
                Arrive at stakeholder consensus on how to achieve SDG 2030
                targets through emulating good practices
              </p>
            </div>

            <div>
              <Image
                className="mt-8 w-32 "
                src="/images/icon-2.png"
                alt="image description"
                width={200}
                height={200}
              />
              <p>
                Elevate Catalyst 2030’s brand and positioning as a Social
                Entrepreneur network with significant reach and impact and the
                capability to accelerate SDGs through social enterprises
              </p>
            </div>
          </div>
          <div>
            <Image
              className="w-[900px] lg:h-[620px] "
              src="/images/plc-3.png"
              alt="image description"
              width={200}
              height={200}
            />
          </div>
        </div>
      </div>

      <div className="lg:flex flex-col justify-center items-center lg:mt-24">
        <div className="text-black text-center">
          <h3 className="l-title text-5xl mx-4 lg:mx-96 text-black relative">
            <b>Reinventing</b>
          </h3>
          <h3 className="text-5xl mx-4 lg:mx-96 text-black">the Conference</h3>
          <p className="text-xl mt-5 mx-4">
            Progress on SDG Indicators in 707 districts of India (Midline
            Assessment using NFHS 2016 and 2021)
          </p>
          <p className="mt-2 mx-4">
            India is trailing behind in achieving more than 50% of indicators
            under the (SDGs) India has fallen behind on 19 of 33 indicators
          </p>
          <p className="text-xl font-semibold mt-3 mx-4">
            75% of Indian districts are Off-Target on the following Indicators:
          </p>
        </div>
      </div>
      <div className="">
        <div className="lg:flex flex-row items-center justify-center mt-14  ">
          <div className="flex flex-col items-center justify-center lg:w-1/3">
            <Image
              className="w-32"
              src="/images/icon-4.png"
              alt="image description"
              width={200}
              height={200}
            />
            <h3 className="text-xl text-black text-center pt-3">
              <b>Access To Basic Services</b>
            </h3>
          </div>

          <div className="flex flex-col items-center justify-center lg:w-1/3 border-s  border-e border-dotted border-black p-10">
            <Image
              className="w-32"
              src="/images/icon-5.png"
              alt="image description"
              width={200}
              height={200}
            />
            <h3 className="text-xl text-black text-center pt-3">
              <b>Wasting And Overweight Children</b>
            </h3>
          </div>

          <div className="flex flex-col items-center justify-start lg:w-1/3 ">
            <Image
              className="w-32 "
              src="/images/icon-6.png"
              alt="image description"
              width={200}
              height={200}
            />
            <h3 className="text-xl text-black text-center pt-3">
              <b>Anaemia</b>
            </h3>
          </div>
        </div>

        <div className="lg:flex flex-row justify-center  lg:border-t border-dotted border-black">
          <div className="flex flex-col items-center justify-start lg:w-1/3 mt-10">
            <Image
              className="w-32"
              src="/images/icon-7.png"
              alt="image description"
              width={200}
              height={200}
            />
            <h3 className="text-xl text-black pt-3">
              <b>Child Marriage</b>
            </h3>
          </div>

          <div className="flex flex-col items-center justify-start lg:w-1/3 lg:border-s  lg:border-e border-dotted border-black p-10">
            <Image
              className="w-32"
              src="/images/icon-8.png"
              alt="image description"
              width={200}
              height={200}
            />
            <h3 className="text-xl text-black p-3">
              <b>Partner Violence</b>
            </h3>
          </div>

          <div className="flex flex-col items-center justify-start lg:w-1/3 mt-10">
            <Image
              className="w-32"
              src="/images/icon-9.png"
              alt="image description"
              width={200}
              height={200}
            />
            <h3 className="text-xl text-black pt-3">
              <b>Tobacco Use</b>
            </h3>
          </div>
        </div>

        <div className="flex flex-row justify-center lg:border-t border-dotted border-black">
          <div className="flex flex-col items-center justify-start lg:w-1/3 lg:border-s lg:border-e p-10 border-dotted border-black ">
            <Image
              className="w-32"
              src="/images/icon-10.png"
              alt="image description"
              width={200}
              height={200}
            />
            <h3 className="text-xl text-black pt-3">
              <b>Modern Contraceptive Use</b>
            </h3>
          </div>
        </div>
      </div>
    </>
  )
}

export default SDGpage
