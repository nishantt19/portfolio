import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <section
      className="body-padding-x body-padding-y"
      id="about"
    >
      <div className="flex flex-col gap-y-5 md:flex-row md:px-8 px-0 md:gap-x-20">
        {/* Image */}
        <div
          className="w-full md:min-w-1/2 md:w-1/2 h-[100%] relative"
          style={{ aspectRatio: "525/572" }}
        >
          <Image
            fill
            src={"/about-me.svg"}
            alt="About Me"
            className="object-contain"
            sizes="(max-width: 768px) 100vw, (max-width: 768px) 50vw, 33vw"
          />
        </div>
        <div className="flex flex-col gap-y-5">
          <h1 className="h1-heading flex gap-x-4 py-5">
            <span className="font-medium">About</span>
            <span className="font-black">Me</span>
          </h1>
          <p className="text-[#71717A] text-base flex flex-col gap-y-5">
            <span>
              I'm a dedicated{" "}
              <span className="font-semibold">
                Frontend Developer
              </span>{" "}
              at <span className="font-semibold">HDIP</span>{" "}
              with extensive expertise in{" "}
              <span className="font-semibold">
                Javascript
              </span>{" "}
              and{" "}
              <span className="font-semibold">
                Typescript
              </span>
              . My technical proficiency encompasses modern
              frameworks including{" "}
              <span className="font-semibold">ReactJS</span>{" "}
              and{" "}
              <span className="font-semibold">NextJS</span>,
              enabling me to delivery sophisticated web
              applications that prioritize user experience
              and code efficiency.
            </span>
            <span>
              My professional experience spans multiple
              internships and full-time positions where I
              have consistently delivered scalable,
              responsive web applications and developed a
              strong foundation in translating complex
              technical requirements into intuitive,
              high-performance interfaces that exceed user
              expectations.
            </span>
            <span>
              Currently, I am expanding my expertise in{" "}
              <span className="font-semibold">Web3</span>{" "}
              and{" "}
              <span className="font-semibold">
                blockchain technologies
              </span>
              , including learning{" "}
              <span className="font-semibold">
                Solidity
              </span>{" "}
              for smart contract development, driven by a
              commitment to staying at the forefront of
              technological innovation. This passion
              culminated in my participation at{" "}
              <span className="font-semibold">
                EthGlobal Bangkok
              </span>
              , where I collaborated with a team and our
              project was recognized as{" "}
              <span className="font-semibold">
                best dApp on the Bless Network
              </span>
              , demonstrating my dedication to bridging
              traditional web development with emerging
              decentralized technologies.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
