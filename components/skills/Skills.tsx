import { SKILLS } from "@/constants";
import React from "react";

const Skills = () => {
  return (
    <section
      className="body-padding-x body-padding-y"
      id="skills"
    >
      <div className="flex flex-col gap-y-5">
        <h1 className="flex items-center justify-center py-5 h1-heading gap-x-4">
          <span className="font-medium">My</span>
          <span className="font-black">Skills</span>
        </h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-y-5 md:gap-y-10 py-0 md:py-10 gap-x-5 justify-items-center">
          {SKILLS.map((skill, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-center py-6 gap-y-8 border-2 w-40 md:w-48 border-black bg-white rounded-sm hover:bg-black hover:text-white transition-colors duration-300 group"
            >
              <skill.icon className="w-14 h-14" />
              <span className="text-lg md:text-xl font-bold">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
