import { Button } from "@/components/atoms/button";
import { DescSection } from "@/components/descSection";
import { i18nHelper } from "@/utils/i18n-helper";
import "./_shop-page.scss";

export const ShopePageSubscribeSection = () => {
    const t = i18nHelper("shop");

    return (
        <DescSection
            header={t("shop.subscribe.header")}
            desc={[t("shop.subscribe.desc")]}
            customBottomComponent={
                <Button
                    text={t("shop.subscribe.linkText")}
                    colorTheme="orange"
                    size="padding"
                    textClassName="mod__hover-blueish-green"
                />
            }
        />
    );
};
