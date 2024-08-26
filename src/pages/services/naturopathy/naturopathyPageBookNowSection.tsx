import { ImiButton } from "@/components/imiButton";
import { ImiDescSection } from "@/components/imiDescSection";
import { i18nHelper } from "@/utils/i18n-helper";

export const NaturopathyPageBookNowSection = () => {
    const t = i18nHelper("services");

    return (
        <ImiDescSection
            header={t("naturopathicMedicine.bookNow.header")}
            desc={[t("naturopathicMedicine.bookNow.desc")]}
            customBottomComponent={
                <ImiButton
                    text={t("naturopathicMedicine.bookNow.linkText")}
                    colorTheme="orange"
                    textClassName="mod__hover-blueish-green"
                />
            }
        />
    );
};
