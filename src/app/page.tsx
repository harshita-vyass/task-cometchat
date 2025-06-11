import AnimationSlider from "@/components/AnimationSlider";
import ContactForm from "@/components/ContactForm";
import HeroSection from "@/components/HeroSection";
import FAQ from "@/components/FAQ";
import Image from "next/image";
import CallToAction from "@/components/CallToAction";

const incentives = [
  {
    title: "Free credits",
    text: "Empowering partners to scale.",
    icon: "/assets/advantages/Icon.png",
  },
  {
    title: "Revenue share",
    text: "Get monthly recurring revenues when you refer clients.",
    icon: "/assets/advantages/Icon-2.png",
  },
  {
    title: "Training and mentoring sessions",
    text: "Enabling partners to deliver the best experience.",
    icon: "/assets/advantages/Icon-3.png",
  },
  {
    title: "Special developer access",
    text: "Get an all-access account to build unlimited PoCs for your clients.",
    icon: "/assets/advantages/Icon-4.png",
  },
  {
    title: "Reduced time",
    text: "Deliver your products much faster with our partners’ programs.",
    icon: "/assets/advantages/Icon-5.png",
  },
  {
    title: "Value addition to your users",
    text: "We need a 2 line text here to explain this point.",
    icon: "/assets/advantages/Icon-6.png",
  },
  {
    title: "Knowledge sessions",
    text: "Access to product and market sessions.",
    icon: "/assets/advantages/Icon-7.png",
  },
  {
    title: "On-demand support",
    text: "Technical assistance for implementation.",
    icon: "/assets/advantages/Icon-8.png",
  },
  {
    title: "Significant passive income",
    text: "We need a 2 line text here to explain this point.",
    icon: "/assets/advantages/Icon-9.png",
  },
];

const types = [
  {
    icon: "/assets/programs/Icon-10.png",
    title: "Affiliate partner program",
    text: "Bring value to your customers with a world-class in-app messaging tool that increases user-to-user engagement and retention. Get incentivized for referring CometChat to any of your customers.",
    bg: "assets/home/home-banner-one.jpg",
  },
  {
    icon: "/assets/programs/Icon-11.png",
    title: "Technology partner program",
    text: "Development teams can use our plug and play solution to build top class chat solutions for their clients using our SDKs and APIs. It’s simple, safe and secure!",
    bg: "assets/home/home-banner-one.jpg",
  },
  {
    icon: "/assets/programs/Icon-12.png",
    title: "Start up growth program",
    text: "We help incubators, accelerators, co-working space that foster an ecosystem of start-ups. This program also enables VCs to accelerate the growth of their portfolio companies.",
    bg: "assets/home/home-banner-one.jpg",
  },
];

const faqData = [
  {
    title: "This is a frequently asked question?",
    desc: "Lorem ipsum dolor sit amet consectetur. Tellus eget consequat tortor odio maecenas cursus leo dui. Pulvinar quam sit quam feugiat laoreet morbi tellus dui massa.",
  },
  {
    title: "This is a frequently asked question?",
    desc: "Lorem ipsum dolor sit amet consectetur. Tellus eget consequat tortor odio maecenas cursus leo dui. Pulvinar quam sit quam feugiat laoreet morbi tellus dui massa.",
  },
  {
    title: "This is a frequently asked question?",
    desc: "Lorem ipsum dolor sit amet consectetur. Tellus eget consequat tortor odio maecenas cursus leo dui. Pulvinar quam sit quam feugiat laoreet morbi tellus dui massa.",
  },
  {
    title: "This is a frequently asked question?",
    desc: "Lorem ipsum dolor sit amet consectetur. Tellus eget consequat tortor odio maecenas cursus leo dui. Pulvinar quam sit quam feugiat laoreet morbi tellus dui massa.",
  },
  {
    title: "This is a frequently asked question?",
    desc: "Lorem ipsum dolor sit amet consectetur. Tellus eget consequat tortor odio maecenas cursus leo dui. Pulvinar quam sit quam feugiat laoreet morbi tellus dui massa.",
  },
];

export default function Home() {
  return (
    <div className="overflow-hidden">
      <div className="bg-gradient-to-br from-[#0A0914] via-[#1b1136] to-[#0A0914] relative py-10">
        <div className="lg:flex justify-between items-center space-x-5  w-5/6  mx-auto md:space-y-0 space-y-10 max-w-7xl py-20">
          <div className="lg:w-1/2 w-full">
            <HeroSection
              title="Join the CometChat partner universe "
              titleOne=""
              para="Create value for your clients, leveraging our world-class technology. Partner with us and grow your business!"
              callToActionLine=""
            />
          </div>
          <div className=" lg:w-1/2 w-full lg:flex lg:justify-center relative z-10 ">
            <ContactForm />
          </div>
        </div>

        <div className="absolute -top-20 w-full left-10  z-4   ">
          <Image
            src={"/assets/cta/Stars-2.png"}
            width={1300}
            height={300}
            alt="comet"
          />
        </div>
        <div className="absolute  w-full  z-4 -right-[80%] bottom-0">
          <Image
            src={"/assets/header/comets-2.png"}
            width={300}
            height={300}
            alt="comet"
          />
        </div>

        <div className="absolute  w-full left-[41%] z-1 bottom-0">
          <Image
            src={"/assets/header/comets-3.png"}
            width={400}
            height={300}
            alt="comet"
          />
        </div>

        <div className="absolute  w-full left-[82%] z-1 top-0">
          <Image
            src={"/assets/header/comets-3.png"}
            width={200}
            height={300}
            alt="comet"
          />
        </div>

        <div className="absolute  w-full  z-4 bottom-20 left-0">
          <Image
            src={"/assets/header/comets-4.png"}
            width={300}
            height={300}
            alt="comet"
          />
        </div>

        <div className="absolute w-full z-4 bottom-10 left-20">
          <Image
            src={"/assets/header/comets-5.png"}
            width={600}
            height={300}
            alt="comet"
          />
        </div>

        <div className="absolute  w-full  z-4 bottom-0 left-0">
          <Image
            src={"/assets/header/Orbit.png"}
            width={400}
            height={300}
            alt="comet"
          />
        </div>

        <div className="absolute  w-full  z-4 bottom-0 ">
          <Image
            src={"/assets/header/Gradient.png"}
            width={15000}
            height={300}
            alt="comet"
          />
        </div>
      </div>
      <AnimationSlider />
      
      <section className="py-16 bg-[#0A0914]">
        <div className="w-11/12 mx-auto max-w-7xl space-y-14">
          <div>
            <h2 className="text-[22px] text-[#FF7F3E] text-left">
              Be a partner
            </h2>
            <p className="font-semibold lg:text-[48px] text-2xl text-white text-left capitalize">
              CometChat partner <br /> advantages
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 ">
            {incentives.map((item, index) => (
              <div
                key={index}
                className="relative group p-6 text-left  border rounded-lg transition-all duration-500 overflow-hidden cursor-pointer"
              >
                <div className="relative z-10 space-y-2">
                  <div className="mx-auto flex justify-left text-white  transition">
                    <Image src={item.icon} alt="" width={50} height={20} />
                  </div>
                  <h4 className="text-lg font-semibold  transition">
                    {item.title}
                  </h4>
                  <p className="text-sm text-white  transition">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="w-11/12 mx-auto max-w-7xl space-y-14">
          <div>
            <h2 className="text-[22px] text-[#6852D6] text-left">
              Our programs
            </h2>
            <p className="font-semibold lg:text-[48px] text-2xl text-black text-left capitalize">
              Types of partnerships programs
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 ">
            {types.map((item, index) => (
              <div
                key={index}
                className="relative group  text-left bg-white rounded-xl border transition-all duration-500 overflow-hidden cursor-pointer"
              >
                {/* Content */}
                <div className="relative z-10 space-y-2">
                  <div className="mx-auto flex justify-left text-[#b59f78]  transition">
                    <Image src={item.icon} alt="" width={50} height={20} />
                  </div>
                  <h4 className="text-lg font-semibold text-black  transition">
                    {item.title}
                  </h4>
                  <p className="text-sm text-gray-500  transition">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQ faqData={faqData} />
      <CallToAction />
    </div>
  );
}
