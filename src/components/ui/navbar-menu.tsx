"use client";
import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { drive_link } from "@/lib/utils";

export const MenuItem = ({ item, path }: { item: string; path: string }) => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    if (path === "/resume") {
      // Open the resume link in a new tab
      window.open(drive_link, "_blank", "noopener,noreferrer");
    } else if (path.includes("#")) {
      // Do nothing here as HashLink handles hash navigation automatically
    } else {
      navigate(path); // Regular navigation
    }
  };

  return path.includes("#") ? (
    <div className="relative">
      <HashLink
        to={path}
        smooth
        className="cursor-pointer text-black hover:opacity-[0.9] dark:text-white"
      >
        <motion.p transition={{ duration: 0.3 }}>{item}</motion.p>
      </HashLink>
    </div>
  ) : (
    <div className="relative" onClick={handleNavigation}>
      <motion.p
        transition={{ duration: 0.3 }}
        className="cursor-pointer text-black hover:opacity-[0.9] dark:text-white"
      >
        {item}
      </motion.p>
    </div>
  );
};

export const Menu = ({ children }: { children: React.ReactNode }) => {
  return (
    <nav className="relative rounded-full border border-transparent dark:bg-black dark:border-white/[0.2] bg-white shadow-input flex justify-center space-x-4 px-8 py-6">
      {children}
    </nav>
  );
};
