"use client";

import { Menu, MenuItem } from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";

export function NavbarHome() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-1" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu>
        <MenuItem item="Home" path="/" />
        <MenuItem item="About" path="/about#about" />
        <MenuItem item="Education" path="/about#education" />
        <MenuItem item="Projects" path="/projects#projects" />
        <MenuItem item="Resume" path="/resume" />
      </Menu>
    </div>
  );
}
export default NavbarHome;
