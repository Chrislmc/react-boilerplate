import { BaseCard } from "@/components/atoms/baseCard";
import { DescSection } from "@/components/descSection";
import { Swiper } from "@/components/molecules/swiper";
import { convertRemToPx } from "@/utils/css-helper";
import { i18nHelper } from "@/utils/i18n-helper";
import { whatWeDoCardList } from "./corporateWellnessPageConstant";

export const CorporateWellnessPageWhatWeDoSection = () => {
    const t = i18nHelper("others");

    return (
        <DescSection
            header={t("corporateWellness.whatWeDo.header")}
            desc={[t("corporateWellness.whatWeDo.desc")]}
            style="small-subsection"
            customBottomComponent={
                <Swiper
                    cardLists={whatWeDoCardList.map((card, i) => (
                        <div
                            key={`what-we-do-card-${i}`}
                            className="card-container"
                        >
                            <BaseCard shadow>
                                <span className="header">{t(card.header)}</span>
                                <div className="desc-container">
                                    {t(card.desc)}
                                </div>
                                <a href={card.redirectUrl}>
                                    {t("corporateWellness.whatWeDo.linkText")}
                                    <span>→</span>
                                </a>
                            </BaseCard>
                        </div>
                    ))}
                    slidesPerGroup={2}
                    slidesPerView={2}
                    spaceBetween={convertRemToPx(1.25)}
                    pagination={{ clickable: true }}
                    speed={1000}
                />
            }
        />
    );
};
