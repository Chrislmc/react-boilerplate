import { Button } from "@/components/button";
import { DescSection } from "@/components/descSection";
import { i18nHelper } from "@/utils/i18n-helper";
import "./_home-page.scss";

export const HomePageBookNowSection = () => {
    const t = i18nHelper("home-page");

    return (
        <DescSection
            header={t("bookNow.header")}
            desc={[t("bookNow.desc")]}
            customBottomComponent={
                <Button
                    text={t("bookNow.linkText")}
                    colorTheme="orange"
                    textClassName="mod__hover-blueish-green"
                />
            }
        />
    );
};
