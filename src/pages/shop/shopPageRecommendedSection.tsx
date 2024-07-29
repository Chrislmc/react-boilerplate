import { Icons } from "@/assets/icons";
import { ImiBaseCard } from "@/components/imiBaseCard";
import { ImiButton } from "@/components/imiButton";
import { ImiDescSection } from "@/components/imiDescSection";
import { i18nHelper } from "@/utils/i18n-helper";
import { useNavigate } from "react-router-dom";
import "./_shop-page.scss";
import { shopPageCategoryList } from "./shopPageConstant";

export const ShopPageRecommendedSection = () => {
    const t = i18nHelper("shop");
    const navigator = useNavigate();

    return (
        <ImiDescSection
            style="subsection"
            header={t("shop.desc.categories.header")}
            customBottomComponent={
                <>
                    <div className="custom-category-container">
                        {shopPageCategoryList.map((item, i) => (
                            <div
                                key={`category-card-${i}`}
                                className="category-card"
                            >
                                <ImiBaseCard shadow>
                                    <button
                                        className="category-button"
                                        onClick={() =>
                                            navigator(item.redirectUrl)
                                        }
                                    >
                                        <h5>{t(item.text)}</h5>
                                        <img src={Icons.Dropdown} />
                                    </button>
                                </ImiBaseCard>
                            </div>
                        ))}
                    </div>
                    <ImiButton
                        text={t("shop.desc.categories.linkText")}
                        colorTheme="orange"
                        size="padding"
                    />
                </>
            }
        />
    );
};
