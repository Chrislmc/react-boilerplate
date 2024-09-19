import { Section } from "@/components/section";
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
            <Section className="shop-page-desc-section">
                <ShopPageDescSection />
            </Section>
            <Section className="shop-page-category-section">
                <ShopPageCategorySection />
            </Section>
            <Section className="shop-page-recommended-section">
                <ShopPageRecommendedSection />
            </Section>
            <Section className="shop-page-health-need-section">
                <ShopPageHealthNeedSection />
            </Section>
            <Section className="shop-page-articles-section">
                <ShopPageArticlesSection />
            </Section>
            <Section className="shop-page-practitioner-section">
                <ShopPagePractitionerSection />
            </Section>
            <Section className="shop-page-customer-favorites-section">
                <ShopPageCustomerFavoritesSection />
            </Section>
            <Section className="shop-page-subscribe-section">
                <ShopePageSubscribeSection />
            </Section>
        </div>
    );
};
