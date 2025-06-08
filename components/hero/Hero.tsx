import { SOCIAL_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <section className="relative body-padding-x">
      <div className="mt-16 lg:mt-24">
        <div className="flex flex-col-reverse gap-y-12 md:gap-y-0 md:flex-row justify-between body-padding-y relative min-h-[280px] sm:min-h-[320px] md:min-h-[400px] lg:min-h-[596px]">
          {/* Hero Content */}
          <div className="flex flex-col gap-y-8 justify-center max-w-full  md:max-w-1/2 bg-white">
            <h1 className="text-[28px] sm:text-4xl md:text-3xl lg:text-4xl xl:text-5xl flex flex-col gap-y-2 md:gap-y-4 lg:gap-y-5">
              <span className="font-medium">
                Hello I'am{" "}
                <span className="font-black">Nishant</span>
              </span>
              <span>
                <span className="font-black">
                  Frontend{" "}
                </span>
                <span className="shadow-outline-basic font-black">
                  Developer
                </span>
              </span>
              <span className="font-medium">
                Based in{" "}
                <span className="font-black">India</span>
              </span>
            </h1>
            <p className="text-[#71717A] text-base leading-6">
              Welcome to my little space on the web! I'm a
              frontend developer who builds digital
              experiences with React, Next.js, and currently
              exploring the fascinating world of Web3 and
              blockchain technology. Here I showcase my
              works, experiments, and projects that bridge
              beautiful frontend development with
              cutting-edge technologies.
            </p>
            <div className="flex gap-x-6 lg:gap-x-8 mt-0 md:mt-10">
              {SOCIAL_LINKS.map((link) => (
                <Link
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12  border-2 border-black bg-white text-black lg:w-14 lg:h-14 rounded-sm flex items-center justify-center hover:bg-black hover:text-white transition-colors duration-300"
                >
                  <link.icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Desktop Hero Image */}
          <div
            className="absolute z-[-1] md:block hidden right-0 md:right-6 lg:right-8 w-full max-w-3/5 h-auto max-h-[596px]"
            style={{ aspectRatio: "899/596" }}
          >
            <Image
              src={"/hero-desktop.png"}
              fill
              alt="Hero Image"
              className="object-contain"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 899px"
            />
          </div>

          {/* Mobile Hero Image */}
          <div className="md:hidden w-full">
            <div className="relative w-full h-[280px] sm:h-[320px]">
              <Image
                src="/hero-mobile.png"
                fill
                alt="Hero Image"
                className="object-contain"
                sizes="100vw"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
