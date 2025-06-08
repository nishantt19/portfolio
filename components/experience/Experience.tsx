import { WORK_EXPERIENCE } from "@/constants";
import Image from "next/image";
import React from "react";
import ExperienceCard from "./ExperienceCard";

const Experience = () => {
  return (
    <section className="bg-black" id="work">
      <div className="body-padding-x body-padding-y">
        <div className="flex flex-col gap-y-5">
          <h1 className="flex items-center justify-center py-5 h1-heading gap-x-4 text-white">
            <span className="font-medium">My</span>
            <span className="font-black">Experience</span>
          </h1>
          <div className="py-0 px-0 md:py-10 md:px-6 flex flex-col gap-y-5 md:gap-y-8">
            {WORK_EXPERIENCE.map((experience, index) => (
              <React.Fragment key={index}>
                <ExperienceCard
                  src={experience.logo}
                  company={experience.company}
                  date={experience.date}
                  position={experience.position}
                  description={experience.description}
                  index={index}
                />
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
