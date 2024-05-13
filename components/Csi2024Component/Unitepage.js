import React from "react"
import Image from "next/image"

const Unitepage = () => {
  return (
    <>
      <div className="lg:flex justify-center items-center h-full bg-[#7e3f98] text-white mb-5 m-5 rounded-lg mt-14">
        <div className="flex flex-col lg:flex-row ">
          <div className="w-40">
            <Image
              className="mx-5 mb-5 lg:-mt-24"
              src="/images/CSI_Solutions Circle.png"
              alt="image description"
            />
          </div>
        </div>

        <div className=" p-4  col-span-1 lg:mx-6 mt-10">
          <h1 className="text-4xl ">
            Unite. Innovate. Act: Shape India&rsquo;s Sustainable Future at the SDG
            Conclave!
          </h1>
          <ul className="list-disc p-4 space-y-2 ">
            <li>
              This powerful platform brings together leading minds from across
              India. We unite under the vision of the UN&rsquo;s Sustainable
              Development Goals (SDGs), working towards a future free from
              poverty, with thriving communities and a healthy planet.
            </li>
            <li>
              Engage with policymakers, industry stalwarts, and grassroots
              heroes. Spark discussions on tackling India&rsquo;s unique challenges
              through innovative solutions. Discover and contribute to
              initiatives that build a truly inclusive and sustainable
              &rsquo;Atmanirbhar Bharat&rsquo; (Self-reliant India).
            </li>
            <li>
              Leave inspired to translate ideas into action. Together, let&rsquo;s
              create a powerful movement that propels India towards a brighter,
              more sustainable future for all.
            </li>
          </ul>
        </div>
      </div>

      <div className="lg:flex justify-center items-center h-full bg-[#7E3F98] text-white mb-5 m-5 rounded-lg mt-14 ">
        <div className="flex flex-col lg:flex-row ">
          <div className="w-40">
            <Image
              className="mx-5 mb-5 "
              src="/images/CSI_Inner development circle.png"
              alt="image description"
            />
          </div>
        </div>

        <div className=" p-4  col-span-1 mx-6 mt-10">
          <h1 className="text-4xl ">SDG Action Lab</h1>
          <ul className="list-disc p-4 space-y-2 ">
            <li>
              As we approach 2030, the urgency to foster an environment
              conducive to transformative social enterprises, equitable resource
              mobilisation, and locally-led development has never been more
              evident. The Sustainable Development Goals (SDGs) demand our
              collective action for lasting impact. Enter the SDG Action Labs, a
              visionary platform that shapes the narratives for change.
            </li>
          </ul>
        </div>
      </div>

      <div className="lg:flex justify-center items-center h-full bg-[#7E3F98] text-white mb-5 m-5 rounded-lg mt-14 ">
        <div className="flex flex-col lg:flex-row ">
          <div className="w-40">
            <Image
              className="mx-5 mb-5 lg:-mt-14"
              src="/images/CSI_networks.png"
              alt="image description"
            />
          </div>
        </div>

        <div className=" p-4  col-span-1 mx-6 mt-10">
          <h1 className="text-4xl ">Learning Corridor</h1>
          <ul className="list-disc p-4 space-y-2 ">
            <li>
              Uncover India&rsquo;s path to a sustainable future at the SDG Learning
              Corridor! This interactive map will connect you to a network of
              inspiring learning sites across the nation. Go beyond theory!
              Explore &rsquo;wow factors&rsquo; - groundbreaking innovations and success
              stories - alongside the realities of everyday life. Delve into the
              wisdom of indigenous knowledge, local solutions, and lived
              experiences.
            </li>
            <li>
              But the journey doesn&rsquo;t end there! Meet the passionate communities
              and organisations at the heart of this movement. Learn from their
              struggles and triumphs, understand what truly works. Become part
              of a collaborative force striving to achieve the SDGs by 2030.
            </li>
            <li>
              The SDG Learning Corridor: Knowledge, Action, and Community. Let&rsquo;s
              build a brighter future, together!
            </li>
          </ul>
        </div>
      </div>

      <div className="text-center mt-14 mb-10">

      <a href="signup" class="focus:outline-none text-violet-600 bg-[#F3D479] hover:bg-[#7e3f98] hover:text-yellow-200 focus:ring-4 focus:ring-yellow-200 font-normal rounded-3xl text-sm px-14 py-4 me-2 mb-14 dark:focus:ring-yellow-900">
  Interest Form: CSI 2024
</a>

      </div>
    </>
  )
}

export default Unitepage
