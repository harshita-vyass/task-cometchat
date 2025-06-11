"use client";

import { useState } from "react";

interface FaqData {
  title: string;
  desc: string;
}

interface FaqSectionProps {
  faqData: FaqData[];
}
function FaqSection({ faqData }: FaqSectionProps) {
  const [currentCount, setCurrentCount] = useState(0);
  return (
    <div className="w-full mx-auto relative z-20 bg-white">
      <h2 className="text-[22px] text-[#FF7129] md:text-center w-11/12 mx-auto">FAQ’s</h2>
          <p className="font-semibold lg:text-[48px] text-2xl text-black md:text-center capitalize w-11/12 mx-auto">
         We want to help you <br/>   with all your doubts 
        </p>
      <div className="mx-auto xl:w-1/2 w-11/12 max-w-7xl lg:px-0 md:px-6 px-0 md:py-10 py-4 font-nunito flex  items-center xl:gap-20 gap-14 ">
        <div className="w-full py-4 space-y-4 overflow-y-auto  ">
          {faqData.map((elem, index) => {
            const { title, desc } = elem;
            const isOpen = currentCount === index;

            return (
              <div
                key={index}
                className="bg-[#14131D05] cursor-pointer w-full "
                onClick={() => setCurrentCount(isOpen ? -1 : index)}
              >
                <div
                  className={
                    isOpen
                      ? "flex items-start  justify-between w-full px-2 py-4 text-base font-medium text-left md:items-center md:px-6 md:text-md  text-black"
                      : "flex items-start justify-between w-full px-4 py-4 text-base font-medium text-left md:items-center md:px-6 text-black md:text-md "
                  }
                >
                  <div className="flex items-center">
                    
                    <p className="w-full md:text-md text-base font-semibold">
                      {title}
                    </p>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`icon icon-tabler icon-tabler-chevron-${
                      isOpen ? "up rotate-180" : "down "
                    } transition-all duration-200`}
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="#2c3e50"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </div>
                <div
                  className={
                    isOpen
                      ? "py-6 px-6 text-black space-y-3 md:text-md text-base transition-height duration-200 "
                      : "pt-0 px-6 text-black space-y-3 md:text-md text-base transition-height duration-200 min-h-0 h-0 overflow-hidden"
                  }
                >
                  <p className="md:text-md text-base text-black">{desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default FaqSection;
