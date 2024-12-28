"use client";
import React, { useState } from "react";
import Container from "./Container";
import Logo from "./Logo";
import { navbarData } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import Sidebar from "./Sidebar";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const pathName = usePathname();
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <header className="border-b border-b-hoverColor/50 bg-bodyColor text-white/80">
      <Container className="py-5 flex items-center justify-between">
        <Logo title="Hamza" subtitle="." />
        <div className="hidden md:flex items-center gap-7 text-sm uppercase tracking-wide font-medium">
          {navbarData.map((item) => (
            <Link
              className={`hover:text-hoverColor hoverEffect relative group overflow-x-hidden
                ${pathName === item.href && "text-hoverColor"}`}
              key={item.title}
              href={item.href}
            >
              {item.title}
              <span
                className={`w-full h-px bg-hoverColor inline-block absolute left-0 bottom-0
                  group-hover:translate-x-0 hoverEffect 
                  ${
                    pathName === item.href
                      ? "translate-x-0"
                      : "-translate-x-[105%]"
                  }
                  `}
              />
            </Link>
          ))}
          <Link
            href={"/resume.pdf"}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm bg-lightSky/10 px-4 py-2 rounded-md border border-hoverColor/10 
              hover:bg-hoverColor hover:text-black hoverEffect"
          >
            Hire Me
          </Link>
        </div>
        <button
          aria-label="Toggle menu"
          onClick={toggleSidebar}
          className="inline-flex md:hidden relative hover:text-hoverColor hoverEffect"
        >
          <Menu />
        </button>
      </Container>
      <div>
        <Sidebar
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
          pathname={pathName}
        />
      </div>
    </header>
  );
};

export default Header;
