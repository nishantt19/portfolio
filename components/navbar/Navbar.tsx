"use client";
import React, { useEffect, useState } from "react";
import { NAV_LINKS } from "@/constants";
import Link from "next/link";
import { MdOutlineFileDownload } from "react-icons/md";
import NavLink from "./NavLink";
import { HiMenuAlt4 } from "react-icons/hi";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Add scroll event listener to change navbar style on scroll
  useEffect(() => {
    // Check initial scroll position when component mounts
    const initialScroll = window.scrollY > 5;
    setScrolled(initialScroll);

    const handleScroll = () => {
      const isScrolled = window.scrollY > 5;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    // Add event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const handleResumeClick = () => {
    window.open(
      "https://drive.google.com/file/d/1zCurRzSLN8rA_iNjXRGXDxusrU4ys2TX/view?usp=sharing",
      "_blank",
    );
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? "bg-white/90 shadow-lg backdrop-blur-md"
            : "bg-transparent shadow-none"
        }`}
      >
        <div className="body-padding-x py-4">
          <div className="flex items-center justify-between">
            <div className="text-lg font-bold sm:text-[20px]">
              <Link href="/" className="outlined-text">
                Nishant
              </Link>
            </div>
            {/* Desktop Nav Links */}
            <div className="hidden sm:block">
              <div className="flex h-full items-center gap-x-6 lg:gap-x-8">
                {NAV_LINKS.map((link, index) => (
                  <NavLink link={link} key={index} />
                ))}
              </div>
            </div>
            {/* Desktop Resume Button */}
            <div className="hidden justify-end lg:flex">
              <button className="primary-button" onClick={handleResumeClick}>
                Resume
                <MdOutlineFileDownload className="h-5 w-5" />
              </button>
            </div>
            {/* Mobile Hamburger Menu */}
            <div className="flex justify-end sm:hidden">
              <button
                onClick={toggleMobileMenu}
                className="group relative cursor-pointer rounded-full border border-white/10 bg-black/5 p-3 backdrop-blur-sm transition-all duration-300 hover:bg-black/10"
                aria-label="Toggle mobile menu"
              >
                <HiMenuAlt4 className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-500 sm:hidden ${
          mobileMenuOpen
            ? "visible bg-black/60 opacity-100 backdrop-blur-sm"
            : "invisible bg-black/0 opacity-0"
        }`}
        onClick={closeMobileMenu}
      />

      {/* Mobile Menu Drawer */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={closeMobileMenu}
        navLinks={NAV_LINKS}
        onResumeClick={handleResumeClick}
      />
    </>
  );
};

export default Navbar;
