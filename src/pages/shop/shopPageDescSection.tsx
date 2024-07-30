import { ImiBaseCard } from "@/components/imiBaseCard";
import { ImiDescSection } from "@/components/imiDescSection";
import { ImiSwiper } from "@/components/imiSwiper";
import { i18nHelper } from "@/utils/i18n-helper";
import "./_shop-page.scss";

export const ShopPageDescSection = () => {
    const t = i18nHelper("shop");

    return (
        <ImiDescSection
            header={t("shop.desc.header")}
            customBottomComponent={
                <div className="custom-bottom-container">
                    <ImiBaseCard>
                        <ImiSwiper
                            cardLists={Array.from(new Array(4)).map((_, i) => (
                                <div
                                    key={`promotion-swiper-card-${i}`}
                                    className="promotion-swiper-card"
                                >
                                    <div className="image-container"></div>
                                </div>
                            ))}
                            pagination={{ clickable: true }}
                            speed={3000}
                            autoplay={true}
                        />
                    </ImiBaseCard>
                </div>
            }
        />
    );
};
