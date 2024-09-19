import { Button } from "@/components/atoms/button";
import { DescSection } from "@/components/descSection";
import { i18nHelper } from "@/utils/i18n-helper";

export const HealthConditionPageBookNowSection = () => {
    const t = i18nHelper("others");

    return (
        <div className="book-now">
            <DescSection
                header={t("healthCondition.bookNow.header")}
                desc={[t("healthCondition.bookNow.desc")]}
                customBottomComponent={
                    <Button
                        text={t("healthCondition.bookNow.linkText")}
                        colorTheme="orange"
                        textClassName="mod__hover-blueish-green"
                    />
                }
            />
        </div>
    );
};
