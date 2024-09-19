import { Images } from "@/assets/images";
import { i18nHelper } from "@/utils/i18n-helper";
import "./_shop-page.scss";

export const ShopPagePractitionerSection = () => {
    const t = i18nHelper("shop");

    return (
        <div className="practitioner-section-container">
            <div className="background-image-container">
                <img src={Images.ShopPageDispensary} />
            </div>
            <div className="background-overlay" />
            <div className="content-container">
                <h1>{t("shop.practitioner.header")}</h1>
                <h3>{t("shop.practitioner.desc")}</h3>
            </div>
        </div>
    );
};
