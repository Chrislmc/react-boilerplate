import { Button } from "@/components/button";
import { DescSection } from "@/components/descSection";
import { i18nHelper } from "@/utils/i18n-helper";

export const NaturopathyPageBookNowSection = () => {
    const t = i18nHelper("services");

    return (
        <DescSection
            header={t("naturopathicMedicine.bookNow.header")}
            desc={[t("naturopathicMedicine.bookNow.desc")]}
            customBottomComponent={
                <Button
                    text={t("naturopathicMedicine.bookNow.linkText")}
                    colorTheme="orange"
                    textClassName="mod__hover-blueish-green"
                />
            }
        />
    );
};
