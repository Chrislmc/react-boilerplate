import { Images } from "@/assets/images";
import { ImiSectionHeader } from "@/components/imiSectionHeader";
import { ContainerX } from "@/components/layout/containerX";
import { i18nHelper } from "@/utils/i18n-helper";

export const NaturopathyPageHeroBannerSection = () => {
    const t = i18nHelper("services");

    return (
        <div className="section-container">
            <div className="background-container"></div>
            <div className="content-container">
                <ContainerX>
                    <ImiSectionHeader
                        header={t("naturopathicMedicine.heroBanner.header")}
                    />
                    <p className="desc">
                        {t("naturopathicMedicine.heroBanner.desc")}
                    </p>
                    <div className="image-container">
                        <img src={Images.NaturopathyHeroBanner} />
                    </div>
                </ContainerX>
            </div>
        </div>
    );
};
