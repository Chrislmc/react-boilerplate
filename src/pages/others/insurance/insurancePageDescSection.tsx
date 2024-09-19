import { DescSection } from "@/components/descSection";
import { i18nHelper } from "@/utils/i18n-helper";

export const InsurancePageDescSection = () => {
    const t = i18nHelper("others");

    return (
        <DescSection
            header={t("insurance.header")}
            subheader={t("insurance.subheader")}
            desc={[
                t("insurance.desc1"),
                t("insurance.desc2"),
                t("insurance.desc3"),
                t("insurance.desc4"),
            ]}
        />
    );
};
