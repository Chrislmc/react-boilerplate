import { ImiDescSection } from "@/components/imiDescSection";
import { i18nHelper } from "@/utils/i18n-helper";

export const PractitionersPage = () => {
    const t = i18nHelper("practitioners");

    return (
        <ImiDescSection
            header={t("practitioners.header")}
            desc={[t("practitioners.desc")]}
        />
    );
};
