import React from 'react';
import { useTranslation } from 'react-i18next';

export const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language?.substring(0, 2) || 'en';

  const switchTo = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className="hidden md:flex items-center gap-1 text-[10px] uppercase tracking-widest font-bold">
      <button
        onClick={() => switchTo('en')}
        className={`px-2 py-1 transition-colors duration-300 ${
          currentLang === 'en' ? 'text-gold' : 'text-deep-grey/70 hover:text-deep-grey'
        }`}
      >
        EN
      </button>
      <span className="text-deep-grey/20">|</span>
      <button
        onClick={() => switchTo('ru')}
        className={`px-2 py-1 transition-colors duration-300 ${
          currentLang === 'ru' ? 'text-gold' : 'text-deep-grey/70 hover:text-deep-grey'
        }`}
      >
        RU
      </button>
    </div>
  );
};

/** Mobile-only fixed bottom pill language switcher */
export const MobileLanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language?.substring(0, 2) || 'en';

  const switchTo = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-center gap-0 rounded-full border border-ivory/30 bg-deep-grey/60 backdrop-blur-md shadow-lg overflow-hidden">
        <button
          onClick={() => switchTo('en')}
          className={`px-5 py-2.5 text-xs font-bold uppercase tracking-widest transition-all duration-300 ${
            currentLang === 'en'
              ? 'bg-gold/20 text-gold'
              : 'text-ivory/60 hover:text-ivory'
          }`}
        >
          EN
        </button>
        <div className="w-px h-5 bg-ivory/20" />
        <button
          onClick={() => switchTo('ru')}
          className={`px-5 py-2.5 text-xs font-bold uppercase tracking-widest transition-all duration-300 ${
            currentLang === 'ru'
              ? 'bg-gold/20 text-gold'
              : 'text-ivory/60 hover:text-ivory'
          }`}
        >
          RU
        </button>
      </div>
    </div>
  );
};
