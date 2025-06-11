import Image from 'next/image'
import React from 'react'

const CallToAction = () => {
  return (

      <section className="bg-[#0A0914] w-full py-32 relative">
        <div className="max-w-screen-xl mx-auto px-4 md:px-20 relative z-10 space-y-10">
          <div>
            <h2 className="md:text-[48px] text-[32px]  font-semibold text-white md:text-center ">
              Get started for free
            </h2>
            <p className="text-gray-300 md:text-center  md:text-[22px] text-[18px] ">
              Build and test for as long as you need.
              <br/> Pick a plan when you’re ready.
            </p>
          </div>
          <div className="flex justify-center gap-5 text-[14px] font-semibold">
            <button className="bg-transparent text-white px-4 py-2 rounded-xl transition relative border-[#FAFAFF1A] border-2  cursor-pointer">
              Start free trial
            </button>

            <button className="bg-[#6852D6] text-white px-6 py-3 rounded-xl transition relative hover:bg-[#5a42b3] cursor-pointer">
              <div className="absolute top-0  z-5  ">
                <Image
                  src={"/assets/cta/Highlight.png"}
                  width={100}
                  height={300}
                  alt="comet"
                />
              </div>
              Schedule A Demo
            </button>
          </div>
        </div>
        <div className="absolute -top-40 z-5">
          <Image
            src={"/assets/cta/Group 1.png"}
            width={250}
            height={300}
            alt="comet"
          />
        </div>
        <div className="absolute top-20  z-5 rotate-3 blur-2xl  ">
          <Image
            src={"/assets/cta/Blur Layer - Heavy.png"}
            width={200}
            height={300}
            alt="comet"
          />
        </div>
        <div className="absolute -top-20 w-full left-72  z-4   ">
          <Image
            src={"/assets/cta/Stars-2.png"}
            width={1000}
            height={300}
            alt="comet"
          />
        </div>
        <div className="absolute -top-20 w-full left-10  z-4   ">
          <Image
            src={"/assets/cta/Stars-2.png"}
            width={1300}
            height={300}
            alt="comet"
          />
        </div>
        <div className="absolute right-2 top-0 z-5">
          <Image
            src={"/assets/cta/comets.png"}
            width={400}
            height={300}
            alt="comet"
          />
        </div>
      </section>
  )
}

export default CallToAction