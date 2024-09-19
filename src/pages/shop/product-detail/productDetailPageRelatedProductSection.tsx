import { DescSection } from "@/components/descSection";
import { ProductCard } from "@/components/productCard";
import { Swiper } from "@/components/swiper";
import { convertRemToPx } from "@/utils/css-helper";
import { i18nHelper } from "@/utils/i18n-helper";
import { productPageProductCardList } from "../products/productPageConstant";

export const ProductDetailPageRelatedProductSection = () => {
    const t = i18nHelper("shop");

    return (
        <DescSection
            header={t("product-detail.relatedProducts.title")}
            style="small-subsection"
            customBottomComponent={
                <Swiper
                    cardLists={productPageProductCardList.map((card, i) => (
                        <ProductCard
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
