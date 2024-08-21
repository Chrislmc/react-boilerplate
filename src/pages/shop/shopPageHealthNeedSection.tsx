import { ImiBaseCard } from "@/components/imiBaseCard";
import { ImiButton } from "@/components/imiButton";
import { ImiDescSection } from "@/components/imiDescSection";
import { ImiSwiper } from "@/components/imiSwiper";
import { convertRemToPx } from "@/utils/css-helper";
import { i18nHelper } from "@/utils/i18n-helper";
import { redirectRouteMap } from "@/utils/routes/route";
import { useNavigate } from "react-router-dom";
import "./_shop-page.scss";
import { shopPageHealthNeedCardList } from "./shopPageConstant";

export const ShopPageHealthNeedSection = () => {
    const t = i18nHelper("shop");
    const navigator = useNavigate();

    return (
        <ImiDescSection
            style="subsection"
            header={t("shop.healthNeed.header")}
            customBottomComponent={
                <>
                    <ImiSwiper
                        cardLists={shopPageHealthNeedCardList.map(
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

                    <div className="btn-container">
                        <ImiButton
                            text={t("shop.healthNeed.linkText")}
                            colorTheme="orange"
                            size="padding"
                            onClick={() => navigator(redirectRouteMap.products)}
                        />
                    </div>
                </>
            }
        />
    );
};
