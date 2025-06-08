import gsap from "gsap";
import Link from "next/link";
import React, { useEffect, useRef } from "react";

const NavLink = ({
  link,
}: {
  link: {
    name: string;
    id: string;
  };
}) => {
  const linkRef = useRef<HTMLAnchorElement | null>(null);
  const originalTextRef = useRef<HTMLSpanElement | null>(null);
  const duplicateTextRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const linkElement = linkRef.current;
    const originalText = originalTextRef.current;
    const duplicateText = duplicateTextRef.current;

    // Set initial states
    gsap.set(duplicateText, {
      y: "120%",
      rotation: 15,
      transformOrigin: "center center",
    });

    const tl = gsap.timeline({ paused: true });

    tl.to(
      originalText,
      {
        y: "-120%",
        rotation: 15, // Back to 15 for hover
        duration: 0.4,
        ease: "power2.out",
      },
      0,
    ).to(
      duplicateText,
      {
        y: "0%",
        rotation: 0,
        duration: 0.4,
        ease: "power2.out",
      },
      0,
    );

    const tl2 = gsap.timeline({ paused: true });
    tl2
      .set(originalText, {
        y: "-120%",
        rotation: -15, // Set original text to -15° at start of mouse leave
      })
      .to(
        duplicateText,
        {
          y: "120%",
          rotation: -15,
          duration: 0.4,
          ease: "power2.out",
        },
        0,
      )
      .to(
        originalText,
        {
          y: "0%",
          rotation: 0,
          duration: 0.4,
          ease: "power2.out",
        },
        0,
      );

    const handleMouseEnter = () => tl.restart();
    const handleMouseLeave = () => tl2.restart();

    if (linkElement) {
      linkElement.addEventListener("mouseenter", handleMouseEnter);
      linkElement.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      if (linkElement) {
        linkElement.removeEventListener("mouseenter", handleMouseEnter);
        linkElement.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  return (
    <Link
      href={`#${link.id}`}
      ref={linkRef}
      className="relative inline-block cursor-pointer py-2 text-lg font-semibold select-none"
    >
      <div className="relative overflow-hidden">
        <span ref={originalTextRef} className="block">
          {link.name}
        </span>
        <span ref={duplicateTextRef} className="absolute top-0 left-0">
          {link.name}
        </span>
      </div>
    </Link>
  );
};

export default NavLink;
