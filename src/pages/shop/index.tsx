import { ImiSection } from "@/components/imiSection";
import { i18nHelper } from "@/utils/i18n-helper";
import "./_shop-page.scss";
import { ShopPageDescSection } from "./shopPageDescSection";

export const ShopPage = () => {
    const t = i18nHelper("shop");

    return (
        <div id="shop-page">
            <ImiSection className="shop-page-desc-section">
                <ShopPageDescSection />
            </ImiSection>
        </div>
    );
};
