import { Button } from "@/components/atoms/button";
import { DescSection } from "@/components/descSection";
import { i18nHelper } from "@/utils/i18n-helper";

export const OurHealingVisionPageBookNowSection = () => {
    const t = i18nHelper("others");

    return (
        <DescSection
            header={t("ourHealingVision.bookNow.header")}
            desc={[t("ourHealingVision.bookNow.desc")]}
            customBottomComponent={
                <Button
                    text={t("ourHealingVision.bookNow.linkText")}
                    colorTheme="orange"
                    textClassName="mod__hover-blueish-green"
                />
            }
        />
    );
};
