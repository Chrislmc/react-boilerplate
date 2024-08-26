import { Images } from "@/assets/images";
import { ImiGradientBanner } from "@/components/imiGradientBanner";
import { ContainerX } from "@/components/layout/containerX";
import { SectionContainerY } from "@/components/layout/sectionContainerY";
import { i18nHelper } from "@/utils/i18n-helper";

export const NaturopathyPageBannerSection = () => {
    const t = i18nHelper("services");

    return (
        <SectionContainerY size="small">
            <ContainerX>
                <ImiGradientBanner
                    imgUrl={Images.NaturopathyHeroBanner}
                    imgPosition="left"
                    colorTheme={"primary"}
                    content={[
                        {
                            header: t("naturopathicMedicine.banner.header"),
                            descList: [t("naturopathicMedicine.banner.desc")],
                            button: {
                                text: t("naturopathicMedicine.banner.linkText"),
                                type: "outline",
                                colorTheme: "white",
                            },
                        },
                    ]}
                />
            </ContainerX>
        </SectionContainerY>
    );
};
