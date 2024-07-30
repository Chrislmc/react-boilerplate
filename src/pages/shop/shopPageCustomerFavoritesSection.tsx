import { ImiButton } from "@/components/imiButton";
import { ImiDescSection } from "@/components/imiDescSection";
import { ImiProductCard } from "@/components/imiProductCard";
import { ImiSwiper } from "@/components/imiSwiper";
import { convertRemToPx } from "@/utils/css-helper";
import { i18nHelper } from "@/utils/i18n-helper";
import "./_shop-page.scss";
import { shopPageProductCardList } from "./shopPageConstant";

export const ShopPageCustomerFavoritesSection = () => {
    const t = i18nHelper("shop");

    return (
        <ImiDescSection
            style="subsection"
            header={t("shop.customerFavorites.header")}
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
                            text={t("shop.customerFavorites.linkText")}
                            colorTheme="orange"
                            size="padding"
                        />
                    </div>
                </>
            }
        />
    );
};
