import { ImiButton } from "@/components/imiButton";
import { ImiDescSection } from "@/components/imiDescSection";
import { ContainerX } from "@/components/layout/containerX";
import { SectionContainerY } from "@/components/layout/sectionContainerY";
import { i18nHelper } from "@/utils/i18n-helper";
import "./_home-page.scss";

export const HomePageBookNowSection = () => {
    const t = i18nHelper("home-page");

    return (
        <ContainerX>
            <SectionContainerY>
                <ImiDescSection
                    header={t("bookNow.header")}
                    desc={[t("bookNow.desc")]}
                    customBottomComponent={
                        <ImiButton
                            text={t("bookNow.linkText")}
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
