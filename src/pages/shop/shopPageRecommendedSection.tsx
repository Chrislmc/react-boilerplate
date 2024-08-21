import { ImiButton } from "@/components/imiButton";
import { ImiDescSection } from "@/components/imiDescSection";
import { ImiProductCard } from "@/components/imiProductCard";
import { ImiSwiper } from "@/components/imiSwiper";
import { convertRemToPx } from "@/utils/css-helper";
import { i18nHelper } from "@/utils/i18n-helper";
import { redirectRouteMap } from "@/utils/routes/route";
import { useNavigate } from "react-router-dom";
import "./_shop-page.scss";
import { shopPageProductCardList } from "./shopPageConstant";

export const ShopPageRecommendedSection = () => {
    const t = i18nHelper("shop");
    const navigator = useNavigate();

    return (
        <ImiDescSection
            style="subsection"
            header={t("shop.recommended.header")}
            customBottomComponent={
                <>
                    <ImiSwiper
                        cardLists={shopPageProductCardList.map(
                            (cardItem, i) => (
                                <ImiProductCard
                                    key={`product-card-${i}`}
                                    {...cardItem}
                                />
                            )
                        )}
                        slidesPerGroup={4}
                        slidesPerView={4}
                        spaceBetween={convertRemToPx(1.25)}
                        pagination={{ clickable: true }}
                        speed={2000}
                    />

                    <div className="btn-container">
                        <ImiButton
                            text={t("shop.recommended.linkText")}
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
