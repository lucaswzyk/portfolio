import React from 'react';
import {useTranslation} from 'react-i18next';
import {Button} from '@lukeashford/aurelius';

const LanguageSwitcher = () => {
  const {i18n} = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('i18nextLng', lng);
  };

  const isLang = (lng) => i18n.language?.startsWith(lng);

  return (
      <div className="flex items-center gap-2">
        <Button
            variant={isLang('en') ? 'primary' : 'outlined'}
            size="sm"
            onClick={() => changeLanguage('en')}
        >
          English
        </Button>
        <Button
            variant={isLang('de') ? 'primary' : 'outlined'}
            size="sm"
            onClick={() => changeLanguage('de')}
        >
          German
        </Button>
      </div>
  );
};

export default LanguageSwitcher;