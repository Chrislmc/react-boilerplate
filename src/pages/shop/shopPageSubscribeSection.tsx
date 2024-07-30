import { ImiButton } from "@/components/imiButton";
import { ImiDescSection } from "@/components/imiDescSection";
import { ContainerX } from "@/components/layout/containerX";
import { SectionContainerY } from "@/components/layout/sectionContainerY";
import { i18nHelper } from "@/utils/i18n-helper";
import "./_shop-page.scss";

export const ShopePageSubscribeSection = () => {
    const t = i18nHelper("shop");

    return (
        <ContainerX>
            <SectionContainerY>
                <ImiDescSection
                    header={t("shop.subscribe.header")}
                    desc={[t("shop.subscribe.desc")]}
                    customBottomComponent={
                        <ImiButton
                            text={t("shop.subscribe.linkText")}
                            colorTheme="orange"
                            size="padding"
                            textClassName="mod__hover-blueish-green"
                        />
                    }
                />
            </SectionContainerY>
        </ContainerX>
    );
};
