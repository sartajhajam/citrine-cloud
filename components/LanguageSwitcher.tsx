"use client";

import { usePathname, useRouter } from "@/i18n/routing";
import { useLocale } from "next-intl";
import { useState, useRef, useEffect } from "react";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const languages = [
    { code: "en", label: "EN", full: "English" },
    { code: "pt", label: "PT", full: "Português" },
  ];

  const currentLang = languages.find((l) => l.code === locale) || languages[0];

  const switchLanguage = (newLocale: string) => {
    setIsOpen(false);
    if (newLocale === locale) return;
    router.replace(pathname, { locale: newLocale });
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-colors duration-200 text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100"
      >
        <span>{currentLang.label}</span>
        <svg className={`w-3 h-3 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-36 bg-white rounded-xl shadow-lg border border-slate-100 overflow-hidden z-50">
          <div className="py-1">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => switchLanguage(lang.code)}
                className={`w-full text-left px-4 py-2 text-sm transition-colors duration-200 ${
                  locale === lang.code 
                    ? "bg-blue-50 text-blue-700 font-medium" 
                    : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                }`}
              >
                {lang.full}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
