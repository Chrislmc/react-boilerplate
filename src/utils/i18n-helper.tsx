import { t } from "i18next";

export const i18nHelper = (ns: string) => {
    return (key: string, param?: object) => t(key, { ns, ...param });
};
