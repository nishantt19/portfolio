"use client";
import Image from "next/image";
import React from "react";

interface ProjectCardProps {
  link: string;
  image: string;
  description: string;
  index: number;
  project_name: string;
}

const ProjectCard = ({
  link,
  image,
  description,
  index,
  project_name,
}: ProjectCardProps) => {
  return (
    <div
      className={`flex flex-col gap-y-5 ${
        index % 2 === 1
          ? "md:flex-row-reverse"
          : "md:flex-row"
      } md:gap-x-10 md:py-5 md:items-center md:justify-between`}
    >
      {/* Image Container */}
      <div className="w-full md:w-1/2">
        <div className="w-full lg:max-w-[530px]">
          <Image
            src={image}
            width={530}
            height={397}
            className="w-full h-auto object-contain rounded-2xl"
            alt={project_name}
          />
        </div>
      </div>

      {/* Content Container */}
      <div className="flex flex-col gap-y-7 md:w-1/2">
        <h3 className="text-3xl md:text-5xl font-black text-white">
          0{index + 1}
        </h3>
        <h2 className="text-3xl font-black text-white">
          {project_name}
        </h2>
        <p className="text-base text-[#71717A]">
          {description}
        </p>
        <span
          onClick={() => window.open(link, "_blank")}
          className="cursor-pointer"
        >
          <ShareIcon />
        </span>
      </div>
    </div>
  );
};

export default ProjectCard;

const ShareIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10.8333 9.16658L17.6667 2.33325"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M18.3333 5.66675V1.66675H14.3333"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9.16667 1.66675H7.5C3.33333 1.66675 1.66667 3.33341 1.66667 7.50008V12.5C1.66667 16.6667 3.33333 18.3334 7.5 18.3334H12.5C16.6667 18.3334 18.3333 16.6667 18.3333 12.5001V10.8334"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
