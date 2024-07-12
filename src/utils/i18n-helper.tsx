import { TFunction } from 'react-i18next';

export const i18nHelper = (
    t: TFunction<'translation', undefined>,
    ns: string,
) => {
    return (key: string, param?: object) => t(key, { ns, ...param });
};
