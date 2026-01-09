import React from 'react';
import {useTranslation} from 'react-i18next';
import {Button} from '@lukeashford/aurelius';

const LanguageSwitcher = () => {
  const {i18n} = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('i18nextLng', lng);
  };

  return (
      <div className="flex items-center gap-2">
        <Button
            variant={i18n.language === 'en' ? 'primary' : 'outlined'}
            size="sm"
            onClick={() => changeLanguage('en')}
            className={i18n.language !== 'en' ? 'text-ash hover:text-white' : ''}
        >
          English
        </Button>
        <Button
            variant={i18n.language === 'de' ? 'primary' : 'outlined'}
            size="sm"
            onClick={() => changeLanguage('de')}
            className={i18n.language !== 'de' ? 'text-ash hover:text-white' : ''}
        >
          German
        </Button>
      </div>
  );
};

export default LanguageSwitcher;