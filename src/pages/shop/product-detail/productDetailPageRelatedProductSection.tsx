import { ImiDescSection } from "@/components/imiDescSection";
import { ImiProductCard } from "@/components/imiProductCard";
import { ImiSwiper } from "@/components/imiSwiper";
import { convertRemToPx } from "@/utils/css-helper";
import { i18nHelper } from "@/utils/i18n-helper";
import { productPageProductCardList } from "../products/productPageConstant";

export const ProductDetailPageRelatedProductSection = () => {
    const t = i18nHelper("shop");

    return (
        <ImiDescSection
            header={t("product-detail.relatedProducts.title")}
            style="small-subsection"
            customBottomComponent={
                <ImiSwiper
                    cardLists={productPageProductCardList.map((card, i) => (
                        <ImiProductCard
                            key={`related-product-card-${i}`}
                            {...card}
                        />
                    ))}
                    slidesPerGroup={5}
                    slidesPerView={5}
                    spaceBetween={convertRemToPx(1.25)}
                    pagination={{ clickable: true }}
                />
            }
        />
    );
};
