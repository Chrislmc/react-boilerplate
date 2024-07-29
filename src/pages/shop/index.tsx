import { ImiSection } from "@/components/imiSection";
import "./_shop-page.scss";
import { ShopPageCategorySection } from "./shopPageCategorySection";
import { ShopPageDescSection } from "./shopPageDescSection";
import { ShopPageRecommendedSection } from "./shopPageRecommendedSection";

export const ShopPage = () => {
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
