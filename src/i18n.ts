import i18n from 'i18next';
import detector from 'i18next-browser-languagedetector';
import Backend from 'i18next-xhr-backend';
import { initReactI18next } from 'react-i18next';

i18n.use(Backend)
    .use(detector)
    .use(initReactI18next)
    .init({
        debug: false,
        // supportedLngs: ['en', 'de'],
        // fallbackLng: ['en', 'de'],
        fallbackLng: ['en'],
        supportedLngs: ['en'],
        backend: {
            loadPath: '/locales/{{lng}}/{{ns}}.json',
        },
        ns: [
            'common',
            'about-us',
            'contact-us',
            'donate-now',
            'events',
            'get-involved',
            'home-page',
            'news',
            'our-programs',
            'shared',
        ],
        defaultNS: 'common',
    });

export default i18n;
