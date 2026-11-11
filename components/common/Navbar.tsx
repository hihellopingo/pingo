"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";
import FeaturesDropdown from "./FeaturesDropdown";
import SolutionsDropdown from "./SolutionsDropdown";
import ThemeToggle from "./ThemeToggle";
import { navigationItems, navbarCta } from "@/data/navigation";

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#FFFFFF]/90 dark:bg-[#0B0D19]/90 backdrop-blur-md border-b border-[#E5E7F0] dark:border-[#292D45] py-3.5 shadow-sm dark:shadow-[0_4px_20px_rgba(0,0,0,0.5)]"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo & Wordmark */}
        <Link
          href="/"
          className="flex items-center gap-2 group transition-transform duration-200 hover:scale-[1.02]"
          aria-label="Pingo Home"
        >
          <div className="relative w-7 h-7 sm:w-8 sm:h-8 flex-shrink-0">
            <Image
              src="/images/pingo-p.png"
              alt="Pingo Mark"
              width={36}
              height={36}
              className="object-contain"
              priority
            />
          </div>
          <span className="text-xl sm:text-2xl font-bold tracking-tight text-[#171B2E] dark:text-[#FFFFFF] flex items-center">
            Pingo
            <span className="text-[#20C5D8] ml-0.5 text-2xl font-black">.</span>
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-5 lg:gap-7 xl:gap-8">
          {navigationItems.map((item) => {
            if (item.isDropdown) {
              if (item.label === "Solutions") {
                return (
                  <SolutionsDropdown
                    key={item.label}
                    items={item.dropdownItems}
                  />
                );
              }

              return (
                <FeaturesDropdown
                  key={item.label}
                  items={item.dropdownItems}
                />
              );
            }

            const isActive = item.href === pathname;

            return (
              <Link
                key={item.label}
                href={item.href || "#"}
                className={`text-base font-normal transition-colors duration-200 ${
                  isActive
                    ? "text-[#171B2E] dark:text-[#FFFFFF] font-medium relative after:content-[''] after:absolute after:-bottom-1.5 after:left-0 after:right-0 after:h-[2px] after:bg-[#635BFF] after:rounded-full"
                    : "text-[#62677D] hover:text-[#171B2E] dark:text-[#B5BAD0] dark:hover:text-[#FFFFFF]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Right CTA Area: Theme Toggle & Get Started Button */}
        <div className="hidden md:flex items-center gap-3.5">
          {/* Theme Toggle - Placed immediately before the Get Started button */}
          <ThemeToggle />

          <Link
            href={navbarCta.href}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-[#635BFF] to-[#3984FF] hover:from-[#5249E8] hover:to-[#2E74E6] border border-white/20 shadow-[0_0_20px_rgba(99,91,255,0.35)] hover:shadow-[0_0_28px_rgba(99,91,255,0.55)] transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]"
          >
            <span>{navbarCta.label}</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
          </Link>
        </div>

        {/* Mobile Controls: Theme Toggle & Hamburger */}
        <div className="flex md:hidden items-center gap-2 sm:gap-3">
          <ThemeToggle />

          <Link
            href={navbarCta.href}
            className="hidden sm:inline-flex px-3.5 py-1.5 rounded-full text-xs font-semibold text-white bg-[#635BFF] border border-white/10"
          >
            Get Started
          </Link>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="p-2 rounded-xl bg-[#F5F6FA] dark:bg-[#171A2E] border border-[#E5E7F0] dark:border-[#292D45] text-[#171B2E] dark:text-[#FFFFFF] transition-colors"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5 text-[#171B2E] dark:text-[#FFFFFF]" />
            ) : (
              <Menu className="w-5 h-5 text-[#171B2E] dark:text-[#FFFFFF]" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden px-4 sm:px-6 pt-4 pb-6 mt-3 bg-[#FFFFFF]/95 dark:bg-[#0B0D19]/95 backdrop-blur-xl border-b border-[#E5E7F0] dark:border-[#292D45] shadow-2xl space-y-4 animate-fadeIn">
          <div className="flex flex-col space-y-2">
            {navigationItems.map((item) => {
              if (item.isDropdown) {
                if (item.label === "Solutions") {
                  return (
                    <div key={item.label} className="py-1">
                      <SolutionsDropdown
                        items={item.dropdownItems}
                        isMobile={true}
                        onItemSelect={() => setMobileMenuOpen(false)}
                      />
                    </div>
                  );
                }

                return (
                  <div key={item.label} className="py-1">
                    <FeaturesDropdown
                      items={item.dropdownItems}
                      isMobile={true}
                      onItemSelect={() => setMobileMenuOpen(false)}
                    />
                  </div>
                );
              }

              const isActive = item.href === pathname;

              return (
                <Link
                  key={item.label}
                  href={item.href || "#"}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`py-2 text-base font-medium transition-colors ${
                    isActive
                      ? "text-[#171B2E] dark:text-[#FFFFFF] font-semibold"
                      : "text-[#62677D] hover:text-[#171B2E] dark:text-[#B5BAD0] dark:hover:text-[#FFFFFF]"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          <div className="pt-3 border-t border-[#E5E7F0] dark:border-[#292D45]">
            <Link
              href={navbarCta.href}
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-[#635BFF] to-[#3984FF] shadow-lg shadow-indigo-900/30"
            >
              <span>{navbarCta.label}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
