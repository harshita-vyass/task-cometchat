import Image from "next/image";
import React from "react";

const ContactForm = () => {
  return (
    <section
      className="lg:py-10 py-5 px-5 lg:w-4/5 w-full mx-auto bg-white/10 rounded-2xl shadow-3xl "
      id="contact"
    >
      <form className="text-left w-full  text-white rounded-2xl space-y-3">
        <h2 className="text-[32px] text-left text-white font-bold font-inter">
          Became a partner
        </h2>

        <div className="space-y-2">
          <label className="text-[16px] font-semibold text-white">Full name</label>
          <input
            type="text"
            name="fname"
            placeholder="Type your name here..."
            className="w-full p-2 font-light border-b bg-white/10 rounded-xl outline-none border-none focus:border-gray-600"
            required
          />
        </div>

        <div className="space-y-2">
          <label className="text-[16px] font-semibold text-white pb-1">Email address</label>
          <input
            type="text"
            name="email"
            placeholder="Type your Email"
            className="w-full p-2 font-light border-b bg-white/10 rounded-xl outline-none border-none focus:border-gray-600"
            required
          />
        </div>

        <div className="space-y-2">
          <label className="text-[16px] font-semibold text-white pb-1">Companies name</label>
          <input
            type="text"
            name="companyName"
            placeholder="Type your company's name"
            className="w-full p-2 font-light border-b bg-white/10 rounded-xl outline-none border-none focus:border-gray-600"
          />
        </div>
        <div className="flex  py-2">
          <button className="bg-[#6852D6] text-white px-6 py-3 rounded-xl transition relative hover:bg-[#5a42b3] cursor-pointer">
            <div className="absolute top-0  z-5  ">
              <Image
                src={"/assets/cta/Highlight.png"}
                width={100}
                height={300}
                alt="comet"
              />
            </div>
            Submit application
          </button>
        </div>

        {/* </div> */}
      </form>
    </section>
  );
};

export default ContactForm;
