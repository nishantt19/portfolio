"use client";
import React from "react";

const ContactInfo = () => {
  return (
    <div className="flex flex-col justify-center h-full gap-y-10">
      <div className="flex flex-col gap-y-8 md:gap-y-5">
        <h1 className="h1-heading flex flex-col gap-y-3">
          <span className="flex gap-x-3 md:gap-x-4 font-black">
            <span>Let's</span>
            <span className="shadow-outline-basic">
              talk
            </span>
            <span>for</span>
          </span>
          <span className="flex gap-x-3 md:gap-x-4 font-black">
            <span>Something</span>
            <span>special</span>
          </span>
        </h1>
        <p className="text-base text-[#71717A] ">
          Have a project in mind? <br /> Drop me a message
          and let's make it happen.
        </p>
      </div>
      <div className="flex flex-col gap-y-3 md:gap-y-4">
        <h4
          className="font-bold text-xl md:text-2xl lg:text-[28px] cursor-pointer hover:underline transition-all duration-300"
          onClick={() =>
            (window.location.href =
              "mailto:nyd44533@gmail.com")
          }
        >
          nyd44533@gmail.com
        </h4>
      </div>
    </div>
  );
};

export default ContactInfo;
