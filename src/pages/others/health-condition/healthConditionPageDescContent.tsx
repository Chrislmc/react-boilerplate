import { Images } from "@/assets/images";
import { ContainerX } from "@/components/layout/containerX";
import { SectionHeader } from "@/components/sectionHeader";
import { i18nHelper } from "@/utils/i18n-helper";
import { healthConditionPageDescContent } from "./healthConditionPageConstant";

export const HealthConditionPageDescContent = () => {
    const t = i18nHelper("others");

    return (
        <div className="desc-content-column">
            <div className="hero-banner-container">
                <img src={Images.NaturopathyHeroBanner} />
            </div>

            <ContainerX rightOnly>
                <SectionHeader header={t("healthCondition.desc.header")} />

                <div className="desc-list">
                    {healthConditionPageDescContent.map((content, i) => (
                        <p key={`content-desc-${i}`} className="desc">
                            {t(content)}
                        </p>
                    ))}
                </div>
            </ContainerX>
        </div>
    );
};
