import Image from "next/image";
import React from "react";

interface ExperienceCardProps {
  src: string;
  company: string;
  date: string;
  position: string;
  description: string;
  index: number;
}

const ExperienceCard = ({
  src,
  company,
  date,
  position,
  description,
  index,
}: ExperienceCardProps) => {
  return (
    <div
      className={`w-full px-6 py-[30px] flex flex-col gap-y-7 border border-[#71717A] rounded-xl ${
        index % 2 === 1 ? "bg-[#27272A]" : "bg-transparent"
      }`}
    >
      <div className="flex flex-col md:flex-row md:justify-between gap-y-7 md:gap-y-0 md:gap-x-8">
        <div className="flex gap-x-7 items-center">
          <Image
            src={src}
            height={32}
            width={32}
            alt={`${company} Logo`}
            className="w-8 h-8"
          />
          <h3 className="font-semibold text-white text-xl lg:text-2xl">
            {position} at {company}
          </h3>
        </div>
        <p className="text-base text-[#D4D4D8] font-semibold">
          {date}
        </p>
      </div>
      <p className="text-base text-[#D4D4D8] font-normal">
        {description}
      </p>
    </div>
  );
};

export default ExperienceCard;
