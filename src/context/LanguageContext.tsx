'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '@/data/translations';

type Language = 'en' | 'id';

interface LanguageContextProps {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('en'); // Default to English as requested

  useEffect(() => {
    try {
      const savedLang = localStorage.getItem('language') as Language;
      if (savedLang === 'en' || savedLang === 'id') {
        setLanguage(savedLang);
      }
    } catch (e) {
      // Ignore
    }
  }, []);

  const toggleLanguage = () => {
    setLanguage((prev) => {
      const next = prev === 'en' ? 'id' : 'en';
      try {
        localStorage.setItem('language', next);
      } catch (e) {
        // Ignore
      }
      return next;
    });
  };

  const t = (key: string) => {
    const section = translations[language];
    if (section && key in section) {
      return (section as any)[key];
    }
    // Fallback to English if not found, then key itself
    const fallbackSection = translations['en'];
    if (fallbackSection && key in fallbackSection) {
      return (fallbackSection as any)[key];
    }
    return key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
