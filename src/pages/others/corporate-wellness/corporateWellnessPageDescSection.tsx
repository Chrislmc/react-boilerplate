import { Images } from "@/assets/images";
import { Button } from "@/components/button";
import { SectionContainerY } from "@/components/layout/sectionContainerY";
import { i18nHelper } from "@/utils/i18n-helper";

export const CorporateWellnessPageDescSection = () => {
    const t = i18nHelper("others");

    return (
        <SectionContainerY>
            <div className="hero-banner-container">
                <img src={Images.CorporateWellnessPageHeroBanner} />
            </div>

            <div className="content-container">
                <div className="desc-list">
                    <h6 className="desc">
                        {t("corporateWellness.desc.desc1")}
                    </h6>
                    <h6 className="desc">
                        {t("corporateWellness.desc.desc2")}
                    </h6>
                </div>
                <Button text={t("corporateWellness.desc.linkText")} />
            </div>
        </SectionContainerY>
    );
};
