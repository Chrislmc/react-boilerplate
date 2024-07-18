import { ImiDescSection } from "@/components/imiDescSection";
import { i18nHelper } from "@/utils/i18n-helper";

export const HomePageProductSection = () => {
    const t = i18nHelper("home-page");

    return (
        <ImiDescSection
            header={t("product.header")}
            desc={[t("product.desc")]}
        />
    );
};
