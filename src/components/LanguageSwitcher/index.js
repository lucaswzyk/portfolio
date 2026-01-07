import React from 'react';
import {useTranslation} from 'react-i18next';

const LanguageSwitcher = () => {
  const {t, i18n} = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('i18nextLng', lng);
  };

  return (
      <div className="flex items-center ml-5 md:ml-0 md:mt-2.5">
        <span className="mr-2.5 text-gold text-sm hidden md:inline">{t('language_switcher.language')}:</span>
        <button
            className={`bg-transparent border border-ash px-2.5 py-1.5 mx-1.5 cursor-pointer rounded text-sm transition-all duration-300 ease-in-out hover:bg-charcoal ${i18n.language === 'en' ? 'bg-gold/20 border-gold text-gold' : 'text-gold'}`}
            onClick={() => changeLanguage('en')}
        >
          {t('language_switcher.en')}
        </button>
        <button
            className={`bg-transparent border border-ash px-2.5 py-1.5 mx-1.5 cursor-pointer rounded text-sm transition-all duration-300 ease-in-out hover:bg-charcoal ${i18n.language === 'de' ? 'bg-gold/20 border-gold text-gold' : 'text-gold'}`}
            onClick={() => changeLanguage('de')}
        >
          {t('language_switcher.de')}
        </button>
      </div>
  );
};

export default LanguageSwitcher;