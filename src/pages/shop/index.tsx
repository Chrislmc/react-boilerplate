import { ImiSection } from "@/components/imiSection";
import { i18nHelper } from "@/utils/i18n-helper";
import "./_shop-page.scss";
import { ShopPageCategorySection } from "./shopPageCategorySection";
import { ShopPageDescSection } from "./shopPageDescSection";
import { ShopPageRecommendedSection } from "./shopPageRecommendedSection";

export const ShopPage = () => {
    const t = i18nHelper("shop");

    return (
        <div id="shop-page">
            <ImiSection className="shop-page-desc-section">
                <ShopPageDescSection />
            </ImiSection>
            <ImiSection className="shop-page-category-section">
                <ShopPageCategorySection />
            </ImiSection>
            <ImiSection className="shop-page-recommended-section">
                <ShopPageRecommendedSection />
            </ImiSection>
        </div>
    );
};
