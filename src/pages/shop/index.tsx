import { ImiSection } from "@/components/imiSection";
import "./_shop-page.scss";
import { ShopPageArticlesSection } from "./shopPageArticlesSection";
import { ShopPageCategorySection } from "./shopPageCategorySection";
import { ShopPageDescSection } from "./shopPageDescSection";
import { ShopPageHealthNeedSection } from "./shopPageHealthNeedSection";
import { ShopPagePractitionerSection } from "./shopPagePractitionerSection";
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
            <ImiSection className="shop-page-health-need-section">
                <ShopPageHealthNeedSection />
            </ImiSection>
            <ImiSection className="shop-page-articles-section">
                <ShopPageArticlesSection />
            </ImiSection>
            <ImiSection className="shop-page-practitioner-section">
                <ShopPagePractitionerSection />
            </ImiSection>
        </div>
    );
};
