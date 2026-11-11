import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Linkedin, LucideIcon } from "lucide-react";
import { footerData } from "@/data/footer";

const socialIconMap: Record<string, LucideIcon> = {
  Linkedin,
};

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-[#F5F6FF] dark:bg-[#0B0D19] text-[#171B2E] dark:text-[#FFFFFF] border-t border-[#E5E7F0] dark:border-[#292D45] pt-16 pb-12 overflow-hidden transition-colors duration-200">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#635BFF]/5 dark:bg-[#635BFF]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#3984FF]/5 dark:bg-[#3984FF]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12 pb-14 border-b border-[#E5E7F0] dark:border-[#292D45]">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4 pr-0 lg:pr-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 group transition-transform duration-200"
              aria-label="Pingo Home"
            >
              <div className="relative w-7 h-7 sm:w-8 sm:h-8 flex-shrink-0">
                <Image
                  src="/images/pingo-p.png"
                  alt="Pingo Mark"
                  width={34}
                  height={34}
                  className="object-contain"
                />
              </div>
              <span className="text-xl sm:text-2xl font-bold tracking-tight text-[#171B2E] dark:text-[#FFFFFF] flex items-center">
                Pingo
                <span className="text-[#20C5D8] ml-0.5 text-2xl font-black">.</span>
              </span>
            </Link>

            <p className="text-sm text-[#62677D] dark:text-[#B5BAD0] leading-relaxed max-w-sm">
              {footerData.brand.tagline}
            </p>

            <div className="pt-1 flex items-center gap-2 text-xs text-[#62677D] dark:text-[#B5BAD0]/70">
              <span className="inline-block w-2 h-2 rounded-full bg-[#20C5D8] animate-pulse" />
              <span>AI Chat & Customer Management Platform</span>
            </div>

            {/* Social Media Icons */}
            {footerData.socialLinks && footerData.socialLinks.length > 0 && (
              <div className="pt-2 flex items-center gap-3">
                {footerData.socialLinks.map((social) => {
                  const Icon = socialIconMap[social.iconName] || Linkedin;
                  return (
                    <a
                      key={social.platform}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.ariaLabel}
                      className="inline-flex items-center justify-center w-9 h-9 rounded-xl bg-[#FFFFFF] hover:bg-[#F5F6FA] dark:bg-[#171A2E] dark:hover:bg-[#292D45] border border-[#E5E7F0] dark:border-[#292D45] hover:border-[#635BFF] dark:hover:border-[#635BFF] text-[#62677D] hover:text-[#635BFF] dark:text-[#B5BAD0] dark:hover:text-[#FFFFFF] transition-all duration-200 hover:scale-105 shadow-sm group"
                    >
                      <Icon className="w-4 h-4 transition-transform duration-200 group-hover:scale-110" />
                    </a>
                  );
                })}
              </div>
            )}
          </div>

          {/* Links Columns */}
          {footerData.sections.map((section) => (
            <div key={section.title} className="space-y-4">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-[#171B2E] dark:text-[#FFFFFF]">
                {section.title}
              </h3>
              <ul className="space-y-2.5">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-[#62677D] hover:text-[#171B2E] dark:text-[#B5BAD0] dark:hover:text-[#FFFFFF] transition-colors duration-150 inline-block py-0.5 hover:translate-x-0.5 transform"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar: Copyright & Subtle Separators */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#62677D] dark:text-[#B5BAD0]/70">
          <p>{footerData.copyright}</p>
          <div className="flex items-center gap-4 sm:gap-6 flex-wrap justify-center">
            <Link href="#privacy" className="hover:text-[#171B2E] dark:hover:text-[#FFFFFF] transition-colors">
              Privacy Policy
            </Link>
            <span className="text-[#E5E7F0] dark:text-[#292D45]">•</span>
            <Link href="#terms" className="hover:text-[#171B2E] dark:hover:text-[#FFFFFF] transition-colors">
              Terms of Service
            </Link>
            <span className="text-[#E5E7F0] dark:text-[#292D45]">•</span>
            <Link href="#help" className="hover:text-[#171B2E] dark:hover:text-[#FFFFFF] transition-colors">
              Help
            </Link>
            <span className="text-[#E5E7F0] dark:text-[#292D45]">•</span>
            <span className="text-[#62677D] dark:text-[#B5BAD0]/50">UIAI Technologies</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
