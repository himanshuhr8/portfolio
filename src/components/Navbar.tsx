"use client";

import {
  Navbar as ResizableNavbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { useState } from "react";

import { drive_link2 } from "@/lib/utils";
export function NavbarHome() {
  return (
    <div className="fixed top-0 inset-x-0 z-[100] ">
      <Navbar />
    </div>
  );
}
function ResumeSection() {
  return (
    <a
      href={drive_link2}
      target="_blank"
      rel="noopener noreferrer"
      className="px-4 py-2 rounded-md bg-white text-black text-sm font-bold relative cursor-pointer hover:-translate-y-0.5 transition duration-200 shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
    >
      Resume
    </a>
  );
}
function Navbar({ className }: { className?: string }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "About", link: "/about#about" },
    { name: "Education", link: "/about#education" },
    { name: "Projects", link: "/projects#projects" },
    { name: "Profiles", link: "/profile#profile" },
  ];

  return (
    <ResizableNavbar className={className}>
      {/* Desktop Navigation */}
      <NavBody>
        <NavbarLogo />
        <NavItems items={navItems} />
        <div className="flex items-center gap-4">
          <ResumeSection />
        </div>
      </NavBody>

      {/* Mobile Navigation */}
      <MobileNav>
        <MobileNavHeader>
          <NavbarLogo />
          <MobileNavToggle
            isOpen={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          />
        </MobileNavHeader>

        <MobileNavMenu
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
        >
          {navItems.map((item, idx) => (
            <a
              key={`mobile-link-${idx}`}
              href={item.link}
              onClick={() => setIsMobileMenuOpen(false)}
              className="relative text-neutral-600 dark:text-neutral-300"
            >
              <span className="block">{item.name}</span>
            </a>
          ))}
          <ResumeSection />
        </MobileNavMenu>
      </MobileNav>
    </ResizableNavbar>
  );
}

export default NavbarHome;
