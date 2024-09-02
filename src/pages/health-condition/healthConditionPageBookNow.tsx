import { ImiButton } from "@/components/imiButton";
import { ImiDescSection } from "@/components/imiDescSection";
import { i18nHelper } from "@/utils/i18n-helper";

export const HealthConditionPageBookNowSection = () => {
    const t = i18nHelper("others");

    return (
        <div className="book-now">
            <ImiDescSection
                header={t("healthCondition.bookNow.header")}
                desc={[t("healthCondition.bookNow.desc")]}
                customBottomComponent={
                    <ImiButton
                        text={t("healthCondition.bookNow.linkText")}
                        colorTheme="orange"
                        textClassName="mod__hover-blueish-green"
                    />
                }
            />
        </div>
    );
};
