import { ImiBaseCard } from "@/components/imiBaseCard";
import { ImiDescSection } from "@/components/imiDescSection";
import { ImiSwiper } from "@/components/imiSwiper";
import { convertRemToPx } from "@/utils/css-helper";
import { i18nHelper } from "@/utils/i18n-helper";
import { useNavigate } from "react-router-dom";
import { NaturopathyPageHealthNeedCardList } from "./naturopathyPageConstant";

export const NaturopathyPageHealthNeedSection = () => {
    const t = i18nHelper("services");
    const navigator = useNavigate();

    return (
        <ImiDescSection
            style="subsection"
            header={t("naturopathicMedicine.effect.header")}
            customBottomComponent={
                <>
                    <ImiSwiper
                        cardLists={NaturopathyPageHealthNeedCardList.map(
                            (cardItem) => (
                                <div className="health-need-card">
                                    <ImiBaseCard shadow>
                                        <button
                                            onClick={() =>
                                                navigator(cardItem.redirectUrl)
                                            }
                                        >
                                            <img src={cardItem.imgUrl} />
                                            <span className="card-desc">
                                                {t(cardItem.text)}
                                            </span>
                                        </button>
                                    </ImiBaseCard>
                                </div>
                            )
                        )}
                        slidesPerGroup={5}
                        slidesPerView={5}
                        spaceBetween={convertRemToPx(1.25)}
                        pagination={{ clickable: true }}
                        speed={2000}
                    />
                </>
            }
        />
    );
};
