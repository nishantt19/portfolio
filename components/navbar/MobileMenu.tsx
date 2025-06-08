"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import { MdOutlineFileDownload } from "react-icons/md";
import { IoClose } from "react-icons/io5";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navLinks: { name: string; id: string }[];
  onResumeClick: () => void;
}

type LinkType = {
  id: string;
  name: string;
};

const MobileMenu = ({
  isOpen,
  onClose,
  navLinks,
  onResumeClick,
}: MobileMenuProps) => {
  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleLinkClick = () => {
    onClose();
  };

  const handleResumeClick = () => {
    onResumeClick();
    onClose();
  };

  return (
    <>
      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-500 sm:hidden ${
          isOpen
            ? "visible bg-black/60 opacity-100 backdrop-blur-sm"
            : "invisible bg-black/0 opacity-0"
        }`}
        onClick={onClose}
      />

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-80 max-w-[85vw] transform transition-all duration-500 ease-out sm:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Glassmorphism Background */}
        <div className="absolute inset-0 border-l border-white/20 bg-gradient-to-br from-white/95 to-white/90 shadow-2xl backdrop-blur-xl" />

        {/* Content */}
        <div className="relative flex h-full flex-col">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-gray-200/50 p-6">
            <div className="flex items-center space-x-3">
              <h2 className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-xl font-bold text-transparent">
                Navigation
              </h2>
            </div>
            <button
              onClick={onClose}
              className="group rounded-xl bg-gray-100/50 p-2.5 transition-all duration-300 hover:rotate-90 hover:bg-gray-200/50"
              aria-label="Close mobile menu"
            >
              <IoClose className="h-5 w-5 text-gray-600 transition-colors duration-300 group-hover:text-gray-800" />
            </button>
          </div>

          {/* Navigation Links */}
          <div className="flex-1 px-6 py-2">
            <div className="space-y-2">
              {navLinks.map((link: LinkType) => (
                <Link
                  href={`#${link.id}`}
                  key={link.id}
                  onClick={handleLinkClick}
                  className="group flex w-fit flex-col px-2 py-2 text-gray-800 transition-colors duration-200"
                >
                  <span className="text-base font-semibold">{link.name}</span>
                  <span className="h-0.5 w-full origin-left scale-x-0 bg-black transition-all duration-300 group-hover:scale-x-100"></span>
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile Resume Button */}
          <div className="border-t border-gray-200 p-6">
            <button
              className="primary-button w-full justify-center"
              onClick={handleResumeClick}
            >
              Resume
              <MdOutlineFileDownload className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-slideInRight {
          animation: slideInRight 0.6s ease-out;
        }
      `}</style>
    </>
  );
};

export default MobileMenu;
