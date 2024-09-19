import { Button } from "@/components/atoms/button";
import { DescSection } from "@/components/descSection";
import { ProductCard } from "@/components/productCard";
import { Swiper } from "@/components/swiper";
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
        <DescSection
            style="subsection"
            header={t("shop.recommended.header")}
            customBottomComponent={
                <>
                    <Swiper
                        cardLists={shopPageProductCardList.map(
                            (cardItem, i) => (
                                <ProductCard
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
                        <Button
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
