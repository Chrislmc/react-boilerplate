import { ImiBaseCard } from "@/components/imiBaseCard";
import { ImiDescSection } from "@/components/imiDescSection";
import { ImiSwiper } from "@/components/imiSwiper";
import { convertRemToPx } from "@/utils/css-helper";
import { i18nHelper } from "@/utils/i18n-helper";
import { whatWeDoCardList } from "./corporateWellnessPageConstant";

export const CorporateWellnessPageWhatWeDoSection = () => {
    const t = i18nHelper("others");

    return (
        <ImiDescSection
            header={t("corporateWellness.whatWeDo.header")}
            desc={[t("corporateWellness.whatWeDo.desc")]}
            style="small-subsection"
            customBottomComponent={
                <ImiSwiper
                    cardLists={whatWeDoCardList.map((card, i) => (
                        <div
                            key={`what-we-do-card-${i}`}
                            className="card-container"
                        >
                            <ImiBaseCard shadow>
                                <span className="header">{t(card.header)}</span>
                                <div className="desc-container">
                                    {t(card.desc)}
                                </div>
                                <a href={card.redirectUrl}>
                                    {t("corporateWellness.whatWeDo.linkText")}
                                    <span>→</span>
                                </a>
                            </ImiBaseCard>
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
