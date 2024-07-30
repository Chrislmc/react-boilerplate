import { ImiSection } from "@/components/imiSection";
import "./_shop-page.scss";
import { ShopPageArticlesSection } from "./shopPageArticlesSection";
import { ShopPageCategorySection } from "./shopPageCategorySection";
import { ShopPageCustomerFavoritesSection } from "./shopPageCustomerFavoritesSection";
import { ShopPageDescSection } from "./shopPageDescSection";
import { ShopPageHealthNeedSection } from "./shopPageHealthNeedSection";
import { ShopPagePractitionerSection } from "./shopPagePractitionerSection";
import { ShopPageRecommendedSection } from "./shopPageRecommendedSection";
import { ShopePageSubscribeSection } from "./shopPageSubscribeSection";

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
            <ImiSection className="shop-page-customer-favorites-section">
                <ShopPageCustomerFavoritesSection />
            </ImiSection>
            <ImiSection className="shop-page-subscribe-section">
                <ShopePageSubscribeSection />
            </ImiSection>
        </div>
    );
};
