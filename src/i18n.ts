import i18n from "i18next";
import detector from "i18next-browser-languagedetector";
import Backend from "i18next-xhr-backend";
import { initReactI18next } from "react-i18next";

await i18n
    .use(Backend)
    .use(detector)
    .use(initReactI18next)
    .init({
        debug: false,
        // supportedLngs: ['en', 'de'],
        // fallbackLng: ['en', 'de'],
        fallbackLng: ["en"],
        supportedLngs: ["en"],
        backend: {
            loadPath: "/public/locales/{{lng}}/{{ns}}.json",
        },
        ns: ["shared", "home-page", "practitioners"],
        defaultNS: "shared",
    });

export default i18n;
