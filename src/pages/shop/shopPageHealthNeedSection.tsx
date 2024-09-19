import { BaseCard } from "@/components/atoms/baseCard";
import { Button } from "@/components/atoms/button";
import { DescSection } from "@/components/descSection";
import { Swiper } from "@/components/molecules/swiper";
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
        <DescSection
            style="subsection"
            header={t("shop.healthNeed.header")}
            customBottomComponent={
                <>
                    <Swiper
                        cardLists={shopPageHealthNeedCardList.map(
                            (cardItem) => (
                                <div className="health-need-card">
                                    <BaseCard shadow>
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
                                    </BaseCard>
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
                        <Button
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
