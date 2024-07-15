import { WithTranslation } from "react-i18next";

export const i18nHelper = (t: WithTranslation["t"], ns: string) => {
    return (key: string, param?: object) => t(key, { ns, ...param });
};
