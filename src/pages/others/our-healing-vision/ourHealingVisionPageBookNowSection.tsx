import { ImiButton } from "@/components/imiButton";
import { ImiDescSection } from "@/components/imiDescSection";
import { i18nHelper } from "@/utils/i18n-helper";

export const OurHealingVisionPageBookNowSection = () => {
    const t = i18nHelper("others");

    return (
        <ImiDescSection
            header={t("ourHealingVision.bookNow.header")}
            desc={[t("ourHealingVision.bookNow.desc")]}
            customBottomComponent={
                <ImiButton
                    text={t("ourHealingVision.bookNow.linkText")}
                    colorTheme="orange"
                    textClassName="mod__hover-blueish-green"
                />
            }
        />
    );
};
