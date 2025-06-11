"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
const socialLinks = [
  { name: "Facebook", icon: "/assets/footer/facebook.png", href: "#" },
  { name: "LinkedIn", icon: "/assets/footer/linkedin.png", href: "#" },
  { name: "Instagram", icon: "/assets/footer/instagram.png", href: "#" },
  { name: "Twitter", icon: "/assets/footer/twitter.png", href: "#" },
  { name: "GitHub", icon: "/assets/footer/github.png", href: "#" },
];
const Footer = () => {
  return (
    <footer className="bg-[#0A0914] text-gray-300 pt-14 px-6 md:px-20">
      <Image
        src="/assets/Combined-Shape-Copy-13.png"
        alt=""
        width={150}
        height={200}
        className="py-10"
      />

      <div className=" mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Column 1: Platform */}
        <div>
          <h4 className="text-sm font-semibold text-purple-400 mb-4">
            Platform
          </h4>
          <h5 className="text-xs font-semibold text-gray-400 mb-2">Features</h5>
          <ul className="mb-4 space-y-1">
            {[
              "Chat & Messaging",
              "Voice & Video Calls",
              "Security & Compliance",
              "Extensions",
              "Features at a glance",
              "Webhooks & Bots",
              "Moderation",
              "Analytics & Insights",
            ].map((item) => (
              <li key={item}>
                <Link href="#" className="hover:underline">
                  {item}
                </Link>
              </li>
            ))}
          </ul>

          <h5 className="text-xs font-semibold text-gray-400 mb-2">
            Implementation
          </h5>
          <ul className="mb-4 space-y-1">
            {["Widgets", "UI Kits", "SDKs & APIs"].map((item) => (
              <li key={item}>
                <Link href="#" className="hover:underline">
                  {item}
                </Link>
              </li>
            ))}
          </ul>

          <h5 className="text-xs font-semibold text-gray-400 mb-2">
            Technologies
          </h5>
          <ul className="space-y-1">
            {[
              "React Chat SDK & API",
              "Angular Chat SDK & API",
              "Vue Chat SDK & API",
              "IOS Swift Chat SDK & API",
              "Android Kotlin Chat SDK & API",
              "Android Java Chat SDK & API",
              "React Native Chat SDK & API",
              "Ionic/Capacitor Chat SDK & API",
              "WordPress Chat SDK & API",
              "Laravel/PHP Chat SDK & API",
              "Flutter Chat SDK & API",
              "Next.js Chat SDK & API",
            ].map((item) => (
              <li key={item}>
                <Link href="#" className="hover:underline">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 2: Solutions */}
        <div>
          <h4 className="text-sm font-semibold text-purple-400 mb-4">
            Solutions
          </h4>
          <h5 className="text-xs font-semibold text-gray-400 mb-2">
            By Use Cases
          </h5>
          <ul className="mb-4 space-y-1">
            {[
              "Social Community",
              "Marketplace",
              "Healthcare",
              "Education",
              "Virtual Events",
              "On-Demand Service",
              "Dating Apps",
              "Gaming",
            ].map((item) => (
              <li key={item}>
                <Link href="#" className="hover:underline">
                  {item}
                </Link>
              </li>
            ))}
          </ul>

          <h5 className="text-xs font-semibold text-gray-400 mb-2">
            By Organization Type
          </h5>
          <ul className="space-y-1">
            {["Enterprise", "Startups"].map((item) => (
              <li key={item}>
                <Link href="#" className="hover:underline">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Developers & Company */}
        <div>
          <h4 className="text-sm font-semibold text-purple-400 mb-4">
            Developers
          </h4>
          <h5 className="text-xs font-semibold text-gray-400 mb-2">
            Technologies Documentation
          </h5>
          <ul className="mb-4 space-y-1">
            {[
              "React",
              "Angular",
              "Vue",
              "IOS Swift",
              "Android Kotlin",
              "Android Java",
              "React Native",
              "Ionic/Capacitor",
              "WordPress",
              "Laravel/PHP",
              "Flutter",
              "Next.js",
            ].map((item) => (
              <li key={item}>
                <Link href="#" className="hover:underline">
                  {item}
                </Link>
              </li>
            ))}
          </ul>

          <h5 className="text-xs font-semibold text-gray-400 mb-2">
            Documentation
          </h5>
          <ul className="mb-6 space-y-1">
            {[
              "Documentation",
              "Product updates",
              "Tutorials",
              "Open-source Apps",
              "Product status",
              "Glossary",
            ].map((item) => (
              <li key={item}>
                <Link href="#" className="hover:underline">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Resources & Competitors */}
        <div>
          <h4 className="text-sm font-semibold text-purple-400 mb-4">
            Resources
          </h4>
          <ul className="mb-6 space-y-1">
            {[
              "Customer stories",
              "Blog",
              "Give feedback",
              "Community forum",
              "Help center",
              "Partners",
            ].map((item) => (
              <li key={item}>
                <Link href="#" className="hover:underline">
                  {item}
                </Link>
              </li>
            ))}
          </ul>

          <h4 className="text-sm font-semibold text-purple-400 mb-4">
            Competitors
          </h4>
          <ul className="space-y-1 mb-6">
            {["SendBird", "GetStream", "Applozic", "Twilio", "PubNub"].map(
              (item) => (
                <li key={item}>
                  <Link href="#" className="hover:underline">
                    {item}
                  </Link>
                </li>
              )
            )}
          </ul>

          <h4 className="text-sm font-semibold text-purple-400 mb-4">
            Company
          </h4>
          <ul className="space-y-1">
            {["About us", "Careers", "Partners", "Pricing", "Chat with us"].map(
              (item) => (
                <li key={item}>
                  <Link href="#" className="hover:underline">
                    {item}
                  </Link>
                </li>
              )
            )}
          </ul>
        </div>
      </div>

      <div className="mt-12 pt-[2px] bg-gradient-to-r from-[#0A0914] via-[#364153] to-[#0A0914] rounded-t">
        <div className="pb-5 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 bg-black rounded-t">
          <div className="md:hidden flex gap-4 mt-4 md:mt-0 flex-wrap">
            {socialLinks.map(({ name, icon, href }) => (
              <Link
                href={href}
                key={name}
                className="flex items-center gap-1 hover:text-white"
              >
                <Image src={icon} alt="" width={20} height={20} />
                <span className=" ">{name}</span>
              </Link>
            ))}
          </div>
          <div className="flex gap-4 mt-4 md:mt-0">
            <p>2023 © CometChat</p>
            <Link href="#">Terms of Use</Link>
            <Link href="#">Privacy Policy</Link>
          </div>
          <div className="md:flex gap-4 mt-4 md:mt-0 hidden ">
            {socialLinks.map(({ name, icon, href }) => (
              <Link
                href={href}
                key={name}
                className="flex items-center gap-1 hover:text-white"
              >
                <Image src={icon} alt="" width={20} height={20} />
                <span className=" ">{name}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
